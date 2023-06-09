/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.4 dount.gltf
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

 const  Model = (props) => {
  const { nodes, materials } = useGLTF('/dount.gltf')
  return (
    <group {...props} dispose={null} scale={2}>
      <mesh geometry={nodes.Torus.geometry} material={materials['Material.002']} position={[0, 0.52, 0]} rotation={[-0.44, -0.27, 0]} scale={0.34} />
      <mesh geometry={nodes.Torus001.geometry} material={materials['Material.001']} position={[0, 0.52, 0]} rotation={[-0.44, -0.27, 0]} scale={0.34} />
    </group>
  )
}
export default Model
useGLTF.preload('/dount.gltf')
