import styles from "./Home.module.scss";
import { Form, Row, Col, Navbar, Button } from "react-bootstrap";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import ImageCard from "./ImageCard/ImageCard";
import StackGrid from "react-stack-grid";

export default function Home(props) {
  let [arrayWithCoctails, setArrayWithCoctails] = useState([]);
  let [input, setInput] = useState("a");
  let [error, setError] = useState("");

  useEffect(() => {
    if (input) {
      const fetchData = async () => {
        const result = axios(
          "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=" + input
        );
        result
          .then((res) => res.data)
          .then((data) => setArrayWithCoctails(data.drinks))
          .catch((err) => setError(err.message));
      };
      fetchData();
    }
  }, [input]);

  return (
    <div className={styles.home}>
      <Navbar className={styles.nav} bg="dark" expand="lg">
        <Form>
          <Form.Group as={Row}>
            <Col sm="10">
              <Form.Control
                className={styles.form}
                onChange={(event) => setInput(event.target.value)}
                type="text"
                placeholder="Find your favourite drink..."
              />
            </Col>
          </Form.Group>
        </Form>
        <Button className={styles.button} onClick={props.logout}>
          Logout
        </Button>
      </Navbar>
      <div className={styles.grid}>
        <StackGrid columnWidth={"25%"}>
          {arrayWithCoctails ? (
            arrayWithCoctails.map((cocktail) => {
              console.log(cocktail);
              return <ImageCard key={cocktail.strDrink} object={cocktail} />;
            })
          ) : (
            <h1>{error}</h1>
          )}
        </StackGrid>
      </div>
    </div>
  );
}
