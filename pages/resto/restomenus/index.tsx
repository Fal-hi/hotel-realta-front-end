import RestoMenusTampil from "./RestoTampil"
import Layout from "@/components/layout"
import React from "react"

const Resto = () => {


  return (
    <Layout>
     <main className="w-[85%] mx-auto font-poppins-regular">
      <div className="flex items-start mt-4">
        <RestoMenusTampil />
      </div>
    </main>
  </Layout>
  
  )
}

export default Resto
