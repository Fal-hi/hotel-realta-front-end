import { Hotel } from "@/components/icons"

const EmptyData = () => {
  return (
    <section className="text-center mt-40">
      <div>
        <Hotel width="1000" height="200" stroke="#7743DB" />
        <h1 className="text-textPurple font-extrabold text-3xl">
          Hotel Tidak Ditemukan
        </h1>
      </div>
    </section>
  )
}

export default EmptyData
