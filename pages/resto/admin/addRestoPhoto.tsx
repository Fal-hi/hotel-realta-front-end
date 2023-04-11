////////////////////////////// UPLOAD IMAGE BIASA /////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////

// import { addRestoMenuPhoto } from '@/redux/RESTO/action/actionrestomenu';
// import React, { useState } from 'react'
// import { useForm } from 'react-hook-form';
// import { useDispatch } from 'react-redux';

// export default function AddRestoPhoto(props:any) {
//     type FormValues ={
//         remp_thumbnail_filename: string;
//         remp_photo_filename: FileList[];
//         remp_primary: string;
//         remp_reme_id: number;
//       }
      
//       const { register, handleSubmit, formState:{errors} } = useForm<FormValues>();
//       const dispatch = useDispatch();
//       const [files, setFiles] = useState<File[]>([]);
      
      
//       const handleError = (errors: any) => {};
      
//       const handleRegistration = async (data: any) => {
//         const formData = new FormData();
//         formData.append('remp_thumbnail_filename', data.remp_thumbnail_filename);
//         formData.append('remp_primary', data.remp_primary);
//         formData.append('remp_reme_id', data.remp_reme_id);
//         if (data.remp_photo_filename && data.remp_photo_filename.length > 0) {
//           for (let i = 0; i < data.remp_photo_filename.length; i++) {
//             formData.append('remp_photo_filename', data.remp_photo_filename[i]);
//           }
//         }
      
//         dispatch(addRestoMenuPhoto(formData));
//         props.closeModal();
//       };
      
//       const registerOptions = {
//         remp_thumbnail_filename: { required: 'name is required' },
//         remp_photo_filename: { required: 'photo is required' },
//         remp_primary: { required: 'Price is required' },
//         remp_reme_id: { required: 'Status is required' },
//       };

     
//   return (
//     <div>
//        <div className='px-5 '>
//         <form
//             onSubmit={handleSubmit(handleRegistration, handleError)}
//           >
//             <div className="border rounded-md p-3 flex items-center">
//               <label className="mr-4">Photo Name</label>
//               <input className="border rounded-md p-3 ml-3"
                
//                 type="text"
//                 {...register("remp_thumbnail_filename", registerOptions.remp_thumbnail_filename)}
//               />
//               <small className="text-danger">
//                 {errors?.remp_thumbnail_filename && errors.remp_thumbnail_filename.message}
//               </small>
//             </div>
            
//            <div className="border rounded-md p-3 flex items-center">
//             <label className="mr-4">Primary</label>
//             <input className="border rounded-md p-3 ml-16"
//                 type="text"
//                 {...register("remp_primary", registerOptions.remp_primary)}
//             />
//             <small className="text-danger">
//                 {errors?.remp_primary && errors.remp_primary.message}
//             </small>
//             </div>



//            <div className="border rounded-md p-3 flex items-center">
//             <label className="mr-4"> Remp Reme ID</label>
//             <input  className="border rounded-md p-3 ml-16"
//                 type="text"
//                 value={props.dataId.id}
                
//                 {...register("remp_reme_id", registerOptions.remp_reme_id)}
//             />
//             <small className="text-danger">
//                 {errors?.remp_reme_id && errors.remp_reme_id.message}
//             </small>
//             </div>
//             <div className="border rounded-md p-3 flex items-center">
//               <label className="mr-4">Upload File</label>
//               <input
//                 type='file'
//                 multiple
//                 id="remp_photo_filename"
//                 {...register('remp_photo_filename', registerOptions.remp_photo_filename)}
//                 />
//               <small className="text-danger">
//                 {errors?. remp_photo_filename && errors. remp_photo_filename.message}
//               </small>
//             </div>
           
//             <div className="flex justify-end items-center mt-4 p-5">
//               <button type='submit' className="flex items-center bg-[#7743DB] hover:bg-[#5f35ac] text-white py-2 px-4 rounded">
//                 Save
//               </button>

//               <button
//                 className="flex items-center bg-[#7743DB] hover:bg-[#5f35ac] text-white py-2 px-4 rounded mr-50 ml-10"
//                 onClick={props.onClose}
//               >
//                 Cancel
//               </button>
//             </div>
//           </form>
//           </div>


//     </div>
//   )
// }






////////////////////////////// UPLOAD IMAGE DENGAN PRIVIEW /////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////

import { addRestoMenuPhoto } from '@/redux/RESTO/action/actionrestomenu';
import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';

