import React, { Component } from 'react'
import { Image } from 'react-native'
import styled from 'styled-components/native'
import { PHOTO_URL } from '../../constants'

const FullImage = styled.Image`
    bottom: 0;
    left: 0;
    right: 0;
    top: 0;
    position: absolute;
`

const AttractionImage = ({imageUrl}) => {
    return (
        <FullImage source={{uri: PHOTO_URL + imageUrl}} />
    )
}

export default AttractionImage