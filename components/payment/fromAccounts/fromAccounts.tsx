import { createDataBank, updateDataBank } from "@/redux/PAYMENT/action/bank";
import React from "react";
import { useForm, FieldErrors, Resolver } from "react-hook-form";

import { useDispatch, useSelector } from "react-redux";

type FormValues = {
    bank_code: string;
    bank_name: string;
};
const resolver: Resolver<FormValues> = async (values) => {
  const { bank_code, bank_name } = values;
  const errors: FieldErrors<FormValues> = {};

  if (!bank_code) {
    errors.bank_code = {
      type: "required",
      message: "This is required.",
    };
  }else if(!bank_name){
    errors.bank_name = {
        type: "required",
        message: "This is required.",
      };
  }

  return { values: {bank_code,bank_name} ? values : {}, errors };
};

export const FormAccounts = (props: any) => {
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
      dispatch(createDataBank(data));
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
      <div className="bg-white   pt-5 sm:p-6 sm:pb-4">
        <div className="w-full mb-3">Account Number</div>
        <input
          type="text"
          className="border rounded-md p-1.5 block w-full mb-3 bg-[#F9FAFB] focus:border-[#DADADA] focus:outline-none"
          defaultValue={props.bank_code}
          {...register("bank_code")}
        />
        {errors?.bank_code && <p>{errors.bank_code.message}</p>}
      </div>

      <div className="bg-white sm:p-6 sm:pb-4">
        <div className="w-full mb-3">Masukkan Saldo</div>
        <input
          type="text"
          className="border rounded-md p-1.5 block w-full mb-3 bg-[#F9FAFB] focus:border-[#DADADA] focus:outline-none"
          defaultValue={props.bank}
          {...register("bank_name")}
        />
        {errors?.bank_code && <p>{errors.bank_code.message}</p>}
      </div>

      <div className="bg-white sm:p-6">
        <div className="w-full mb-3">Type</div>
        <input
          type="text"
          className="border rounded-md p-1.5 block w-full mb-3 bg-[#F9FAFB] focus:border-[#DADADA] focus:outline-none"
          defaultValue={props.bank}
          {...register("bank_name")}
        />
        {errors?.bank_code && <p>{errors.bank_code.message}</p>}
      </div>

      <div className="bg-white sm:p-6">
        <div className="w-full mb-3">Bank</div>
        <input
          type="text"
          className="border rounded-md p-1.5 block w-full mb-3 bg-[#F9FAFB] focus:border-[#DADADA] focus:outline-none"
          defaultValue={props.bank}
          {...register("bank_name")}
        />
        {errors?.bank_code && <p>{errors.bank_code.message}</p>}
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
