import { createContext, useContext, useState } from "react";

const SearchModalContext = createContext();

const SearchModalProvider = ({ children }) => {
  const [isSearchModalOpen, setIsSearchModalOpen] = useState(false);
  return (
    <SearchModalContext.Provider
      value={{ isSearchModalOpen, setIsSearchModalOpen }}
    >
      {children}
    </SearchModalContext.Provider>
  );
};

export default SearchModalProvider;
export const useSearchModalContext = () => useContext(SearchModalContext);
