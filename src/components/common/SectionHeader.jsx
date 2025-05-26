const SectionHeader = ({ title, description }) => {
  return (
    <div className="pb-3">
      <h3 className="text-[28px] max-sm:text-2xl text-teal-700 font-bold">
        {title}
      </h3>
      <p className="text-gray-600 text-sm">{description}</p>
      <div className="relative w-full h-[1.5px] bg-gray-300 mt-3">
        <span className="absolute inset-0  h-full w-[150px] bg-teal-500"></span>
      </div>
    </div>
  );
};

export default SectionHeader;
