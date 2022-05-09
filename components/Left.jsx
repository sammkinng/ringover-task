import styles from '../styles/Store.module.css'
import Card from '../components/Card'

export default () => {
    return <Card style={styles.card1}>
        <div className={styles.h1}>
            <span className={styles.txt1}>FILTERS</span>
            <i className={`material-icons ${styles.txt1}`}>filter_alt</i>
        </div>
        <br></br>
        <span className={styles.txt1}>Cost</span>
        <br></br>
        <div className={styles.check}>
            <input type={'checkbox'} style={{ marginRight: 10 }} />
            Rs. 1500-4000
        </div>
        <div className={styles.check} >
            <input type={'checkbox'} style={{ marginRight: 10 }} />
            Rs. 4001-7000
        </div>
        <div className={styles.check}>
            <input type={'checkbox'} style={{ marginRight: 10 }} />
            Rs. 7001+
        </div>
        <br></br>
        <span className={styles.txt1}>Colour</span>
        <br></br>
        <div className={styles.h1} style={{ justifyContent: 'flex-start' }}>
            <div className={styles.color} style={{ backgroundColor: 'red' }}></div>
            <div className={styles.color} style={{ backgroundColor: 'blue' }}></div>
            <div className={styles.color} style={{ backgroundColor: 'yellow' }}></div>
            <div className={styles.color} style={{ backgroundColor: 'green' }}></div>
            <div className={styles.color} style={{ backgroundColor: 'coral' }}></div>

        </div>
        <br></br>
        <span className={styles.txt1}>Design Templates</span>
        <br></br>
        <div className={styles.check}>
            <input type={'checkbox'} style={{ marginRight: 10 }} />
            2
        </div>
        <div className={styles.check} >
            <input type={'checkbox'} style={{ marginRight: 10 }} />
            3
        </div>
        <div className={styles.check}>
            <input type={'checkbox'} style={{ marginRight: 10 }} />
            3+
        </div>
        <br></br>
        <span className={styles.txt1}>Type</span>
        <br></br>
        <div className={styles.check}>
            <input type={'checkbox'} style={{ marginRight: 10 }} />
            Loafers
        </div>
        <div className={styles.check} >
            <input type={'checkbox'} style={{ marginRight: 10 }} />
            Sneakers
        </div>
    </Card>
}