import React from 'react'
import { Text, View } from 'react-native'
import styled from 'styled-components/native'

const Button = styled.Text`
    background: #c60344;
    border: 2px solid #a00035;
    border-radius: 14px;
    color: #fff;
    display: block;
    justify-content: center;
    flex-grow: 1;
    margin-right: 10px;
    overflow: hidden;
    padding: 20px;
    text-align: center;
`

const NewAttraction = ({random}) => {
    return (
        <Button onPress={random}>Something Else</Button>
    )
}

export default NewAttraction