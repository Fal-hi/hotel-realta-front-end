import React from "react";

interface InputDropdownProps {
  options: string[];
  onChange: (value: string) => void;
}

const InputDropdown: React.FC<InputDropdownProps> = (props) => {
  const { options, onChange } = props;

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const value = event.target.value;
    onChange(value);
  };

  return (
    <select onChange={handleChange}>
      {options.map((option) => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </select>
  );
};

export default InputDropdown;
