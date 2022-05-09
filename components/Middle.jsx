import styles from '../styles/Store.module.css'
import Card from '../components/Card'
import Product from './Product'

const data = [
    {
        image: '/assets/shoe.jpg',
        name: 'KSL01',
        price: 2000
    },
    {
        image: '/assets/shoe2.png',
        name: 'KSW01',
        price: 4000
    }
]

export default () => {
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
            {data.map(item => {
                return (
                    <>
                        <Product
                            image={item.image}
                            name={item.name}
                            price={item.price}
                        />
                        <span style={{ width: 30 }}></span>
                    </>

                )
            })}
        </div>
    </Card>
}