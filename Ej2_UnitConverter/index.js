const unitConverter = {
    mToFt: function(meters) {
        return meters * 3.28084;
    },
    kToP: function(kilograms) {
        return kilograms * 2.20462;
    },
    cToF: function(celsius) {
        return (celsius * 9/5) + 32;
    }
};

document.getElementById("convert").onclick = () => {
    let inputValue = parseFloat(document.getElementById("inputValue").value);
    let convertionType = document.getElementById("convertionType").value;

    if(!isNaN(inputValue)) {
        let convertedValue;
        convertedValue = 
                convertedValue == "mToFt" ? unitConverter.cToF(inputValue) : 
                convertedValue == "kToP " ? unitConverter.kToP(inputValue) : 
                unitConverter.cToF(inputValue); 

        document.getElementById("convertedValue").textContent = convertedValue.toFixed(2);
    }
    else {
        alert("Please enter a valid number");   
    }
    

}