import OrderCard from "../components/OrderCard"

export default function OrdersPage({ orders }) {
  return (
    <div className="page">
      <h1>All Orders</h1>
      {orders.length === 0 && <p className="empty">No orders available</p>}
      <div className="grid">
        {orders.map((order, index) => (
          <OrderCard key={index} order={order} />
        ))}
      </div>
    </div>
  )
}