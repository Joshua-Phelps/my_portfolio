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

    const songContolFeatures = [
      'Created an AWS S3 bucket that enables users to upload, save, and stream audio recordings and provides song version control' ,
      'Used CarrierWave and Fog gem to communicate with Amazon S3 allowing for an easy and accessible entry point',
      'Utilized React Hooks to manage state and implemented Material UI for consistent design and user experience',
      'Applied ChordSheetJS npm package to format song lyrics for ease of visibility for the user',
      'Built a lyric writing tool to look up for a word’s synonyms, rhymes, and definitions that enables quick and effortless reference with one search',
      'Implemented a Ruby on Rails backend and used serializers to render and format JSON data providing a quick and easy way to organize fetches from the client',
      'Implemented Auth with bcrypt passwords and JWT tokens for secure login and logout',
    ]

    const flatPlateFeatures = [
      'Utilized the MealDB API to pull and parse data to seed the database providing hundreds a real recipes for users to enjoy',
      'Implemented a dynamic and controlled form to create new recipes and ingredients that allows the user to quickly create a new recipe',
      'Applied a search function using React state to sort and filter recipes by category, region, and name making all recipes easily searchable',
      'Used ActiveRecord and Ruby on Rails join tables to organize, store, and like recipes allowing the user to reference and select favorite recipes for quick access and future use.',
      'Implemented Auth with bcrypt passwords and JWT tokens for secure login and logout',
    ]

    const capsuleClosetFeatures = [
      'Worked on a team with two other developers to create an application using a Ruby on Rails api, Postgres database, and a React frontend',
      'Implented a filtering feature on clothing items based on category, color, size, and brand that allows the user to quickly find a desired clothing item',
      'Utilized React hooks and reducers for centralized state management, making it easier to to debug and modify state',
      'Built reusable components resulting in a slimmer codebase',
      'Created a dynamic drawer that allows to user to create and edit an outfit while viewing the contents of their closet',
      'Implemented Auth with bcrypt passwords and JWT tokens for secure login and logout',
      'Used Material UI to style components that allows for easy manipluation and quick theme changes',
    ]


    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title="Projects" />

        <ProjectDisplay 
          projectTitle={'Capsule Closet'} 
          description={"A web application designed to minimize the user's closet by providing organization and quick outfit creation"}
          gitHubBackend={'https://github.com/Joshua-Phelps/capsule-closet-backend'}
          gitHubFrontend={'https://github.com/Joshua-Phelps/capsule-closet-client'}
          features={capsuleClosetFeatures}
          youtube={"https://www.youtube.com/embed/m9WLhJ9x4ts"}
          youtubeTitle={'Capsule Closet Demo'}
        />

        <ProjectDisplay 
          projectTitle={'Song Control'} 
          description={'Songwriting application with writing tools designed to assist songwriters in the creative process'}
          gitHubBackend={'https://github.com/Joshua-Phelps/mod-5-songwriting-backend'}
          gitHubFrontend={'https://github.com/Joshua-Phelps/mod-5-songwriting-client'}
          website={'https://song-control-client.herokuapp.com/'}
          features={songContolFeatures}
          youtube={"https://www.youtube.com/embed/181d-tg6OPc"}
          youtubeTitle={'Song Control Demo'}
        />

        <ProjectDisplay 
          projectTitle={'FlatPlate'} 
          description={'Recipe application designed to organize and create new recipes'}
          gitHubBackend={'https://github.com/Joshua-Phelps/recipe-app-backend'}
          gitHubFrontend={'https://github.com/Joshua-Phelps/recipe-app-frontend'}
          features={flatPlateFeatures}
          youtube={"https://www.youtube.com/embed/6zrZ0ikvud4"}
          youtubeTitle={'Flat Plate Demo'}
        />
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