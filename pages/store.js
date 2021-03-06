import Head from 'next/head'
import { useState, createContext } from 'react'
import Topnavbar from '../components/Topnavbar'
import styles from '../styles/Store.module.css'
import Left from '../components/Left'
import Middle from '../components/Middle'
import Right from '../components/Right'

export const StoreContext = createContext()

export default function Store() {
    const [cart, setCart] = useState([])
    const [shoes, setShoes] = useState([
        {
            image: '/assets/shoe.jpg',
            name: 'KSL01',
            price: 2199
        },
        {
            image: '/assets/shoe2.png',
            name: 'KSW01',
            price: 2469
        },
        {
            image: '/assets/shoe.jpg',
            name: 'KSL02',
            price: 5969
        },
        {
            image: '/assets/shoe2.png',
            name: 'KSW02',
            price: 6669
        }
    ])
    return (
        <StoreContext.Provider
            value={{
                cart,
                setCart,
                shoes,
                setShoes
            }}>
            <div className={'container'}>
                <Head>
                    <title>Store</title>
                    <meta name="description" content="Generated by create next app" />
                    <link rel="icon" href="/favicon.ico" />
                    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />
                    <link rel="stylesheet" href="https://fonts.sandbox.google.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0" />
                </Head>

                <main className={'main'}>
                    <Topnavbar index1={3} />
                    <div className={styles.box}>
                        <Left />
                        <Middle />
                        <Right />
                    </div>
                </main>

            </div></StoreContext.Provider>
    )
}
