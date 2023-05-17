import { BrowserRouter, Route, Routes } from "react-router-dom";
import  {Home, About}  from "./pages";

type Props = {}

function Router({}: Props) {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
    </Routes>
  </BrowserRouter>
  )
}

export default Router