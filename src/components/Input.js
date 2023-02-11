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
            <form className="flex mb-8">
                <input
                    className="mx-7 bg-gray-50 border border-violet-500 text-violet-900 text-sm rounded-lg focus:ring-violet-600 focus:border-violet-600 block  p-2.5 "
                    placeholder="type animal here"
                    required
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                />
                <button
                    className="h-10 px-6 font-semibold rounded-lg bg-violet-600 text-white"
                    onClick={onClickAddText}
                >
                    {addText} is called...
                </button>
            </form>
            <Table addText={addText} text={text} baby={baby} />
        </div>
    );
};

export default Input;
