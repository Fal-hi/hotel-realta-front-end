import { updateRestoMenu } from '@/redux/RESTO/action/actionadmin';
import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { Switch } from "@headlessui/react";


export default function EditRestoMenu(props:any) {
    type FormValues = {
        reme_name: string;
        reme_description: string;
        reme_price: number;
        reme_status: string;
      };
      
      const { register, handleSubmit, formState: { errors } } = useForm<FormValues>();
      const { adminresto } = useSelector((state: any) => state.adminRestoReducers)
      const [resto, setResto] = useState({});
      const [data, setData] = useState<any>(props.isEdit.data);
      const [status, setStatus] = useState(data.reme_status === 'available');
    

      const dispatch = useDispatch();
    
      const handleStatusChange = () => {
        setStatus(!status);
      };
      
      
    const handleError = (errors:any)=>{};
    const handleEdit = async (data: any) => {
      try {
        const dataAll = {
          reme_name: data.reme_name,
          reme_description: data.reme_description,
          reme_price: data.reme_price,
          reme_status: data.reme_status = status ? 'available' : 'empty',
        };
       dispatch(updateRestoMenu({ id: props.isEdit.id, dataAll }));
        props.closeModal();
     
      } catch (error) {
        console.log("Error updating restaurant menu", error);
      }
    };
    
  
      const registerOptions = {
            reme_name: { required: "name is required" },
            reme_description: { required: "desciption is required" },
            reme_price: { required: "Price is required"},
            reme_status: { required: "Status is required"}
          };

          useEffect(() => {
            setResto(adminresto)
          }, [adminresto]) 
    
  return (
    <div className='px-5 '>
    <form
        onSubmit={handleSubmit(handleEdit, handleError)}
      >

        <div className="border rounded-md p-3 flex items-center">
          <label className="mr-4">Menu Name</label>
          <input defaultValue={data?.reme_name} className="border rounded-md p-3 ml-3"
            type="text"
            
            {...register("reme_name", registerOptions.reme_name)}
          />
          <small className="text-danger">
            {errors?.reme_name && errors.reme_name.message}
          </small>
        </div>
        <div className="border rounded-md p-3 flex items-center">
          <label className="mr-4">Description</label>
          <input defaultValue={data?.reme_description} className="border rounded-md p-3 ml-4"
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
        <input defaultValue={data?.reme_price} className="border rounded-md p-3 ml-16"
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

 