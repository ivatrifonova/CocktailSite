import firebase from "../../firebase/firebase";
import { Button, Container, Row, Col } from "react-bootstrap";
import { Google } from "react-bootstrap-icons";
import styles from "./Login.module.scss";
import { useState } from "react";

export default function Login(props) {
  let provider = new firebase.auth.GoogleAuthProvider();
  let [error, setError] = useState("");

  function googleSignInPopup(provider) {
    firebase
      .auth()
      .signInWithPopup(provider)
      .then((result) => {
        let user = result.user;
        localStorage.setItem("user", JSON.stringify(user));
        props.login();
      })
      .catch((error) => {
        setError(error.message);
      });
  }

  return (
    <Container fluid className={styles.login}>
      <Container className={styles.containerLogin}>
        <Row>
          <Col className={styles.greeting}>
            <h1>Welcome</h1>
            <Button
              variant="warning"
              onClick={() => googleSignInPopup(provider)}
            >
              <Google className={styles.google}></Google> Login
            </Button>
            {error ? <p> {error} </p> : null}
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
