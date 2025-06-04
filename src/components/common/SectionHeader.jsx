import { memo } from "react";

const SectionHeader = ({ title, description }) => {
  return (
    <div className="pb-3">
      <div className="container mx-auto px-5 pt-6">
        <h3 className="text-[28px] max-sm:text-2xl text-teal-700 font-bold tracking-wide">
          {title}
        </h3>
        <p className="text-gray-600 text-[15px] tracking-wide">{description}</p>
        <div className="relative w-full h-[1.5px] bg-gray-300 mt-3">
          <span className="absolute inset-0  h-full w-[150px] bg-teal-500"></span>
        </div>
      </div>
    </div>
  );
};

export default memo(SectionHeader);
