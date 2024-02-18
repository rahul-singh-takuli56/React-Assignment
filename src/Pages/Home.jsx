import React, { useEffect, useState } from "react";
import Banner from "../Components/Banner";
import Card from "../Components/Card";
import Items from "./Items";
import FilterData from "../FilterData/FilterData";

function Home() {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [items, setItems] = useState([]);
  const [query, setQuery] = useState("");
  const [priceRange, setPriceRange] = useState(null);
  const [isLoading, setIsLoading] = useState(null);
  const [currentPage, setCurrenPage] = useState(1);
  const itemsPerPage = 8;

  useEffect(() => {
    setIsLoading(true);

    const fetchData = async () => {
      const response = await fetch("data.json");
      const data = await response.json();
      setItems(data);
      setIsLoading(false);
    };
    fetchData();
  }, []);

  //input change
  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  // Radio Filtering
  const handleChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  // Button based filtering
  const handleClick = (event) => {
    setSelectedCategory(event.target.value);
  };

  // Price Based Filtering -> not working
  const handlePriceRangeChange = (event) => {
    setPriceRange(event.target.value);
  };

  // pagination
  const calculatePageRange = () => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return { startIndex, endIndex };
  };

  // function for the next page
  const nextPage = () => {
    if (currentPage < Math.ceil(filteredItems.length / itemsPerPage)) {
      setCurrenPage(currentPage + 1);
    }
  };

  // function for the previous page
  const prevPage = () => {
    if (currentPage > 1) {
      setCurrenPage(currentPage - 1);
    }
  };

  // filtering Items if any char match
  const filteredItems = items.filter(
    (item) => item.category.toLowerCase().indexOf(query.toLowerCase()) === 0
  );

  const filteredData = (items) => {
    let filterItems = items;

    // Category Filtering
    if (selectedCategory) {
      filterItems = filterItems.filter(
        ({ category }) =>
          category.toLowerCase() === selectedCategory.toLowerCase()
      );
    }

    // Price Filtering
    if (priceRange) {
      filterItems = filterItems.filter(
        ({ price }) => parseInt(price) < parseInt(priceRange)
      );
    }

    // slice the data based on the current page
    const { startIndex, endIndex } = calculatePageRange();
    filterItems = filterItems.slice(startIndex, endIndex);

    return filterItems.map((data, i) => <Card key={i} data={data} />);
  };

  const result = filteredData(filteredItems);

  return (
    <div>
      <Banner query={query} handleInputChange={handleInputChange} />
      <div className="bg-[#FAFAFA] px-2 py-2">
        <div className="bg-white p-4 rounded">
          <FilterData
            handleChange={handleChange}
            handleClick={handleClick}
            handlePriceRangeChange={handlePriceRangeChange}
          />
        </div>
        <div className="bg-white p-4 rounded">
          <Items result={result} />

          {/* pagination */}
          {result.length > 0 ? (
            <div className="flex justify-center mt-4 space-x-8 ">
              <button
                onClick={prevPage}
                className="hover:underline "
                disabled={currentPage === 1}
              >
                Previous
              </button>
              <span className="mx-2">
                Page {currentPage} of{" "}
                {Math.ceil(filteredItems.length / itemsPerPage)}
              </span>
              <button
                onClick={nextPage}
                disabled={
                  currentPage === Math.ceil(filteredItems.length / itemsPerPage)
                }
                className="hover:underline"
              >
                Next
              </button>
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
}

export default Home;
