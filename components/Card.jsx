export default function Card({ children, style }) {
    return <div className={`card ${style}`}>
        {children}
    </div>
}