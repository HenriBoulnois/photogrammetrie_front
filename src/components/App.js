import React, { Suspense, useRef } from "react";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Carousel from "react-bootstrap/Carousel";
import { Canvas } from "react-three-fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";

function Chapelle({ ...props }) {
  const group = useRef();
  const { nodes } = useGLTF("/chapelle.glb");

  return (
    <group ref={group} {...props} dispose={null}>
      <mesh geometry={nodes.mesh_0.geometry} material={nodes.mesh_0.material} />
    </group>
  );
}

export default function App() {
  return (
    <Container fluid>
      <Row style={{ marginLeft: 0, marginRight: 0 }}>
        <Carousel>
          <Carousel.Item>
            <img src="images/accueilcarousel1.png" class="imgCarousel" />
            <Carousel.Caption>
              <h3>Prise large de drone</h3>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img src="images/accueilcarousel2.jpg" class="imgCarousel" />
            <Carousel.Caption>
              <h3 class="textCarousel">Prise rapprochée de drone</h3>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img src="images/accueilcarousel3.png" class="imgCarousel" />
            <Carousel.Caption>
              <h3 class="textCarousel">Modèle 3D Lider</h3>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
        <Col xs={0} sm={0} md={0} lg={2}></Col>
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
                      <a href="/smartphone" class="modelTitle">
                        La photogrammetrie au quotidien
                      </a>
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
                        <a href="/visualisation">
                          Visualisations des résultats
                        </a>
                      </li>
                      <li>
                        <a href="/lidar">Lidar</a>
                      </li>
                    </ol>
                    <li class="modelTitle">
                      <a href="/contact">Contact</a>
                    </li>
                    <li class="modelTitle">
                      <a href="/bibliographie">Bibliographie</a>
                    </li>
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
                  dans le site. (<a href="/visualisation#modeleChapelle">Lien vers le modèle et sa description</a>)
                </p>
              </Col>
              <h5>Modèle 3D Chapelle </h5>
                <Canvas camera={{ position: [0, 0, 10] }}>
                  <ambientLight intensity={0.5} />
                  <Suspense fallback={null}>
                    <OrbitControls />
                    <Chapelle position={[-8, 2, -128]} />
                  </Suspense>
                </Canvas>
              <p>
                Ce site a été réalisé par Adrien Bassail et Henri Boulnois
                <ul>
                  <li>
                    Henri Boulnois : Réalisation du site, déploiement et contact
                  </li>
                  <li>
                    Adrien Bassail : Recherches sur le sujet, modélisations 3D,
                    contenu des pages.{" "}
                  </li>
                </ul>
                N’hésitez pas a nous contacter via le{" "}
                <a href="/contact">formulaire de contact</a> pour toute
                prestation ou demande d’informations, nous prendrons soin de
                vous répondre rapidement.
              </p>
            </Row>
          </div>
        </Col>
        <Col xs={0} sm={0} md={0} lg={2}></Col>
      </Row>
    </Container>
  );
}
