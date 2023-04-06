const formatRupiah = (value: number): string => {
  const formatter = new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
  })
  if (!value || isNaN(value)) {
    return formatter.format(0)
  }
  return formatter.format(value)
}

export default formatRupiah
