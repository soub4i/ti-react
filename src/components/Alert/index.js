export default function Alert({ message, type }) {
  return (
    <>{message ? <div className={`alert alert-${type}`}>{message}</div> : null}</>
  )
}
