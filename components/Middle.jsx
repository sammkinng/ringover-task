import styles from '../styles/Store.module.css'
import Card from '../components/Card'
import Product from './Product'
import { StoreContext } from '../pages/store'
import { useContext } from 'react'

export default () => {
    const { shoes } = useContext(StoreContext)
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
                        />
                        <span style={{ width: 50 }}></span>
                    </>

                )
            })}
        </div>
    </Card>
}