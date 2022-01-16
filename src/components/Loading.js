import Loader from "react-loader-spinner"
import styles from '../../styles/Home.module.css'

/**
 * Defines the Loading options styling for consistency
 * across the app.
 * 
 * @returns 
 */
const Loading = () => {
    return (
        <Loader
            type="BallTriangle"
            color="#00BFFF"
            height={200}
            width={200}
            className={styles.loader}
        />
    )
}

export default Loading
