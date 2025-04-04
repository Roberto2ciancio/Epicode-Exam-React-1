import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import CustomNavBar from "./assets/components/customnavbar";
import { Dropdown, Container, Row, Col } from "react-bootstrap";
import CardCard from "./assets/components/cardcard";
import CustomFooter from "./assets/components/customfooter";

function App() {
  return (
    <div id="nero">
      <img src="assetsimg/logo.png" alt="" />
      <CustomNavBar />
      <div className="d-flex mt-3 text-light">
        <h3 className="ms-3">TV Shows </h3>
        <>
          <Dropdown data-bs-theme="dark" className="ms-3 ">
            <Dropdown.Toggle
              id="dropdown-button-dark-example1"
              variant="secondary"
            >
              Geners
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1" active>
                Action
              </Dropdown.Item>
              <Dropdown.Item href="#/action-2">commedy</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Horror</Dropdown.Item>
              <Dropdown.Divider />
              <Dropdown.Item href="#/action-4">trhiller</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </>
      </div>

      <CardCard />

      <footer>
        <CustomFooter />
      </footer>
    </div>
  );
}

export default App;
