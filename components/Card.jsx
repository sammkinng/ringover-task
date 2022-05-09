export default ({ children, style }) => {
    return <div className={`card ${style}`}>
        {children}
    </div>
}