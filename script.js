document.getElementById("btn1").addEventListener("click", getTemperature);
document.getElementById("btn2").addEventListener("click", getHumidity);

async function getTemperature() {
    const response = await fetch("https://api.open-meteo.com/v1/forecast?latitude=34.1842&longitude=-118.9107&hourly=temperature_2m&timezone=America%2FLos_Angeles");
    const data = await response.json();
    document.getElementById("output").innerHTML = `Temperature in celcius: ${data.hourly.temperature_2m[12]}`;
}

async function getHumidity() {
    const response = await fetch("https://api.open-meteo.com/v1/forecast?latitude=34.1842&longitude=-118.9107&hourly=relative_humidity_2m&timezone=America%2FLos_Angeles");
    const data = await response.json();
    document.getElementById("output").innerHTML = `Relative humidity: ${data.hourly.relative_humidity_2m[12]}%`;
}
