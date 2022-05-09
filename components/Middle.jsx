import styles from '../styles/Store.module.css'
import Card from '../components/Card'
import Product from './Product'
import { StoreContext } from '../pages/store'
import { useContext } from 'react'

export default function Middle() {
    const { shoes, setCart, cart } = useContext(StoreContext)
    return <Card style={styles.card2}>
        <div className={styles.h1}>
            <span className={styles.txt1}>SHOES</span>
            <div className={styles.second}>
                <i className={`material-icons ${styles.txt1}`}>search</i>
                <div className={styles.sort}>
                    sort by
                </div>
            </div>
        </div>
        <br></br>
        <div className={styles.grid}>
            {shoes.map(item => {
                return (
                    <>
                        <Product
                            image={item.image}
                            name={item.name}
                            price={item.price}
                            show={true}
                            onClick={() => {

                                if (!cart.includes(item)) {
                                    let cart1 = cart.splice(0)
                                    cart1.push(item)
                                    setCart(cart1)
                                }

                            }}
                        />
                        <span style={{ width: 50 }}></span>
                    </>

                )
            })}
        </div>
    </Card>
}