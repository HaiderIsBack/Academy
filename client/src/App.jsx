import Navbar  from "./components/Navbar"
import Footer from "./components/Footer"
import Home from "./components/Home"

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Team from "./components/Team";

const App = () => {
  return <>
    <Navbar />
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<Home />} />
          <Route path="team" element={<Team />} />

          {/* <Route path="blogs" element={<Blogs />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NoPage />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
    <Footer />
  </>
}

export default App