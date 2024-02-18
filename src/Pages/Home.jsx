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
  const [selectedMaterial, setSelectedMaterial] = useState("");
  const [isLoading, setIsLoading] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
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

  // Material Selection Filtering
  const handleMaterialChange = (event) => {
    const selectedMaterial = event.target.value;
    console.log("Selected Material:", selectedMaterial);
    setSelectedMaterial(selectedMaterial);
  };

  // Price Based Filtering
  const handlePriceRangeChange = (event) => {
    setPriceRange(event.target.value);
  };

  // Filtered Items based on category, price range, and material
const filteredItems = items.filter((item) => {
  const categoryMatch =
    !selectedCategory || item.category.toLowerCase() === selectedCategory.toLowerCase();
  const priceMatch = !priceRange || parseInt(item.price) < parseInt(priceRange);
  const materialMatch = !selectedMaterial || 
    (item.material && item.material.toLowerCase() === selectedMaterial.toLowerCase());
  const queryMatch = !query || item.category.toLowerCase().includes(query.toLowerCase());
  return categoryMatch && priceMatch && materialMatch && queryMatch;
});

  // pagination
  const calculatePageRange = () => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return { startIndex, endIndex };
  };

  // function for the next page
  const nextPage = () => {
    if (currentPage < Math.ceil(filteredItems.length / itemsPerPage)) {
      setCurrentPage(currentPage + 1);
    }
  };

  // function for the previous page
  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };


  // Slice the data based on the current page
  const { startIndex, endIndex } = calculatePageRange();
  const slicedItems = filteredItems.slice(startIndex, endIndex);

  const result = slicedItems.map((data, i) => <Card key={i} data={data} />);

  // filtering Items if any char match
  // const filteredItems = items.filter(
  //   (item) => item.category.toLowerCase().indexOf(query.toLowerCase()) === 0
  // );

  // const filteredData = (items) => {
  //   let filterItems = items;

  //   // Category Filtering
  //   if (selectedCategory) {
  //     filterItems = filterItems.filter(
  //       ({ category }) =>
  //         category.toLowerCase() === selectedCategory.toLowerCase()
  //     );
  //   }

  //   // Price Filtering
  //   if (priceRange) {
  //     filterItems = filterItems.filter(
  //       ({ price }) => parseInt(price) < parseInt(priceRange)
  //     );
  //   }

  //   // slice the data based on the current page
  //   const { startIndex, endIndex } = calculatePageRange();
  //   filterItems = filterItems.slice(startIndex, endIndex);

  //   return filterItems.map((data, i) => <Card key={i} data={data} />);
  // };

  // const result = filteredData(filteredItems);

  return (
    <div>
      <Banner query={query} handleInputChange={handleInputChange} />
      <div className="bg-[#FAFAFA] px-2 py-2">
        <div className="bg-white p-4 rounded">
          <FilterData
            handleChange={handleChange}
            handleClick={handleClick}
            handlePriceRangeChange={handlePriceRangeChange}
            handleMaterialChange={handleMaterialChange}
          />
        </div>
        <div className="bg-white p-4 rounded">
          {isLoading ? (
            <p>Loading Please Wait..</p>
          ) : result.length > 0 ? (
            <Items result={result} />
          ) : (
            <>
              <h3>{result.length}</h3>
              <p className="text-6xl text-red-500 font-bold">
                Items are Sold Please Select difference Categories.{" "}
              </p>
            </>
          )}

          {/* pagination */}
          {result.length > 0 ? (
            <div className="flex justify-center mt-4 space-x-8">
              <button onClick={prevPage}>Previous</button>
              <span>
                Page{currentPage} of{" "}
                {Math.ceil(filteredItems.length / itemsPerPage)}
              </span>
              <button
                onClick={nextPage}
                disabled={
                  currentPage === Math.ceil(filteredItems.length / itemsPerPage)
                }
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
