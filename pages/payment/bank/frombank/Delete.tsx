import Typography from "@/components/Typography";
import variants from "@/components/Typography/textcss";
import { Trash } from "@/components/icons";
import React from "react";


interface Iprops {
  data: string;
  handleDelete: (id: number) => void;
  id: number;
  handleClose: () => void;
}

export const ConfirmationDelete = (props: Iprops) => {
  return (
    <>
      <div className="flex bg-white  px-4 pt-5 pb-4 sm:p-6 sm:pb-4 border-b text-center items-center">
        <Trash width="50" height="50" stroke="#d78821"/>
        <Typography variant={variants.baseregular}>
          Are you sure you want to delete{" "}
          <a className="text-[#7743DB]">{props.data}</a>
        </Typography>
      </div>
      <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
        <button
          onClick={() => {
            props.handleDelete(props.id);
          }}
          className="inline-flex w-full justify-center rounded-md bg-[#d78821] px-7 py-2 text-white shadow-sm hover:bg-[#143694] sm:ml-3 sm:w-auto"
        >
          <Typography variant={variants.baseregular}>Delete</Typography>
        </button>
        <button
          onClick={props.handleClose}
          className="inline-flex w-full justify-center rounded-md border border-[#7743DB] px-4 py-2   shadow-sm hover:bg-[#143694] sm:ml-3 sm:w-auto"
        >
          <Typography variant={variants.baseregular}>Cancel</Typography>
        </button>
      </div>
    </>
  );
};
