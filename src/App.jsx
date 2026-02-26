import { useState } from "react"
import { Routes, Route } from "react-router-dom"
import Navbar from "./layout/Navbar"
import AddOrderPage from "./pages/AddOrderPage"
import OrdersPage from "./pages/OrdersPage"
import ManagePage from "./pages/ManagePage"

export default function App() {
  const [orders, setOrders] = useState([])
  const [output, setOutput] = useState("")

  const addOrder = (order) => {
    setOrders(prev => [...prev, order])  
  }

  const assignDelivery = (maxDistance) => {
    const distanceLimit = maxDistance ? Number(maxDistance) : Infinity

    const eligible = orders
      .filter(o => !o.isPaid && o.deliveryDistance <= distanceLimit)
      .sort((a, b) => a.deliveryDistance - b.deliveryDistance)

    if (eligible.length === 0) {
      setOutput("No order available")
      return
    }

    const assignedId = eligible[0].orderId

    setOrders(
      orders.map(o =>
        o.orderId === assignedId ? { ...o, isPaid: true } : o
      )
    )

    setOutput("Assigned Order ID: " + assignedId)
  }

  return (
    <div className="app">
      <Navbar />
      <Routes>
        <Route path="/" element={<AddOrderPage addOrder={addOrder} />} />
        <Route path="/orders" element={<OrdersPage orders={orders} />} />
        <Route path="/manage" element={<ManagePage orders={orders} assignDelivery={assignDelivery} output={output} />} />
      </Routes>
    </div>
  )
}