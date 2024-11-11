import React from 'react'
import { StackScreenProps } from '@react-navigation/stack'
import { RootStackParams } from '../../navigation/Navigation'
import { ScrollView } from 'react-native-gesture-handler'
import { StyleSheet, Text, View } from 'react-native'

import useMovie from '../../hooks/useMovie'
import MovieHeader from '../../components/movie/MovieHeader'
import MovieDetails from '../../components/movie/MovieDetails'
import FullScreenLoader from '../../components/loaders/FullScreenLoader'

interface Props extends StackScreenProps<RootStackParams, 'Detail'> {};

const DetailScreen = ({ route }: Props) => {

  const { movieId } = route.params;
  const { isLoading, movie, cast } = useMovie(movieId);

  if (isLoading) {
    return <FullScreenLoader />
  }

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={{ flex: 1 }}
    >
      
    {/* Header */}
    <MovieHeader 
      poster={movie!.poster}
      title={movie!.title}
      originalTitle={movie!.originalTitle}
    />

    {/* Details */}
    <MovieDetails movie={movie!} cast={cast!} />

    </ScrollView>
  )
}

export default DetailScreen

const styles = StyleSheet.create({})