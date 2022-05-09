import styles from '../styles/Home.module.css'
import Image from 'next/image'
import Link from 'next/link'

const data = [
    {
        link: '/',
        name: 'Home'
    },
    {
        link: '/journey',
        name: 'The Journey'
    },
    {
        link: '/team',
        name: 'Team'
    },
    {
        link: '/store',
        name: 'Store'
    },
    {
        link: '/contact',
        name: 'Contact'
    },
]

export default function Topnavbar({ index1 }) {
    return <div className={styles.nav}>
        <Image
            src="/assets/websitelogo.png"
            alt="websitelogo"
            width={50}
            height={50}
        />
        <div className={styles.navbar}>
            {data.map((item, index) => {
                return (
                    <span className={styles.navlink} key={index}>
                        <div>
                            <Link href={item.link}>{item.name}</Link>

                        </div>

                        {
                            index1 === index &&

                            <span className={styles.dash + ` dash${index + 1}`}></span>}
                    </span>
                )
            })}
        </div>
        <span className={styles.login}>
            <i className='material-icons'>person</i>
            GAGAN
        </span>
    </div>
}