import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { useMovies } from '../../hooks/useMovies';
import PosterCarousel from '../../components/movies/PosterCarousel';
import HorizontalCarousel from '../../components/movies/HorizontalCarousel';
import FullScreenLoader from '../../components/loaders/FullScreenLoader';

const HomeScreen = () => {
  const { top } = useSafeAreaInsets();

  const { isLoading, nowPlaying, popular, topRated, upcoming, popularNextPage } = useMovies();
  // console.log({nowPlaying});

  if (isLoading) {
    return <FullScreenLoader />
  }

  return (
    <ScrollView>
      <View style={{ marginTop: top + 20, paddingBottom: 30 }}>

        {/* Principal */}
        <PosterCarousel movies={nowPlaying} />

        {/* Populares */}
        <HorizontalCarousel
          title="Populares"
          movies={popular}
          loadNextPage={popularNextPage}
        />

        {/* Top Rated */}
        <HorizontalCarousel title="Top Rated" movies={topRated} />

        {/* Upcoming */}
        <HorizontalCarousel title="Upcoming" movies={upcoming} />
      </View>
    </ScrollView>
  )
}

export default HomeScreen

const styles = StyleSheet.create({})