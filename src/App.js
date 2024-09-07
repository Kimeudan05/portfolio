import "./App.css";
import Footer from "./components/Footer";
import NavbarLayout from "./components/Navbar";

import Home from "./components/Home";
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import AboutUs from "./components/About";
import Projects from "./components/Projects";
import Portfolio from "./components/Portfolio";
import Contacts from "./components/Contacts";

function App() {
  const routing = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/" element={<NavbarLayout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<AboutUs />} />
          <Route path="projects" element={<Projects />} />
          <Route path="portfolio" element={<Portfolio />} />
          <Route path="contacts" element={<Contacts />} />
          <Route
            path="*"
            element={
              <div>
                page not found{" "}
                <Link>
                  Back to home <Home />
                </Link>
              </div>
            }
          />
        </Route>
      </>
    )
  );
  return (
    <div className="App ">
      <RouterProvider router={routing} />
      <Footer />
    </div>
  );
}

export default App;
