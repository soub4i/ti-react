export default function Container({ children }) {
  return (
    <div className="container">
      <div className="col-lg-6 offset-lg-3 ">{children}</div>
    </div>
  )
}
