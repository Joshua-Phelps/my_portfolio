import React from "react"
import { Link } from "gatsby"
import '../App.css'
import coverPhoto from '../images/cover_photo.jpg'
import Bio from '../components/bio'
import Layout from "../components/layout"
import SEO from "../components/seo"
import Button from "../components/button"

class IndexPage extends React.Component {
  render() {
    const siteTitle = "Joshua Phelps | Portfolio"

    return (
      <>
      <SEO
          title="Home"
          keywords={[`blog`, `gatsby`, `javascript`, `react`]}
        />
        <div className='sidenav'>
          <img src={coverPhoto} alt="Josh Smiling on Boat" />
          <a href="https://drive.google.com/file/d/1g5UVJPVuVAleX8PMe6lozMqdHkjzj1jM/view?usp=sharing" target="_blank">Resume</a>
          <a href="https://github.com/Joshua-Phelps" target="_blank">Github</a>
          <a href="https://www.linkedin.com/in/joshuaphelps24/" target="_blank">Linkedin</a>
          <a href="https://medium.com/@jugtuttle" target="_blank">Blog</a>
        </div>

        <div className='content'>
        <Layout location={this.props.location} title={siteTitle}>
          <h1>
            Welcome {" "}
            <span role="img" aria-label="wave emoji">
              👋
            </span>
          </h1>
          <h2>
              About Me
          </h2>
            <Bio />
          <h2>Project Demos</h2>
          
            <div >

          {/* <iframe width="560" height="315" src="https://www.youtube.com/embed/u5eMMfXUyk4" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> */}
              <iframe className='demos' width="373" height="210" src="https://www.youtube.com/embed/u5eMMfXUyk4" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
              <iframe className='demos' width="373" height="210" src="https://www.youtube.com/embed/6zrZ0ikvud4" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
       
          <Link to="/projects/">
            <Button marginTop="35px">See more Projects</Button>
          </Link>
        </Layout>
      </div>
      </>
    )
  }
}

export default IndexPage
