import React, { Fragment, useEffect, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { Controller, useForm } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux'

import Select from 'react-select'

export default function EditHotels(props: any) {
  //===Redux===
  let { hotels, message, refresh } = useSelector(
    (state: any) => state.hotelsReducers
  )
  let { cityHotel } = useSelector((state: any) => state.cityHotelReducers)
  const dispatch = useDispatch()

  //===City===
  const [options, setOptions] = useState([])
  const [selectedOptions, setSelectedOptions] = useState('')
  const handleSelectChange = (selectedOptions: any) => {
    setSelectedOptions(selectedOptions)
  }
  //===Edit===
  const handleEdit = async (data: any) => {
    const formData = {
      hotel_name: data.hotel_name,
      hotel_phonenumber: data.hotel_phonenumber,
      addr_line1: data.addr_line1,
      addr_line2: data.addr_line2,
      hotel_description: data.hotel_description,
      city_name: data.city_name.value,
    }
    console.log(formData)

  }
  const [hotel, setHotels] = useState<any>([])

  //===Resgistration===
  type FormValues = {
    hotel_name: string
    hotel_phonenumber: string
    hotel_status: string
    city_name: string
    addr_line1: string
    addr_line2: string
    hotel_description: string
  }
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<FormValues>()

  const handleError = (errors: any) => {}

  const registerOptions = {
    hotel_name: { required: 'Name is required' },
    hotel_phonenumber: { required: 'Name is required' },
    hotel_status: { required: 'Name is required' },
    city_name: { required: 'Name is required' },
    addr_line1: { required: 'Name is required' },
    addr_line2: { required: 'Name is required' },
    hotel_description: { required: 'Name is required' },
  }

  useEffect(() => {
    setHotels(
      hotels.data.filter(
        (hotel: any) => hotel.hotel_id === props.isEdit.hotel_id
      )[0]
    )
  }, [refresh])

  useEffect(() => {
    dispatch(doRequestGetCity())
    const dataOptions = (cityHotel || []).map((data: any) => ({
      value: data.city_name,
      label: `${data.city_name}, ${data.provinces.prov_name} | ${data.provinces.country.country_name}`,
    }))
    setOptions(dataOptions)
  }, [dispatch, refresh])

  return (
    <div>
      <Transition appear show={true} as={Fragment}>
        <Dialog as='div' className='relative z-40' onClose={props.closeModal}>
          <Transition.Child
            as={Fragment}
            enter='ease-out duration-300'
            enterFrom='opacity-0'
            enterTo='opacity-100'
            leave='ease-in duration-200'
            leaveFrom='opacity-100'
            leaveTo='opacity-0'
          >
            <div className='fixed inset-0 bg-black bg-opacity-25' />
          </Transition.Child>

          <div className='fixed inset-0 overflow-y-auto'>
            <div className='flex min-h-full items-center justify-center p-4 text-center'>
              <Transition.Child
                as={Fragment}
                enter='ease-out duration-300'
                enterFrom='opacity-0 scale-95'
                enterTo='opacity-100 scale-100'
                leave='ease-in duration-200'
                leaveFrom='opacity-100 scale-100'
                leaveTo='opacity-0 scale-95'
              >
                <Dialog.Panel className='w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all'>
                  <Dialog.Title
                    as='h3'
                    className='text-lg font-medium leading-6 text-primary'
                  >
                    EDIT HOTELS
                  </Dialog.Title>
                  <hr className='border-b border-t border-black h-1 my-4' />

                  <div className='mt-2'>
                    <form onSubmit={handleSubmit(handleEdit, handleError)}>
                      <div className='relative z-0 w-full mb-6 group'>
                        <input
                          type='text'
                          className='block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer'
                          defaultValue={hotel?.hotel_name ?? ''}
                          {...register('hotel_name')}
                        />
                        <label className='peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'>
                          Hotel Name
                        </label>
                      </div>
                      <div className='relative z-0 w-full mb-6 group'>
                        <input
                          type='text'
                          className='block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer'
                          defaultValue={hotel?.hotel_phonenumber ?? ''}
                          value={hotel.hotel_phonenumber}
                          {...register('hotel_phonenumber')}
                        />
                        <label className='peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'>
                          Phone Number
                        </label>
                      </div>
                      <div className='flex items-center mb-6 group space-x-8'>
                        <label className='peer-focus:font-medium text-sm text-gray-500 dark:text-gray-400'>
                          City
                        </label>
                        <div className='w-full text-sm '>
                          <Controller
                            name='city_name'
                            control={control}
                            render={({
                              field: { onChange, onBlur, value },
                            }) => (
                              <Select
                                options={options}
                                onChange={(selectedOptions) =>
                                  onChange(selectedOptions)
                                }
                                value={value}
                                placeholder={
                                  (hotel.address?.city ?? '') &&
                                  (hotel.address.city?.city_name ?? '')
                                }
                                onBlur={onBlur}
                              />
                            )}
                          />
                        </div>
                      </div>
                      <div className='grid md:grid-cols-2 md:gap-6'>
                        <div className='relative z-0 w-full mb-6 group'>
                          <input
                            type='text'
                            className='block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer'
                            defaultValue={hotel.address?.addr_line1 ?? ''}
                            {...register('addr_line1')}
                          />
                          <label className='peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'>
                            Addres (Street)
                          </label>
                        </div>
                        <div className='relative z-0 w-full mb-6 group'>
                          <input
                            type='text'
                            className='block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer'
                            defaultValue={hotel.address?.addr_line2 ?? ''}
                            {...register('addr_line2')}
                          />
                          <label className='peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'>
                            Address (sub-district)
                          </label>
                        </div>
                      </div>
                      <div className='relative z-0 w-full mb-6 group'>
                        <input
                          type='text'
                          className='block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer'
                          defaultValue={hotel?.hotel_description ?? ''}
                          {...register('hotel_description')}
                        />
                        <label className='peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'>
                          Description
                        </label>
                      </div>
                      <div className=' flex-row space-x-4 mt-4'>
                        <button className='text-white bg-secondary  hover:bg-emerald-600 focus:ring-4 focus:outline-none focus:ring-emerald-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-emerald-600 dark:hover:bg-emerald-700 dark:focus:ring-emerald-800'>
                          Submit
                        </button>

                        <button
                          className='text-white bg-danger  hover:bg-pink-800 focus:ring-4 focus:outline-none focus:ring-pink-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-pink-600 dark:hover:bg-pink-700 dark:focus:ring-pink-800'
                          onClick={props.closeModal}
                        >
                          Cancel
                        </button>
                      </div>
                    </form>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </div>
  )
}