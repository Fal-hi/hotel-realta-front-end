import React from "react";
import Typography from "../Typography";
import variants from "../Typography/textcss";
import { Plus } from "../icons";

type Props = {
  onClick?: any;
  className?: string;
};

const AddButton = ({ onClick, className }: Props) => {
  return (
    <button
      onClick={onClick}
      className={`flex items-center bg-[#7743DB] hover:bg-[#5f35ac] text-white py-2 px-4 rounded ${className}`}
    >
      <Plus width="18" />
      <Typography variant={variants.baseregular}>
        <p className="px-2">Add</p>
      </Typography>
    </button>
  );
};

export default AddButton;
