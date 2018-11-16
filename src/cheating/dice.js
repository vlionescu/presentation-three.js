import * as THREE from 'three';

const container = document.getElementById('container');

const camera   = new THREE.PerspectiveCamera( 75, 1, 0.1, 1000 );
const scene    = new THREE.Scene( );
const renderer = new THREE.WebGLRenderer();

scene.background = new THREE.Color( 0xffffff );

renderer.setClearColor( 0xffffff, 0);
renderer.setSize( 80, 80);
container.appendChild( renderer.domElement );

camera.position.z = 1.5;

const ambientLight = new THREE.AmbientLight( 0xFFFFFF, 0.8 );
scene.add( ambientLight );

const geometry = new THREE.BoxGeometry( 1, 1, 1 );

const cubeMaterials = [
    new THREE.MeshPhongMaterial( { map: new THREE.TextureLoader( ).load( './images/dice/side1.png' ), side: THREE.DoubleSide } ), //RIGHT
    new THREE.MeshPhongMaterial( { map: new THREE.TextureLoader( ).load( './images/dice/side2.png' ), side: THREE.DoubleSide } ), //LEFT
    new THREE.MeshPhongMaterial( { map: new THREE.TextureLoader( ).load( './images/dice/side3.png' ), side: THREE.DoubleSide } ), //TOP
    new THREE.MeshPhongMaterial( { map: new THREE.TextureLoader( ).load( './images/dice/side4.png' ), side: THREE.DoubleSide } ), //BOTTOM
    new THREE.MeshPhongMaterial( { map: new THREE.TextureLoader( ).load( './images/dice/side5.png' ), side: THREE.DoubleSide } ), //FRONT
    new THREE.MeshPhongMaterial( { map: new THREE.TextureLoader( ).load( './images/dice/side6.png' ), side: THREE.DoubleSide } )  //BACK
];
const material = new THREE.MeshFaceMaterial( cubeMaterials );

const cube = new THREE.Mesh( geometry, material );

scene.add( cube );

GameLoop(cube);

function update ( cube ) {
    cube.rotation.y += 0.03;
    cube.rotation.x += 0.03;
    cube.rotation.z += 0.03;
}

function render( ) {
    renderer.render( scene, camera );
}

function GameLoop ( cube ) {
    requestAnimationFrame( ( ) => GameLoop( cube ) );

    update( cube );
    render( );
}