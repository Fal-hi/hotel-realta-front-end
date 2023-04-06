import React, { useState } from "react"
import tw from "tailwind-styled-components"
import { FC } from "react"
import { ChevronDown } from "../icons"
import { ChevronRight } from "@/components/icons"

interface SelectProps {
  options: any
  value: any
  onChange: (value: any) => void
  width?: string
}

const SelectContainer = tw.div`
  relative
`

const SelectInput = tw.select`
  block
  appearance-none
  w-full
  bg-white
  border-2
  border-[#D0D5DD]
  px-3
  py-2
  pr-8
  text-xs
  text-[#667085]
  rounded-md
  focus:outline-none
`

const SelectArrowContainer = tw.div<{ isopen?: string }>`
  absolute
  inset-y-0
  right-0
  flex
  items-center
  px-2
  pointer-events-none
  transition: transform 0.2s ease-in-out;
  transform: ${({ isopen }) => (isopen ? "rotate(180deg)" : "rotate(0deg)")};
`

const SelectArrow = ({
  isOpen,
  onClick,
}: {
  isOpen: boolean
  onClick: () => void
}) => {
  return (
    <SelectArrowContainer isopen="false" onClick={onClick}>
      {isOpen ? <ChevronDown width="10" /> : <ChevronRight width="10" />}
    </SelectArrowContainer>
  )
}

const Dropdown: FC<SelectProps> = (props: any) => {
  const [isOpen, setIsOpen] = useState<boolean>(false)

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const newValue = event.target.value
    props.onChange(newValue)
  }

  const handleToggleOpen = () => {
    setIsOpen(!isOpen)
  }

  return (
    <SelectContainer
      style={{
        width: props.width,
      }}
    >
      <SelectInput value={props.value} onChange={handleChange}>
        {props.options.map((option: any) => (
          <option key={option.id} value={option.type}>
            {option.type}
          </option>
        ))}
      </SelectInput>
      <SelectArrow isOpen={isOpen} onClick={handleToggleOpen} />
    </SelectContainer>
  )
}

Dropdown.defaultProps = {
  width: "15rem",
}

export default Dropdown
