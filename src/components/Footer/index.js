import React from "react";

import { Container } from "./styles";

export default function Footer() {
    return (
        <Container>
            <p>
                Feito por <strong>Victor de Souto</strong>
            </p>
            <ul>
                <li>
                    <a
                        href="https://github.com/VictorSouto-ux"
                        rel="noopener noreferrer"
                        target="_blank"
                    >
                        github
                    </a>
                </li>
                <li>
                    <a
                        href="https://www.instagram.com/viktor_souto/"
                        rel="noopener noreferrer"
                        target="_blank"
                    >
                        instagram
                    </a>
                </li>
            </ul>
        </Container>
    );
}
