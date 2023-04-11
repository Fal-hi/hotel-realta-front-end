
import { FC } from "react"

interface AccountsProps {
  width?: string
  height?: string
  fill?: string
}

const Accounts: FC<AccountsProps> = (props: any) => {
  return (
<svg
  xmlns="http://www.w3.org/2000/svg"
  className="icon icon-tabler icon-tabler-credit-card"
  width={props.width}
height={props.height}
  viewBox="0 0 24 24"
  strokeWidth="1.5"
  stroke="currentColor"
  fill="none"
  strokeLinecap="round"
  strokeLinejoin="round"
>
  <path stroke="none" d="M0 0h24v24H0z" />
  <rect x="3" y="5" width="18" height="14" rx="3" />
  <line x1="3" y1="10" x2="21" y2="10" />
  <line x1="7" y1="15" x2="7.01" y2="15" />
  <line x1="11" y1="15" x2="13" y2="15" />
</svg>
)
}

Accounts.defaultProps = {
  width: "20",
  height: "20",
  fill: "none",
}

export default Accounts