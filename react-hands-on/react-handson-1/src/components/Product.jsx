function Product(props) {
  const { name, price, brand, description, image } = props.product;

  return (
    <div className="bg-white rounded-xl shadow-md p-4 flex flex-col hover:shadow-lg transition duration-300">
      
      <img
        src={image}
        alt={name}
        className="w-full h-48 object-cover rounded-md"
      />

      <h2 className="text-xl font-semibold mt-3">
        {name}
      </h2>

      <p className="text-sm text-gray-500">
        {brand}
      </p>

      <p className="text-sm mt-2 text-gray-600">
        {description}
      </p>

      <p className="text-lg font-bold mt-3 text-blue-600">
        Rs {price}
      </p>

    </div>
  );
}

export default Product;