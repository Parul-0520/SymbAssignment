import { useState } from "react"

export default function ManagePage({ orders, assignDelivery, output }) {
  const [maxDistance, setMaxDistance] = useState("")
  const [statusFilter, setStatusFilter] = useState("All")

  const filtered = orders.filter(o => {
    if (statusFilter === "Paid" && !o.isPaid) return false
    if (statusFilter === "Unpaid" && o.isPaid) return false
    if (maxDistance && o.deliveryDistance > Number(maxDistance)) return false
    return true
  })

  return (
    <div className="page">
      <h1>Manage Orders</h1>

      <select
        value={statusFilter}
        onChange={e => setStatusFilter(e.target.value)}
      >
        <option value="All">All</option>
        <option value="Paid">Paid</option>
        <option value="Unpaid">Unpaid</option>
      </select>

      <input
        type="number"
        className="max-distance-input"
        placeholder="Max Distance (KM)"
        value={maxDistance}
        onChange={e => setMaxDistance(e.target.value)}
      />

      <button
        className="assignb"
        onClick={() => assignDelivery(maxDistance)}
      >
        Assign Delivery
      </button>

      <div className="output">{output}</div>

      <div className="grid">
        {filtered.map(order => (
          <div key={order.orderId} className="mini-card">
            {order.orderId} - {order.deliveryDistance} KM - {order.isPaid ? "Paid" : "Unpaid"}
          </div>
        ))}
      </div>
    </div>
  )
}