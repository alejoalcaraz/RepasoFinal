import React, { useState, useEffect } from "react";
import { FormattedMessage } from "react-intl";
import Pelicula from "./pelicula";
// import * as d3 from "https://cdn.skypack.dev/d3@7";


// function graph(data) {

//     const canvas = d3.select("#canvas");


//     const width = 800;
//     const height = 500;
//     const margin = { top: 10, left: 100, bottom: 40, right: 10 };
//     const iwidth = width - margin.left - margin.right;
//     const iheight = height - margin.top - margin.bottom;

//     const svg = canvas.append("svg");

//     svg.attr("width", width);
//     svg.attr("height", height);
//     let g = svg.append("g").attr("transform", `translate(${margin.left},${margin.top})`);



//     const y = d3.scaleLinear()

//         .domain([0,10000000])
//         .range([iheight, 0]);
        

//     const x = d3.scaleBand()
//         .domain(data.map(d => d.id))
//         .range([0, iwidth])
//         .padding(0.1);


//     const bars = g.selectAll("rect").data(data);

//     bars.enter().append("rect")
//         .attr("class", "bar")
//         .style("fill", "steelblue")
//         .attr("x", d => x(d.id))
//         .attr("y", d => y(d.views))
//         .attr("height", d =>iheight- y(d.views))
//         .attr("width", x.bandwidth())

//     g.append("g")
//         .classed("x--axis", true)
//         .call(d3.axisBottom(x))
//         .attr("transform", `translate(0, ${iheight})`);

//     g.append("g")
//         .classed("y--axis", true)
//         .call(d3.axisLeft(y));



// };

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
        // graph(data);
        return (
            <><div id="pelis" class="col-12">
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
                <div id="canvas">
                </div>
            </div><div id="card" display="none"></div></>
        )
    }
};

export default Peliculas;