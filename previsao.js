const button = document.querySelector(".button"); // trazendo o botão do HTML para o JS
const input = document.querySelector(".input"); // trazendo o input do HTML para o JS

function previsaoTempo() {
    const cidade = input.value;
    const apiKEY = "71ebb75d90dc912a9a02e9b33fe02ea8";
    const url = `http://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${apiKEY}&units=metric`;

    fetch(url)
        .then(response => {
            console.log("Resposta bruta:", response);
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            console.log("Dados recebidos:", data);
            const tempMin = data.main.temp_min;
            const tempMax = data.main.temp_max;
            const tempAtual = data.main.temp;
            const weather = data.weather[0].description;
            const weathericon = data.weather[0].icon;

            document.querySelector(".temp").innerHTML = `
            <img src="./img/cold_7875356.png" alt="Termometro frio">
            <p>Temperatura Min: ${tempMin}°C</p>
            <p>Temperatura Atual: ${tempAtual}°C</p>
            <img src="./img/hot-temperature_7875350.png" alt="Termometro Quente">
            <p>Temperatura Max: ${tempMax}°C</p>
        `;
        document.querySelector(".prevTempo").innerHTML = `
        <div class="temp-container">
        <p>Previsão do Tempo: ${weather}</p>
            <div class="icon">
                <img src="https://openweathermap.org/img/wn/${weathericon}@2x.png" alt="ícone do tempo">
            </div>
        </div>
    `;
        })
        .catch(error => {
            console.error("Erro ao obter dados:", error);
        });
}



button.addEventListener("click", previsaoTempo);