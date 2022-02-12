import React, { useRef, useState, Suspense } from "react";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Carousel from "react-bootstrap/Carousel";

export default function App() {
  return (
    <Container fluid>
      <Row>
        <Carousel>
          <Carousel.Item>
            <img src="images/testbanniere.jpg" class="imgCarousel" />
            <Carousel.Caption>
              <h3>Prise large de drone</h3>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img src="images/testbanniere.jpg" class="imgCarousel" />
            <Carousel.Caption>
              <h3>Prise rapprochée de drone</h3>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img src="images/testbanniere.jpg" class="imgCarousel" />
            <Carousel.Caption>
              <h3>Modèle 3D Lider</h3>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
        <Col xs={0} sm={2}>
          bordure gauche
        </Col>
        <Col xs={true}>
          <div class="paragrapheAccueil">
            <Row>
              <h1>Accueil</h1>
            </Row>
            <Row>
              <Col xs={3}>
                <div class="tab">
                <ol>
                  <li>
                    <a href="/smartphone" class="modelTitle">Applications de tous les jours</a>
                  </li>
                  <li class="modelTitle">Modélisation</li>
                  <ol>
                    <li>
                      <a href="/prise-de-vue">Collecte d'images</a>
                    </li>
                    <li>
                      <a href="/traitement">Traitement</a>
                    </li>
                    <li>
                      <a href="/visualisation">Visualisations des résultats</a>
                    </li>
                  </ol>
                  <li class="modelTitle"><a href="/contact">Contact</a></li>
                </ol>
                </div>
              </Col>
              <Col>
                <p>
                  La photogrammétrie est un procédé de création d’un modèle 3D à
                  partir de nombreuses images prises d’un objet ou d’un lieu.
                </p>
                <p>
                  La photogrammétrie repose sur un calcul mathématique qui crée
                  des parallaxes. La parallaxe permet de déterminer la position
                  de l’appareil photo sur chaque photo d’une série de photos
                  prises ensemble.
                </p>
                <p>
                  Le principe étudié ici permet de transformer un jeu de photos
                  en une modélisation 3D.
                </p>
                <p>
                  Elle est utilisée dans de nombreux domaines qui peuvent nous
                  être utiles à tous. Cette technologie fait en réalité parti de
                  notre quotidien, mais nous ne nous en rendons pas forcément
                  compte.
                </p>
                <p>
                  Durant votre navigation, vous pourrez comprendre le processus
                  de création d’un modèle 3D à partir d’images reconstruites par
                  photogrammétrie, mais également manipuler les modèles 3D
                  générés.
                </p>
                <p>
                  Ci-dessus un exemple de modèle généré, que l’on retrouvera
                  dans le site.
                </p>
              </Col>
              <p>
                Ce site a été réalisé par Adrien Bassail et Henri Boulnois
                <ul><li>Henri Boulnois : Réalisation du site, déploiement et contact</li><li>Adrien Bassail : Recherches sur le sujet, modélisations 3D, contenu des pages. </li></ul>
             
             
              N’hésitez pas a nous contacter via le formulaire de contact pour toute prestation ou demande d’informations, nous prendrons soin de vous répondre rapidement. 
              </p>
            </Row>
          </div>
        </Col>
        <Col xs={0} sm={2}>
          bordure droite
        </Col>
      </Row>
    </Container>
  );
}
