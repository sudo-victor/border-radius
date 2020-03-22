import React from "react";
import { useSelector } from "react-redux";

import { Container, BorderRadius, BoxSpan } from "./styles.js";

export default function BoxBorder() {
  const borderRadius = useSelector(state => state.borderRadius);

  return (
    <Container>
      <BorderRadius style={{ borderRadius: borderRadius }}></BorderRadius>
      <BoxSpan id="copied">
        <p>
          Copied
          <span role="img" aria-label="ok">
            😀👍
          </span>
        </p>
      </BoxSpan>
    </Container>
  );
}
