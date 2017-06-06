import React from 'react'
import { View, Text} from 'react-native'
import styled from 'styled-components/native'

const Title = styled.Text`
    color: #fff;
    font-size: 30px;
    font-weight: bold;
`
const AttractionDetails = ({title, hours}) => {
    return (
        <View>
            <Title>{title}</Title>
        </View>
    )
}

export default AttractionDetails