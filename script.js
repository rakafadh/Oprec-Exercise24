function UbahTemperatur() {
    var temperature = parseFloat(document.getElementById("temperature").value);
    var fromUnit = document.getElementById("fromUnit").value;
    var toUnit = document.getElementById("toUnit").value;
    var resultElement = document.getElementById("result");

    var result;

    if (isNaN(temperature)){
        resultElement.innerHTML = "isi dulu dong angkanya bos";
        return;
    }

    switch (fromUnit) {
        case "celsius":
            result = UbahdariCelcius(temperature, toUnit);
            break;
        case "fahrenheit":
            result = UbahdariFahrenheit(temperature, toUnit);
            break;
        case "kelvin":
            result = UbahdariKelvin(temperature, toUnit);
            break;
        case "rheamur":
            result = UbahdariRheamur(temperature, toUnit);
            break;
    }

    resultElement.innerHTML = result;
}

function UbahdariCelcius(temperature, toUnit) {
    switch (toUnit) {
        case "fahrenheit":
            hasil = `${temperature} kita masukkan ke rumus (${temperature} x 9/5) + 32 sehingga hasilnya ${(temperature * 9/5) + 32} °Fahrenheit.`;
            return hasil;
        case "kelvin":
            hasil = `${temperature} kita masukkan ke rumus ${temperature} + 273  sehingga hasilnya ${temperature + 273} Kelvin.`;
            return hasil;
        case "rheamur":
            hasil = `${temperature} kita masukkan ke rumus ${temperature} x 4/5 sehingga hasilnya ${temperature * 4/5} °Rheamur`;
            return hasil;;
        default:
            return "Masukkan satuan yg berbeda :)";
    }
}

function UbahdariFahrenheit(temperature, toUnit) {
    switch (toUnit) {
        case "celsius":
            hasil = `${temperature} kita masukkan ke rumus (${temperature} - 32) x 5/9 sehingga hasilnya ${(temperature - 32) * 5/9} °Celsius.`;
            return hasil;
        case "kelvin":
            hasil = `${temperature} kita masukkan ke rumus ((${temperature} - 32) x 5/9) + 273 sehingga hasilnya ${((temperature - 32) * 5/9) + 273} Kelvin.`;
            return hasil;
        case "rheamur":
            hasil = `${temperature} kita masukkan ke rumus (${temperature} - 32) x 4/9 sehingga hasilnya ${(temperature - 32) * 4/9} °Rheamur.`;
            return hasil;
        default:
            return "Masukkan satuan yg berbeda :)";
    }
}

function UbahdariKelvin(temperature, toUnit) {
    switch (toUnit) {
        case "celsius":
            hasil = `${temperature} kita masukkan ke rumus ${temperature} - 273 sehingga hasilnya ${(temperature - 273)} °Celcius.`;
            return hasil;
        case "fahrenheit":
            hasil = `${temperature} kita masukkan ke rumus (${temperature} - 273) x 9/5 + 32 sehingga hasilnya ${((temperature - 273) * 9/5) + 32} °Fahrenheit.`;
            return hasil;
        case "rheamur":
            hasil = `${temperature} kita masukkan ke rumus (${temperature} - 273) x 4/5 sehingga hasilnya ${((temperature - 273) * 4/5)} °Rheamur.`;
            return hasil;
        default:
            return "Masukkan satuan yg berbeda :)";
    }
}

function UbahdariRheamur(temperature, toUnit) {
    switch (toUnit) {
        case "celsius":
            hasil = `${temperature} kita masukkan ke rumus ${temperature} x 5/4 sehingga hasilnya ${(temperature * 5/4)} °Celsius.`;
            return hasil;
        case "fahrenheit":
            hasil = `${temperature} kita masukkan ke rumus ${temperature} x 9/4 + 32 sehingga hasilnya ${(temperature * 9/4) + 32} °Fahrenheit.`;
            return hasil;
        case "kelvin":
            hasil = `${temperature} kita masukkan ke rumus ${temperature} * 5/4 + 273 sehingga hasilnya ${(temperature * 5/4) + 273} Kelvin.`;
            return hasil;
        default:
            return "Masukkan satuan yg berbeda :)";
    }
}

function handleClick(param) {
    switch (param) {
        case 'temp':
            return location.href = "#123";
        case 'essay':
            return location.href = "#234";
    }
}