const VowelCountAndCheckPalendrome = () => {
  const textarea = document.getElementById("textarea").value;
  const countVowels = Vowels(textarea);
  const checkPalindrome = Palindrome(textarea);
  const results = document.getElementById("results");

  results.innerHTML = "Number of Vowels: " + countVowels + "<br> isPalindrome: " + checkPalindrome;
};

const Palindrome = (string) => {
  const reversedString = string.split("").reverse().join("");
  return string.toLowerCase() === reversedString.toLowerCase();
};

const Vowels = (string) => {
  let vowelsCount = 0;
  const vowelsArray = ["A", "a", "E", "e", "I", "i", "O", "o", "U", "u"];

  for (const char of string.toLowerCase()) {
    if (vowelsArray.includes(char)) {
      vowelsCount++;
    }
  }
  return vowelsCount;
};

//Three js code
let scene, camera, renderer, cube, sphere, plane, cone;

function init() {
  scene = new THREE.Scene();
  scene.background = new THREE.Color(0xffffff)
  camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
  );

  renderer = new THREE.WebGLRenderer({ antialias: true });
  renderer.setSize(window.innerWidth, window.innerHeight);
  document.body.appendChild(renderer.domElement);

  const geometry = new THREE.BoxGeometry(20, 20, 20);
  const texture = new THREE.TextureLoader().load("./Textures/Alpha5.jpg")
  const material = new THREE.MeshBasicMaterial({ map: texture });
  cube = new THREE.Mesh(geometry, material);
  scene.add(cube);

  const geometry2 = new THREE.PlaneGeometry(20, 20);
  const texture2 = new THREE.TextureLoader().load("./Textures/Alpha5.jpg")
  const material2 = new THREE.MeshBasicMaterial({
    map: texture2
  });
  plane = new THREE.Mesh(geometry2, material2);
  scene.add(plane);

  const geometry3 = new THREE.ConeGeometry(10, 20, 5);
  const texture3 = new THREE.TextureLoader().load("./Textures/Alpha5.jpg")
  const material3 = new THREE.MeshBasicMaterial({ map: texture3 });
  cone = new THREE.Mesh(geometry3, material3);
  scene.add(cone);

  const geometry4 = new THREE.SphereGeometry(15, 32, 16);
  const texture4 = new THREE.TextureLoader().load("./Textures/Alpha5.jpg")
  const material4 = new THREE.MeshBasicMaterial({ map: texture4 });
  sphere = new THREE.Mesh(geometry4, material4);
  scene.add(sphere);

  cone.position.x = -100;
  plane.position.x = 20;
  plane.position.y = 50;
  cube.position.x = 100;
  sphere.position.y = -20;
  sphere.position.z = 10;

  camera.position.z = 100;
}

function animate() {
  requestAnimationFrame(animate);

  cube.rotation.x += 0.01;
  cube.rotation.y += 0.01;
  plane.rotation.x += 0.03;
  plane.rotation.y += 0.03;
  cone.rotation.x += 0.05;
  cone.rotation.y += 0.05;
  sphere.rotation.x += 0.05;
  sphere.rotation.y += 0.05;

  renderer.render(scene, camera);
}

function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
  }
  
  window.addEventListener("resize", onWindowResize, false);
  

init();
animate();
