import React from "react";

const Table = (props) => {
    return (
        <div className="mx-7">
            {props.baby.map((animal) => (
                <p key={animal.name}>
                    {animal.name}: {animal.characteristics.name_of_young}
                </p>
            ))}
        </div>
    );
};

export default Table;
