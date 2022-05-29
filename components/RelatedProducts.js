import Product from "./Product";

function RelatedProducts({ products }) {
  if (!products || products.length === 0) return null;
console.log(products)
  return (
    <div>
      <h3 className="w-1/3 md:w-full leading-tight md:leading-normal font-serif text-xl md:text-3xl">
        Some other things you might like
      </h3>

      <div className="w-full grid grid-cols-2 xl:grid-cols-4 gap-4 md:gap-8 pt-4 md:pt-8">
        {products.map((product) => (
         <p className="text-black" key={product.id}>{product.name}</p>
        ))}
      </div>
    </div>
  );
}

export default RelatedProducts;
