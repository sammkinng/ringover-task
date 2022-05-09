import styles from '../styles/Store.module.css'
import Card from '../components/Card'
import { useContext } from 'react'
import { StoreContext } from '../pages/store'
import PlaceOrder from './PlaceOrder'
import Product from './Product'

export default () => {
    const { cart } = useContext(StoreContext)
    return <Card style={styles.card3}>
        <div className={styles.h1}>
            <span className={styles.txt1}>CART</span>
            <span className={`material-symbols-outlined ${styles.txt1}`}>shopping_bag</span>
        </div>
        {cart?.length ? <div className={styles.grid}>
            {cart.map(item => {
                return (
                    <>
                        <Product
                            image={item.image}
                            name={item.name}
                            price={item.price}
                            onClick={() => { }}
                        />
                        <span style={{ width: 50 }}></span>
                    </>

                )
            })}
        </div> :
            <span className={styles.mpt}>
                What's stopping you, designer?
            </span>}
        <PlaceOrder />
    </Card>
}