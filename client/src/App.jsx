import Home from './components/Home'
import Page_Results from './components/Page_Results'
import Stock_Page from './components/Stock_Page';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
function App() {


  return (

    <BrowserRouter>
      <Routes>
        <Route path="/" exact index element={<Home />}></Route>
        <Route path="/search/:ticker" exact index element={<Page_Results />}></Route>
        <Route path="/:ticker" exact index element={<Stock_Page />}></Route>

      </Routes>

    </BrowserRouter>

  )
}

export default App

