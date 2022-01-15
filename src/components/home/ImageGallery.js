import React, { useEffect, useState } from 'react'
import ImageCard from './ImageCard'
import styles from '../../../styles/Home.module.css'

/**
 * Takes in a list of photos and displays their ImageCards.
 * 
 * @param {Array} photos - Array of image objects from NASA APOD API
 * @returns 
 */
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
