import Footer from "./Footer";
import Header from "./Header";

function Layout({ children }) {
  return (
    <>
 
      <div className="md:mr-10 md:ml-10">
       
        <div >
    
          {children}</div>
        
       
      </div>
      <Footer/>
     
    </>
  );
}

export default Layout;
