import Product from "./Product";

function ProductGrid({ products, ...props }) {
  if (!products || products.length === 0) return null;

  return (
    <div className='grid md:grid-cols-4 grid-cols-1 gap-10 mb-10 mt-5 '>

   
    </div>
  );
}

export default ProductGrid;
