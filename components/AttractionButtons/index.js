import React from 'react'
import { View } from 'react-native'
import styled from 'styled-components/native'

import NewAttraction from '../../components/NewAttraction'
import GetDirections from '../../components/GetDirections'

const Buttons = styled.View`
    flex-direction: row;
    flex-wrap: nowrap;
    margin-bottom: 25px;
    margin-top: auto;
    width: 85%;
`
export default ({random, directions}) => {
    return (
        <Buttons>
            <NewAttraction random={random} />
            <GetDirections directions={directions} />
        </Buttons>
    )
}