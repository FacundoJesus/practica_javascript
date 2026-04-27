document.getElementById("convert").onclick = function() {

    let temp = parseFloat(document.getElementById("temp").value);
    let unit = document.getElementById("unit").value;

    let convertedTemp = (unit === 'C') ? (temp * 9/5) + 32 : (temp - 32) * 5/9;

    document.getElementById("converted").textContent = convertedTemp.toFixed(2);

}








