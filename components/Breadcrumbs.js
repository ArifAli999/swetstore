import { useCheckoutState } from "../context/checkout";

// TODO: Build array of crumbs dynamically from available steps

function Breadcrumbs({ inCart }) {
  const { currentStep, extrafields } = useCheckoutState();

  if (inCart) {
    return <span className="text-lg md:text-xl font-Lato font-black uppercase">Shopping Bag</span>;
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
