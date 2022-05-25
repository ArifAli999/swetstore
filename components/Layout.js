import Footer from "./Footer";

function Layout({ children }) {
  return (
    <>
      <div className="shadow-md">
        <div className="">{children}</div>
      </div>
      <Footer />
    </>
  );
}

export default Layout;
