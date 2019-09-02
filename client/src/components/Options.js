import React from 'react';
import Button from '@material-ui/core/Button'
const Options = (id, type) => {



    const performDelete = () => {
    }
    if (type === 'PassagersOptions') {


        return (

            <div>
                <Button onClick={performDelete}>Passagers Options</Button>
            </div>

        )
    }
    else {
        return (
            <div>
                <Button onClick={performDelete}>Flights Options</Button>

            </div>
        )
    }
}

export default Options;