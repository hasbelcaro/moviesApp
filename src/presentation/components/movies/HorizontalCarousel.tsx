import React, { useEffect, useRef } from 'react'
import { NativeScrollEvent, NativeSyntheticEvent, StyleSheet, Text, View } from 'react-native'

import type { Movie } from '../../../core/entities/movie.entity';
import { FlatList } from 'react-native-gesture-handler';
import MoviePoster from './MoviePoster';

interface Props {
  movies: Movie[];
  title?: string;
  loadNextPage?: () => void;
}

const HorizontalCarousel = ({ movies, title, loadNextPage }: Props) => {

  const isLoading = useRef(false);

  useEffect(() => {
    setTimeout(() => {
      isLoading.current = false;
    }, 200);
  }, [ movies ])
  

  const onScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    
    if (isLoading.current) return;

    const { contentOffset, layoutMeasurement, contentSize } = event.nativeEvent;
    // console.log(contentOffset, layoutMeasurement, contentSize);

    const isEndReached = (contentOffset.x + layoutMeasurement.width + 600) >= contentSize.width;
    if (!isEndReached) return;

    // Carregar más películas
    if (isLoading.current) return;
    loadNextPage && loadNextPage();
  }

  return (
    <View style={{ height: title ? 260 : 220 }} >
      {
        title && <Text style={{ fontSize: 30, fontWeight: 'bold', marginLeft: 10 }}>{title}</Text>
      }

      <FlatList
        data={movies}
        renderItem={ ({ item }) => (
          <MoviePoster movie={item} height={200} width={140} />
        )}
        keyExtractor={ (item: Movie) => item.id.toString() }
        horizontal
        showsHorizontalScrollIndicator={false}
        onScroll={ onScroll }
      />

    </View>
  )
}

export default HorizontalCarousel

const styles = StyleSheet.create({})