import { createDataBank, updateDataBank } from "@/redux/PAYMENT/action/bank";
import { createDataFintech, updateDataFintech } from "@/redux/PAYMENT/action/fintech";
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
      dispatch(updateDataFintech(payload));
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
    <div className="max-w-md mx-auto">
    <form onSubmit={handleSubmit(handleFrom, handleError)}>
       <div className="mb-4">
        <div className="w-full mb-3">Fintech Code</div>
        <input
          type="text"
          className="w-full px-4 py-2 border border-[#DADADA] rounded-md focus:border-indigo-500 focus:outline-none focus:shadow-outline-indigo"
          placeholder="Masukkan Kode Fintech"
          defaultValue={props.code}
          {...register("paga_code")}
        />
        {errors?.paga_code && <p>{errors.paga_code.message}</p>}
      </div>

      <div className="mb-4">
        <div className="w-full mb-3">Fintech Name</div>
        <input
          type="text"
          className="w-full px-4 py-2 border border-[#DADADA] rounded-md focus:border-indigo-500 focus:outline-none focus:shadow-outline-indigo"
          placeholder="Masukkan Nama Fintech"
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
    </div>
  );
};
