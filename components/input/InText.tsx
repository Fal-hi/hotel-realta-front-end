import classNames from "classnames"
import React from "react"

interface InTextProps {
  label: string
  name: string
  placeholder: string
  defaultValue?: string
  className?: string
  errors?: any
  required?: boolean
  register?: any
  registerOptions?: any
  type: string
}

export default function InText(props: InTextProps) {
  const {
    label,
    name,
    placeholder,
    defaultValue,
    className,
    errors,
    required,
    register,
    registerOptions,
    type,
  } = props

  const inText = classNames(
    "outline-none border border-spacing-2 border-4 border-variant block p-3 mt-1 active:border-purple-700 focus:border-purple-700 active:bg-purple-200 focus:bg-purple-200 rounded",
    {
      "active:border-red-700 focus:border-red-700 active:bg-red-200 focus:bg-red-200":
        errors?.[name],
    },
    className
  )

  return (
    <div className="form-group mt-4">
      <label htmlFor={label} className="block text-lg font-poppins-regular">
        {label}
        {required && <span className="text-danger">*</span>}
      </label>
      <input
        id={name}
        type={type}
        name={name}
        placeholder={placeholder}
        defaultValue={defaultValue}
        className={inText}
        {...register(name, registerOptions?.[name])}
        required={required}
      />
      <small className="text-purple-600">
        {errors?.[name] && errors?.[name]?.message}
      </small>
    </div>
  )
}
