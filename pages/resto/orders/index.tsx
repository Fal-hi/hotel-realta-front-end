import Layout from "@/components/layout"
import React from "react"
import InvoiceResto from "./ordersResto"

const Resto = () => {


  return (
    <Layout>
     <main className="w-[85%] mx-auto font-poppins-regular">
      <div className="flex items-start mt-4">
        <InvoiceResto />
      </div>
    </main>
  </Layout>
  
  )
}

export default Resto