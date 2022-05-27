import React, { useState } from "react";
import { FormattedMessage } from "react-intl";
import Pelicula from "./pelicula";


const Ejemplo = () => {
    let url;
    const userLang = navigator.language || navigator.userLanguage;
    if (userLang === "es") {
        url = "https://gist.githubusercontent.com/josejbocanegra/f784b189117d214578ac2358eb0a01d7/raw/2b22960c3f203bdf4fac44cc7e3849689218b8c0/data-es.json";
    }
    else {
        url = "https://gist.githubusercontent.com/josejbocanegra/8b436480129d2cb8d81196050d485c56/raw/48cc65480675bf8b144d89ecb8bcd663b05e1db0/data-en.json";
    }



    fetch(url)
        .then(response => response.json())
        .then(data => {

            console.log(data, "34");
            return (
                <div>
                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col"><FormattedMessage id="Name" /></th>
                                <th scope="col"><FormattedMessage id="Directed" /></th>
                                <th scope="col"><FormattedMessage id="Country" /></th>
                                <th scope="col"><FormattedMessage id="Budget" /></th>
                                <th scope="col"><FormattedMessage id="Release" /></th>
                                <th scope="col"><FormattedMessage id="Views" /></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row">1</th>
                                <td>3</td>
                                <td>3</td>
                                <td>3</td>
                                <td>3</td>
                                <td> 3</td>
                                <td>3</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            )

        });
};

export default Ejemplo;