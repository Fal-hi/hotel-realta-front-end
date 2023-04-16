import classNames from "classnames"
import React from "react"

type UserButton = {
  variant: "primary" | "secondary" | "variant" | "danger" | "danger-secondary"
  type: "main" | "secondary"
  size: "small" | "medium" | "large"
  icon?: React.ComponentType<{ className?: string }>
  label: string
  className?: string
  onClick?: () => void
}

const UserButton: React.FC<UserButton> = props => {
  const { variant, type, size, icon: Icon, label, className, onClick } = props

  const btnClass = {
    variant: {
      "bg-primary hover:bg-primary-hover text-white":
        variant === "primary" && type === "main",
      "border-2 border-primary text-primary hover:bg-primary hover:text-white outline-none":
        variant === "primary" && type === "secondary",

      "bg-secondary hover:bg-secondary-hover text-white":
        variant === "secondary" && type === "main",

      "border-2 border-secondary text-secondary hover:bg-secondary hover:text-white":
        variant === "secondary" && type === "secondary",

      "bg-variant hover:bg-variant-hover text-white":
        variant === "variant" && type === "main",

      "border-2 border-variant text-variant hover:bg-variant hover:text-white":
        variant === "variant" && type === "secondary",

      "bg-danger hover:bg-danger-hover text-white":
        variant === "danger" && type === "main",

      "border-2 border-danger text-danger hover:bg-danger hover:text-white":
        variant === "danger" && type === "secondary",

      "bg-danger-secondary hover:bg-danger-secondary-hover text-white":
        variant === "danger-secondary" && type === "main",

      "border-2 border-danger-secondary text-danger-secondary hover:bg-danger-secondary-hover hover:text-white":
        variant === "danger-secondary" && type === "secondary",
    },

    size: {
      "px-8 py-2": size === "small",
      "px-10 py-4": size === "medium",
      "px-12 py-4": size === "large",
    },
  }

  const classes = classNames(
    btnClass.variant,
    btnClass.size,
    "rounded transition-colors ease-in duration-150 flex gap-3 items-center justify-center uppercase font-medium",
    className
  )

  if (Icon) {
    return (
      <button className={classes} onClick={onClick}>
        <Icon className="w-6 h-6" />
        <span>{label}</span>
      </button>
    )
  }

  return (
    <button className={classes} onClick={onClick}>
      {label}
    </button>
  )
}

export default UserButton
