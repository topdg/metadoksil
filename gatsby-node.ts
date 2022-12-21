import path from "path";
import https from "https";
import fs from "fs";
import type {CreateNodeArgs, CreatePagesArgs} from 'gatsby'


exports.onCreateNode = ({ node, actions, pathPrefix = '' }: CreateNodeArgs) => {
  if (node.internal.mediaType == "image/svg+xml" && node.extension == "svg") {
    const url = node.url as string;
    if (url) {
      
      const fileName = url.split("/");
      const path = `./static/svg/${fileName[fileName.length - 1]}`;
      const request = https.get(url, function (response: any) {
        if (response.statusCode === 200) {
          const file = fs.createWriteStream(path);
          response.pipe(file);
        }

        request.setTimeout(1000, function () {
          request.abort();
        });
      });
      
      actions.createNodeField({
        name: "staticPath",
        node,
        value: pathPrefix + path.split("./static")[1],
      });
    }
  }
};

const blogQuery = `
{
  allWpPost {
    edges {
      post: node {
        __typename
        id
        slug
      }
    }
  }
}`;

const instructionQuery = `
{
  allWpInstruction {
    edges {
      post: node {
        __typename
        id
        slug
      }
    }
  }
}`;

exports.createPages = async ({
	graphql,
	actions,
	reporter
} : CreatePagesArgs) => {

	const {
		createPage
	} = actions;
	const blogResult = await graphql(blogQuery);
	const instructionResult = await graphql(instructionQuery);

	if (blogResult.errors || instructionResult.errors) {
		reporter.panicOnBuild('Error while running GraphQL query.');
		return;
	}

	const posts = blogResult?.data?.allWpPost?.edges;
	const instructions = instructionResult?.data?.allWpInstruction?.edges;

  await createBlogPosts(posts, createPage, {template: "./src/templates/posts/Post/Post.tsx", _path: "/blog/"});
  await createBlogPosts(instructions, createPage, {template: "./src/templates/posts/Instruction/Instruction.tsx", _path: "/"});

  await createArchive(createPage);


}

const createBlogPosts = async (posts, createPage, {template, _path}) => {
	posts.forEach(({post}, index) => {
    createPage({
			path: `${_path + post.slug}/`,
			component: path.resolve(template),
			context: {
        ...post
      }
		});
	});
}

const createArchive = async (createPage) => {
	const archiveTemplate = path.resolve("./src/templates/posts/Archive/Archive.tsx");

  await createPage({
    path: '/blog/',
    component: archiveTemplate,
  });
}