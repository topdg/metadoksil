import path from "path";
import https from "https";
import fs from "fs";
import type {CreateNodeArgs} from 'gatsby'

// exports.onPreInit = async ({ actions, graphql }) => {
//   console.log('PRE INIT EVENT')
//   console.log('PRE INIT EVENT')
//   const allSVGWordpress = await graphql(`
//   query {
//     allWpMediaItem(filter: {filename: {regex: "/(svg)/"}}) {
//       edges {
//         node {
//           sourceUrl
//         }
//       }
//     }
//   }
// `);

//   console.log(allSVGWordpress);
//   console.log('PRE INIT EVENT')
//   console.log('PRE INIT EVENT')
// }
// {
//   allWpMediaItem(filter: {filename: {regex: "/(svg)/"}}) {
//     edges {
//       node {
//         sourceUrl
//       }
//     }
//   }
// }

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
