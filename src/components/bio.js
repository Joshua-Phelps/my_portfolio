/**
 * Bio component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React, { useState } from "react"
import { Link } from "gatsby"
import { StaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"
import styled from "styled-components"

import { rhythm } from "../utils/typography"

function Bio() {
  const [show, setShow] = useState(false)

  const handleShow = e => {
    e.preventDefault()
    setShow(!show)
  }
  return (
  
    <Container>
      {/* <Image
        fixed={data.avatar.childImageSharp.fixed}
        alt={author}
        style={{
          marginRight: rhythm(1 / 2),
          marginBottom: 0,
          minWidth: 50,
          borderRadius: `100%`,
        }}
        imgStyle={{
          borderRadius: `50%`,
        }}
      /> */}
    
      <div className='bio'>
        {!show ? (
        <p>
          Full Stack Web Developer experienced in Ruby on Rails and JavaScript based programming with a background in music...
          {' '}<a onClick={handleShow}>more</a>
        </p> 
        )  : (
        <>
          <p>
            Full Stack Web Developer experienced in Ruby on Rails and JavaScript based programming with a background in music.
          </p>
          <p>
            I always dreamed of playing music for a living. It’s been a passion of mine for as long as I can remember. 
            Music has the power to transform, heal, and change lives. It comforts the lonely, lifts the lowly and connect 
            us in unlikely ways. It gives me a feeling of being a part of something bigger than myself. It’s truly magical, 
            and I never thought I’d find something I loved as much as music until I started coding.
          </p>
          <p>
            While music stands alone in its overwhelming ability to create a feeling in the moment, I believe coding provides 
            many of the same benefits that music provides. It connects people, improves lives, and gives us a framework to 
            build something greater than ourselves. It is ever-changing and there is always a new problem to solve. It 
            consistently inspires me, and now I dream of coding for a living.
          </p>
          <p>
            I am looking forward to joining a team that promotes collaboration and community and am excited to continue learning and growing.
          </p>
          <p>
            My skills include JavaScript, React, Ruby on Rails, Sinatra, HTML, CSS , Semantic UI, and Material UI. I am currently focused on learning React Native. 
          {' '}<a onClick={handleShow}>show less</a>
          </p>
        </>
        )}
      </div>
    </Container>
        
  )
}

const bioQuery = graphql`
  query BioQuery {
    avatar: file(absolutePath: { regex: "/profile-pic.jpg/" }) {
      childImageSharp {
        fixed(width: 50, height: 50) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    site {
      siteMetadata {
        author
        social {
          twitter
        }
      }
    }
  }
`

const Container = styled.div`
  display: flex;
`

export default Bio
