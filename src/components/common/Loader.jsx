import { PropagateLoader } from "react-spinners";

const Loader = () => {
  return (
    <div className="w-full h-full flex items-center justify-center my-10">
      <PropagateLoader color="#0dc2b3" size={20} />
    </div>
  );
};

export default Loader;
