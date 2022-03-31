
const btnModalRanking = document.getElementById('btnModalRanking');
const modalBodyRanking = document.getElementById('modalBodyRanking');

const URL_BOTS = "json/bots.json";

const calcularRatio = (arr) => {
    for (let obj of arr){
        obj.ratio =  (obj.turnosTotales / obj.vecesJugadas);
    }
}
const pintarRanking = (arr) => {
    for (let obj of arr){
        let index = arr.indexOf(obj)
        let puesto = index + 1
        
        const element = document.createElement('tr');
        element.innerHTML = 
        `<th scope="row">${puesto}</th>
        <td>${obj.nombre}</td>
        <td>${obj.ratio}</td>
        <td>${obj.turnosTotales}</td>
        <td>${obj.vecesJugadas}</td>`;
        modalBodyRanking.appendChild(element);
    }
}

const ranking = () => {
    fetch(URL_BOTS)
    .then( (res) => res.json())
    .then( (data) => {
        console.log(data);
        let arrayUsuariosTotal = [...data];
        console.log(arrayUsuariosTotal);
        console.log(arrayUsuarios);
        
        arrayUsuariosTotal = arrayUsuariosTotal.concat(arrayUsuarios);
        console.log(arrayUsuariosTotal);

        calcularRatio(arrayUsuariosTotal);
        arrayUsuariosTotal.sort((a, b) => a.ratio - b.ratio);  
        console.log(arrayUsuariosTotal[0].nombre);

        pintarRanking(arrayUsuariosTotal);
        





        // data.forEach((producto) => {
        //     const li = document.createElement('li')
        //     li.innerHTML = `
        //         <h4>${producto.nombre}</h4>
        //         <p>${producto.precio}</p>
        //         <p>Código: ${producto.id}</p>
        //         <hr/>
        //     `

        //     lista.append(li)
        // })

    })
}

// ranking();
btnModalRanking.addEventListener('click', ranking);