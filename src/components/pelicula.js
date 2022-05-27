import React from "react";
import { FormattedDate, FormattedNumber, FormattedPlural, FormattedMessage } from 'react-intl';

function crearCarta(props) {
    document.getElementById("pelis").setAttribute("class", "col-9");
    var card = document.getElementById("card");
    card.innerHTML =``;
    card.removeAttribute("display");
    card.setAttribute("class", "col-3");
    let carta = `
    <div class="card" style="width: 18rem;">
        <img src="${props.ind.poster}" class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title">${props.ind.name}</h5>
            <p class="card-text">${props.ind.description}</p>
            <h5 class="card-title"> Cast: ${props.ind.cast}</h5>
        </div>
    </div>
    `;
    card.innerHTML += carta;

};



const Pelicula = (props) => {
    return (
        <tr onClick={() => { crearCarta(props) }}>
            <th scope="row">{props.ind.id}</th>
            <td>{props.ind.name}</td>
            <td>{props.ind.directedBy}</td>
            <td>{props.ind.country}</td>
            <td>{props.ind.budget}</td>
            <td> {props.ind.releaseDate}</td>
            <td>{props.ind.views}</td>
        </tr>
    );
};



export default Pelicula;



