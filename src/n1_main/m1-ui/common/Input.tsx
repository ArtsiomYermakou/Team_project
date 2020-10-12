import React from "react";
import {TextField} from "@material-ui/core";

type InputPropsType = {
    placeholder: string
    label: string
}

const InputMaterial = (props: InputPropsType) => <TextField id="outlined-basic" label={props.label} variant="outlined" placeholder={props.placeholder}/>

export default InputMaterial;