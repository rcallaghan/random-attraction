import React from 'react'
import { Text } from 'react-native'
import styled from 'styled-components/native'

const Button = styled.Text`
    background: #65bc6b;
    border: 2px solid #438c48;
    border-radius: 14px;
    color: #fff;
    flex-grow: 1;
    overflow: hidden;
    padding: 20px;
    text-align: center;
`

export default ({directions}) => {
    return (
        <Button>Get Directions</Button>
    )
}