import React from "react"
import PropTypes from "prop-types"

const Table = ({ cols, data, children }: any) => {
  return (
    <>
      <section className="container overflow-x-auto">
        <div className="flex flex-col">
          <div className="">
            <div className="inline-block min-w-full py-2 align-middle ">
              <div className=" border border-gray-200 dark:border-gray-700 md:rounded-lg shadow">
                <table className="w-full min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                  <thead className="bg-gray-50 dark:bg-gray-800">
                    <tr>
                      {(cols || []).map((headerItem: any, index: any) => (
                        <th
                          key={index}
                          scope="col"
                          className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400 whitespace-nowrap"
                        >
                          {headerItem.title}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className=" divide-gray-200 divide-y dark:divide-gray-700 dark:bg-gray-900">
                    {(data || []).map((item: any, index: any) => (
                      <tr key={index} className="hover:bg-gray-50">
                        {cols.map((col: any, key: any) => (
                          <td
                            key={key}
                            className="px-4 py-4 text-sm font-medium text-gray-700 dark:text-gray-200 whitespace-nowrap"
                          >
                            {col.render(item)}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
                <div className="px-5 py-3 text-gray-700 dark:text-gray-200 whitespace-nowrap border-t flex flex-col xs:flex-row items-center xs:justify-between ">
                  <div className="inline-flex mt-2 xs:mt-0">{children}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

Table.propTypes = {
  cols: PropTypes.array.isRequired,
  data: PropTypes.array.isRequired,
  children: PropTypes.any,
}
export default Table
