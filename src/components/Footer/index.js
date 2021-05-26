import React from "react";

import { Container } from "./styles";

export default function Footer() {
    return (
        <Container>
            <p>
                Developed by <strong>Victor de Souto</strong>
            </p>
            <ul>
                <li>
                    <a
                        href="https://github.com/sudo-victor"
                        rel="noopener noreferrer"
                        target="_blank"
                    >
                        github
                    </a>
                </li>
                <li>
                    <a
                        href="https://www.linkedin.com/in/victor-souto-soares-4811b118a/"
                        rel="noopener noreferrer"
                        target="_blank"
                    >
                        linkedin
                    </a>
                </li>
            </ul>
        </Container>
    );
}
