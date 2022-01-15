/**
 * Stores a post info into user's LocalStorage.
 */
export const like = (image) => {

    // We check if window is undefined to avoid an error with NextJS
    // triyng to access LocalHost during build.
    if (typeof window !== "undefined") {

        // Posts are stored as JSON objects, we need to parse the JSON to
        // Interact with the stored array.
        let likedPosts = JSON.parse(localStorage.getItem('likedPosts') || '[]');
        image.liked = true;
        likedPosts.push(image);

        // Store stringified version of array in LocalStorage
        localStorage.setItem('likedPosts', JSON.stringify(likedPosts));
    }
}

/**
 * Removes post info from user's LocalStorage
 */
export const unlike = (image) => {

    if (typeof window !== "undefined") {
        let likedPosts = JSON.parse(localStorage.getItem('likedPosts') || '[]');

        // Filter post from LocalStorage with image date that matches 
        // argument image date
        let filteredPosts = likedPosts.filter((value, index, arr) => { 
            return value.date !== image.date;
        });

        localStorage.setItem('likedPosts', JSON.stringify(filteredPosts));
    }
}

/**
 * Gets array of liked posts from user's LocalStorage
 * @returns 
 */
export const getLikes = () => {
    if (typeof window !== "undefined") {
        return JSON.parse(localStorage.getItem('likedPosts') || '[]');
    }
}