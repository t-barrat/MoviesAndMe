// components/FilmDetail.js

import React from 'react'
import { StyleSheet, View, ActivityIndicator } from 'react-native'
import { getFilmDetailFromApi, getImageFromApi } from '../API/TMDBAPI'

class FilmDetail extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      film: undefined,
      isLoading: true
    }
  }

  compoenentDidMount() {
    getFilmDetailFromApi(this.props.navigation.state.params.idFilm).then(data => {
      this.setState({
        film: data,
        isLoading: false
      })
    })
  }

  _displayLoading() {
    if(this.state.isLoading) {
      return(
        <View style={styles.loading_container}>
          <ActivityIndicator size='large'/>
        </View>
      )
    }
  }

  _displayFilm() {
    if(this.state.film != undefined) {
      return(
        <ScrollView style={styles.scrollview_container}>
          <Image
            style={styles.image}
            source={{uri}}
        </ScrollView>
      )
    }
  }

  render() {
    return(
      <View style={styles.main_container}>
        {this._displayLoading()}
        {this._displayFilm()}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  main_container: {
    flex: 1,
  },
  loading_container: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center'
  },
  scrollview_container: {
    flex: 1
  }
})

export default FilmDetail
