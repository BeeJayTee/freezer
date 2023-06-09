const SearchBar = ({ filteredResults, setCurrent }) => {
  const handleChange = (e) => {
    const searchValue = e.target.value.toLowerCase();
    if (searchValue !== "" && searchValue.split(" ").length === 1) {
      let newFilteredItems = [];
      for (let i = 0; i < filteredResults.length; i++) {
        const name = filteredResults[i].name;
        const nameArr = name.split(" ");
        let isIn = false;
        for (let n = 0; n < nameArr.length; n++) {
          if (nameArr[n].startsWith(searchValue)) {
            isIn = true;
          }
        }
        isIn ? newFilteredItems.push(filteredResults[i]) : "";
      }
      setCurrent(newFilteredItems);
    } else if (searchValue.split(" ").length > 1) {
      let newFilteredItems = [];
      const queryArr = searchValue.toLowerCase().split(" ");
      for (let i = 0; i < filteredResults.length; i++) {
        const every = queryArr.every((word) => {
          let nameArr = filteredResults[i].name.split(" ");
          for (let n = 0; n < nameArr.length; n++) {
            if (nameArr[n].startsWith(word)) {
              return true;
            }
          }
        });
        every ? newFilteredItems.push(filteredResults[i]) : "";
      }
      setCurrent(newFilteredItems);
    } else {
      setCurrent(filteredResults);
    }
  };

  return (
    <div>
      <input
        type="text"
        onChange={handleChange}
        className="border border-green-800 px-4 py-2 mb-4 rounded-sm"
      />
    </div>
  );
};

export default SearchBar;
