import { FC, useState } from "react"
import { FaEye, FaEyeSlash } from "react-icons/fa"

interface InputTextProps {
  width?: string
  placeholder: string
  isPassword?: boolean
}

const InputText: FC<InputTextProps> = ({
  width = "auto",
  placeholder,
  isPassword = false,
}) => {
  const [showPassword, setShowPassword] = useState(false)
  const [passwordStrength, setPasswordStrength] = useState(0)

  const calculatePasswordStrength = (password: string) => {
    let strength = 0

    if (password.length >= 8) {
      strength += 1
    }

    if (password.match(/[a-z]/)) {
      strength += 1
    }

    if (password.match(/[A-Z]/)) {
      strength += 1
    }

    if (password.match(/[0-9]/)) {
      strength += 1
    }

    if (password.match(/[$@#&!]/)) {
      strength += 1
    }

    return strength
  }

  const inputType = isPassword ? (showPassword ? "text" : "password") : "text"

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword)
  }

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const password = e.target.value
    const strength = calculatePasswordStrength(password)
    setPasswordStrength(strength)
  }

  const passwordStrengthColor = `rgb(${255 - passwordStrength * 51}, ${
    passwordStrength * 51
  }, 0)`

  let passwordStrengthLabel = ""
  if (passwordStrength === 0) {
    passwordStrengthLabel = ""
  } else if (passwordStrength <= 2) {
    passwordStrengthLabel = "weak"
  } else if (passwordStrength <= 3) {
    passwordStrengthLabel = "normal"
  } else {
    passwordStrengthLabel = "strong"
  }

  return (
    <div className="relative">
      <input
        type={inputType}
        className="bg-white border-[#D0D5DD] text-[#667085] text-xs px-3 py-2 rounded-md font-normal border-2 focus:outline-none w-full"
        placeholder={placeholder}
        required
        style={{ width }}
        onChange={handlePasswordChange}
      />
      {isPassword && (
        <span
          onClick={togglePasswordVisibility}
          className="absolute top-5 right-2 transform -translate-y-1/2 cursor-pointer"
        >
          {showPassword ? (
            <FaEyeSlash style={{ color: "black" }} />
          ) : (
            <FaEye style={{ color: "black" }} />
          )}
        </span>
      )}
      {isPassword && (
        <>
          <div
            className="h-1 rounded-md absolute bottom-0 left-0"
            style={{ backgroundColor: passwordStrengthColor, width: "100%" }}
          />
          <div
            className="text-xs absolute top-full left-0"
            style={{ color: passwordStrengthColor }}
          >
            {passwordStrengthLabel}
          </div>
        </>
      )}
    </div>
  )
}

export default InputText
