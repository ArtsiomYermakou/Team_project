import React from "react";
import {Button} from "@material-ui/core";

type ButtonPropsType = {
    nameButton: string
}

const ButtonMaterial = (props: ButtonPropsType) => <Button variant="contained" color="primary">{props.nameButton}</Button>

export default ButtonMaterial;