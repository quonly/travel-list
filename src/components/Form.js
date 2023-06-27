import { useState } from "react";

export default function Form({ onAddItems }) {
  /**
   * Controll Element
   * 1. Create a piece of state.
   * 2. use that state as a value of the input field.
   * 3. listen for the change event.
   * !! e.target.value is always a string.
   */

  const [description, setDescription] = useState("")
  const [quantity, setQuantity] = useState(1)

  function handlerSubmit(e) {
    e.preventDefault()

    if (!description) return

    const newItem = { description, quantity, packed: false, id: Date.now() }
    console.log(newItem)

    onAddItems(newItem)

    setDescription("")
    setQuantity(1)
  }

  return (
    <form className="add-form" onSubmit={handlerSubmit}>
      <h3>What do you need for your 😍 trip?</h3>
      <select value={quantity} onChange={e => setQuantity(+e.target.value)}>
        {Array.from({ length: 20 }, (_, i) => i + 1).map(num => (
          <option value={num} key={num}>
            {num}
          </option>
        ))}
      </select>
      <input
        type="text"
        placeholder="Item..."
        value={description}
        onChange={e => setDescription(e.target.value)}
      />
      <button>Add</button>
    </form>
  )
}