import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import '../styles/layout.module.css'
import Layout from "../components/layout"
import Seo from "../components/seo"
import Img from '../images/heroimage.jpg'
import Hero from '../components/hero'
import Ewv from "../pages/Ewv"
const IndexPage = () => {
  return (
    <Layout>
  
     {/* <Hero img={Img} centerText="Welcome to SV Sea Senora " location="WorldWide."font-family=" 'Luminari', sans-serif;"/> */}
      
       <Ewv />
    

      
     
     
      </Layout>
  )
}
export const Head = () => <Seo title="Home" />
export default IndexPage
