import React, { useEffect, useState } from 'react'
import ImageCard from './ImageCard'
import styles from '../../../styles/Home.module.css'

const ImageGallery = ({ photos }) => {

    

    return (
        <div className={styles.grid}>
              
            {
                photos.map((image, key) => {
                    return <ImageCard key={key} image={image} />
                  })
            }

        </div>
    )
}

export default ImageGallery;
