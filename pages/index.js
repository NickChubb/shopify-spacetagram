import { useState, useEffect } from 'react'
import InfiniteScroll from 'react-infinite-scroll-component';
import Loading from '../src/components/Loading'
import Layout from '../src/components/Layout'
import ImageGallery from '../src/components/home/ImageGallery'
import { getPhotos } from '../src/api/photos';
import { getLikes, like } from '../src/scripts/like';

export default function Home() {

    const [ photos, setPhotos ] = useState([]);
    const [ loading, setLoading ] = useState(true);

    // useEffect hook to get photos from NASA on page load
    useEffect(() => {
        fetchPhotos();
    }, []);

    /**
     * Fetch photos and concatenate them to current photos loaded
     */
    async function fetchPhotos() {

        const photoArray = await getPhotos();
        const likedPhotos = getLikes();

        // Compare photos from API with photos saved in LocalStorage
        // If photo is saved in LocalStorage, then we want to set
        // the liked value to true
        photoArray.forEach(photo => {
            if (likedPhotos.some(e => e.date === photo.date)) {
                photo.liked = true;
            } else {
                photo.liked = false;
            }
        });
        
        setPhotos(photos.concat(photoArray));
        setLoading(false);
    }

    return (
        <Layout>

            {
                // Display loading spinner while awaiting API resonse 
                loading?
                    <Loading />
                    :
                    <ImageGallery photos={photos} handleScroll={fetchPhotos} />
            }

        </Layout>
    )
}
