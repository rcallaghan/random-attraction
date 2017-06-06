import React from 'react'
import { View } from 'react-native';
import styled from 'styled-components/native'

import AttractionDetails from '../../components/AttractionDetails'
import NewAttraction from '../../components/NewAttraction'

const FullView = styled.View`
    align-items: center;
    background: rgba(46, 64, 94,.95);
    justify-content: center;
    padding: 50px 25px;
    width: 100%;
`

const AttractionCard = (props) => {
    return (
        <FullView>
            <AttractionDetails title={props.title} hours={props.hours} />
        </FullView>
    )
}

export default AttractionCard