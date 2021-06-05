import * as THREE from 'three';
import {useEffect} from "react";
import {OBJLoader} from "three/examples/jsm/loaders/OBJLoader";
import {Vector3} from "three";


let scene;
let camera;
let renderer;
let light;

let torque;

let mx = 0;
let my = 0;

let loader = new OBJLoader();


let lastTime = performance.now()

//animation
function animate() {
    let currentTime = performance.now()
    let dt = (currentTime - lastTime) * 0.001;
    lastTime = currentTime;

    requestAnimationFrame(animate);
    light.position.x += mx * dt;
    light.position.y += my * dt;
    light.position.x = Math.max(-20 , Math.min(light.position.x , 20))
    light.position.y = Math.max(-10 , Math.min(light.position.y , 10))

    torque.up = light.position;

    renderer.render(scene, camera);

}


async function getThreeJSCanvas(container) {
    scene = new THREE.Scene();
    scene.background = new THREE.Color("rgb(0,0,0,00)");

    //add camera
    camera = new THREE.PerspectiveCamera(
        75,
        container.clientWidth / container.clientHeight
    );

    //renderer
    renderer = new THREE.WebGLRenderer();
    renderer.setSize(container.clientWidth, container.clientHeight);


    // load torque logo
    torque = await loader.loadAsync("./torquelogo.obj")
    console.log(torque)
    torque.children[0].material = new THREE.MeshPhysicalMaterial({color: "aaa", roughness:0.2, metalness:0.7});
    torque.rotation.x = Math.PI * 0.5;
    scene.add(torque);

    //load light

    light = new THREE.DirectionalLight("white", 1);
    light.target = torque;
    light.position.x = 10;
    light.position.y = 10;
    light.position.z = 20;


    scene.add(light)


    camera.position.z = 2;

    return renderer.domElement
}


export function TorqueTittle() {

    useEffect(() => {
        const fetchData = async () => {
            let element = document.getElementById("Render");
            if (element.children.length === 0) {
                let sceneDom = await getThreeJSCanvas({
                    clientWidth: element.clientWidth,
                    clientHeight: element.clientHeight
                });
                element.appendChild(sceneDom);
                animate()

            }
        }
        fetchData().then(() => {
        });
    })


    return <div id={"Render"} style={{
        "background-color" : "black",
        top: "10px",
        position: "absolute",
        width: "25%",
        height: "25%",
        transform: "translate(150%)"
    }}
                onMouseMove={(ev) => {
                    mx = ev.movementX
                    my = ev.movementY
                }}
    />;
}
