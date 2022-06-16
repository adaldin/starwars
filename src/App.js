// import { BrowserRouter, Routes, Route } from "react-router-dom";
import Container from "react-bootstrap/Container";
import StarshipList from "./components/StarshipList";

function App() {
  return (
    <Container fluid className="bg-dark">
      <StarshipList />
    </Container>
  );
}

export default App;
