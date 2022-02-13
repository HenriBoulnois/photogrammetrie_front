import React from "react";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

export default function Lidar() {
  return (
    <Container fluid>
      <Row style={{ marginLeft: 0, marginRight: 0 }}>
        <Col xs={0} sm={2}></Col>
        <Col xs={true}>
          <div class="paragraphe">
            <h1>LIDAR</h1>
            <p>
              Le LIDAR (Light Detection And Ranging) est à la base une technique
              de mesure de distance. Un faisceau est émis depuis le capteur vers
              un objet, et le capteur attend son retour. Puis il calcule sa
              distance en fonction du temps qu’il a mis à faire l’aller-retour.
            </p>
            <div class="backImg">
              <img src="images/LIDAR1.jpg" />
            </div>
            <p>
              Aujourd’hui, les capteurs lidar sont capables d’envoyer de
              nombreuses ondes en même temps afin de capter de nombreux points
              en même temps. Il est ainsi possible de reconstruire des
              environnements en 3D à partir d’un nuage de points généré par le
              capteur.
            </p>
            <p>
              Ces capteurs ont encore aujourd’hui un cout assez élevé, mais
              certains smartphones commencent à en intégrer dans le but
              d’améliorer la qualité des photos prises. En effet, le lidar aide
              à la mise au point et à la gestion de flou d’arrière-plan sur un
              portrait par exemple.
            </p>
            <p>
              Aujourd’hui, les IPhone 12 pro et 13 pro sont équipés de lidar.
            </p>
            <p>
              Nous allons voir ensemble comment il est possible au travers d’une
              application, d’utiliser ce lidar afin de générer un modèle en 3
              dimensions.
            </p>
            <h2>1. Capture du modèle </h2>
            <Row>
              <Col>
              <p>
              Grâce a un iPhone 13 et l’application Polycam, nous allons voir
              comment générer un objet 3D, et comparer son rendu avec celui
              d’une photogrammétrie classique par drone. Nous pourrons ainsi en
              voir les avantages et inconvenants.
            </p>
            <p>
              Il suffit de sélectionner le mode capture via LIDAR sur
              l’application, et de se balader dans l’espace afin de modéliser la
              zone. On voit les zones scannées passer en bleu dans l’espace, ce
              qui permet de savoir ou en est la modélisation.
            </p>
            <p>
              Suite a cela, le smartphone effectue un traitement automatique du
              modèle et génère un objet 3D. Mais il est possible d’exporter
              uniquement le nuage de points pour améliorer le rendu avec un
              calcul sur ordinateur.
            </p>
              </Col>
              <Col>
              <img src="images/LIDAR2.jpg"/>
              </Col>
            </Row>
            <h2>2. Visualisation et interprétation des résultats : </h2>
            <p>
              J’ai réussi à générer les modèles suivant juste à l’aide d’un
              smartphone :
            </p>
            <div class="backImg">
            <h5>Modèle du drone </h5>
              <iframe
                width="100%"
                height="500px"
                frameborder="0"
                src="https://poly.cam/capture/1A667C2B-97BD-44D1-B20D-F031E39265C4"
              ></iframe>
              <div class="legende">
                Ici, vous pouvez observer le drone que j’ai utilisé pour faire
                toutes les prises de vue précédentes.{" "}
              </div>
            </div>
            <br />
            <div class="backImg">
              <h5>Modèle rails</h5>
              <iframe
                width="100%"
                height="500px"
                frameborder="0"
                src="https://poly.cam/capture/3C0B638F-F740-4970-8FDC-41E6093D57F4"
              ></iframe>
              <div class="legende">
                On voit que le lidar propose un niveau de détails bien plus
                élevé que la photogrammétrie par drone, mais sur un
                environnement très restreint. Le rendu des zones complexes comme
                les barrières ou les panneaux de signalisation est bon, mais il
                reste complexe sur certains objets comme des grillages qui
                n’apparaissent que peu. Cela est dû au faible retour
                d’informations au capteur LIDAR.{" "}
              </div>
            </div>
            <br />
            <div class="backImg">
              <h5>Modèle le touquet </h5>
              <iframe width="100%" height="500px" frameborder="0" src="https://poly.cam/capture/BB080C8B-22F4-4436-A760-C060BDB89448"></iframe> 
              <div class="legende">
                Le lidar, qui permet de capter l’environnement a une distance
                maximale de 5m, est très a l’aise en intérieur. On remarque
                ainsi que le rendu de modélisation d’un appartement est
                excellent, pour un temps de création restreint (moins de 5
                minutes).{" "}
              </div>
            </div>
            <h2>3. Navigation dans un de ses modèles </h2>
            <p>
            Grace a une application sur smartphone, il est possible de naviguer dans le modèle, on peut imaginer une utilisation de cette fonctionnalité pour réaliser par exemple des visites virtuelles d’appartements. Cela pourrait permettre de se faire un premier avis sur une visite de bien, sans avoir a se déplacer.  
            </p>
            <iframe width="100%" height="500px"
src="https://www.youtube.com/embed/xPZxJhGs9NE">
</iframe> 
          </div>
        </Col>
        <Col xs={0} sm={2}></Col>
      </Row>
    </Container>
  );
}
