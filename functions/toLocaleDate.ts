export const TolocaleDate = (data: string) => {
  const isoDate = data
  const dateObj = new Date(isoDate)
  const options: any = {
    day: "numeric",
    month: "long",
    year: "numeric",
  }
  return dateObj.toLocaleString("en-US", options)
}
