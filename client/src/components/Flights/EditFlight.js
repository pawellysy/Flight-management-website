import React, { useState} from 'react';

const EditFlight = (flightEdit, ifEdit) => {

       const [flight, setFlight] = useState(flightEdit);
        console.log(flight);
    return (
        <div>
            <h1>
                hello Flight Edit
            </h1>
        </div>
    )
    

}

export default EditFlight;