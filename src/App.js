import "./App.css";
import React, { useState, useEffect } from "react";
import axios from "axios";
import Person from "./components/person";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/esm/Button";

function App() {
  let [persons, setPersons] = useState([]);
  let [isFetchOk, setIsFetchOk] = useState(false);
  const [page, setPage] = useState(1);

  const nextPage = () => {
    if (page < persons.total / 6) {
      setPage(page + 1);
    }
  };
  const prevPage = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };

  useEffect(() => {
    const fetchPersons = async () => {
      setIsFetchOk(false);
      try {
        const url = `https://reqres.in/api/users?page=${page}`;
        const response = await axios.get(url);
        if (response.status !== 200) {
          setIsFetchOk(false);
          console.log(response.status);

          return;
        }
        console.log(response.data);
        setPersons(response.data);
      } catch (error) {
        console.log(error);
      }
      setIsFetchOk(true);
    };
    fetchPersons();
  }, [page]);
  return (
    <Container>
      {!isFetchOk && <div>Loading</div>}
      {isFetchOk && (
        <div>
          <h2>Total result {persons.total}</h2>

          <Row xs={1} md={2} lg={3} className="g-4">
            {persons.data.map((item) => (
              <Person as={Col} personProp={item} key={item.id} />
            ))}
          </Row>
        </div>
      )}
      <Container className="justify-content-center d-lg-flex">
        <Button variant="primary" className="m-3 w-25" onClick={prevPage}>
          Previous
        </Button>
        <Button variant="primary" className="m-3 w-25" onClick={nextPage}>
          Next
        </Button>
      </Container>
    </Container>
  );
}

export default App;
