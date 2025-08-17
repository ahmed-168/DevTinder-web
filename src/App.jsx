import { BrowserRouter, Route, Routes } from "react-router";
import NavBar from "./NavBar";

function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/login" element = {<div>Login page</div>}></Route>
    </Routes>
    </BrowserRouter>
      {/* <NavBar/>
      <h1 class="text-2xl font-bold">Hello world!</h1> */}
    </>
  );
}

export default App;
