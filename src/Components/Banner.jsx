import { FiSearch } from "react-icons/fi";

function Banner({ query, handleInputChange }) {
  return (
    <div className="max-w-screen-2xl container mx-auto xl:px-4 px-4 md:py-2 py-14">
      <h1 className="text-5xl font-bold text-primary mb-3">
        Discover & Shop <span className="text-blue-500">Your Favorites </span>
        Here
      </h1>
      {/* <p className="text-lg text-black/70 mb-8 ">
        Discover Hundreds of Must-Have Items Across Categories, Embark on a
        Journey Through Countless Collections
      </p> */}
      {/* className="flex md:rounded-xl rounded-xl border border-zinc-900 md:w-[75%] w-full h-10" */}
      <form>
        <div className="flex justify-start items-center">
          <div className="flex  border border-slate-900 shadow-sm md:w-[75%] w-full h-10">
            <input
              onChange={handleInputChange}
              value={query}
              type="text"
              name="title"
              id="title"
              placeholder="What you are looking for..."
              className="block flex-1 border-0 py-1.5 pl-8 text-gray-900 placeholder:text-gray-400 focus:right-0 sm:text-sm sm:leading-6"
            />
            <FiSearch className="absolute items-center mt-2.5 ml-2 text-gray-400" />
          </div>
          <button
            type="submit"
            className="bg-blue-500 md:px-8 px-3.5 md:py-2.5 py-1.5 text-white md:rounded-xl rounded-xl mx-2 hover:scale-110 transition-all duration-200"
          >
            Search
          </button>
        </div>
      </form>
    </div>
  );
}

export default Banner;
