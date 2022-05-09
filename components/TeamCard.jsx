import Card from './Card'
import styles from '../styles/Team.module.css'
import Image from 'next/image'

export default function TeamCard({ item }) {
    return <Card style={styles.card}>
        <Image
            src={item.dp}
            width={200}
            height={200}
            alt={'team-member'} />
        <br></br>
        <span className={styles.txt2}>
            {item.name}
        </span>
        <div style={{ textAlign: 'center' }}>
            {item.post}
        </div>
        <div className={styles.links}>
            {
                item.links.map((item1, index) => {
                    return (
                        <span style={{
                            width: 40,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center'
                        }} key={index}>
                            <a href={item1.link} >
                                <Image
                                    src={item1.logo}
                                    width={25}
                                    height={25}
                                    alt={'link'} />
                            </a>
                        </span>


                    )
                })
            }
        </div>

    </Card>
}