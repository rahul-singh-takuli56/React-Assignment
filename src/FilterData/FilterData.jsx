import Categories from "./Categories";
import Price from "./Price";
import Material from "./Material";

function FilterData({ handleChange, handleClick, handlePriceRangeChange }) {
  return (
    <div className="space-y-3 ">
      <h3 className="text-lg text-white bg-green-900 rounded-md cursor-pointer p-2 inline-block font-semibold">
        FILTER THE ITEMS
      </h3>
      <div className="flex justify-start ">
        <Categories handleChange={handleChange} />
        <Price handlePriceRangeChange={handlePriceRangeChange} />
        <Material handleChange={handleChange} />
      </div>
    </div>
  );
}

export default FilterData;
