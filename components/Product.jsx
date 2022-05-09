import styles from '../styles/Store.module.css'
import Image from 'next/image'

export default ({ image, name, price, onClick, show }) => {
    return <div style={{
        width: 200,
        height: show ? 250 : 50,
        marginTop: show ? 0 : 30
    }} onClick={() => onClick()}>
        {show &&
            <Image
                src={image}
                alt='product'
                width={200}
                height={200}

            />}
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