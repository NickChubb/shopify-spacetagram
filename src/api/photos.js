/**
 * Fetches photos from NASA's APOD API.
 */
export const getPhotos = async () => {

    // const res = await fetch('https://api.nasa.gov/planetary/apod?api_key=thtzLj21tJlBos1338VsgEfLqDPBBXVWqqSX5DBt&&count=5');
    const res = await fetch('https://api.nasa.gov/planetary/apod?api_key=thtzLj21tJlBos1338VsgEfLqDPBBXVWqqSX5DBt&&start_date=2022-01-11&&end_date=2022-01-15');
    return await res.json();

}