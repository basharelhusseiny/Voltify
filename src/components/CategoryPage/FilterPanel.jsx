import { useNavigate } from "react-router";
import useFetchCategories from "../../hooks/useFetchCategories";

const FilterPanel = () => {
  const navigate = useNavigate();
  const { allCategory } = useFetchCategories();
  return (
    <div>
      <div className="border-2 border-gray-300 rounded-lg">
        <p className="border-b-2 border-gray-300 px-5 py-3 text-lg font-semibold">
          Categories
        </p>
        <div>
          {allCategory.map((category) => (
            <div
              key={category.slug}
              onClick={() => navigate(`/categoryPage/${category.slug}`)}
              className="group flex items-center justify-between mx-5 py-2 border-b-2 border-gray-300 cursor-pointer hover:text-teal-600 px-2 even:bg-gray-100 duration-300"
            >
              <p className="text-sm group-hover:pl-2 duration-300">
                {category.name}
              </p>
              <span className="text-xs bg-gray-200 size-5 rounded-full flex items-center justify-center group-hover:bg-teal-600 group-hover:text-white duration-300">
                {category.count}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FilterPanel;
