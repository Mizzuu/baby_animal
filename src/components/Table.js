import React from "react";

const Table = (props) => {
    return (
        <div className="mx-7">
            <p> {console.log(props.baby.length)} </p>
            {props.baby.length > 0 ? (
                props.baby.map((animal) => (
                    <p key={animal.name}>
                        {animal.name}: {animal.characteristics.name_of_young}
                    </p>
                ))
            ) : (
                <p>no</p>
            )}
        </div>
    );
};

export default Table;
