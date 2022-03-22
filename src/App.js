import "./App.css";
import React, { useState, useEffect } from "react";
import axios from "axios";
import Person from "./components/person";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/esm/Button";
const url = `https://reqres.in/api/users?page=`;

function App() {
  let [persons, setPersons] = useState([]);
  let [personList, setPersonList] = useState([]);
  let [isFetchOk, setIsFetchOk] = useState(false);
  let [page, setPage] = useState(1);

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

  const fetchPersons = async () => {
    setIsFetchOk(false);
    try {
      const response = await axios.get(`${url}${page}`);
      if (response.status !== 200) {
        setIsFetchOk(false);
        // console.log(response.status);

        return;
      }
      // console.log(response.data.data);
      setPersons(response.data);
      console.log(persons);
      setPersonList(response.data.data);
      // console.log(personList)
    } catch (error) {
      console.log(error);
    }
    setIsFetchOk(true);
  };

  useEffect(() => {
    fetchPersons();
  }, [page]);
  const deletePerson = (personId) => {
    // console.log(person);
    let newPersons = personList.filter((p) => p.id !== personId);
    console.log(newPersons);
    // setPersons(newPersons);
    // console.log(page);
    setPersonList(newPersons);
  };

  return (
    <Container>
      {!isFetchOk && <div>Loading</div>}
      {isFetchOk && (
        <div>
          <h1 style={{ textAlign: "center", color: "red" }}>Personal Page</h1>
          <h2 style={{ textAlign: "center" }}>Total result {persons.total}</h2>

          <Person
            as={Col}
            personProp={personList}
            deletePersonProp={deletePerson}
          />
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
