import React from "react";
import styled from "styled-components";

export default function ListItem() {

    return (
        <Li >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </Li>
    );
}

const Li = styled.li`
${({ theme }) => `
    background: ${theme.backgroundColor};
    color: ${theme.color};`
    }
`;