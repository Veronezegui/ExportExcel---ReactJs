import React from "react";
import { Export } from "../../components/Export";

import {
    Container,
    Body,
} from './styles'



export function Home() {
    return (
        <Container>
            <Body>
                <Export />
            </Body>
        </Container>
    )
}