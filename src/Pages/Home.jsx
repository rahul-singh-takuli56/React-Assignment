import React, { useEffect, useState } from "react";
import Banner from "../Components/Banner";
import Card from "../Components/Card";
import Items from "./Items";

function Home() {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [items, setItems] = useState([]);
  const [query, setQuery] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("data.json");
      const data = await response.json();
      setItems(data);
    };
    fetchData();
  }, []);

  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  // filtering Items if any chara match
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
    return filterItems.map((data, i) => <Card key={i} data={data} />);
  };

  const result = filteredData(filteredItems);

  return (
    <div>
      <Banner query={query} handleInputChange={handleInputChange} />
      <div className="bg-[#FAFAFA] md:grid gap-3  px-2 py-2">
        <div className="bg-white p-4 rounded ">Filtering Option</div>
        <div className="bg-white p-4 rounded ">
          <Items result={result} />
        </div>
      </div>
    </div>
  );
}

export default Home;
