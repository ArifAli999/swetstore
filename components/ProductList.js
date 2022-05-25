import Link from "next/link";

function ProductList({ products }) {
  if (!products || products.length === 0) return null;

  return products.map(({ name, permalink }, index) => (
    <span key={permalink}>
      {index ? ", " : ""}
     
        <a href={`/products/${permalink}`} className="text-lg md:text-xl lg:text-2xl hover:italic">{name}</a>
   
    </span>
  ));
}

export default ProductList;
