document.addEventListener("DOMContentLoaded", () => {          // Evento para cuando la pagina deje de cargar
    
    const servantsContainer = document.querySelector('#servantsContainer');     // Selector para agarrar un id del HTML

    const shuffle = (Array) => {            // Funcion para que aparezca aleatorio
        Array.sort(() => Math.random() - 0.5);
    }

    fetch("./public/data/servants.json")
    .then(response => response.json())
    .then(data =>{
        shuffle(data)       // Se pone la funcion
        data.forEach(serv => {
            servantsContainer.innerHTML += `
            <article class="col-4">
                <h2>${serv.name}</h2>
                <img src="./public/assets/${serv.image}.jpg" alt="Imagen no disponible" width="200px">
                <ul>
                    <li><p><strong>Class: </strong>${serv.id}</p> </li>
                    <li><p><strong>Master: </strong> ${serv.master}</p> </li>
                </ul>
            </article>`
        });

        console.log(datos);


    })
})

