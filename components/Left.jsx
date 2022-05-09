import styles from '../styles/Store.module.css'
import Card from '../components/Card'
import Button from './Button'
import { StoreContext } from '../pages/store'
import { useContext } from 'react'

let data = []

let all = [
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
]

const filter_fxn = () => {
    let ip1 = document.querySelector('#ip1')
    let ip2 = document.querySelector('#ip2')
    let ip3 = document.querySelector('#ip3')
    let ip4 = document.querySelector('#ip4')
    let ip5 = document.querySelector('#ip5')

    if (!ip1.checked && ip2.checked) {
        if (ip4.checked && !ip5.checked) {
            data = [
                {
                    image: '/assets/shoe.jpg',
                    name: 'KSL02',
                    price: 5969
                },
            ]
        }
        else if (!ip4.checked && ip5.checked) {
            data = [
                {
                    image: '/assets/shoe2.png',
                    name: 'KSW02',
                    price: 6669
                }
            ]
        }
        else {
            data = [
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
            ]
        }

    }
    else if (ip1.checked && !ip2.checked) {
        if (ip4.checked && !ip5.checked) {
            data = [
                {
                    image: '/assets/shoe.jpg',
                    name: 'KSL01',
                    price: 2199
                },
            ]
        }
        else if (!ip4.checked && ip5.checked) {
            data = [
                {
                    image: '/assets/shoe2.png',
                    name: 'KSW01',
                    price: 2469
                },
            ]
        }
        else {
            data = [
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
            ]
        }

    }
    else {
        if (ip3.checked) {
            data = []
        }
        else {
            if (ip4.checked && !ip5.checked) {
                data = [
                    {
                        image: '/assets/shoe.jpg',
                        name: 'KSL01',
                        price: 2199
                    },
                    {
                        image: '/assets/shoe.jpg',
                        name: 'KSL02',
                        price: 5969
                    },
                ]
            }
            else if (!ip4.checked && ip5.checked) {
                data = [
                    {
                        image: '/assets/shoe2.png',
                        name: 'KSW01',
                        price: 2469
                    },
                    {
                        image: '/assets/shoe2.png',
                        name: 'KSW02',
                        price: 6669
                    }
                ]
            }
            else {
                data = all
            }
        }


    }

}

export default () => {
    const { setShoes } = useContext(StoreContext)
    return <Card style={styles.card1}>
        <div className={styles.h1}>
            <span className={styles.txt1}>FILTERS</span>
            <span className={`material-symbols-outlined ${styles.txt1}`}>filter_alt</span>
        </div>
        <br></br>
        <span className={styles.txt1}>Cost</span>
        <br></br>
        <div className={styles.check}>
            <input type={'checkbox'} style={{ marginRight: 10 }} onChange={() => filter_fxn()} id='ip1' />
            Rs. 1500-4000
        </div>
        <div className={styles.check} >
            <input type={'checkbox'} style={{ marginRight: 10 }} onChange={() => filter_fxn()} id='ip2' />
            Rs. 4001-7000
        </div>
        <div className={styles.check}>
            <input type={'checkbox'} style={{ marginRight: 10 }} onChange={() => filter_fxn()} id='ip3' />
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
            <input type={'checkbox'} style={{ marginRight: 10 }} onChange={() => filter_fxn()} id='ip4' />
            Loafers
        </div>
        <div className={styles.check} >
            <input type={'checkbox'} style={{ marginRight: 10 }} onChange={() => filter_fxn()} id='ip5' />
            Sneakers
        </div>
        <Button onClick={() => setShoes(data)}>
            Apply
        </Button>
    </Card>
}