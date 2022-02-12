import React from "react";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

export default function Smartphone() {
  return (
    <Container fluid>
      <Row>
        <Col xs={0} sm={2}></Col>
        <Col xs={true}>
          <div class="paragraphe">
            <h1>Dès le smartphone</h1>
            <h2>1. La modélisation 3D en général </h2>
            <p>
              La modélisation 3D est aujourd’hui très utilisée. Elle permet de
              créer un modèle tridimensionnel virtuel d’un objet physique.{" "}
            </p>
            <p>
              La modélisation 3D est utile dans de nombreux secteurs. La réalité
              virtuelle et les jeux vidéo sont des domaines qui en utilisent
              énormément. Mais elle est également utilisée en marketing pour
              présenter des objets ou en imagerie médicale et scientifique.
            </p>
            <p>
              Dans les pages suivantes, nous allons modéliser des objets en 3D
              par photogrammétrie ou utilisation de Lidar.
            </p>
            <h2>2. Images google maps </h2>
            <p>
              La photogrammétrie est utilisée dans de nombreux domaines qui
              peuvent nous être utiles à tous. Certaines images aériennes de
              Google sont générées grâce à ce procédé et permettent de générer
              une carte 3D avec des reliefs intéressants sur les bâtiments.
            </p>
            <div class="backImg">
              <img src="images/Smartphone1.jpg" />
              <p class="legende">
                Image du centre de Lille en 3D réalisé par photogrammétrie
                disponible sur{" "}
                <a href="https://www.google.com/maps">
                  https://www.google.com/maps
                </a>
                .{" "}
              </p>
            </div>
            <br />
            <div class="backImg">
              <img src="images/Smartphone2.jpg" />
              <p class="legende">
                Pour comparaison : images non traitées par photogrammétrie en
                campagne. (orthophotographie){" "}
              </p>
            </div>
            <p>
              On peut voir ici que l’image 3D est plate et plus basique.
              Néanmoins, Google ne peut pas se permettre de rendre toutes les
              images en 3D, car cela a un cout de calcul élevé, et il faut de
              nombreuses images satellites de la zone.
            </p>
            <p>
              Mais, cette photo plate est également réalisée par
              photogrammétrie. C’est une orthophotographie.3. (lien page de wiki
              ortophoto) En effet, les images satellites sont liées entre elles
              pour ne faire qu’une grande photo de la terre. Les points de
              correspondance qui permettent de lier les photos entre elles sont
              calculés par photogrammétrie.
            </p>
            <h2>3. LIDAR sur smartphone</h2>
            <p>
              Quelques smartphones récents haut de gamme sont équipés de Lidar.
              Ils servent initialement à améliorer la qualité des photos, mais
              ils peuvent également servir à créer des objets 3D.
            </p>
            <p>
              Grace a une application dédiée, n’importe quel propriétaire de
              smartphone haut de gamme peut générer des objets 3D. C’est très
              simple à prendre en main, mais un usage plus poussé de ses
              capteurs permet des rendus très intéressants. Voir plus de détails
              sur cette technologie + exemples. (lien vers page lidar)
            </p>
            <p>
              Voici ici un résultat de modélisations réalisées avec un IPhone 13
              Pro
            </p>
            <p>Insérer ici deux visualisations.</p>
          </div>
        </Col>
        <Col xs={0} sm={2}></Col>
      </Row>
    </Container>
  );
}
