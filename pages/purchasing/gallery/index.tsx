import React, { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import Image from "next/image"
import { doReqGetPhotos } from "@/redux/PURCHASING/action/actionPohe"
import { SearchInput } from "@/components/searchInput"
import Breadcumb from "@/components/breadcumb"
import { Pagination } from "@/components/pagination"
import BgButton from "@/components/buttons/BgButton"

export default function Gallery() {
  const { gallery, message, refresh } = useSelector(
    (state: any) => state.galleryReducers
    )
    
    const dispatch = useDispatch()
    const [search, setSearch] = useState("")
    const [page, setPage] = useState(1)
    const [entry, setEntry] = useState(2)
  console.log(gallery?.data)

  useEffect(() => {
    dispatch(doReqGetPhotos(search, page, entry))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [refresh, search, page, entry])

  const handleSearchChange = (e: any): void => {
    setSearch(e.target.value)
  }

  return (
    <div>
      <Breadcumb
        child="Gallery"
        parent="Dashboard"
        detail="Gallery"
      ></Breadcumb>
      <div className="flex items-center">
        <div className="flex flex-row w-full justify-between py-4 mb-4">
          <div>
            <SearchInput onChange={handleSearchChange} />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
        {(gallery?.data?.data || []).map((photo: any) => (
          <a key={photo.stock.stock_id} href={photo.href} className="group">
            <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-w-7 xl:aspect-h-8">
              <Image
                src={`http://localhost:5000${photo.spho_url}`}
                alt={`http://localhost:5000${photo.spho_url}`}
                className="img-container group-hover:opacity-75"
                width={500}
                height={500}
              />
            </div>
            <p className="mt-1 text-lg font-medium text-gray-900">{`${photo.stock.stock_name}`}</p>
            <h3 className="my-1 text-sm text-gray-700">
              {photo.stock.vendor_product.vendor.vendor_name}
            </h3>
            <h3 className="my-1 text-sm text-gray-700">
              {`Stocked: ${photo.stock.vendor_product.vepro_qty_stocked}`}
            </h3>
            <h3 className="my-1 text-sm text-gray-700">
              {`Reorder: ${photo.stock.stock_reorder_point}`}
            </h3>
            <p className="mt-1 text-lg font-medium text-gray-900">
              <span>{Intl.NumberFormat('id-ID', {style: 'currency', currency: 'IDR'}).format(photo.stock.vendor_product.vepro_price)}</span>
              </p>

            <div style={{ marginTop: "1rem" }}>
              <BgButton
                title="Add To Cart"
                // onClick={() => {
                //   router.push("/purchasing/stock")
                // }}
              />
            </div>
            {/*                 
                <div className='flex-row space-x-4 mt-4 text-right'>
                  <button className="inline-flex justify-center rounded-md border-transparent bg-blue-100 px-4 py-2 text-sm font-medium
                        text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible::ring-blue-500 focus-visible:ring-offset-2"
                    onClick={() => editOpen(product.prod_id)}>
                    Edit</button>
                  <button className="inline-flex justify-center rounded-md border-transparent bg-red-100 px-4 py-2 text-sm font-medium
                        text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible::ring-blue-500 focus-visible:ring-offset-2"
                    onClick={() => deleteOpen(product.prod_id)}>
                    Delete</button>
                </div> */}
          </a>
        ))}
      </div>
      <div style={{ marginTop: "1rem" }}></div>
      <Pagination
        pagination={{
          totalPage: gallery?.data?.totalPage,
          page: gallery?.data?.currentPage,
        }}
        setPage={setPage}
      />
    </div>
  )
}
