import React from "react";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Carousel from "react-bootstrap/Carousel";

export default function Traitement() {
  return (
    <Container fluid>
      <Row>
        <Col xs={0} sm={2}></Col>
        <Col xs={true}>
          <div class="paragraphe">
            <h1>Traitement par ordinateur</h1>
            <h2>1. Choix du logiciel de traitement</h2>
            <Row>
              <Col>
                <p>
                  Il existe de nombreux logiciels qui permettent de traiter les
                  images et créer un rendu en 3D. J’ai choisi d’utiliser l’un
                  d’entre eux : Agisoft Metashape.
                </p>
              </Col>
              <Col xs={3}>
                <img src="images/Traitement1.jpg" />
              </Col>
            </Row>
            <p>
              J’ai choisi ce logiciel car malgré le fait qu’il soit payant, il
              est très bien documenté et en français, ce qui offre un confort
              d’utilisation non négligeable. Il est beaucoup utilisé et de
              nombreux tutoriels sont disponibles pour aider à le paramétrer.
            </p>
            <p>
              Lien vers Metashape :
              <a href="https://www.agisoft.com/"> https://www.agisoft.com/</a>
            </p>
            <Row>
              <Col xs={3}>
                <img src="images/Traitement2.jpg" />
              </Col>
              <Col>
                <p>
                  D’autres logiciels existent, notamment MicMac qui est un
                  logiciel open source développé par l’Institut de Géographie
                  National Français. Il est adapté aux utilisateurs aguerris qui
                  sont à l’aise avec tous les principes de base de la
                  photogrammétrie.
                </p>
              </Col>
            </Row>
            <p>
              Lien vers MicMac :
              <a href="https://micmac.ensg.eu/index.php/Accueil">
                https://micmac.ensg.eu/index.php/Accueil
              </a>
            </p>
            <p>
              Tous les logiciels de traitement d’images par photogrammétrie
              nécessitent un ordinateur performant. Plus il y a de RAM, plus il
              sera possible de traiter un grand nombre d’images. Le minimum
              requis est de 16GO.
            </p>
            <p>
              J’ai effectué tous les modèles ci-dessous grâce à la configuration
              suivante :
            </p>
            <ul>
              <li>Intel core I7 11700K</li>
              <li>16GO de RAM</li>
              <li>Stockage SSD</li>
              <li>GPU Nvidia Geforce RTX 3080 </li>
            </ul>
            <h2>2. Traitement des images</h2>
            <p>
              Le processus de traitement des images est long, et les paramètres
              doivent être adapté à chaque modèle et environnement. Ici, une
              création « standard » de modèle 3D sera présentée. Je décrierai
              les paramètres importants et leur incidence sur le rendu.
            </p>
            <h3>A. Alignement des images</h3>
            <p>
              La première étape va être d’importer les images dans Agisoft
              Metashape, et de les aligner entre elles.
            </p>
            <div class="backImg">
              <img src="images/Traitement3.jpg" />
              <div class="legende">
                Capture d’écran du logiciel après import des images
              </div>
            </div>
            <p>
              Dès l’import des images, on voit qu’elles sont toutes positionnées
              dans l’espace, ce qui va aider le logiciel à les aligner.
            </p>
            <p>
              Maintenant, il va falloir calculer l’alignement exact entre les
              photos. Pour cela, le logiciel va chercher des points de
              correspondance entre chaque image, afin de savoir les positionner
              entre elles, et de calculer leur angle de vue.
            </p>
            <div class="backImg">
              <Row>
                <Col>
                  <p>Pour cela, on choisit l’outil d’alignement des images :</p>
                  <p>Ces options permettent le meilleur rendement. </p>
                </Col>
                <Col>
                  <img src="images/Traitement4.jpg" />
                </Col>
              </Row>
            </div>
            <p>
              La précision haute permet de se baser sur les images en taille
              réelle. La qualité des images n’est pas réduite.
            </p>
            <p>
              La présélection générique permet de faire un prétraitement en
              basse qualité afin d’avoir un rendu plus rapide.
            </p>
            <p>
              La présélection par références séquentielles permet d’utiliser le
              numéro des photos pour aider à les aligner entre elles.
            </p>
            <p>
              Il est possible que quelques photos ne soient pas alignées, car
              aucun point de correspondance n’a été trouvé. Si beaucoup de
              photos n’ont pas été alignées (plus de 10%), la prise de photos a
              été mal réalisée et le chevauchement des images n’est pas
              suffisant. (voir{" "}
              <a href="/prise-de-vue">conseils de prise d’images</a>).
            </p>
            <div class="backImg">
              <img src="images/Traitement5.jpg" />
              <div class="legende">
                Capture d’écran du logiciel après alignement des images.{" "}
              </div>
            </div>
            <p>
              On peut voir ici que toutes les images (représentées en bleu)
              possède une direction. On voit apparaitre un nuage de points
              clairsemé qui donne une idée du rendu final du modèle.
            </p>
            <h3>B. Création d’un nuage de points dense </h3>
            <p>
              Le nuage de points dense va créer des points positionnés dans
              l’espace à partir du calcul de parallaxe (lien wiki{" "}
              <a href="https://fr.wikipedia.org/wiki/Parallaxe">parallaxe</a>)
              des images. Ce calcul est très long, et peux durer des heures. Il
              est possible de restreindre la zone de travail afin d’augmenter le
              nombre de points calculés dans une zone intéressante.
            </p>
            <div class="backImg">
              <Row>
                <Col>
                  <p>
                    On choisit l’outil de création de nuage de points dense :{" "}
                  </p>
                </Col>
                <Col>
                  <img src="images/Traitement6.jpg" />
                </Col>
              </Row>
            </div>
            <p>
              La qualité choisie déterminera le temps de traitement. La haute
              qualité traite les photos dans leur qualité d’origine. Ensuite,
              chaque niveau de qualité inférieur traite 4 fois moins de points.
            </p>
            <p>
              Une qualité ultra haute n’est intéressante qu’en cas de mesures de
              distances précises ou d’impression 3D.
            </p>
            <p>
              Le calcul de couleur des points ajoutera du temps de calcul, mais
              permet de se faire un meilleur avis sur le modèle avant de
              continuer.
            </p>
            <p>
              Il est important de calculer le niveau de confiance des points,
              nous nous en servirons ensuite pour augmenter la qualité du
              modèle.
            </p>
            <Carousel>
              <Carousel.Item>
                <img src="images/TraitementCarousel1.jpg" class="imgCarousel" />
                <Carousel.Caption>
                  <h4>
                    Nuage de points dense très précis dans une zone restreinte
                  </h4>
                  <p class="textCarousel">Environ 54 195 000 points générés</p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img src="images/TraitementCarousel2.jpg" class="imgCarousel" />
                <Carousel.Caption>
                  <h4>
                    Nuage de points dense de précision moyenne sur tout le
                    modèle
                  </h4>
                  <p class="textCarousel">Environ 22 701 000 points générés </p>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
            <p>
              Voici le résultat des traitements avec des paramètres différents.
              Les temps de traitement sont d’environ 2 à 3h pour les modèles
              suivants.
            </p>
            <h3>Retirer les points avec un faible niveau de confiance. </h3>
            <div class="backImg">
              <Row>
                <Col>
                  <img src="images/Traitement7.jpg" />
                </Col>

                <Col>
                  <img src="images/Traitement8.jpg" />
                </Col>
                <div class="legende">
                  Images représentant le modèle de rails avant et après avoir
                  retiré les points peu fiables.
                </div>
              </Row>
            </div>
            <p>
              Chaque point est généré à partir d’une ou plusieurs images. Afin
              d’éviter des déformations ou des points flottant dans le vide, il
              est intéressant de filtrer le nuage de points et de ne garder
              uniquement les points trouvés sur deux images. On aura ainsi des
              modèles plus précis.
            </p>
            <div class="backImg">
              <img src="images/Traitement9.jpg" />
              <div class="legende">
                Image représentant le niveau de confiance du grand modèle.{" "}
              </div>
            </div>
            <br />
            <div class="backImg">
              <Row>
                <Col>
                  <p>
                    On voit sur l’image à gauche la zone où est passé le drone
                    (zone quadrillée verte, et dans le rectangle jaune les
                    dimensions du modèle généré.
                  </p>
                </Col>
                <Col>
                  <img src="images/Traitement10.jpg" />
                </Col>
              </Row>
            </div>
            <p>
              On remarque que le modèle possède un niveau de confiance bien plus
              élevé sous le passage du drone que sur les côtés. Il pourrait donc
              être intéressant de ne garder que la zone sous laquelle le drone
              est passé afin d’avoir une modélisation la plus fidèle possible.
            </p>
            <h3>D. Création du modèle et de ses textures </h3>
            <p>
              Ensuite, la dernière étape consiste à créer le maillage du modèle
              3D. Ce processus va consister à relier les points en créant des
              triangles, tout en retirant les formes géométriques qui seront
              jugées comme aberrantes par l’algorithme. Ce traitement est
              également très lourd et il est important de le paramétrer
              correctement
            </p>
            <div class="backImg">
              <Row>
                <Col>
                  <p>
                    La source de données est le nuage dense généré à l’étape
                    précédente.
                  </p>
                </Col>
                <Col>
                  <img src="images/Traitement11.jpg" />
                </Col>
              </Row>
            </div>
            <p>
              Le nombre de faces est à paramétrer en fonction du paramétrage du
              nuage de points. Si le nuage de points à une qualité moyenne, le
              nombre de faces à créer doit être moyen.
            </p>
            <p>
              Il est possible de calculer les couleurs des sommets pour avoir
              une colorisation basique du modèle, avant de générer ses textures.
            </p>
            <p>
              Enfin, il faut générer des textures au modèle. Un outil permet de
              le faire automatiquement. La génération des textures est assez
              rapide, et augmente beaucoup la qualité du rendu visuel de la
              modélisation.
            </p>
            <div class="backImg">
              <img src="images/Traitement12.jpg" />
              <div class="legende">Modèle sans textures </div>
              <img src="images/Traitement13.jpg" />
              <div class="legende">Modèle texturé</div>
            </div>
            <br />
            <h2>3. Export du modèle</h2>
            <p>
              Désormais, il est possible d’exporter le modèle afin de s’en
              servir dans un autre logiciel ou de l’afficher. Nous avons choisi
              d’utiliser le format glTF qui permet de sauvegarder les textures
              et le modèle dans un même fichier. Ce format est adapté à une
              diffusion du modèle sur un site web. Vous pouvez manipuler le
              rendu final des deux modèles ci-dessous, ou d’autres modèles sur
              la page de <a href="/visualisation">visualisations</a>. Modèle
              rails complet Modèle rails rails
            </p>
          </div>
        </Col>
        <Col xs={0} sm={2}></Col>
      </Row>
    </Container>
  );
}
