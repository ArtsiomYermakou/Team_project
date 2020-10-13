import React from "react";
import {TextField} from "@material-ui/core";

type InputPropsType = {
    placeholder: string
    label: string
}

const InputMaterial = (props: InputPropsType, {...rest}) => {
    return <TextField id="outlined-basic" label={props.label} variant="outlined" placeholder={props.placeholder} {...rest}/>
}

export default InputMaterial;