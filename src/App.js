import React from "react";
import { Provider } from "react-redux";

import { GlobalStyle, Container, Title } from "./styles";

import Box from "./components/Box";
import Footer from "./components/Footer";
import store from "./store";

function App() {
    return (
        <>
            <GlobalStyle />
            <Provider store={store}>
                <Container className="App">
                    <Title>Hello World</Title>
                    <Box />
                    <Footer />
                </Container>
            </Provider>
        </>
    );
}

export default App;
