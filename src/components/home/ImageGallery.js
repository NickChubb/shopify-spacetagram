import React, { useEffect, useState } from 'react'
import ImageCard from './ImageCard'
import styles from '../../../styles/Home.module.css'
import InfiniteScroll from 'react-infinite-scroll-component'
import Loading from '../Loading'

/**
 * Takes in a list of photos and displays their ImageCards.
 * 
 * @param {Array} photos - Array of image objects from NASA APOD API
 * @returns 
 */
const ImageGallery = ({ photos, handleScroll }) => {
    return (
        <InfiniteScroll
                    className={styles.grid}
                    dataLength={photos.length} //This is important field to render the next data
                    next={handleScroll}
                    hasMore={true}
                    loader={
                        <Loading />
                    }
                    endMessage={
                        <p style={{ textAlign: 'center' }}>
                            <b>Yay! You have seen it all</b>
                        </p>
                    }
        >
            {
                photos.map((image, key) => {
                    return <ImageCard key={key} image={image} />
                  })
            }
        </InfiniteScroll>
    )
}

export default ImageGallery;
