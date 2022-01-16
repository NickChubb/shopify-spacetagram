import React, { useEffect, useState } from 'react'
import Layout from '../src/components/Layout'
import Loading from '../src/components/Loading'
import ImageGallery from '../src/components/home/ImageGallery'
import { getLikes } from '../src/scripts/like'

/**
 * Liked page displays users liked photos.
 * 
 * @returns 
 */
const Liked = () => {

    const [likedPhotos, setLikedPhotos] = useState();
    const [ loading, setLoading ] = useState(true);

    useEffect(() => {
        const fetchPhotos = async () => {

            // Fetch liked photos from LocalStorage
            setLikedPhotos(getLikes());
            setLoading(false);
        }

        fetchPhotos();
    }, [])

    return (
        <Layout>

            {
                // Display loading spinner while awaiting API resonse 
                loading?
                    <Loading />
                    :
                    // If no liked photos, display message
                    likedPhotos.length?
                        <ImageGallery photos={likedPhotos} />
                        :
                        <p>No images liked yet 😔</p>
            }


        </Layout>
    )
}

export default Liked
