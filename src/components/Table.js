import React, { useState } from "react";
import axios from "axios";

const Table = (props) => {
    // const [animals, setAnimals] = useState([]);
    // const userInput = props.addText || "bear";

    // const options = {
    //     method: "GET",
    //     url: "https://animals-by-api-ninjas.p.rapidapi.com/v1/animals",
    //     params: { name: userInput },
    //     headers: {
    //         "X-RapidAPI-Key":
    //             "720fe8d6femsh76f5226b56c3452p1e5d3ajsnaf18548a2e7f",
    //         "X-RapidAPI-Host": "animals-by-api-ninjas.p.rapidapi.com",
    //     },
    // };

    // const fireAxios = () => {
    //     axios
    //         .request(options)
    //         .then(function (response) {
    //             console.log(response.data);
    //             setAnimals(response.data);
    //             // console.log(animals);
    //         })
    //         .catch(function (error) {
    //             console.error(error);
    //         });
    // };

    return (
        <div>
            {props.baby.map((animal) => (
                <p key={animal.name}>
                    {animal.name}: {animal.characteristics.name_of_young}
                </p>
            ))}
        </div>
    );
};

export default Table;
