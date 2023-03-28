import React from "react";
import { Plus } from "../icons/Plus";
import Typography from "../Typography";
import variants from "../Typography/textcss";

type Props = {
  onClick?: any;
};

const AddButton = ({ onClick }: Props) => {
  return (
    <button
      onClick={onClick}
      className="flex items-center bg-[#7743DB] hover:bg-[#5f35ac] text-white py-2 px-4 rounded"
    >
      <Plus />
      <Typography variant={variants.baseregular}>
        <p className="px-2">Add</p>
      </Typography>
    </button>
  );
};

export default AddButton;
