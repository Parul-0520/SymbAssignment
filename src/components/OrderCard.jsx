export default function OrderCard({ order }) {
  return (
    <div className="card">
      <h3>{order.restaurantName}</h3>
      <p>ID: {order.orderId}</p>
      <p>Items: {order.itemCount}</p>
      <p>Distance: {order.deliveryDistance} KM</p>
      <span className={order.isPaid ? "badge paid" : "badge unpaid"}>
        {order.isPaid ? "Paid" : "Unpaid"}
      </span>
    </div>
  )
}