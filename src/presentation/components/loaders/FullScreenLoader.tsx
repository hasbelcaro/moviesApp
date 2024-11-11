import React from 'react'
import { ActivityIndicator, StyleSheet, Text, View } from 'react-native'

const FullScreenLoader = () => {
  return (
    <View style={ styles.container } >
      <ActivityIndicator size="large" color={'indigo'} />
    </View>
  )
}

export default FullScreenLoader

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})