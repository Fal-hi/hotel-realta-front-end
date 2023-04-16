import { Fragment, useState } from "react"
import { Listbox, Transition } from "@headlessui/react"
import { GoChevronDown } from "react-icons/go"

export default function ListBoxInput({
  data,
  selectedValue,
  handleChangeUserType,
}: any) {
  const [selected, setSelected] = useState(selectedValue || null)

  return (
    <Listbox value={selected} onChange={setSelected}>
      <div className="relative mt-2">
        <Listbox.Button className="relative w-full cursor-default rounded bg-white p-3 text-left focus:outline-none border-spacing-2 border-2 border-variant focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300">
          <span className="block truncate">{selected.label}</span>
          <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
            <GoChevronDown
              className="h-5 w-5 text-gray-400"
              aria-hidden="true"
            />
          </span>
        </Listbox.Button>
        <Transition
          as={Fragment}
          leave="transition ease-in duration-100"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <Listbox.Options className="absolute mt-1 max-h-60 w-full overflow-auto  bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
            {data.map((d: any, index: number) => (
              <Listbox.Option
                key={index}
                className={({ active }) =>
                  `relative cursor-default select-none p-3 ${
                    active ? "bg-primary text-white" : "text-gray-900"
                  }`
                }
                onClick={() => handleChangeUserType(d.value)}
                value={d}
              >
                {({ selected }) => (
                  <>
                    <span
                      className={`block truncate ${
                        selected ? "font-medium" : "font-normal"
                      }`}
                    >
                      {d.label}
                    </span>
                  </>
                )}
              </Listbox.Option>
            ))}
          </Listbox.Options>
        </Transition>
      </div>
    </Listbox>
  )
}
