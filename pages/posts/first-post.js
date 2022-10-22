import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Script from "next/script";
import styles from './first-post.module.css'

export default function FirstPost() {
    return <>
        <Head>
            <title>First Post</title>
        </Head>
        <Script
            src="https://connect.facebook.net/en_US/sdk.js"
            strategy="lazyOnload"
            onLoad={() =>
                console.log(`script loaded correctly, window.FB has been populated`)
            }
        />
        <main>
            <h1 className={styles.title}>
                First Post
            </h1>
            <Image
                src="/images/rocket-league-dominus.png"
                height={144}
                width={200}
                alt="Rocket League dominus"
            />
            <h2><Link href="/">Back to home</Link></h2>
        </main>
    </>;
}