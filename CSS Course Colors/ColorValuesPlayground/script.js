document.getElementById('hexInput').addEventListener('input', function(e) {
    const hexColor = e.target.value;
    document.getElementById('hexValue').textContent = hexColor;
    document.getElementById('hexBox').style.backgroundColor = hexColor;
});

function updateRGB() {
    const r = document.getElementById('redInput').value;
    const g = document.getElementById('greenInput').value;
    const b = document.getElementById('blueInput').value;
    document.getElementById('redValue').textContent = r;
    document.getElementById('greenValue').textContent = g;
    document.getElementById('blueValue').textContent = b;
    document.getElementById('rgbBox').style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
}

document.getElementById('redInput').addEventListener('input', updateRGB);
document.getElementById('greenInput').addEventListener('input', updateRGB);
document.getElementById('blueInput').addEventListener('input', updateRGB);

function updateHSL() {
    const h = document.getElementById('hueInput').value;
    const s = document.getElementById('saturationInput').value;
    const l = document.getElementById('lightnessInput').value;
    document.getElementById('hueValue').textContent = h;
    document.getElementById('saturationValue').textContent = s;
    document.getElementById('lightnessValue').textContent = l;
    document.getElementById('hslBox').style.backgroundColor = `hsl(${h}, ${s}%, ${l}%)`;
}

document.getElementById('hueInput').addEventListener('input', updateHSL);
document.getElementById('saturationInput').addEventListener('input', updateHSL);
document.getElementById('lightnessInput').addEventListener('input', updateHSL);
