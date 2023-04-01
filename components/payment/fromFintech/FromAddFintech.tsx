import { createDataBank, updateDataBank } from "@/redux/PAYMENT/action/bank";
import { createDataFintech } from "@/redux/PAYMENT/action/fintech";
import React from "react";
import { useForm, FieldErrors, Resolver } from "react-hook-form";

import { useDispatch, useSelector } from "react-redux";

type FormValues = {
    paga_code: string;
    paga_name: string;
};
const resolver: Resolver<FormValues> = async (values) => {
  const { paga_code, paga_name } = values;
  const errors: FieldErrors<FormValues> = {};

  if (!paga_code) {
    errors.paga_code = {
      type: "required",
      message: "This is required.",
    };
  }else if(!paga_name){
    errors.paga_name = {
        type: "required",
        message: "This is required.",
      };
  }

  return { values: {paga_code,paga_name} ? values : {}, errors };
};

export const FromAddFintech = (props: any) => {
  const dispatch = useDispatch();

  const handleFrom = (data: any) => {
    if (props.id) {
      const payload = {
        id: props.id,
        data,
      };
      dispatch(updateDataBank(payload));
      props.setIsOpen({ isShow: false });
    } else {
      dispatch(createDataFintech(data));
      props.setIsOpen({ isShow: false });
    }
  };
  const handleError = (errors: any) => {};

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({ resolver });
  return (
    <form onSubmit={handleSubmit(handleFrom, handleError)}>
      <div className="bg-white   pt-5 pb-4 sm:p-6 sm:pb-4 border-b">
        <div className="w-full mb-3">Fintech Code</div>
        <input
          type="text"
          className="border rounded-md p-1.5 block w-full mb-3 bg-[#F9FAFB] focus:border-[#DADADA] focus:outline-none"
          defaultValue={props.paga_code}
          {...register("paga_code")}
        />
        {errors?.paga_code && <p>{errors.paga_code.message}</p>}
      </div>

      <div className="bg-white   pt-5 pb-4 sm:p-6 sm:pb-4">
        <div className="w-full mb-3">Fintech Name</div>
        <input
          type="text"
          className="border rounded-md p-1.5 block w-full mb-3 bg-[#F9FAFB] focus:border-[#DADADA] focus:outline-none"
          defaultValue={props.fintech}
          {...register("paga_name")}
        />
        {errors?.paga_code && <p>{errors.paga_code.message}</p>}
      </div>

      <div className="bg-gray-50  py-3 sm:flex sm:flex-row-reverse sm:px-6">
        <button
          type="submit"
          className="inline-flex w-full justify-center rounded-md bg-[#1D4ED8] px-3 py-2   text-white shadow-sm hover:bg-[#143694] sm:ml-3 sm:w-auto"
        >
          Save
        </button>
      </div>
    </form>
  );
};
