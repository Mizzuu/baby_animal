import React, { useState } from "react";
import Table from "./Table";
import axios from "axios";

const Input = () => {
    const [text, setText] = useState("");
    const [addText, setAddText] = useState("");
    const [baby, setBaby] = useState([]);

    const onClickAddText = () => {
        setAddText(text);
        console.log(text);
        setText("");
        fireAxios(text);
    };

    const fireAxios = (text) => {
        const options = {
            method: "GET",
            url: "https://animals-by-api-ninjas.p.rapidapi.com/v1/animals",
            params: { name: text },
            headers: {
                "X-RapidAPI-Key":
                    "720fe8d6femsh76f5226b56c3452p1e5d3ajsnaf18548a2e7f",
                "X-RapidAPI-Host": "animals-by-api-ninjas.p.rapidapi.com",
            },
        };

        axios
            .request(options)
            .then(function (response) {
                console.log(response.data);
                setBaby(response.data);
            })
            .catch(function (error) {
                console.error(error);
            });
    };

    return (
        <div>
            <input value={text} onChange={(e) => setText(e.target.value)} />
            <button onClick={onClickAddText}>
                Baby {addText} is called...
            </button>
            <Table addText={addText} text={text} baby={baby} />
        </div>
    );
};

export default Input;
