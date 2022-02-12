import React, { useRef, useState, Suspense } from 'react'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'

export default function Traitement() {
    return (
      <Container fluid>
        <Row>
          <Col xs={0} sm={2}>bordure gauche</Col>
          <Col xs={true}>
            <div class="paragraphe">
              <Row><h2>Titre</h2></Row>
              <Row><p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias aut, repellat ipsum facere voluptate dicta obcaecati deserunt nobis suscipit eaque?</p>
              </Row>
            </div>
          </Col>
          <Col xs={0} sm={2}>bordure droite</Col>
        </Row>
      </Container>
    );
  }