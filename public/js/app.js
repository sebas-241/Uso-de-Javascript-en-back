document.addEventListener("DOMContentLoaded", (event) => {          // Evento para cuando la pagina deje de cargar
    
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
                <p><strong>Class: </strong>${serv.id}</p> </li>
                <a class = "btn btn-outline-primary w-50" href="servant_detail.html?id=${serv.id}">Ver detalles</a>
            </article>`
        });

        console.log(datos);


    })
})

