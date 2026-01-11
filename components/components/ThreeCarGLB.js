"use client"
import * as THREE from "three"
import { useEffect, useRef } from "react"
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader"
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls"

export default function ThreeCarGLB({ modelPath }) {
  const mountRef = useRef(null)

  useEffect(() => {
    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(
      45,
      mountRef.current.clientWidth / 500,
      0.1,
      1000
    )
    camera.position.set(0, 1.5, 5)

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true })
    renderer.setSize(mountRef.current.clientWidth, 500)
    renderer.setPixelRatio(window.devicePixelRatio)
    mountRef.current.appendChild(renderer.domElement)

    const ambient = new THREE.AmbientLight(0xffffff, 0.5)
    const directional = new THREE.DirectionalLight(0xffffff, 1)
    directional.position.set(5, 5, 5)
    scene.add(ambient, directional)

    const controls = new OrbitControls(camera, renderer.domElement)
    controls.enableDamping = true
    controls.autoRotate = true
    controls.autoRotateSpeed = 1.2

    const loader = new GLTFLoader()
    loader.load(modelPath, (gltf) => {
      const model = gltf.scene
      model.scale.set(1.5, 1.5, 1.5)
      scene.add(model)
    })

    function animate() {
      requestAnimationFrame(animate)
      controls.update()
      renderer.render(scene, camera)
    }
    animate()

    return () => {
      mountRef.current.removeChild(renderer.domElement)
    }
  }, [modelPath])

  return <div ref={mountRef} className="w-full h-[500px]" />
      }
