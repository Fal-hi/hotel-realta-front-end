import React, { useState, Fragment } from 'react';
import { useDispatch } from 'react-redux';
import { addRestoMenu } from '@/redux/RESTO/action/actionadmin';
import { useForm } from 'react-hook-form';
import { Switch } from "@headlessui/react";

export default function AddRestoMenu(props: any) {
  type FormValues = {
    reme_name: string;
    reme_description: string;
    reme_price: number;
    reme_status: string;
  };
  const { register, handleSubmit, formState: { errors } } = useForm<FormValues>();
  const dispatch = useDispatch();
  const [status, setStatus] = useState(false);

  const handleStatusChange = () => {
    setStatus(!status);
  };
  
  const handleError = (errors:any)=>{};
  const handleSave = async (data: FormValues) => {
     
    try {
      const dataAll = {
        reme_name: data.reme_name,
        reme_description: data.reme_description,
        reme_price: data.reme_price,
        reme_status: data.reme_status = status ? 'available' : 'empty',
      }
      await dispatch(addRestoMenu(dataAll));
      props.setIsOpen(false)
    } catch (error) {
      console.error(error);
    }
  };
  const registerOptions = {
        reme_name: { required: "name is required" },
        reme_description: { required: "desciption is required" },
        reme_price: { required: "Price is required"},
        reme_status: { required: "Status is required"}
      };
    

  return (
  <div className='px-5 '>
        <form
            onSubmit={handleSubmit(handleSave, handleError)}
          >
            <div className="border rounded-md p-3 flex items-center">
              <label className="mr-4">Menu Name</label>
              <input className="border rounded-md p-3 ml-3"
                
                type="text"
                {...register("reme_name", registerOptions.reme_name)}
              />
              <small className="text-danger">
                {errors?.reme_name && errors.reme_name.message}
              </small>
            </div>
            <div className="border rounded-md p-3 flex items-center">
              <label className="mr-4">Description</label>
              <input className="border rounded-md p-3 ml-4"
                type="text"
                style={{ width: '400px' }}
                {...register("reme_description", registerOptions.reme_description)}
              />
              <small className="text-danger">
                {errors?.reme_description && errors.reme_description.message}
              </small>
            </div>
           <div className="border rounded-md p-3 flex items-center">
            <label className="mr-4">Price</label>
            <input className="border rounded-md p-3 ml-16"
                type="text"
                {...register("reme_price", registerOptions.reme_price)}
            />
            <small className="text-danger">
                {errors?.reme_price && errors.reme_price.message}
            </small>
            </div>
            <div className="border rounded-md p-3 flex items-center">
            <label className="mr-4">Status</label>
            <Switch
            checked={status}
            onChange={handleStatusChange}
            className={`${status ? 'bg-teal-500' : 'bg-red-700'}
              ml-10  relative inline-flex h-[38px] w-[74px] shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2  focus-visible:ring-white focus-visible:ring-opacity-75`}
            >
            <span className="sr-only">Use setting</span>
            <span
                aria-hidden="true"
                className={`${status ?  'translate-x-9' : 'translate-x-0'}
                pointer-events-none inline-block h-[34px] w-[34px] transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out`}
            />
            </Switch>
             <div className="flex items-center ml-2">
                <p className={status ? 'text-green-500' : 'text-red-500'}>
                    {status ? 'Available' : 'Empty'}
                </p>
            </div>
            </div>

            <div className="flex justify-end items-center mt-4 p-5">
              <button type='submit' className="flex items-center bg-[#7743DB] hover:bg-[#5f35ac] text-white py-2 px-4 rounded">
                Save
              </button>

              <button
                className="flex items-center bg-[#7743DB] hover:bg-[#5f35ac] text-white py-2 px-4 rounded mr-50 ml-10"
                onClick={props.onClose}
              >
                Cancel
              </button>
            </div>
          </form>
          </div>

)
}

    
    
    
    
    
    
    





  
  
  