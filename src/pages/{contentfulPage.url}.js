import React from "react"
import { graphql, Link } from "gatsby"

const Page = ({ data }) => {
  return (
    <main style={{ marginLeft: 20, marginTop: 20 }}>
      <h1>{data.contentfulPage.title}</h1>
      <p>{data.contentfulPage.description.description}</p>
      <img
        src={data.contentfulPage.image.file.url}
        alt={data.title}
        style={{
          width: 300,
          height: "auto",
        }}
      />
      <Link style={{ marginRight: 20}} to="/">Go to Coffee time</Link>
      <Link to="/smile">Go to Smile Page</Link>
    </main>
  )
}

export const data = graphql`
  query pageQuery($id: String) {
    contentfulPage(id: { eq: $id }) {
      url
      title
      description {
        description
      }
      image {
        file {
          url
        }
      }
    }
  }
`

export default Page
