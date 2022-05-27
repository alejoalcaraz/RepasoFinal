import React, { useState, useEffect } from "react";
import { FormattedMessage } from "react-intl";
import Pelicula from "./pelicula";


const Peliculas = () => {
    let url;
    const userLang = navigator.language || navigator.userLanguage;
    if (userLang === "es") {
        url = "https://gist.githubusercontent.com/josejbocanegra/f784b189117d214578ac2358eb0a01d7/raw/2b22960c3f203bdf4fac44cc7e3849689218b8c0/data-es.json";
    }
    else {
        url = "https://gist.githubusercontent.com/josejbocanegra/8b436480129d2cb8d81196050d485c56/raw/48cc65480675bf8b144d89ecb8bcd663b05e1db0/data-en.json";
    }
    const [data, setData] = useState([]);

    useEffect(() => {
        if (!navigator.onLine) {
            if (localStorage.getItem("jsonData") === null) {
                setData("Loading...")
            } else {
                setData(JSON.parse(localStorage.getItem("jsonData")));
            }
        } else {
            const fetchData = async () => {
                try {
                    const response = await fetch(url);
                    const json = await response.json();
                    setData(json);
                    localStorage.setItem("jsonData", JSON.stringify(json));
                } catch (error) {
                    console.log("error", error);
                }
            };

            fetchData();
        }

    }, []);
    console.log(data);
    if (data === "Loading...") {
        return (
            <div>
                <h1>
                    Loading...
                </h1>
            </div>
        );
    } else {
        return (
            <div class = "col-8">
                <table className="table table-striped">
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
                        {data.map((e, i) => (
                            console.log(e.name),
                            <Pelicula key={i} ind={e} />
                        ))}
                    </tbody>
                </table>
            </div>
        )
    }
};

export default Peliculas;