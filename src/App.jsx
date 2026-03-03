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
      </Routes>

      <Footer />
    </>
  );
}

export default App;