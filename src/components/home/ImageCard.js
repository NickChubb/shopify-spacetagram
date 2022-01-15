import React, { useState } from 'react'
import Image from 'next/image'
import { like, unlike } from '../../scripts/like'
import styles from '../../../styles/Home.module.css'
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai';

const ImageCard = ({image, likedPosts, key}) => {

    // Manage state of liked image, to allow instant change
    // on button click
    const [liked, setLiked] = useState(image.liked);

    /**
     * Handle liking event on button click
     */
    const handleLike = () => {
        like(image);
        setLiked(true)
    }

    /**
     * Handle unliking event on button click
     */
    const handleUnlike = () => {
        unlike(image);
        setLiked(false);   
    }

    return (
        <div className={styles.card}>
            <Image src={image.url} width={500} height={500} alt={image.title} />
            <h2>{image.title}</h2>
            <h3>{image.explanation}</h3>
            {
                // Depending whether image is liked in LocalStorage, display
                // Button to like or unlike
                liked?
                    <button className={styles.button_unlike} onClick={handleUnlike}>Liked <AiFillHeart /></button>
                    :
                    <button className={styles.button_like} onClick={handleLike}>Like <AiOutlineHeart /></button>
            }
        </div>
    )
}

export default ImageCard
