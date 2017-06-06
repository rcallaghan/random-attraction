import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import styled from 'styled-components/native'

import AttractionImage from './components/AttractionImage'
import AttractionCard from './components/AttractionCard'
import AttractionButtons from './components/AttractionButtons'

import { PLACES_URL } from './constants'

export default class App extends React.Component {
  constructor() {
    super()
    this.state = {
      locations: [
      ],
      loading: true
    }
    this.random = this.random.bind(this)
  }

  random() {
    this.setState({
      attraction: this.state.locations[Math.floor(Math.random() * this.state.locations.length)]
    })
  }

  componentDidMount() {

    const getLocation = navigator.geolocation.getCurrentPosition((position) => {
      
      const coords = {
        lat: position.coords.latitude,
        long: position.coords.longitude
      }

      fetch(PLACES_URL + `${coords.lat}, ${coords.long}`)
        .then(res => res.json()).then(payload => {
          this.setState({
            locations: payload.results,
            attraction: payload.results[Math.floor(Math.random() * payload.results.length)],
            loading: false
          })
        })
    },)

  }

  render() {
    const attraction = this.state.attraction
    if(this.state.loading) {
      return (
        <View style={styles.loading}>
          <Text style={styles.loadingText}>Looking for cool things around you now...</Text>
        </View>
      )
    }
    
    return (
      <View style={styles.container}>
        <AttractionImage imageUrl={attraction.photos[0].photo_reference}/>
        <AttractionCard title={attraction.name} hours={attraction.opening_hours} />
        <AttractionButtons random={this.random} directions={attraction.name} />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  loading: {
    alignItems: 'center',
    backgroundColor: '#2e405e',
    height: '100%',
    justifyContent: 'center'
  },
  loadingText: {
    color: '#fff',
    fontSize: 24,
    padding: 40
  }
});
