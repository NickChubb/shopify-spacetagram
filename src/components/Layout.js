import React from 'react'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../../styles/Home.module.css'

/**
 * Layout forms the framework for our page layout, including Header,
 * Title, Navigation, Footer.
 * 
 * Populates the main section with children data. To use, wrap page
 * content with <Layout></Layout> tags for each page.
 * 
 * @param {*} props 
 * @returns 
 */
const Layout = (props) => {
    return (
        <div className={styles.container}>
            <Head>
                <title>Spacetagram</title>
                <meta name="description" content="NASA Astronomical Photo of the Day Randomizer." />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className={styles.main}>

                <h1 className={styles.title}>
                    Spacetagram
                </h1>

                <ul className={styles.header_nav}>
                    <li className={styles.header_nav_item} >
                        <h2><Link href='/' >Home</Link></h2>
                    </li>
                    <li className={styles.header_nav_item} >
                        <h2><Link href='/liked' >My Liked Photos</Link></h2>
                    </li>
                </ul>

                {props.children}

            </main>
        </div>
    )
}

export default Layout
