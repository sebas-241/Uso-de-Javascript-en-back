document.addEventListener("DOMContentLoaded", (event) => {   
    console.log(window.location.search.split('=')[1]);

    const servantId = window.location.search.split('=')[1];


    const servantsDetailContainer = document.querySelector('#servantsDetailContainer');

    fetch("./public/data/servants.json")
    .then(response => response.json())
    .then(data  =>{

        const servantFind = data.find(servant => servant.id === servantId);

        if(servantFind){
            console.log(servantsDetailContainer);
            servantsDetailContainer.innerHTML += `
                <article class="col-4">
                    <h2>${servantFind.name}</h2>
                    <img src="./public/assets/${servantFind.image}.jpg" alt="Imagen no disponible" width="200px">
                    <p><strong>Class: </strong>${servantFind.id}</p> 
                    <p><strong>Espiritu Heroico: </strong>${servantFind.heroic_spirit}</p> 
                    <p><strong>Serie: </strong>${servantFind.serie}</p> 
                    <p><strong>Noble Phantams: </strong>${servantFind.noble_phantasm}</p> 
                    <p><strong>Master: </strong>${servantFind.master}</p> 
                </article>`
        }
        else{
            console.log("No se encontro datos del servant")
        }

        

    })
});