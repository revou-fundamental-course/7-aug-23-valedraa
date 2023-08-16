function hitungLuasSegitiga(base, height) {
    return 0.5 * base * height;
}

function hitungKelilingSegitiga(side1, side2, side3) {
    return side1 + side2 + side3;
}

function calculate() {
    const base = parseFloat(document.getElementById("base").value);
    const height = parseFloat(document.getElementById("height").value);
    
    const side1 = parseFloat(document.getElementById("side1").value);
    const side2 = parseFloat(document.getElementById("side2").value);
    const side3 = parseFloat(document.getElementById("side3").value);
    
    const area = hitungLuasSegitiga(base, height);
    const perimeter = hitungKelilingSegitiga(side1, side2, side3);
    
    document.getElementById("result").innerHTML = `Area of the triangle: ${area}<br>Perimeter of the triangle: ${perimeter}`;
}