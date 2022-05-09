import styles from '../styles/Store.module.css'
import Card from '../components/Card'
import { useContext } from 'react'
import { StoreContext } from '../pages/store'
import PlaceOrder from './PlaceOrder'

export default () => {
    const { cart } = useContext(StoreContext)
    return <Card style={styles.card3}>
        <div className={styles.h1}>
            <span className={styles.txt1}>CART</span>
            <span className={`material-symbols-outlined ${styles.txt1}`}>shopping_bag</span>
        </div>
        {cart?.length ? 'yes' :
            <span className={styles.mpt}>
                What's stopping you, designer?
            </span>}
        <PlaceOrder />
    </Card>
}