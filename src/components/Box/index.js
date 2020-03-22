import React from "react";
import { useSelector, useDispatch } from "react-redux";

import {
    Container,
    BoxLeft,
    BoxRight,
    TopLeft,
    TopRight,
    BottomLeft,
    BottomRight
} from "./styles.js";

import BoxBorder from "../BoxBorder";
import BoxBottom from "../BoxBottom";

export default function Box() {
    const objData = useSelector(state => state); //object taken from redux
    const dispatch = useDispatch();

    return (
        <Container>
            <BoxLeft>
                <TopLeft
                    type="text"
                    name=""
                    value={objData.topLeft}
                    onChange={e =>
                        dispatch({
                            type: "UPDATE_TOPLEFT",
                            value: e.target.value
                        })
                    }
                />
                <BottomLeft
                    type="text"
                    name=""
                    value={objData.bottomLeft}
                    onChange={e =>
                        dispatch({
                            type: "UPDATE_BOTTOMLEFT",
                            value: e.target.value
                        })
                    }
                />
            </BoxLeft>
            <BoxRight>
                <TopRight
                    type="text"
                    name=""
                    value={objData.topRight}
                    onChange={e =>
                        dispatch({
                            type: "UPDATE_TOPRIGHT",
                            value: e.target.value
                        })
                    }
                />
                <BottomRight
                    type="text"
                    name=""
                    value={objData.bottomRight}
                    onChange={e =>
                        dispatch({
                            type: "UPDATE_BOTTOMRIGHT",
                            value: e.target.value
                        })
                    }
                />
            </BoxRight>
            <BoxBorder />
            <BoxBottom />
        </Container>
    );
}
