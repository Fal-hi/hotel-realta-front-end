import cx from "classnames"
import { any, string } from "prop-types"

const Typography = ({
  variant,
  color,
  children,
  customClass = "",
  ...props
}: any) => {
  return (
    <div
      className={cx(`${color}`, `${variant}`, customClass && customClass)}
      {...props}
    >
      {children}
    </div>
  )
}
Typography.propTypes = {
  variant: string,
  color: string,
  children: any,
  customClass: string,
}

export default Typography
