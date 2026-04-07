/** @format */

document.addEventListener("DOMContentLoaded", () => {
  const leftButton = document.getElementById("leftButton");
  const rightButton = document.getElementById("rightButton");
  const genGradButton = document.getElementById("genGradButton");
  const copyCode = document.getElementById("copyClipBoard");
  const leftAngle = document.getElementById("leftAngle");
  const rightAngle = document.getElementById("rightAngle");
  const topAngle = document.getElementById("topAngle");
  const bottomAngle = document.getElementById("bottomAngle");
  const main_div = document.getElementById("main_div");

  // 🎨 Generate Random Hex Color
  const HexValues = () => {
    const hexValue = "0123456789abcdef";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += hexValue[Math.floor(Math.random() * 16)];
    }
    return color;
  };

  // 🧠 Auto Contrast Text Color
  const getContrastColor = (hex) => {
    hex = hex.replace("#", "");

    let r = parseInt(hex.substring(0, 2), 16);
    let g = parseInt(hex.substring(2, 4), 16);
    let b = parseInt(hex.substring(4, 6), 16);

    let brightness = (r * 299 + g * 587 + b * 114) / 1000;

    return brightness > 128 ? "#000" : "#fff";
  };

  let rgbColor1 = HexValues();
  let rgbColor2 = HexValues();
  let angle = "right";

  // 🎯 Apply Gradient + UI Update
  const bgc = () => {
    // Left Button
    leftButton.innerText = rgbColor1;
    leftButton.style.backgroundColor = rgbColor1;
    leftButton.style.color = getContrastColor(rgbColor1);
    leftButton.style.borderColor = getContrastColor(rgbColor1);

    // Right Button
    rightButton.innerText = rgbColor2;
    rightButton.style.backgroundColor = rgbColor2;
    rightButton.style.color = getContrastColor(rgbColor2);
    rightButton.style.borderColor = getContrastColor(rgbColor2);

    // Gradient Preview
    main_div.style.background = `linear-gradient(to ${angle}, ${rgbColor1}, ${rgbColor2})`;

    // Optional: Full page background
    document.body.style.background = `linear-gradient(to ${angle}, ${rgbColor1}, ${rgbColor2})`;

    // Copy Code Text
    copyCode.innerText = `background: linear-gradient(to ${angle}, ${rgbColor1}, ${rgbColor2});`;
  };

  bgc();

  // 🎮 Handlers
  const leftButtonHandle = () => {
    rgbColor1 = HexValues();
    bgc();
  };

  const rightButtonHandle = () => {
    rgbColor2 = HexValues();
    bgc();
  };

  const genGradButtonHandle = () => {
    rgbColor1 = HexValues();
    rgbColor2 = HexValues();
    bgc();
  };

  const copyCodeHandle = () => {
    navigator.clipboard.writeText(copyCode.innerText);

    const toast = document.createElement("div");
    toast.innerText = "✅ Copied!";
    toast.className = "toastMsg";
    document.body.appendChild(toast);

    setTimeout(() => {
      toast.remove();
    }, 2000);
  };

  const leftAngleHandle = () => {
    angle = "left";
    bgc();
  };

  const rightAngleHandle = () => {
    angle = "right";
    bgc();
  };

  const topAngleHandle = () => {
    angle = "top";
    bgc();
  };

  const bottomAngleHandle = () => {
    angle = "bottom";
    bgc();
  };

  // 🎧 Events
  leftButton.addEventListener("click", leftButtonHandle);
  rightButton.addEventListener("click", rightButtonHandle);
  genGradButton.addEventListener("click", genGradButtonHandle);
  copyCode.addEventListener("click", copyCodeHandle);
  leftAngle.addEventListener("click", leftAngleHandle);
  rightAngle.addEventListener("click", rightAngleHandle);
  topAngle.addEventListener("click", topAngleHandle);
  bottomAngle.addEventListener("click", bottomAngleHandle);
});
