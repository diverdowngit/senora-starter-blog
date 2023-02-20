


import React from "react";

import {  graphql } from "gatsby";
import Seo from "../components/seo";
import {container,wrapper,headingGrid,galleryimage,imgbox,transparentbox,caption} from '../styles/PhotoGallery.module.css';

import Layout from "../components/layout";

const PhotoGallery = ({data}) => {

  const image = data.allContentfulBlogImages.edges;
    

console.log(data)
    return (  
      <Layout>
     <div className={container}>
     <div className={wrapper}>
          <h2 className={headingGrid}>Photo Gallery</h2>
          <div className={galleryimage}>
                {image.map((image, index,description) => (
                     <div className={imgbox} key={index}>
                        <img src={image.node.images.url} alt={description}/> 
                             <div className={transparentbox}>
                            <div className={caption}>
                             <h3>{image.node.images.description}</h3>
                              
                            </div>
                          </div> 
                     </div>
                    ))
                }
            </div>

            </div>

            </div>

            </Layout>
    );
}
   

export const Head = () => <Seo title="Photo Gallery" />
export default PhotoGallery
export const query = 
  graphql`
  query  ContentfulBlogImagesConnection {
    allContentfulBlogImages{
      edges{
        node{
          images{
          description
          url
        
          }
          
          }
        }
      }
      
    }
  `