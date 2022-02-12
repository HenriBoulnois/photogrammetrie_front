import React, { useRef, useState, Suspense } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { useGLTF, Sky, OrbitControls } from '@react-three/drei'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import './App.css'

function Rails({ ...props }) {
  const group = useRef()
  const { nodes, materials } = useGLTF('/rails.glb')

  return (
    <group ref={group} {...props} dispose={null}>
      <mesh geometry={nodes.mesh_0.geometry} material={nodes.mesh_0.material}/>
    </group>
  )
}


export default function App() {
  return (
    <Container fluid>
      <Row>
        <Col xs={0} sm={2}>bordure gauche</Col>
        <Col xs={true} sm={8}>
          <div class="paragraphe">
            <Canvas camera={{position: [0, 0, 100] }}>
              <Sky sunPosition={[100, 20, 100]} />
              <ambientLight intensity={0.5}/>
              <Suspense fallback={null}>
                <OrbitControls/>
                <Rails position={[30, 0, -120]}/>
              </Suspense>
            </Canvas>
          </div>
          </Col>
        <Col xs={0} sm={2}>bordure droite</Col>
      </Row>
    </Container>
  )
}
