import { memo } from "react";
import { Link } from "react-router";

const MainLogo = () => {
  return (
    <Link to="/" className="flex items-center">
      <img src="/images/image.jpg" alt="logo" className="size-7" />
      <p className="text-2xl uppercase font-bold ml-1">voltify</p>
    </Link>
  );
};

export default memo(MainLogo);
