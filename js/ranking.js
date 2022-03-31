
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
        let arrayUsuariosTotal = [...data];
        
        arrayUsuariosTotal = arrayUsuariosTotal.concat(arrayUsuarios);

        calcularRatio(arrayUsuariosTotal);
        arrayUsuariosTotal.sort((a, b) => a.ratio - b.ratio);  

        pintarRanking(arrayUsuariosTotal);
        

    })
}

btnModalRanking.addEventListener('click', ranking);