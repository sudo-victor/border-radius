import { createStore } from "redux";

const INITIAL_STATE = {
    topLeft: "",
    topRight: "",
    bottomLeft: "",
    bottomRight: "",
    borderRadius: ""
};

const borderRadius = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case "UPDATE_TOPLEFT":
            state.topLeft = action.value;
            state.borderRadius = `${
                state.topLeft === "" ? "0" : state.topLeft
            }px ${state.topRight === "" ? "0" : state.topRight}px ${
                state.bottomRight === "" ? "0" : state.bottomRight
            }px ${state.bottomLeft === "" ? "0" : state.bottomLeft}px`; //if the user does not fill in all fields, the non-informed field will be equal to 0 px
            return { ...state };

        case "UPDATE_BOTTOMLEFT":
            state.bottomLeft = action.value;
            state.borderRadius = `${
                state.topLeft === "" ? "0" : state.topLeft
            }px ${state.topRight === "" ? "0" : state.topRight}px ${
                state.bottomRight === "" ? "0" : state.bottomRight
            }px ${state.bottomLeft === "" ? "0" : state.bottomLeft}px`; //if the user does not fill in all fields, the non-informed field will be equal to 0 px
            return { ...state };

        case "UPDATE_TOPRIGHT":
            state.topRight = action.value;
            state.borderRadius = `${
                state.topLeft === "" ? "0" : state.topLeft
            }px ${state.topRight === "" ? "0" : state.topRight}px ${
                state.bottomRight === "" ? "0" : state.bottomRight
            }px ${state.bottomLeft === "" ? "0" : state.bottomLeft}px`; //if the user does not fill in all fields, the non-informed field will be equal to 0 px
            return { ...state };

        case "UPDATE_BOTTOMRIGHT":
            state.bottomRight = action.value;
            state.borderRadius = `${
                state.topLeft === "" ? "0" : state.topLeft
            }px ${state.topRight === "" ? "0" : state.topRight}px ${
                state.bottomRight === "" ? "0" : state.bottomRight
            }px ${state.bottomLeft === "" ? "0" : state.bottomLeft}px`; //if the user does not fill in all fields, the non-informed field will be equal to 0 px
            return { ...state };

        default:
            return state;
    }
};

const store = createStore(borderRadius);

export default store;
