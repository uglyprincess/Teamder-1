import React,{useState} from 'react';
import {TextField} from '@material-ui/core';

const Description = () => {
    const [desc,setDesc] = useState("");
    return(
        <div>
            <TextField
          id="outlined-multiline-static"
          label="Description ( Max 100 letters )"
          multiline
          rows={4}
          defaultValue="Default Value"
          variant="outlined"
          value={desc}
          onChange={(e) =>{setDesc(e.target.value)}}
          inputProps={{maxLength: 100}}
          fullWidth
          style={{margin: "2% 0"}}
        />
        </div>
    );
}

export default Description;