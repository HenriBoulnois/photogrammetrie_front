import React, { useState } from "react";
import axios from "axios";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";

const Contact = () => {
  const [inputs, setInputs] = useState({});
  const [responseMessage, setresponseMessage] = useState("");

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const today = new Date();
    axios
      .post(
        "https://photogrammetrie-back.herokuapp.com/api/contact",
        {
          name: inputs.nom,
          email: inputs.email,
          date: today,
          message: inputs.message,
          esttraite: false,
        },
        {
          headers: {
            "Content-type": "application/json; charset=UTF-8",
            "Access-Control-Allow-Origin": "https://photogrammetrie-back.herokuapp.com/api/contact",
          },
        }
      )
      .then(function (response) {
        setresponseMessage("Succes");
        IsPresent();
      })
      .catch(function (error) {
        if (error.response.status === 500) {
          setresponseMessage("Erreur");
          IsPresent();
        }
      });
  };

  function IsPresent() {
    if (responseMessage === "Erreur") {
      return (
        <div class="erreur">
          <p>
            Un message de votre part est déjà en attente, l'administrateur du
            site vous répondra sous les plus brefs délais.
          </p>
        </div>
      );
    } else if (responseMessage === "Succes") {
      return (
        <div class="succes">
          <p>Votre message a été envoyé avec succès !</p>
        </div>
      );
    } else {
      return <p></p>;
    }
  }

  return (
    <Container fluid>
      <Row style={{ marginLeft: 0, marginRight: 0 }}>
        <Col xs={0} sm={2}></Col>
        <Col xs={true}>
          <div class="paragraphe">
            <h1>Page de contact</h1>
            <p>Si vous avez des questions, que vous souhaitez réaliser des prises de vue en photogrammetrie ou juste si l'un des sujets évoqués vous intéresse, n'hésitez pas à nous envoyer un message !</p>
            <form onSubmit={handleSubmit}>
              <Col>
                <label>Entrez votre nom:</label>
              </Col>
              <Col>
                <input
                  type="text"
                  name="nom"
                  value={inputs.nom || ""}
                  onChange={handleChange}
                />
              </Col>
              <Col>
                <label>Entrez votre adresse mail:</label>
              </Col>
              <Col>
                <input
                  type="email"
                  name="email"
                  value={inputs.email || ""}
                  onChange={handleChange}
                />
              </Col>
              <Row>
                <label>Entrez votre message:</label>
                <textarea
                  type="text"
                  name="message"
                  value={inputs.message || ""}
                  onChange={handleChange}
                  rows="2"
                  cols="40"
                />
              </Row>
              <div class="submitButton">
                <Button as="input" type="submit" value="Envoyer" />
              </div>
            </form>
            <IsPresent />
            <p>Ce projet a été réalisé dans le cadre du cours "Ac Lab" du Master 1 Cyber de l'Unversité Catholique de Lille</p>
            <a href="https://www.fges.fr/cursus-universitaire/licence-sts/master-informatique-cyber/">
            <img src="images/Contact1.jpg" alt="Logo fges"/></a>
            <p>Lien vers nos github : <a href="https://github.com/HenriBoulnois">Henri Boulnois</a> / <a href="https://github.com/Adrien-Ba">Adrien Bassail</a></p>
          </div>
        </Col>
        <Col xs={0} sm={2}></Col>
      </Row>
    </Container>
  );
};

export default Contact;
