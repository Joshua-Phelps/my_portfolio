import React from 'react'
import Layout from "./layout"

const projectDisplay = ({ projectTitle, description, gitHubBackend, gitHubFrontend, website, youtube, youtubeTitle, features }) => {
  const siteTitle = 'Recent Projects'
  
  const renderFeatures = () => {
    return features.map(info => {
      return <li className='list-item'>{info}</li>
    })
  }

  return (
    <>
      <div className='center-text'>
        <h2 className='padding-left inline-block'>{projectTitle}</h2>
      </div>
      <div className='center-text'>
        <i className='inline-block'>{description}</i>
      </div>
      <br></br>
      <div className='padding-left' >
        <a href={gitHubBackend} target="_blank" >Github - Backend</a>{' '}
        | <a href={gitHubFrontend} target="_blank" >Github - Client</a>{' '}
        {website && <>
          <span>| </span> 
          <a href={website} target="_blank" >Website</a>
          </>
        }
      </div>

      <div className="grid-container">
        <div className='grid-item'>
          <div className='project-demo-video'>
            <iframe title={youtubeTitle} width="560" height="315" src={youtube} frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>  
          </div>
        </div>
        <div className='grid-item-right'>
          <h4>Features & Description</h4>
          <ul>
            {renderFeatures()}
          </ul>
        </div>
      </div>
    </>
  )
}

export default projectDisplay