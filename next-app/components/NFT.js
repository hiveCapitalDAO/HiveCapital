import React, { useCallback, useEffect, useRef, useState } from 'react'
import styled from '@emotion/styled'
import * as THREE from 'three'
import { Box3, Vector3, DirectionalLight, HemisphereLight } from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { GUI, ColorGUIHelper } from 'dat.gui'

function NFT() {
  const [scene] = useState(new THREE.Scene())
  const [light] = useState(new THREE.AmbientLight(0xffffff, 1))
  const [camera] = useState(
    new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.01,
      1000,
    ),
  )
  const [renderer] = useState(
    new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
    }),
  )
  const [controls] = useState(new OrbitControls(camera, renderer.domElement))
  const [model, setModel] = useState()

  useEffect(() => {
    // scene.add(new THREE.AxesHelper(5))
    scene.add(light)
    // light.position.set(100, 7.5, 15)
    // camera.position.set(0.5, 0, 0)

    // renderer.setSize(window.innerWidth, window.innerHeight)
    renderer.physicallyCorrectLights = true
    // renderer.setClearColor(0xcccccc)
    renderer.setPixelRatio(window.devicePixelRatio)
    // renderer.shadowMap.enabled = true
    renderer.outputEncoding = THREE.sRGBEncoding

    document.getElementById('model').appendChild(renderer.domElement)
    controls.enableDamping = true
    controls.autoRotate = true
    controls.autoRotateSpeed = 1

    const objLoader = new GLTFLoader()
    objLoader.load(
      '/hivecardblack.glb',
      (object) => {
        const obj = object.scene

        const box = new Box3().setFromObject(obj)
        const size = box.getSize(new Vector3()).length()
        const center = box.getCenter(new Vector3())

        obj.position.x += obj.position.x - center.x
        obj.position.y += obj.position.y - center.y
        obj.position.z += obj.position.z - center.z

        controls.maxDistance = size * 10
        controls.zoomSpeed = -2.5

        camera.near = size / 100
        camera.far = size * 100
        camera.updateProjectionMatrix()

        camera.position.copy(center)
        camera.position.x += size / 2.5
        camera.position.y = 0
        camera.position.z += size / 2.5
        camera.lookAt(center)

        setModel(object.scene)

        const color = 0xffffff
        const intensity = 2.5
        const light = new THREE.DirectionalLight(color, intensity)
        light.position.set(0, 10, 0)
        light.target.position.set(-4, 9, -3)
        scene.add(light)
        scene.add(light.target)

        const light2 = new THREE.DirectionalLight(color, intensity)
        light2.position.set(-18, 10, 20)
        light2.target.position.set(-4, 9, -3)
        scene.add(light2)
        scene.add(light2.target)

        const light3 = new THREE.DirectionalLight(color, intensity)
        light3.position.set(18, 12, -7)
        light3.target.position.set(-4, 9, -3)
        scene.add(light3)
        scene.add(light3.target)

        // const gui = new GUI()
        // gui.addColor(new ColorGUIHelper(light, 'color'), 'value').name('color')
        // gui.add(light, 'intensity', 0, 4, 0.01)
        // gui.add(light.target.position, 'x', -20, 20)
        // gui.add(light.target.position, 'z', -20, 20)
        // gui.add(light.target.position, 'y', 0, 10)
        // gui.add(light2.position, 'x', -20, 20)
        // gui.add(light2.position, 'z', -20, 20)
        // gui.add(light2.position, 'y', 0, 20)
        // gui.add(controls, 'zoomSpeed', -10, 10)
        // gui.open()

        scene.add(object.scene)

        // camera.lookAt(object.scene)
      },
      (xhr) => {
        console.log((xhr.loaded / xhr.total) * 100 + '% loaded')
      },
      (error) => {
        console.log(error)
      },
    )

    window.addEventListener('resize', onWindowResize, false)

    animate()
  }, [])

  function onWindowResize() {
    const width = document.getElementById('model').offsetWidth
    const height = document.getElementById('model').offsetHeight
    camera.aspect = width / height
    camera.updateProjectionMatrix()
    renderer.setSize(width, height)
    render()
  }

  function render() {
    if (document.getElementById('model')) {
      renderer.render(scene, camera)
      const width = document.getElementById('model').offsetWidth
      const height = document.getElementById('model').offsetHeight
      camera.aspect = width / height
      renderer.setSize(width, height)
    }
  }

  function animate() {
    requestAnimationFrame(animate)

    controls.update()

    render()
  }

  return <BodyModel id="model"></BodyModel>
}

export default NFT

const BodyModel = styled.div`
  height: 90%;
  width: 100%;
  cursor: pointer;
`
