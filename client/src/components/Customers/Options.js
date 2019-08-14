import React from 'react';
import Button from '@material-ui/core/Button'
const Options = (id) => {

    const performDelete = () => {
        console.log(id);
    }

return(
<div> 
    <Button onClick={performDelete}>Click</Button>
</div>

)

}

export default Options;