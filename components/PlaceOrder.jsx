import styles from '../styles/Store.module.css'
import Button from './Button'

export default () => {
    return <div className={styles.order}>
        <div className={styles.hhh}>
            <span className={`material-symbols-outlined ${styles.txt1}`}>pin_drop</span> Home{' '}
            <span className={`material-symbols-outlined ${styles.txt1}`}>calendar_month</span> Select Date

        </div>
        <Button onClick={() => { }} style={{ alignSelf: 'center' }}>
            Order
        </Button>
    </div>
}