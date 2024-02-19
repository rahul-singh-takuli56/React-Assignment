import { Link } from "react-router-dom";

function Card({ data }) {
  const { id, title, category, image, material, rating, price } = data;

  return (
    <section className="bg-gray-100">
      {/* Update the 'to' prop of the Link component */}
      <Link
        to={`/product/${id}`}
        className="block translate-x-10 translate-y-2"
      >
        <img
          src={image}
          alt=""
          className="h-80 w-72 hover:scale-125 duration-300"
        />
        <div className="m-4 p-3">
          <h2 className="text-lg font-semibold mb-2">{title.slice(0, 27)}</h2>
          <h2 className="text-semibold">
            <span className="font-semibold">Price: </span>₹{price}
          </h2>
          <h2 className="text-semibold">
            <span className="font-semibold">Category: </span>
            {category}
          </h2>
          <h2 className="text-semibold">
            {" "}
            <span className="font-semibold">Material: </span>
            {material}
          </h2>
          <h2 className="text-semibold">⭐⭐⭐⭐{rating.rate}</h2>
          <p className="bg-red-500 text-md text-white font-semibold p-2 my-2 inline-block rounded-sm">
            Limited time deal
          </p>
        </div>
      </Link>
    </section>
  );
}

export default Card;