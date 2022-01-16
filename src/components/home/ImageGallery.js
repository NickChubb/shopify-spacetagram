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
const ImageGallery = ({ photos, handleScroll, hasMore = true }) => {
    return (
        <InfiniteScroll
                    className={styles.grid}
                    dataLength={photos.length} //This is important field to render the next data
                    next={handleScroll}
                    hasMore={hasMore}
                    loader={
                        <Loading />
                    }
                    endMessage={
                        <p style={{ textAlign: 'center', width: '100%' }}>
                            <b>Like more photos to save them.  <a href="#">Click here to go back to the Top!</a> 👆</b>
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
