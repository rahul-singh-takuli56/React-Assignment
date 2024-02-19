import Categories from "./Categories";
import Price from "./Price";
import Material from "./Material";

function FilterData({
  handleMaterialChange,
  handleChange,
  handlePriceRangeChange,
}) {
  return (
    <div className="space-y-3 ">
      <h3 className="text-lg text-black  cursor-pointer p-2  font-semibold">
        FILTER THE ITEMS
      </h3>
      <div className="flex justify-start ">
        <Categories handleChange={handleChange} />
        <Price handlePriceRangeChange={handlePriceRangeChange} />
        <Material handleMaterialChange={handleMaterialChange} />
      </div>
    </div>
  );
}

export default FilterData;
