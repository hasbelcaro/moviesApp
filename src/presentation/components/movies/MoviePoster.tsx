import React from 'react'
import { Image, Pressable, StyleSheet, Text, View } from 'react-native'
import { NavigationContainerProps, NavigationProp, useNavigation } from '@react-navigation/native';

import type { Movie } from '../../../core/entities/movie.entity'
import { RootStackParams } from '../../navigation/Navigation';

interface Props {
  movie: Movie;
  height?: number;
  width?: number;
}

const MoviePoster = ({ movie, height = 420, width = 300 }: Props) => {

  const navigation = useNavigation<NavigationProp<RootStackParams>>();

  return (
    <Pressable
      onPress={ () => navigation.navigate('Detail', {movieId: movie.id}) }
      style={ ({ pressed }) => ({
        width,
        height,
        marginHorizontal: 2,
        paddingBottom: 20,
        paddingHorizontal: 3,
        opacity: pressed ? 0.7 : 1,
      }) }
    >
      <View style={ styles.imageContainer }>
        <Image 
          source={{ uri: movie.poster }}
          style={ styles.image }
        />
      </View>
    </Pressable>
  )
}

export default MoviePoster

const styles = StyleSheet.create({
  imageContainer: {
    flex: 1,
    borderRadius: 18,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.24,
    shadowRadius: 7,

    elevation: 9,
  },
  image: {
    flex: 1,
    borderRadius: 18,
  }
})