import { useCheckoutState } from "../context/checkout";
import { useCartState } from "../context/cart";

// TODO: Build array of crumbs dynamically from available steps

function Breadcrumbs({ inCart }) {
  const { currentStep, extrafields } = useCheckoutState();
  const { line_items, subtotal, total_unique_items } = useCartState();


  if (inCart) {
    return (
    <div className="flex justify-between w-full items-center">
      <div className="grid items-center grid-cols-2 md:gap-2"><p className="text-md md:text-xl font-Lato font-black uppercase text-center">Your Cart | </p><span className="md:text-lg text-xs text-gray-600 font-semibold ml-1"> {total_unique_items}{" "}  {total_unique_items === 1 ? "item" : "items"} </span></div>
      <div className="grid items-center grid-cols-3 gap-0 w-fit"><p className="text-xs md:text-sm text-faded-black w-fit font-semibold">Total</p><span className="text-black font-extrabold font-lg md:font-3xl col-span-2">{subtotal?.formatted_with_symbol}</span></div>
    </div>)
    
  }

  if (currentStep === "success") {
    return <span className="text-lg md:text-xl font-Lato font-black uppercase">Order received</span>;
  }

  return (
    <div className="space-x-3">
      {currentStep === "extrafields" && (
        <>
          <span className="text-lg md:text-xl font-extrabold font-Lato">Shopping Bag</span>
          <span className="text-lg md:text-xl font-extrabold font-Lato">&rarr;</span>
          <span className="text-lg md:text-xl font-Lato font-black uppercase">Booking</span>
          <span className="text-lg md:text-xl opacity-50 font-Lato font-black uppercase">&rarr;</span>
          <span className="text-lg md:text-xl opacity-50 font-Lato font-black uppercase">Shipping</span>
          <span className="text-lg md:text-xl opacity-50 font-Lato font-black uppercase">&rarr;</span>
          <span className="text-lg md:text-xl opacity-50 font-Lato font-black uppercase">Payment</span>
        </>
      )}
      {currentStep === "shipping" && (
        <>
          <span className="text-lg md:text-xl">Shopping Bag</span>

          {extrafields.length > 0 && (
            <>
              <span className="text-lg md:text-xl ">&rarr;</span>
              <span className="text-lg md:text-xl">Booking</span>
            </>
          )}
          <span className="text-lg md:text-xl">&rarr;</span>
          <span className="text-lg md:text-xl font-Lato font-black uppercase">Shipping</span>
          <span className="text-lg md:text-xl opacity-50 font-Lato font-black uppercase">&rarr;</span>
          <span className="text-lg md:text-xl opacity-50 font-Lato font-black uppercase">Payment</span>
        </>
      )}
      {currentStep === "billing" && (
        <>
          <span className="text-lg md:text-xl font-Lato font-black uppercase">Shopping Bag</span>
          {extrafields.length > 0 && (
            <>
              <span className="text-lg md:text-xl">&rarr;</span>
              <span className="text-lg md:text-xl font-Lato font-black uppercase">Booking</span>
            </>
          )}
          <span className="text-lg md:text-xl">&rarr;</span>
          <span className="text-lg md:text-xl font-Lato font-black uppercase">Shipping</span>
          <span className="text-lg md:text-xl font-Lato font-black uppercase">&rarr;</span>
          <span className="text-lg md:text-xl font-Lato font-black uppercase">Payment</span>
        </>
      )}
    </div>
  );
}

export default Breadcrumbs;
