// import { Outlet, useLocation } from "react-router-dom";
// import Footer from "../../shared/Footer/Footer";
// import NavBar from "../../shared/NavBar/NavBar";
// import Loading from "../../Loading/Loading";
// import { Suspense, useEffect, useState } from "react";


// const Main = () => {

//     const [isLoading, setIsLoading] = useState(true)
//       const location = useLocation()

//     useEffect(() =>{
//         const timer = setTimeout(() => {
//             setIsLoading(false)
//         },5000)

//         return () => clearTimeout(timer)
//     },[])


//     if(isLoading){
//         return <Loading></Loading>
//     }


//     const noHeaderFooter = location.pathname.includes('/login') || location.pathname.includes('/register')
//     return (
//         <>
//                 <Suspense fallback = {<Loading></Loading>}>
//                     { noHeaderFooter && <NavBar></NavBar>}
                
//                     <Outlet></Outlet>
                
//                     { noHeaderFooter && <Footer></Footer>}
//                 </Suspense>
//         </>
//     );
// };

// export default Main;

import { Outlet, useLocation } from "react-router-dom";
import Footer from "../../shared/Footer/Footer";
import NavBar from "../../shared/NavBar/NavBar";
import Loading from "../../Loading/Loading";
import { Suspense, useEffect, useState } from "react";

const Main = () => {
  const [isLoading, setIsLoading] = useState(true);
  const location = useLocation();  // hooks always top level e thakbe

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  // loading thakle loading component return koro
  if (isLoading) {
    return <Loading />;
  }

  const noHeaderFooter =
    location.pathname.includes("/login") ||
    location.pathname.includes("/register");

  return (
    <>
      <Suspense fallback={<Loading />}>
        {!noHeaderFooter && <NavBar />}
        <Outlet />
        {!noHeaderFooter && <Footer />}
      </Suspense>
    </>
  );
};

export default Main;
