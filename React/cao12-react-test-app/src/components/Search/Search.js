import { ChangeEventHandler, useState } from "react";

export const Search: ChangeEventHandler<HTMLInputElement> = () => {
  const [inputValue, setInputValue] = useState("Search...");
  const handleChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    setInputValue(event.target.value);
  };
  return (
    <div>
      <input
        type="text"
        placeholder="Search..."
        onChange={handleChange}
        title="dummySearch"
      />
    </div>
  );
};
