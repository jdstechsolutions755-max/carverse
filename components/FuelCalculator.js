"use client"
import { useState } from "react"

export default function FuelCalculator({ range, efficiency }) {
  const [fuelPrice, setFuelPrice] = useState(1.5)
  const [distance, setDistance] = useState(1000)

  const fuelNeeded = distance / efficiency
  const totalCost = fuelNeeded * fuelPrice

  return (
    <div className="p-4 bg-white/5 rounded mt-6 text-white max-w-md mx-auto">
      <h2 className="text-xl font-bold mb-2">Fuel / EV Cost Calculator</h2>

      <label className="block mb-1">Fuel Price ($/liter)</label>
      <input
        type="number"
        value={fuelPrice}
        onChange={(e) => setFuelPrice(parseFloat(e.target.value))}
        className="p-2 rounded w-full text-black mb-3"
      />

      <label className="block mb-1">Distance (km)</label>
      <input
        type="number"
        value={distance}
        onChange={(e) => setDistance(parseFloat(e.target.value))}
        className="p-2 rounded w-full text-black mb-3"
      />

      <p className="mt-2 text-gray-300">
        Estimated Fuel Needed: {fuelNeeded.toFixed(2)} liters
      </p>
      <p className="mt-1 text-gray-300">
        Total Cost: ${totalCost.toFixed(2)}
      </p>
    </div>
  )
          }
