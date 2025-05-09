import { createBrowserRouter, Outlet } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import Discover from "./components/Discover";
import Aboutus from "./components/Aboutus";
import Contactus from "./components/Contactus";
import Error from "./components/Error";
import LogiinBus from "./components/LogiinBus";
import LoginInf from "./components/LoginInf";
import InfluencerSignup from "./components/InfluencerSignup";
import BusinessSignup from "./components/BusinessSignup";
import InfluencerDashBoard from "./components/InfluenecerDashBoard";
import BusinessPartnerDashboard from "./components/BusinessPartnerDashboard";
import ThemeProvider from "./components/ThemeProvider";




const App = () => {
  return(
  <ThemeProvider> 
      <div >

    <Header />  
    <Outlet /> 
  </div>
  </ThemeProvider>
  );
  
}

export const AppRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/discover",
        element: <Discover />
      },
      {
        path: "/about",
        element: <Aboutus />
      },
      {
        path: "/contact",
        element: <Contactus />
      },
      {
        path:"/loginb",
        element:<LogiinBus />
      },
      {
        path:"/logininf",
        element:<LoginInf />
      },
      {
        path: "/signupinf",
        element: <InfluencerSignup />
      },
      {
        path: "/signupbusiness",
        element: <BusinessSignup />
      },{
        path:"InfluencerDashBoard",
        element:<InfluencerDashBoard />
      },{
        path:"BusinessPartnerDashBoard",
        element:<BusinessPartnerDashboard />
      }
      
    ],
    errorElement: <Error />



  }
])


export default App;