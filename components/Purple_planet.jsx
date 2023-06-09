/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.4 purple_planet.gltf
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Model(props) {
  const { nodes, materials } = useGLTF('/purple_planet.gltf')
  return (
    <group {...props} dispose={null} scale={1.9}>
      <mesh geometry={nodes.Icosphere.geometry} material={materials['Material.001']} position={[0, 0.03, -0.08]} rotation={[0.23, 0, 0]} />
      <mesh geometry={nodes.Icosphere001.geometry} material={materials['Material.011']} position={[0, -0.33, 1.42]} rotation={[0.23, 0, 0]} scale={0.14} />
      <mesh geometry={nodes.Icosphere002.geometry} material={materials['Material.009']} position={[0.83, 1.11, 0.57]} rotation={[0.23, 0, 0]} scale={0.06} />
      <mesh geometry={nodes.Icosphere003.geometry} material={materials['Material.013']} position={[-1.53, 0.05, -0.08]} rotation={[0.23, 0, 0]} scale={0.07} />
      <mesh geometry={nodes.Icosphere004.geometry} material={materials['Material.010']} position={[0.53, 0.38, -1.49]} rotation={[0.23, 0, 0]} scale={0.14} />
      <mesh geometry={nodes.Icosphere005.geometry} material={materials['Material.007']} position={[0, 0.95, 0.15]} rotation={[0.23, 0, 0]} scale={0.14} />
      <mesh geometry={nodes.Icosphere006.geometry} material={materials['Material.012']} position={[0, 0.03, 0.85]} rotation={[0.23, 0, 0]} scale={0.14} />
      <mesh geometry={nodes.Icosphere007.geometry} material={materials['Material.008']} position={[-0.46, 0.08, -0.89]} rotation={[0.23, 0, 0]} scale={0.14} />
      <mesh geometry={nodes.Torus002.geometry} material={materials['Material.014']} position={[0, 0.03, -0.08]} rotation={[0.23, 0, 0]} scale={0.58} />
      <mesh geometry={nodes.Torus003.geometry} material={materials['Material.003']} position={[0.9, 0.17, -0.19]} rotation={[0.23, 0, 0]} />
      <mesh geometry={nodes.Torus001.geometry} material={materials['Material.004']} position={[0.9, 0.17, -0.19]} rotation={[-1.35, 0, 0]} />
      <mesh geometry={nodes.Torus004.geometry} material={materials['Material.006']} position={[-0.46, 0.76, 0.09]} rotation={[-1.35, 0, 0]} />
      <mesh geometry={nodes.Torus005.geometry} material={materials['Material.005']} position={[-0.46, -0.02, 0.72]} rotation={[-1.35, -0.01, 0.93]} />
      <mesh geometry={nodes.Icosphere008.geometry} material={materials['Material.002']} position={[0, 0.03, -0.08]} rotation={[0.23, 0, 0]} scale={-1.07} />
    </group>
  )
}

useGLTF.preload('/purple_planet.gltf')
