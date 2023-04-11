import CardBooking from "@/pages/booking/cards"
import RestoMenusTampil from "./RestoTampil"
import SearchResto from "@/components/searchresto"
import Layout from "@/components/layout"

const Resto = () => {
  return (
    <Layout>
     <main className="w-[85%] mx-auto font-poppins-regular">
      <SearchResto />
      <div className="flex items-start mt-4">
        <RestoMenusTampil />
      </div>
    </main>
  </Layout>
  
  )
}

export default Resto
