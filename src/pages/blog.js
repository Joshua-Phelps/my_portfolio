import React from "react"
import { Link, graphql } from "gatsby"

import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { rhythm } from "../utils/typography"
import Button from "../components/button"

class Blog extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = 'Recent Projects'
    const posts = data.allMdx.edges

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title="Coding Projects" />
          <h2 className='padding-left-less'>Song Control</h2><span><i className='padding-left'>Songwriting application with writing tools designed to assist songwriters in the creative process</i></span>
          <div className='padding-left' >
            <Link>Github - Backend</Link> | <Link>Github - Client</Link> | <Link>Website</Link>
          </div>

        <div className="grid-container">
          <div className='grid-item'>
            <div className='project-demo-video'>
              <iframe width="560" height="315" src="https://www.youtube.com/embed/u5eMMfXUyk4" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>  
            </div>
          </div>
          <div className='grid-item-right'>
            <h3>Decription</h3>
            <ul>
              <li className='list-item'> Created an AWS S3 bucket that enables users to upload, save, and stream audio recordings and provides song version control </li>
              <li className='list-item'> Used CarrierWave and Fog gem to communicate with Amazon S3 allowing for an easy and accessible entry point</li>
              <li className='list-item'> Utilized React Hooks to manage state and implemented Material UI for consistent design and user experience</li>
              <li className='list-item'> Applied ChordSheetJS npm package to format song lyrics for ease of visibility for the user</li>
              <li className='list-item'> Built a lyric writing tool to look up for a word’s synonyms, rhymes, and definitions that enables quick and effortless reference with one search </li>
              <li className='list-item'> Implemented a Ruby on Rails backend and used serializers to render and format JSON data providing a quick and easy way to organize fetches from the client.</li>
              <li className='list-item'> Implemented Auth with bcrypt passwords and JWT tokens for secure login and logout</li>
            </ul>
          </div>
        </div>
        <Link to="/">
          <Button marginTop="85px">Go Home</Button>
        </Link>
      </Layout>
    )
  }
}

export default Blog

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMdx(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
          }
        }
      }
    }
  }
`
