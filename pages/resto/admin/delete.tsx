import React from 'react'

interface Iprops {
    handleDelete: (id:number)=> void,
    id: number,
    onClose: () => void
}

export const Delete = (props: Iprops) => {
    const { handleDelete, id, onClose } = props;

  const handleNoClick = () => {
    onClose();
  }

  return (
    <div>
    <div className="text-center">
      <p>Anda yakin ingin menghapus data ini?</p>
      <button className="bg-red-500 text-white rounded px-4 py-2 mt-4 mr-2 mb-5" onClick={()=>props.handleDelete(props.id)}>Ya</button>
      <button className="bg-gray-500 text-white rounded px-4 py-2 mt-4" onClick={handleNoClick} >Tidak</button>
    </div>
    </div>
  )
}
