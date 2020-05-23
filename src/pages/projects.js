import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Button from "../components/button"
import ProjectDisplay from '../components/projectDisplay'

class Projects extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = 'Recent Projects'

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title="Coding Projects" />
        <ProjectDisplay />
        <div className='center-text'>
          <h2 className='padding-left' style={{display: 'inline-block'}}>Song Control</h2>
        </div>
          <div className='center-text'>
            <i style={{display: 'inline-block'}}>Songwriting application with writing tools designed to assist songwriters in the creative process</i>
          </div>
          <br></br>
          <div className='padding-left' >
            <Link to="https://github.com/Joshua-Phelps/mod-5-songwriting-backend">Github - Backend</Link>{' '}
            | <Link to="https://github.com/Joshua-Phelps/mod-5-songwriting-client">Github - Client</Link>{' '}
            | <Link to="https://song-control-client.herokuapp.com/">Website</Link>
          </div>

        <div className="grid-container">
          <div className='grid-item'>
            <div className='project-demo-video'>
              <iframe width="560" height="315" src="https://www.youtube.com/embed/u5eMMfXUyk4" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>  
            </div>
          </div>
          <div className='grid-item-right'>
            <h4>Description</h4>
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

        <h2 className='padding-left'>FlatPlate</h2><span><i className='padding-left'>Recipe application designed to organize and create new recipes</i></span>
          <div className='padding-left' >
            <Link to="https://github.com/Joshua-Phelps/recipe-app-backend">Github - Backend</Link>{' '}
            | <Link to="https://github.com/Joshua-Phelps/recipe-app-frontend">Github - Client</Link> 
          </div>

        <div className="grid-container">
          <div className='grid-item'>
            <div className='project-demo-video'>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/6zrZ0ikvud4" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>            </div>
          </div>
          <div className='grid-item-right'>
            <h3>Description</h3>
            <ul>
              <li className='list-item'> Utilized the MealDB API to pull and parse data to seed the database providing hundreds a real recipes for users to enjoy</li>
              <li className='list-item'> Implemented a dynamic and controlled form to create new recipes and ingredients that allows the user to quickly create a new recipe</li>
              <li className='list-item'> Applied a search function using React state to sort and filter recipes by category, region, and name making all recipes easily searchable</li>
              <li className='list-item'> Used ActiveRecord and Ruby on Rails join tables to organize, store, and like recipes allowing the user to reference and select favorite recipes for quick access and future use.</li>
              <li className='list-item'> Implemented Auth with bcrypt passwords and JWT tokens for secure login and logout</li>
            </ul>
          </div>
        </div>
      
        <Link to="/">
          <div className='padding-left'>
            <Button marginTop="85px">Go Home</Button>
          </div>
        </Link>
      </Layout>
    )
  }
}

export default Projects

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