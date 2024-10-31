var target_mili_sec = new Date("Nov 18, 2024 13:30:0").getTime();
var intervalID;

function timer() {
    var now_mili_sec = new Date().getTime();
    var remaining_sec = Math.floor((target_mili_sec - now_mili_sec) / 1000);

    if (remaining_sec <= 0) {
        // Zera todos os contadores
        document.querySelector("#day").innerHTML = "00";
        document.querySelector("#hour").innerHTML = "00";
        document.querySelector("#min").innerHTML = "00";
        document.querySelector("#sec").innerHTML = "00";
        
        // Para o cronômetro
        clearInterval(intervalID);
        
        // Exibe o pop-up
        showPopup();
    } else {
        // Calcula dias, horas, minutos e segundos restantes
        var day = Math.floor(remaining_sec / (3600 * 24));
        var hour = Math.floor((remaining_sec % (3600 * 24)) / 3600);
        var min = Math.floor((remaining_sec % 3600) / 60);
        var sec = Math.floor(remaining_sec % 60);

        // Atualiza os elementos do DOM com os valores calculados
        document.querySelector("#day").innerHTML = String(day).padStart(2, '0');
        document.querySelector("#hour").innerHTML = String(hour).padStart(2, '0');
        document.querySelector("#min").innerHTML = String(min).padStart(2, '0');
        document.querySelector("#sec").innerHTML = String(sec).padStart(2, '0');
    }
}

// Função para exibir o pop-up
function showPopup() {
    var popup = document.getElementById("popup");
    popup.classList.remove("hidden");
    popup.classList.add("show");

    // Esconde o pop-up após 5 segundos
    setTimeout(function() {
        popup.classList.remove("show");
    }, 5000);
}

// Inicializa o cronômetro
intervalID = setInterval(timer, 1000); // 1000 ms significa 1 segundo
