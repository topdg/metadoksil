// import React from "react"
// import { Link, graphql } from "gatsby"


// import { Layout } from "../../components/Layout/Layout"
// import { Section } from "../../utils/components/Section/Section"
// import { Container } from "../../utils/components/Container/Container"
// import { Title } from "../../utils/components/Title/Title"
// import { HeadContent } from "../../components/HeadContent/HeadContent"

// const Archive = ({
//   data
// }) => {
//   const posts = data.allWpPost.nodes

//   if (!posts.length) {
//     return (
//       <Layout>
//         <Section>
//           <Container>
//             <Title>Полезные материалы</Title>
//             <p>Вы не добавили еще ни одной статьи</p>
//           </Container>
//         </Section>
//       </Layout>
//     )
//   }

//   return (
//     <Layout>

//       <ol style={{ listStyle: `none` }}>
//         {posts.map(post => {
//           const title = post.title

//           return (
//             <li key={post.uri}>
//               <article
//                 className="post-list-item"
//                 itemScope
//                 itemType="http://schema.org/Article"
//               >
//                 <header>
//                   <h2>
//                     <Link to={post.uri} itemProp="url">
//                       <span itemProp="headline">{title}</span>
//                     </Link>
//                   </h2>
//                   <small>{post.date}</small>
//                 </header>
//                 <section itemProp="description">{post.excerpt}</section>
//               </article>
//             </li>
//           )
//         })}
//       </ol>
//     </Layout>
//   )
// }

// export const Head = () => <HeadContent title="All posts" />

// export default Archive

// export const pageQuery = graphql`query WordPressPostArchive($offset: Int!, $postsPerPage: Int!) {
//   allWpPost(sort: {date: DESC}, limit: $postsPerPage, skip: $offset) {
//     nodes {
//       excerpt
//       uri
//       date(formatString: "MMMM DD, YYYY")
//       title
//       excerpt
//     }
//   }
// }`