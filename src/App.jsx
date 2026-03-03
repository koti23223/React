// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// import { Navbar } from "./components/Navbar";
// import { Footer } from "./components/footer";
// import { Home } from "./components/home";
// import Login from "./components/Login/Login";
// import Collections from "./components/Collections";
// import Signup from "./components/SignUp/signup";

// function App() {
//   return (
//     <Router>
//       <Navbar />

//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/login" element={<Login />} />
//         <Route path="/collections" element={<Collections />} />
//         <Route path="/signup" element={<Signup />} />
//       </Routes>

//       <Footer />
//     </Router>
//   );
// }

// export default App;

//updated by karthik
import { Routes, Route } from "react-router-dom";

import { Navbar } from "./components/Navbar";
import { Footer } from "./components/footer";
import { Home } from "./components/home";
import Login from "./components/Login/Login";
import Collections from "./components/Collections";
import Signup from "./components/SignUp/signup";
import MensCollection from "./components/collections/MensCollection";
import WomensCollection from "./components/collections/WomensCollection";
import ShoesCollection from "./components/collections/ShoesCollection";
import ElectronicsCollection from "./components/collections/ElectronicsCollection";
import AccessoriesCollection from "./components/collections/AccessoriesCollection";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/collections" element={<Collections />} />
        <Route path="/signup" element={<Signup />} />
        <Route
          path="/collections/mens-shirts"
          element={<MensCollection />}
        />
      
      <Route
          path="/collections/womens-dresses"
          element={<WomensCollection />}
        />

        <Route path="/collections/shoes" 
        element={<ShoesCollection />} 
        />

        <Route path="/collections/electronics" 
        element={<ElectronicsCollection />}
         />

         <Route
          path="/collections/accessories"
        element={<AccessoriesCollection />}
          />
        </Routes>

      <Footer />
    </>
  );
}

export default App;