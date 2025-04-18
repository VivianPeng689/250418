let hearts = []; // 將 circles 改為 hearts
let colors = ['#809bce', '#95b8d1', '#b8e0d2', '#d6eadf', '#eac4d5', '#f4bfdb', '#efd3d7'];

function setup() {
  createCanvas(windowWidth, windowHeight); // 全螢幕畫布
  background('#f8edeb'); // 設定背景顏色

  // 產生40個愛心
  for (let i = 0; i < 40; i++) {
    let heart = {
      x: random(width),
      y: random(height),
      size: random(30, 100),
      color: random(colors)
    };
    hearts.push(heart);
  }
}

function draw() {
  background('#f8edeb'); // 每次重繪背景

  // 根據滑鼠位置調整愛心的大小
  let sizeOffset = map(mouseX, 0, width, 10, 110);

  // 繪製愛心
  noStroke();
  for (let heart of hearts) {
    fill(heart.color);
    drawHeart(heart.x, heart.y, heart.size + sizeOffset);
  }
}

function drawHeart(x, y, size) {
  beginShape();
  let topCurveHeight = size * 0.3;
  vertex(x, y);
  bezierVertex(x - size / 2, y - topCurveHeight, x - size, y + size / 3, x, y + size);
  bezierVertex(x + size, y + size / 3, x + size / 2, y - topCurveHeight, x, y);
  endShape(CLOSE);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight); // 畫布隨視窗大小調整
}

function showImage(url) {
  const imageContainer = document.getElementById('image-container');
  const displayImage = document.getElementById('display-image');
  displayImage.src = url; // 設定圖片來源
  imageContainer.style.display = 'flex'; // 顯示圖片容器
}

function hideImage() {
  const imageContainer = document.getElementById('image-container');
  const displayImage = document.getElementById('display-image');
  imageContainer.style.display = 'none'; // 隱藏圖片容器
  displayImage.src = ''; // 清空圖片來源
}

function hideSubmenu() {
  const submenu = document.getElementById('submenu');
  if (submenu) {
    submenu.style.display = 'none'; // 隱藏子選單
  }
}

function showSubmenu() {
  const submenu = document.getElementById('submenu');
  if (submenu) {
    submenu.style.display = 'block'; // 顯示子選單
  }
}

function showVideo() {
  const iframeContainer = document.getElementById('iframe-container');
  const tutorialIframe = document.getElementById('tutorial-iframe');
  tutorialIframe.src = 'https://cfchen58.synology.me/%E7%A8%8B%E5%BC%8F%E8%A8%882024/B2/week8/20250407_111447.mp4';
  iframeContainer.style.display = 'flex'; // 顯示 iframe 容器
}

function hideVideo() {
  const iframeContainer = document.getElementById('iframe-container');
  const tutorialIframe = document.getElementById('tutorial-iframe');
  iframeContainer.style.display = 'none'; // 隱藏 iframe 容器
  tutorialIframe.src = ''; // 清空 iframe 的來源
}
