// import React from "react"
// import { Link, graphql, HeadFC } from "gatsby"
// import { GatsbyImage } from "gatsby-plugin-image"

// // We're using Gutenberg so we need the block styles
// import "@wordpress/block-library/build-style/style.css"
// import "@wordpress/block-library/build-style/theme.css"

// import { Layout } from "../../components/Layout/Layout"
// import { HeadContent } from "../../components/HeadContent/HeadContent"

// const BlogPostTemplate = ({ data: { post } }) => {
//   const featuredImage = {
//     image: post.featuredImage?.node?.localFile?.childImageSharp?.gatsbyImageData,
//     alt: post.featuredImage?.node?.altText || ``,
//   }

//   return (
//     <Layout>
//       <article
//         className="blog-post"
//         itemScope
//         itemType="http://schema.org/Article"
//       >
//         <header>
//           <h1 itemProp="headline">{post.title}</h1>

//           <p>{post.date}</p>

//           {featuredImage?.image && (
//             <GatsbyImage alt={featuredImage.alt} image={featuredImage.image} />
//           )}
//         </header>

//         {!!post.content && (
//           <section itemProp="articleBody">{post.content}</section>
//         )}

//         <hr />

//         <footer></footer>
//       </article>
//     </Layout>
//   )
// }

// export const Head : HeadFC = ({ data: { post } }) => (
//   // const {
//   //   wpPage: { title, seo },
//   // } = data
//   // <Seo title={post.title} description={post.excerpt} />
//   <HeadContent title={seo.title || post.title} description={seo.metaDesc || ''} />
// )

// export default BlogPostTemplate

// export const pageQuery = graphql`
//   query BlogPostById(
//     # these variables are passed in via createPage.pageContext in gatsby-node.js
//     $id: String!
//   ) {
//     # selecting the current post by id
//     post: wpPost(id: { eq: $id }) {
//       id
//       excerpt
//       content
//       title
//       date(formatString: "MMMM DD, YYYY")
//       featuredImage {
//         node {
//           altText
//           localFile {
//             childImageSharp {
//               gatsbyImageData(width: 1000, quality: 90)
//             }
//           }
//         }
//       }
//     }
//   }
// `