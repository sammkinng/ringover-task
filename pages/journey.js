import Head from 'next/head'
import Topnavbar from '../components/Topnavbar'
import styles from '../styles/Journey.module.css'
import Image from 'next/image'

export default function Journey() {
    return (
        <div className={styles.container}>
            <Head>
                <title>The Journey</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
                <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />
            </Head>

            <main className={styles.main}>
                <Topnavbar index1={1} />
                <div className={styles.journey}>
                    <div className={styles.grass}>
                        THE JOURNEY
                    </div>
                    <div className={styles.black}>
                        <div className={styles.path}>

                        </div>
                        <div className={styles.txt}>
                            <div className={styles.t1}>
                                THE ROOTS
                            </div>


                            Our entire time when we shop, we are limited by choices that are there in a store. We are often on the side where we buy our favourite coloured shoes made by someone else but what it we designed it? What if we could involve in the making of a shoe we want to buy? This little thought sprouted to become what we are today, KICKSUP
                            <div className={styles.t1}>
                                CHAPTER I
                            </div>


                            Understanding the trends in the industry and what the users think when they buy were our top priorities before we moved further in the building After weeks of fruitful research, we stepped into the user&aposs shoes and look at what we plan to do. It&aposs a great joy for the users if they are involved in the making Werte heading into an era of technology and people prefer online shopping to shopping in an outlet.
                            <div className={styles.t1}>
                                CHAPTER II
                            </div>


                            Every miestone begins with a single step and before KICKSUP sprouted, the team manufactured in small scale with two users a month. This experience was crucial to our brand as this is our first practical experience. Interacting with the users was the best thing ever. The positive reviews and support from people motivated us to push our limits further.
                            <div className={styles.t1}>
                                KICKSUP
                            </div>


                            How we are made a perfect platform for you to involve in the making of a shoe you want to buy! We have evolved ever since we started out. We wish to t and make KICKSUP a bigger team Design your shoe and be a part of our journey!
                        </div>
                    </div>
                </div>
            </main>

        </div>
    )
}
