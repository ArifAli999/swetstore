import Image from "next/image";
import Link from "next/link";
import cc from "classcat";

function Product({ media, name, permalink, price, className }) {
  const imageClass = cc([
    "relative rounded-lg hover:rounded-none overflow-hidden w-full transition-all w-30",
    className,
  ]);

  return (
    <div className=" p-2">
    <Link href={`/products/${permalink}`}>
      <a className="group relative">
        {media?.source && (
          <div className={imageClass}>
            <Image
              src={media.source}
              alt={Product.name}
             layout="fill"
              sizes="306px, (min-width: 768px): 352px, (min-width: 1024px): 232px, (min-width: 1280px): 288px"
              className="object-cover h-30"
              priority={true}
            />
          </div>
        )}
        <div className="flex justify-between py-2 md:py-3 space-x-1">
          <span className="text-sm md:text-base lg:text-lg font-semibold font-sans text-black">{name}</span>
          <span className="text-sm md:text-base lg:text-lg font-bold font-sans ">
            {price.formatted_with_symbol}
          </span>
        </div>
      </a>
    </Link>
    </div>
  );
}

export default Product;
