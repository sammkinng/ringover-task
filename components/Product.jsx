import styles from '../styles/Store.module.css'
import Image from 'next/image'

export default ({ image, name, price }) => {
    return <div style={{
        width: 200,
        height: 250
    }}>
        <Image
            src={image}
            alt='product'
            width={200}
            height={200}

        />
        <span className={styles.txt1}>{name}</span>
        <br></br>
        <div className={styles.h1}>
            <span>
                Rs. {price}
            </span>
            <Image
                src={'/assets/rating.png'}
                alt='product'
                width={100}
                height={30}

            />
        </div>
    </div>
}