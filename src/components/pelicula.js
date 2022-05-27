import React from "react";
import {FormattedDate, FormattedNumber, FormattedPlural, FormattedMessage} from 'react-intl';

const Pelicula = (props) => {
  return (
    <tr>
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