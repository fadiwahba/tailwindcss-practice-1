function Product ({product: {title, price, description, category, image}}) {
  return (
    <div className="flex bg-white dark:bg-gray-700 w-full mb-5 shadow-sm rounded-lg dark:bg-gray-300 group overflow-hidden hover:shadow-2xl transition-shadow duration-300">
      <div className="w-5/12 p-2 dark:bg-gray-600 rounded-tl-lg rounded-bl-lg">
        <div style={{backgroundImage: `url(${image})`}} className="dark:bg-white bg-contain bg-no-repeat bg-center w-full h-full transition-transform duration-300 group-hover:transform group-hover:scale-110"></div>
      </div>
      <div className="w-7/12 p-5">
        <h1 className="md:text-2xl dark:text-gray-300">{title.substr(0, 50)}</h1>
        <h3 className="text-gray-400 dark:text-gray-500">{category}</h3>
        <p className="text-red-400 dark:text-red-500 mt-4 text-xl md:text-4xl">{price}$</p>
        <div className="mt-4 dark:text-gray-300">{description.substr(0, 100)}</div>
      </div>
    </div>
  );
}
export default Product;