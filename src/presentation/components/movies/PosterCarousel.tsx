import React from 'react'
import { ScrollView } from 'react-native-gesture-handler';
import { StyleSheet, Text, View } from 'react-native'

import type { Movie } from '../../../core/entities/movie.entity'
import MoviePoster from './MoviePoster';

interface Props {
  movies: Movie[];
  height?: number;
}

const PosterCarousel = ({ height = 440, movies}: Props) => {
  return (
    <View style={{ height }}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {
          movies.map(movie => (
            <View key={movie.id}>
              <MoviePoster key={movie.id} movie={movie} />
            </View>
          ))
        }
      </ScrollView>
    </View>
  )
}

export default PosterCarousel

const styles = StyleSheet.create({})