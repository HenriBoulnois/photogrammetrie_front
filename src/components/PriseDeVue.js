import React from "react";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

export default function PriseDeVue() {
  return (
    <Container fluid>
      <Row style={{ marginLeft: 0, marginRight: 0 }}>
        <Col xs={0} sm={2}></Col>
        <Col xs={true}>
          <div class="paragraphe">
            <h1>Collecte d'images</h1>
            <p>
              Avant de pouvoir créer un modèle 3D par photogrammétrie, il faut
              impérativement une source de données. Ici, notre source de données
              sera des images. Elles peuvent être prises par différents
              appareils comme un smartphone, un appareil photo ou encore un
              drone en fonction du besoin.
            </p>
            <h2>1. Photogrammétrie a partir d’un smartphone</h2>
            <p>
              Il est possible de modéliser simplement un modèle 3D juste à
              partir de la caméra d’un smartphone et d’un ordinateur performant.
              Il faut une bonne définition d’image (au minimum 10 millions de
              pixels par image) et environ 75 images pour un modèle de 15 à 30
              cm de hauteur. Il est très important de capturer les images selon
              une méthode spécifique. Il faudra tourner autour de l’objet en
              question. Chaque image devra se chevaucher avec la précédente sur
              environ 60 à 80% de l’image. Cela permettra de trouver des points
              similaires entre chaque image.
            </p>
            <div class="backImg">
              <img src="images/PriseDeVueImg1.jpg" />
              <p class="legende">
                Ici, on voit sous forme de schéma le processus de prise de
                photos avec le smartphone.{" "}
              </p>
            </div>
            <p>
              Toutes ses images permettront, une fois importées dans le logiciel
              et traitées correctement de générer un objet 3D qui est par
              exemple imprimable ou utilisable dans un jeu vidéo.
            </p>
            <h2>2. Photogrammétrie par prise de vue aérienne</h2>
            <p>
              On peut également créer un modèle 3D à partir d’images prises par
              un drone. Il est possible de créer un plan non détaillé d’un
              ensemble ou avoir une modélisation 3D très précise d’un batiment
              ou une zone. Il existe des applications qui permettent de faire de
              la prise de vue par drone de façon semi automatisée. J’ai utilisé
              lors de mes tests l’application PIX4D capture.
            </p>
            <div class="backImg">
              <Row>
                <Col xs={true}>
                  <img src="images/PriseDeVueImg2.jpg" />
                </Col>
                <Col xs={true}>
                  <img src="images/PriseDeVueImg3.jpg" />
                  <p class="legende">
                    Capture d’écran de l’application après la prise de vue, qui
                    montre toutes les images prises dans le quadrillage, ainsi
                    que le compte rendu de l’application
                  </p>
                </Col>
              </Row>
            </div>
            <br />
            <p>
              L’utilisation est assez simple. Il faut délimiter une zone et
              altitude de travail, ensuite le drone quadrillera la zone en
              prenant de nombreuses photos. Cela permet de créer un modèle assez
              précis de la zone délimitée dans l’application.
            </p>
            <div class="backImg">
              <img src="images/PriseDeVueImg4.jpg" />
              <p class="legende">
                Rendu après traitement par le logiciel des 127 images prises
                ci-dessus.{" "}
              </p>
            </div>
            <p>
              Dans certains cas, cette modélisation suffit. Mais parfois, il
              peut être nécessaire d’avoir un modèle généré plus précis et avec
              de belles textures. Pour cela, certains logiciels comme Agisoft
              Metashape permettent de générer un plan de vol au drone après un
              premier jet de modélisation. Le plan de vol tient compte des
              contraintes du terrain, et permet au drone de s’approcher au plus
              près des structures sans entrer en collision avec. Il est
              recommandé de ne pas s’approcher a moins de 3 mètres d’un objet
              modélisé dans le logiciel afin de garder une certaine marge de
              sécurité entre le modèle généré et la réalité. Ce plan de vol plus
              détaillé permet de prendre beaucoup plus d’images et sous de
              nombreux angles. Il présente de nombreux avantages et permet
              d’avoir un objet 3D final très détaillé.
            </p>
            <div class="backImg">
              <img src="images/PriseDeVueImg5.jpg" />
              <p class="legende">
                Cette image montre le plan de vol détaillé modélisé dans le
                logiciel Agisoft Metashape
              </p>
            </div>
            <h2 id="chapitre3">3. Conditions de réussite de la prise de vue</h2>
            <p>
              Pour une bonne prise de vue, il faut absolument que certaines
              conditions soient réunies. Il faut que la zone soit bien éclairée,
              avec (pour le drone) un luminosité extérieure élevée et si
              possible peu de zones d’ombre. Les zones ombragées seront
              reportées sur le modèle et peuvent donner un rendu médiocre de la
              modélisation 3D. Il faut également penser si le matériel le
              permet, à utiliser le format de fichier RAW afin d’avoir un
              maximum de données par image. Il est également inutile d’utiliser
              des filtres ou de retoucher les images avant traitement. Les
              images RAW sont celles qui contiennent le plus d’informations, et
              seront donc bien plus intéressantes pour avoir de bons résultats
              de modélisation.
            </p>
            <p>
              Il est également possible d’imprimer des modèles 3D générés afin
              d’avoir de meilleures représentations visuelles de l’espace, et
              ainsi créer des maquettes simplement.
            </p>
          </div>
        </Col>
        <Col xs={0} sm={2}></Col>
      </Row>
    </Container>
  );
}
