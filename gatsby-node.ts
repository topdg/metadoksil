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

exports.createPages = async ({
	graphql,
	actions,
	reporter
} : CreatePagesArgs) => {

	const {
		createPage
	} = actions;
	const blogResult = await graphql(blogQuery);

	if (blogResult.errors) {
		reporter.panicOnBuild('Error while running GraphQL query.');
		return;
	}

	const posts = blogResult?.data?.allWpPost?.edges;

  await createBlogPosts(posts, createPage);

  await createArchive(createPage);


}

const createBlogPosts = async (posts, createPage) => {
	const blogPostTemplate = path.resolve("./src/templates/posts/Post/Post.tsx");

	posts.forEach(({post}, index) => {
    createPage({
			path: `/blog/${post.slug}`,
			component: blogPostTemplate,
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


// /**
//  * exports.createPages is a built-in Gatsby Node API.
//  * It's purpose is to allow you to create pages for your site! 💡
//  *
//  * See https://www.gatsbyjs.com/docs/reference/config-files/gatsby-node/#createPages
//  */

// /**
//  * @type {import('gatsby').GatsbyNode['createPages']}
//  */
// exports.createPages = async gatsbyUtilities => {
//   // Query our posts from the GraphQL server
//   const posts = await getNodes(gatsbyUtilities)

//   // If there are no posts in WordPress, don't do anything
//   if (!posts.length) {
//     return
//   }

//   // And a paginated archive
//   await createBlogPostArchive({ posts, gatsbyUtilities })
// }

/**
 * This function creates all the individual blog pages in this site
 */
// async function createBlogPostArchive({ posts, gatsbyUtilities }) {
//   const graphqlResult = await gatsbyUtilities.graphql(/* GraphQL */ `
//     {
//       wp {
//         readingSettings {
//           postsPerPage
//         }
//       }
//     }
//   `)

//   const { postsPerPage } = graphqlResult.data.wp.readingSettings

//   const postsChunkedIntoArchivePages = chunk(posts, postsPerPage)
//   const totalPages = postsChunkedIntoArchivePages.length

//   return Promise.all(
//     postsChunkedIntoArchivePages.map(async (_posts, index) => {
//       const pageNumber = index + 1

//       const getPagePath = page => {
//         if (page > 0 && page <= totalPages) {
//           // Since our homepage is our blog page
//           // we want the first page to be "/" and any additional pages
//           // to be numbered.
//           // "/blog/2" for example
//           return page === 1 ? `/` : `/blog/${page}`
//         }

//         return null
//       }

//       // createPage is an action passed to createPages
//       // See https://www.gatsbyjs.com/docs/actions#createPage for more info
//       await gatsbyUtilities.actions.createPage({
//         path: getPagePath(pageNumber),

//         // use the blog post archive template as the page component
//         component: path.resolve(`./src/templates/posts/archive.tsx`),

//         // `context` is available in the template as a prop and
//         // as a variable in GraphQL.
//         context: {
//           // the index of our loop is the offset of which posts we want to display
//           // so for page 1, 0 * 10 = 0 offset, for page 2, 1 * 10 = 10 posts offset,
//           // etc
//           offset: index * postsPerPage,

//           // We need to tell the template how many posts to display too
//           postsPerPage,
//         },
//       })
//     })
//   )
// }

// /**
//  * This function queries Gatsby's GraphQL server and asks for
//  * All WordPress blog posts. If there are any GraphQL error it throws an error
//  * Otherwise it will return the posts 🙌
//  *
//  * We're passing in the utilities we got from createPages.
//  * See https://www.gatsbyjs.com/docs/reference/config-files/gatsby-node/#createPages
//  */
// async function getNodes({ graphql, reporter }) {
//   const graphqlResult = await graphql(`{
//   allWpPost(sort: {date: DESC}) {
//     edges {
//       post: node {
//         __typename
//         id
//         uri
//       }
//     }
//   }
// }`)

//   if (graphqlResult.errors) {
//     reporter.panicOnBuild(
//       `There was an error loading your blog posts`,
//       graphqlResult.errors
//     )
//     return
//   }

//   console.log(graphqlResult);

//   // return [
//   //   ...graphqlResult.data.allWpPost.edges,
//   //   ...graphqlResult.data.allWpPage.edges,
//   // ]
// }