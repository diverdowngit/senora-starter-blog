import React from 'react'
import { GatsbyImage } from 'gatsby-plugin-image'
import { renderRichText } from 'gatsby-source-contentful/rich-text'

import * as styles from './hero.module.css'

const Hero = ({ image, title, content }) => (
  <div className={styles.heroWrapper}>
    <div className={styles.hero}>
      {image && (
        <GatsbyImage className={styles.image} alt={title} image={image} />
      )}
      <div className={styles.title}>
        <h1 className={styles.details}>{title}</h1>
        {/* {content && (
        <div className={styles.content}>{renderRichText(content)}</div>
      )}  */}
      </div>
    </div>
  </div>
)

export default Hero
