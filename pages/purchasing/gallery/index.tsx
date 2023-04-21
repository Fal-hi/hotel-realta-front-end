import GalleryTampil from "./tampil"
import Layout from "@/components/layout"

const Gallery = () => {
  return (
    <Layout>
     <main className="w-[85%] mx-auto font-poppins-regular">
      {/* <SearchResto /> */}
      <div className="flex items-start mt-4">
        <GalleryTampil />
      </div>
    </main>
  </Layout>
  
  )
}

export default Gallery
