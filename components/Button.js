import cc from "classcat";

import { useThemeState } from "../context/theme";

const buttonStyle = (theme) => {
  switch (theme) {
    case "kitchen-sink-journal-chopchop-shop":
      return "bg-clementine text-black";
    case "walnut-cooks-tools-chopchop-shop":
      return "bg-tumbleweed text-black";
    case "essential-knife-set-chopchop-shop":
      return "bg-hawkes-blue text-black";
    case "private-cooking-class-chopchop-shop":
      return "bg-asparagus text-black";
    case "ceramic-dutch-oven-chopchop-shop":
      return "bg-goldenrod text-black";
    default:
      return "bg-white-rock";
  }
};

function Button({ className, ...props }) {
  const theme = useThemeState();

  const buttonClass = cc([
    "bg-black text-black text-gray-200 font-semibold appearance-none border-none py-2.5 px-3.5 md:px-4 w-40 rounded transition focus:outline-none bg-black text-white  hover:opacity-75 hover:rounded-sm transition-all duration-500 ease-in-out ",
 
    className,
  ]);

  if (props.href) return <a {...props} className={buttonClass} />;

  return <button {...props} className={buttonClass} />;
}

export default Button;
