(function(){var script=document.createElement('script');script.onload=function(){var stats=new Stats();document.body.appendChild(stats.dom);requestAnimationFrame(function loop(){stats.update();requestAnimationFrame(loop)});};script.src='//rawgit.com/mrdoob/stats.js/master/build/stats.min.js';document.head.appendChild(script);})()
var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
var renderer = new THREE.WebGLRenderer();
var controls;
renderer.setSize(window.innerWidth,window.innerHeight);
document.body.appendChild(renderer.domElement);

window.addEventListener('resize', function()
{
    var width = window.innerWidth;
    var height = window.innerHeight;
    renderer.setSize(width,height);
    camera.aspect = width/height;
    camera.updateProjectionMatrix();
})

controls = new THREE.OrbitControls(camera, renderer.domElement);

// var loader = new THREE.ObjectLoader();
// loader.load
// (
//     'models/poke.json',
//     function( object)
//     {
//         scene.add( object);
//     }
// );

// Creating Shape
var geometry = new THREE.BoxGeometry( 2, 2, 2);
var planeGeometry = new THREE.BoxGeometry(4,0.8,4);
var cubeMaterials = 
[
    new THREE.MeshLambertMaterial({map: new THREE.TextureLoader().load("img/banditelol1.jpg"), side: THREE.DoubleSide}),
    new THREE.MeshPhongMaterial({map: new THREE.TextureLoader().load("img/labtek1.jpg"), side: THREE.DoubleSide}),
    new THREE.MeshPhongMaterial({map: new THREE.TextureLoader().load("img/labtek2.jpg"), side: THREE.DoubleSide}),
    new THREE.MeshLambertMaterial({map: new THREE.TextureLoader().load("img/labtek3.jpg"), side: THREE.DoubleSide}),
    new THREE.MeshPhongMaterial({map: new THREE.TextureLoader().load("img/labtek4.jpg"), side: THREE.DoubleSide}),
    new THREE.MeshBasicMaterial({map: new THREE.TextureLoader().load("img/labtek4.jpg"), side: THREE.DoubleSide})
];

// Create a material
var planeMaterial = new THREE.MeshLambertMaterial( { color: 0x222222, side: THREE.DoubleSide});
var material = new THREE.MeshFaceMaterial( cubeMaterials );
var cube = new THREE.Mesh( geometry, material);
var plane = new THREE.Mesh( planeGeometry, planeMaterial);
plane.position.y = -1.8;
scene.add(cube);
scene.add(plane);


camera. position.z = 5;

var light1 = new THREE.PointLight(0x11AA11, 2.0, 50);
// scene.add(light1);
var light2 = new THREE.PointLight(0xAA2233, 2.0, 50);
// scene.add(light2);
var light3 = new THREE.PointLight(0x4433AA, 3.0, 50);
// scene.add(light3);
var light4 = new THREE.PointLight(0x110088, 4.0, 50);
// scene.add(light4);
var lighting = new THREE.AmbientLight(0xAAAAAA,1.0 );
scene.add(lighting);
var dirLight = new THREE.DirectionalLight(0xFFFFFF, 2.0);
dirLight.position.set(1,0,0);
// scene.add(dirLight);
var spotLight = new THREE.SpotLight(0xFFFFFF, 3.0);
spotLight.position.set(0,3,0);
scene.add(spotLight);



//Logic
var update = function()
{
    let time = Date.now() * 0.0005;

    light1.position.x = Math.sin(time*0.7) * 30;
    light1.position.x = Math.cos(time*0.2) * 40;
    light1.position.x = Math.sin(time*0.4) * 30;

    light2.position.x = Math.cos(time*0.1) * 30;
    light2.position.x = Math.cos(time*0.4) * 40;
    light2.position.x = Math.sin(time*0.8) * 30;

    light3.position.x = Math.sin(time*0.1) * 30;
    light3.position.x = Math.cos(time*0.1) * 40;
    light3.position.x = Math.cos(time*0.2) * 30;

    light4.position.x = Math.sin(time*0.6) * 30;
    light4.position.x = Math.cos(time*0.5) * 40;
    light4.position.x = Math.sin(time*0.9) * 30;

    // cube.rotation.x += 0.01;
    // cube.rotation.y += 0.005;
};

//Drawing
var render = function()
{
    renderer.render(scene, camera);
};

//Game Loop : update render repeat
var GameLoop = function()
{
    requestAnimationFrame(GameLoop);
    update();
    render();
};

GameLoop();