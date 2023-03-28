const InputText = (props: any) => {
  return (
    <form className="flex items-center">
      <input
        type="text"
        className="bg-white border-[#D0D5DD] text-[#667085] text-xs px-3 py-2 rounded-md font-normal border-2 focus:outline-none"
        placeholder="Region"
        required
      />
    </form>
  )
}

export default InputText
