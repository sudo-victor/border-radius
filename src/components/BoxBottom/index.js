import React, { useEffect } from "react";
import { useSelector } from "react-redux";

import { Container, InputCopy, Copy } from "./styles";

export default function BoxBottom() {
    const objData = useSelector(state => state);

    useEffect(() => {
        const buttonCopy = document.getElementById("copy");
        const output = document.getElementById("output");

        const blockCopied = document.getElementById("copied");
        blockCopied.style.display = "none"; //I added the value none to the display, when the user clicks the copy button, the display will be flexible for a limited time

        buttonCopy.onclick = e => {
            output.select(); //selected the entry to be able to copy
            document.execCommand("copy"); //copies the input value
            setTimeout(() => {
                blockCopied.style.display = "flex";
            }, 200);
            setTimeout(() => {
                blockCopied.style.display = "none";
            }, 2000);
        };
    }, []);

    return (
        <Container>
            <p>border-radius :</p>
            <InputCopy
                type="text"
                id="output"
                name="output"
                value={objData.borderRadius}
                readOnly
                disable
                placeholder="output"
            />
            <Copy id="btnCopy">
                <img
                    src="https://image.flaticon.com/icons/svg/178/178921.svg"
                    alt="copy"
                    width="20"
                    id="copy"
                />
            </Copy>
        </Container>
    );
}
