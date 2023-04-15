import { FC } from "react";
import { useRouter } from "next/router";

interface UserButtonProps {
  title: string;
  paddingTop?: string;
  textSize?: string;
  onClick?: () => void;
  width?: string;
}

const UserButton: FC<UserButtonProps> = (props) => {
  const router = useRouter();
  
  return (
    <button
      className="rounded-full font-poppins-bold text-white border-bgPrimary bg-bgPrimary border-solid border-2 outline-none focus:outline-none hover:text-white  hover:bg-bgPrimary"
      style={{
        padding: `${props.paddingTop} 1rem`,
        fontSize: props.textSize,
        width: props.width,
      }}
      onClick={props.onClick}
    >
      {props.title}
    </button>
  );
};

UserButton.defaultProps = {
  title: "Search",
  paddingTop: "0.5rem",
  textSize: "16px",
  width: "auto",
};

export default UserButton;
