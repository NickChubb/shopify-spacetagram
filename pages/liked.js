import React, { useEffect, useState } from 'react'
import Layout from '../src/components/Layout'
import Loading from '../src/components/Loading'
import ImageGallery from '../src/components/home/ImageGallery'
import { getLikes } from '../src/scripts/like'

const liked = () => {

    const [likedPhotos, setLikedPhotos] = useState();
    const [ loading, setLoading ] = useState(true);

    useEffect(() => {
        const fetchPhotos = async () => {

            setLikedPhotos(getLikes());
            setLoading(false);
        }

        fetchPhotos();
    }, [])

    return (
        <Layout>
            <h2>My Liked Images</h2>

            {
                // Display loading spinner while awaiting API resonse 
                loading?
                    <Loading />
                    :
                    likedPhotos.length?
                        <ImageGallery photos={likedPhotos} />
                        :
                        <p>No images liked yet 😔</p>
            }


        </Layout>
    )
}

export default liked
