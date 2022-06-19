import { BrowserRouter, Routes, Route } from "react-router-dom";
import StarshipList from "./components/StarshipList";
import Header from "./components/Header";
import Menu from "./components/Menu";
import Container from "react-bootstrap/Container";
import Home from "./pages/Home";

function App() {
  return (
    <Container fluid>
      <BrowserRouter>
        <Header />
        <Menu />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/starships" element={<StarshipList />}></Route>
        </Routes>
      </BrowserRouter>
    </Container>

    //   <div className="App">
    //   <Menu />
    //   <Route exact path="/">
    //     <CharContainer />
    //   </Route>
    //   <Route path="/starships">
    //   <StarshipList />
    //   </Route>

    // </div>
  );
}

export default App;
