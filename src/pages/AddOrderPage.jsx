import symbimg from "../assets/symbimg.jpg"
import { useState } from "react"

function AddOrderPage({ addOrder }) {
  const [orderId, setOrderId] = useState("")
  const [restaurantName, setRestaurantName] = useState("")
  const [itemCount, setItemCount] = useState("")
  const [deliveryDistance, setDeliveryDistance] = useState("")
  const [isPaid, setIsPaid] = useState(false)
  const [successMessage, setSuccessMessage] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()

    if (!orderId || !restaurantName || !itemCount || !deliveryDistance) return

    const newOrder = {
      orderId,
      restaurantName,
      itemCount: Number(itemCount),
      deliveryDistance: Number(deliveryDistance),
      isPaid
    }

    addOrder(newOrder)

    setSuccessMessage("Your order has been added. Check it on 'My Orders'.")

    setOrderId("")
    setRestaurantName("")
    setItemCount("")
    setDeliveryDistance("")
    setIsPaid(false)
    setTimeout(() => {
      setSuccessMessage("")
    }, 3000)
  }

  return (
    <div className="page">
      <h1>Add Order</h1>

      <form className="form" onSubmit={handleSubmit}>
        <input
          placeholder="Order ID"
          value={orderId}
          onChange={e => setOrderId(e.target.value)}
        />

        <input
          placeholder="Restaurant Name"
          value={restaurantName}
          onChange={e => setRestaurantName(e.target.value)}
        />

        <input
          type="number"
          placeholder="Item Count"
          value={itemCount}
          onChange={e => setItemCount(e.target.value)}
        />

        <input
          type="number"
          placeholder="Delivery Distance (KM)"
          value={deliveryDistance}
          onChange={e => setDeliveryDistance(e.target.value)}
        />

        <div className="checkbox-wrapper">
          <label className="checkbox-row">
            <input
              type="checkbox"
              checked={isPaid}
              onChange={e => setIsPaid(e.target.checked)}
            />
            <span>Paid</span>
          </label>
        </div>

        <button type="submit">Add Order</button>

        {successMessage && (
          <p className="success-text">{successMessage}</p>
        )}
      </form>
    </div>
  )
}

export default AddOrderPage