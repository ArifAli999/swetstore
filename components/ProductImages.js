import Image from "next/image";

function ProductImages({ images = [] }) {
  if (!images || images.length === 0) return null;

  return images.map(({ id, url, image_dimensions }) => (
    <div key={id} className="md:py-3 ">
      <Image
        key={id}
        src={url}
        width={650}
        height={350}
        className="rounded-lg opacity-70 hover:rounded-none transition-all hover:blur-lg hover:opacity-100 cursor-pointer h-full object-cover"
        quality={100}
        alt=""
      />
    </div>
  ));
}

export default ProductImages;
