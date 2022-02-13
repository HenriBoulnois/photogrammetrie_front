import React, { useRef, Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { useGLTF, OrbitControls } from "@react-three/drei";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import "./App.css";

function Rails({ ...props }) {
  const group = useRef();
  const { nodes } = useGLTF("/rails.glb");

  return (
    <group ref={group} {...props} dispose={null}>
      <mesh geometry={nodes.mesh_0.geometry} material={nodes.mesh_0.material} />
    </group>
  );
}

function RailsFull({ ...props }) {
  const group = useRef();
  const { nodes } = useGLTF("/railsfull.glb");

  return (
    <group ref={group} {...props} dispose={null}>
      <mesh geometry={nodes.mesh_0.geometry} material={nodes.mesh_0.material} />
    </group>
  );
}

function Chapelle({ ...props }) {
  const group = useRef();
  const { nodes } = useGLTF("/chapelle.glb");

  return (
    <group ref={group} {...props} dispose={null}>
      <mesh geometry={nodes.mesh_0.geometry} material={nodes.mesh_0.material} />
    </group>
  );
}
function Maison({ ...props }) {
  const group = useRef();
  const { nodes } = useGLTF("/maison.glb");

  return (
    <group ref={group} {...props} dispose={null}>
      <mesh geometry={nodes.mesh_0.geometry} material={nodes.mesh_0.material} />
    </group>
  );
}

function Maison2({ ...props }) {
  const group = useRef();
  const { nodes } = useGLTF("/maison2.glb");

  return (
    <group ref={group} {...props} dispose={null}>
      <mesh geometry={nodes.mesh_0.geometry} material={nodes.mesh_0.material} />
    </group>
  );
}

export default function Visualisation() {
  return (
    <Container fluid>
      <Row style={{ marginLeft: 0, marginRight: 0 }}>
        <Col xs={0} sm={2}>
        </Col>
        <Col xs={true} sm={8}>
          <div class="paragraphe">
            <h1>Modèles 3D générés par photogrammétrie </h1>
            <p>
              Vous pouvez retrouver ici différents modèle 3D générés, avec leurs
              paramètres. N’hésitez pas à les manipuler.
            </p>
            <h5>Modèle 1 : Champ, chemins, passage à niveau et rails </h5>
            <ul>
              <li>386 Images JPEG </li>
              <li>Prise de vue au soleil, par beau temps </li>
              <li>5h de traitement </li>
            </ul>
            <div class="backImg">
              <Canvas camera={{ position: [0, 0, 100] }}>
                <ambientLight intensity={0.5} />
                <Suspense fallback={null}>
                  <OrbitControls />
                  <RailsFull position={[-10, -30, -120]} />
                </Suspense>
              </Canvas>
              <p class="legende">
                Ce modèle est le celui qui comporte le plus d’images que j’ai
                réussi a traiter. La qualité de traitement est moyenne. Son
                processus de création est détaillé sur les différentes pages de
                l'onglet Modélisation.{" "}
              </p>
            </div>
            <br />
            <h5>Modèle n°2 : Passage à niveau, rails </h5>
            <ul>
              <li>386 Images JPEG </li>
              <li>Prise de vue au soleil, par beau temps </li>
              <li>4h20 de traitement </li>
            </ul>
            <div class="backImg">
              <Canvas camera={{ position: [0, 0, 100] }}>
                <ambientLight intensity={0.5} />
                <Suspense fallback={null}>
                  <OrbitControls />
                  <Rails position={[30, 0, -125]} />
                </Suspense>
              </Canvas>
              <p class="legende">
                J’ai choisi d’extraire une partie du grand modèle et d’en
                améliorer la qualité. Néanmoins, on observe peu d’améliorations
                sur ce modèle. Les rails sont un peu plus détaillés, mais la
                différence n’est pas significative.
              </p>
            </div>
            <br />
            <h5 id="modeleChapelle">Modèle n°3 Chapelle </h5>
            <ul>
              <li>154 images RAW (150 alignées) </li>
              <li>
                Prise de vue au soleil couchant, on observe un contrejour sur
                une face du modèle{" "}
              </li>
              <li>2h20 de traitement </li>
              <li>Traité avec un plan de vol généré par Agisoft Metashape </li>
            </ul>
            <div class="backImg">
              <Canvas camera={{ position: [0, 0, 10] }}>
                <ambientLight intensity={0.5} />
                <Suspense fallback={null}>
                  <OrbitControls />
                  <Chapelle position={[-8, 2, -128]} />
                </Suspense>
              </Canvas>
              <p class="legende">
                Ce modèle est le seul que j’ai traité avec un plan de vol généré
                avec le logiciel de traitement. (
                <a href="/Traitement">Lien vers le chapitre sur le traitement</a>). On peut observer une
                bonne qualité et une belle restitution des détails, excepté sur
                la face avant qui manque de détails, en raison d’une mauvaise
                luminosité.
              </p>
            </div>
            <br />
            <h5>Modèle n°4 Maison individuelle et alentours</h5>
            <ul>
              <li>130 Images JPEG </li>
              <li>Prise de vue au soleil, par beau temps </li>
              <li>2h00 de traitement </li>
            </ul>
            <div class="backImg">
              <Canvas camera={{ position: [0, 0, 100] }}>
                <ambientLight intensity={0.5} />
                <Suspense fallback={null}>
                  <OrbitControls />
                  <Maison position={[20, 0, -120]} />
                </Suspense>
              </Canvas>
              <p class="legende">
                Ce modèle est très intéressant à étudier, et montre les limites
                techniques et technologiques de cette méthode de modélisation.
                La première difficulté est technique : le plan de vol doit être
                adapté aux arbres, les images sont donc prises de haut. La
                qualité globale est donc réduite. La seconde difficulté est liée
                au terrain. Les arbres et la végétation sont des objets très
                complexes à modéliser car ils ne sont pas plein de matière. La
                forêt derrière les maisons est très mal représentée. J’ai
                souhaité garder l’entièreté du modèle afin de montrer que plus
                on s’éloigne de la zone de traitement, plus la qualité est
                réduite.
              </p>
            </div>
            <br />
            <h5>Modèle n°5 : Maison individuelle et alentours</h5>
            <ul>
              <li>110 images</li>
              <li>Prise de vue au soleil, par beau temps </li>
              <li>3h20 de traitement </li>
            </ul>
            <div class="backImg">
              <Canvas camera={{ position: [0, 0, 100] }}>
                <ambientLight intensity={0.5} />
                <Suspense fallback={null}>
                  <OrbitControls />
                  <Maison2 position={[0, 0, -20]} />
                </Suspense>
              </Canvas>
              <p class="legende">
                Cette modélisation est la plus aboutie que j’ai réalisé. Elle
                est bien détaillée au centre du modèle, et est très précise.
              </p>
            </div>
            <p>
              Toutes ses modélisations ont été réalisées en accord avec les
              propriétaires des terrains que l’on peut voir apparaitre. Tous
              droits réservés. Toute reproduction ou réutilisation à des fins
              personnels ou professionnelles sont interdits.
            </p>
          </div>
        </Col>
        <Col xs={0} sm={2}>
        </Col>
      </Row>
    </Container>
  );
}
