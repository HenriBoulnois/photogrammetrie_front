import React from "react";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

export default function Bibliographie() {
  return (
    <Container fluid>
      <Row style={{ marginLeft: 0, marginRight: 0 }}>
        <Col xs={0} sm={2}></Col>
        <Col xs={true}>
          <div class="paragraphe">
            <h1>Bibliographie des sources du projet </h1>
            <h2>1. Partie recherche sur la photogrammétrie : </h2>
            <p>
              J’ai utilisé de nombreuses sources lors de mes recherches sur le
              sujet, mais également les documentations des logiciels qui m’ont
              apportées beaucoup d’informations importantes à la réussite du
              projet.
            </p>
            <p>
              <a href="https://blog.prusaprinters.org/photogrammetry-3d-scanning-just-phone-camera_7811/">
                https://blog.prusaprinters.org/photogrammetry-3d-scanning-just-phone-camera_7811/
              </a>
            </p>
            <p>
              <a href="https://www.exid-diagnostic.fr/les-domaines-dapplication-de-la-photogrammetrie/ ">
                https://www.exid-diagnostic.fr/les-domaines-dapplication-de-la-photogrammetrie/
              </a>
            </p>
            <p>
              <a href="https://www.becad.net/index.php/lidar-vs-photogrammetrie/ ">
                https://www.becad.net/index.php/lidar-vs-photogrammetrie/
              </a>
            </p>
            <p>
              <a href="https://fr.wikipedia.org/wiki/Photogramm%C3%A9trie ">
                https://fr.wikipedia.org/wiki/Photogramm%C3%A9trie
              </a>
            </p>
            <p>
              <a href="https://www.agisoft.com/ ">https://www.agisoft.com/ </a>+
              documentation d’utilisation d’Agisoft Metashape
            </p>
            <p>
              <a href="https://www.pix4d.com/">https://www.pix4d.com/</a>+
              documentation d’utilisation de Pix4D capture
            </p>
            <p>
              <a href="https://www.youtube.com/c/chefdesetoiles-paladrone">
                Chaine youtube paladrone
              </a>
            </p>
            <p>Notamment ces deux vidéos :</p>
            <p>
              <a href="https://www.youtube.com/watch?v=4fluMuP8P3g&ab_channel=Paladrone  ">
                https://www.youtube.com/watch?v=4fluMuP8P3g&t=376s&ab_channel=Paladrone
              </a>
            </p>
            <p>
              <a href="https://www.youtube.com/watch?v=-afgno59QcQ&ab_channel=Paladrone ">
                https://www.youtube.com/watch?v=-afgno59QcQ&ab_channel=Paladrone
              </a>
            </p>
            <h2>2. Site web</h2>
            <p>
                <a href="https://docs.pmnd.rs/react-three-fiber/getting-started/introduction">
                https://docs.pmnd.rs/react-three-fiber/getting-started/introduction
                </a>
            </p>
            <p>
                <a href="https://github.com/pmndrs/drei">
                https://github.com/pmndrs/drei
                </a>
            </p>
            <p>
                <a href="https://www.youtube.com/watch?v=xy_tbV4pC54">
                https://www.youtube.com/watch?v=xy_tbV4pC54
                </a>
            </p>
            <p>
                <a href="https://medium.com/jeremy-gottfrieds-tech-blog/tutorial-how-to-deploy-a-production-react-app-to-heroku-c4831dfcfa08">
                https://medium.com/jeremy-gottfrieds-tech-blog/tutorial-how-to-deploy-a-production-react-app-to-heroku-c4831dfcfa08
                </a>
            </p>
            <p>
                <a href="https://betterprogramming.pub/how-to-deploy-your-react-app-to-heroku-aedc28b218ae">
                https://betterprogramming.pub/how-to-deploy-your-react-app-to-heroku-aedc28b218ae 
                </a>
            </p>
            <h2>3. Java Spring Boot</h2>
            <p>J'ai surtout utilisé le support de cours de programmation par composant.</p>
            <p>Des forums pour la résolution d'un problème de déploiement avec la version de java (<a href="https://morioh.com/p/xWmnEHhoWDqX">lien</a>)</p>
          </div>
        </Col>
        <Col xs={0} sm={2}></Col>
      </Row>
    </Container>
  );
}