export default function AddRestoPhoto(props:any) {
    type FormValues ={
        remp_thumbnail_filename: string;
        remp_photo_filename: FileList[];
        remp_primary: string;
        remp_reme_id: number;
      }
      
      const { register, handleSubmit, formState:{errors} } = useForm<FormValues>();
      const dispatch = useDispatch();
      const [files, setFiles] = useState<File[]>([]);
      const [previewUrls, setPreviewUrls] = useState<string[]>([]);
    
      const handleFileInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const fileList = event.target.files;
        if (fileList) {
          const filesArray = Array.from(fileList);
          setFiles([...files, ...filesArray]);
          const previewUrlsArray = filesArray.map((file) => URL.createObjectURL(file));
          setPreviewUrls([...previewUrls, ...previewUrlsArray]);
        }
      };
    
    
      const handleDeleteButtonClick = (index: number) => {
        const newFiles = [...files];
        newFiles.splice(index, 1);
        setFiles(newFiles);
        const newPreviewUrls = [...previewUrls];
        newPreviewUrls.splice(index, 1);
        setPreviewUrls(newPreviewUrls);
      };



      
      const handleError = (errors: any) => {};
      
      const handleRegistration = async (data: any) => {
        console.log('ngeteas=>',data);
        
        const formData = new FormData();
        formData.append('remp_thumbnail_filename', data.remp_thumbnail_filename);
        formData.append('remp_primary', data.remp_primary);
        formData.append('remp_reme_id', data.remp_reme_id);
        if (data.remp_photo_filename && data.remp_photo_filename.length > 0) {
          for (let i = 0; i < data.remp_photo_filename.length; i++) {
            formData.append('remp_photo_filename', data.remp_photo_filename[i]);
          }
        }
    //   console.log('masa gabisa sih',formData)
        dispatch(addRestoMenuPhoto(formData));
        props.closeModal();
      };
      
      const registerOptions = {
        remp_thumbnail_filename: { required: 'name is required' },
        remp_photo_filename: { required: 'photo is required' },
        remp_primary: { required: 'Price is required' },
        
      };

     
  return (
    <div>
       <div className='px-5 '>
        <form
            onSubmit={handleSubmit(handleRegistration, handleError)}
          >
            <div className="border rounded-md p-3 flex items-center">
              <label className="mr-4">Photo Name</label>
              <input className="border rounded-md p-3 ml-3"
                
                type="text"
                {...register("remp_thumbnail_filename", registerOptions.remp_thumbnail_filename)}
              />
              <small className="text-danger">
                {errors?.remp_thumbnail_filename && errors.remp_thumbnail_filename.message}
              </small>
            </div>
            
           <div className="border rounded-md p-3 flex items-center">
            <label className="mr-4">Primary</label>
            <input className="border rounded-md p-3 ml-16"
                type="text"
                {...register("remp_primary", registerOptions.remp_primary)}
            />
            <small className="text-danger">
                {errors?.remp_primary && errors.remp_primary.message}
            </small>
            </div>


           <div className="border rounded-md p-3 flex items-center">
            <label className="mr-4"> Remp Reme ID</label>
            <input  className="border rounded-md p-3 ml-16"
                type="text"
                value={props.dataId.id}
                
                {...register("remp_reme_id")}
            />
            <small className="text-danger">
                {errors?.remp_reme_id && errors.remp_reme_id.message}
            </small>
            </div>


           
          <div className="border rounded-md p-3 flex items-center mt-4">
            <label className="mr-4">Upload File</label>
            <input
              type="file"
              multiple
              accept="image/*"
              className="py-2 px-1"
              {...register("remp_photo_filename")}
              onChange={handleFileInputChange}
             
            />
          </div>

          {/* <div className="flex flex-wrap mt-4">
            {previewUrls.map((url, index) => (
              <div key={index} className="flex items-center m-2">
                <img
                  src={url}
                  alt={`Preview ${index}`}
                  style={{ width: '80px', height: '80px' }}
                />
                <button
                  className="flex items-center bg-red-600 hover:bg-red-800 text-white py-1 px-2 rounded ml-4"
                  onClick={() => handleDeleteButtonClick(index)}
                >
                  Delete
                </button>
              </div>
            ))}
            </div> */}
            <div className="flex flex-wrap mt-4">
                {previewUrls.map((url, index) => (
                    <div key={index} className="flex flex-col items-center m-2">
                    <img
                        src={url}
                        alt={`Preview ${index}`}
                        style={{ width: '120px', height: '120px' }}
                    />
                    <button
                        className="flex items-center bg-red-600 hover:bg-red-800 text-white py-1 px-2 rounded mt-2"
                        onClick={() => handleDeleteButtonClick(index)}
                    >
                        Delete
                    </button>
                    </div>
                ))}
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


    </div>
  )
}
