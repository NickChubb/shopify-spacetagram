/**
 * Fetches photos from NASA's APOD API.
 */
export const getPhotos = async () => {

    const res = await fetch('https://api.nasa.gov/planetary/apod?api_key=thtzLj21tJlBos1338VsgEfLqDPBBXVWqqSX5DBt&&count=6&&thumbs=true');
    // const res = await fetch('https://api.nasa.gov/planetary/apod?api_key=thtzLj21tJlBos1338VsgEfLqDPBBXVWqqSX5DBt&&thumbs=true&&start_date=2022-01-01&&end_date=2022-01-15');
    return (await res.json()).reverse();

}