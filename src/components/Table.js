import React from "react";

const Table = (props) => {
    return (
        <div className="mx-7">
            {props.baby.length > 0 ? (
                props.baby.map((animal) => (
                    <div className="text-slate-100 flex">
                        <p key={animal.name}>{animal.name}: </p>
                        <p className="font-bold underline">
                            {animal.characteristics.name_of_young}
                        </p>
                    </div>
                ))
            ) : props.addText ? (
                <p className="text-slate-100">No Results</p>
            ) : null}
        </div>
    );
};

export default Table;
