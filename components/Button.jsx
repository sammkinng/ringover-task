import styles from '../styles/Store.module.css'

export default ({ children, onClick, style }) => {
    return <div className={styles.btn} style={style} onClick={() => onClick()}>
        {children}
    </div>
}