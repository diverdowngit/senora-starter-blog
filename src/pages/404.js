import { StaticImage } from 'gatsby-plugin-image'
import React from 'react'
import Layout from '../components/layout'

const NotFoundPage = () => (
  <Layout>
    <StaticImage src="../images/boatbroke.jpg" alt="broke boat"/>
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <h1>404: Not Found</h1>
      <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
    </div>
  </Layout>
)

export default NotFoundPage
