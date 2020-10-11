import React from "react";
import {TextField} from "@material-ui/core";

type InputPropsType = {
    placeholder: string
}

const InputMaterial = (props: InputPropsType) => <TextField id="outlined-basic" label="Outlined" variant="outlined" placeholder={props.placeholder}/>

export default InputMaterial;