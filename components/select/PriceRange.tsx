import { useState, FC, ChangeEvent, Fragment } from "react"

interface Props {
  onChange: (minPrice: number, maxPrice: number) => void
}

const PriceRange: FC<Props> = ({ onChange }) => {
  const minimumPrice = [
    {
      id: 1,
      price: 350000,
    },
    {
      id: 2,
      price: 450000,
    },
    {
      id: 3,
      price: 500000,
    },
    {
      id: 4,
      price: 750000,
    },
    {
      id: 5,
      price: 850000,
    },
  ]

  const maximumPrice = [
    {
      id: 1,
      price: 1000000,
    },
    {
      id: 2,
      price: 1200000,
    },
    {
      id: 3,
      price: 1500000,
    },
    {
      id: 4,
      price: 1750000,
    },
    {
      id: 5,
      price: 2000000,
    },
  ]
  const [minPrice, setMinPrice] = useState(350000)
  const [maxPrice, setMaxPrice] = useState(1000000)

  const handleMinPriceChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const value = parseInt(event.target.value)
    if (value >= maxPrice) return
    setMinPrice(value)
    onChange(value, maxPrice)
  }

  const handleMaxPriceChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const value = parseInt(event.target.value)
    if (value <= minPrice) return
    setMaxPrice(value)
    onChange(minPrice, value)
  }

  return (
    <div className="flex gap-2 items-center text-xs font-semibold">
      <select
        className="p-1 border-2 border-[#8A92A6] rounded-md outline-none"
        id="min-price"
        name="min-price"
        value={minPrice}
        onChange={handleMinPriceChange}
      >
        {minimumPrice.map((min: any) => (
          <Fragment key={min.id}>
            <option
              value={min.price}
              className="p-1 border-2 border-[#8A92A6] rounded-md  outline-none"
            >
              {new Intl.NumberFormat("id-ID", {
                style: "currency",
                currency: "IDR",
              }).format(min.price)}
            </option>
          </Fragment>
        ))}
      </select>
      <h3 className="text-[#1C2434]">to</h3>
      <select
        className="p-1 border-2 border-[#8A92A6] rounded-md outline-none"
        id="max-price"
        name="max-price"
        value={maxPrice}
        onChange={handleMaxPriceChange}
      >
        {maximumPrice.map((max: any) => (
          <Fragment key={max.id}>
            <option value={max.price}>
              {new Intl.NumberFormat("id-ID", {
                style: "currency",
                currency: "IDR",
              }).format(max.price)}
            </option>
          </Fragment>
        ))}
      </select>
    </div>
  )
}

export default PriceRange
