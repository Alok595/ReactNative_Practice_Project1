import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const FlatCards = () => {
  return (
    <View>
      <Text style={styles.headingtext}>FlatCards</Text>
      <View style={styles.container}>
        <View style={[styles.card, styles.card1]}>
          <Text>Red</Text>
        </View>
        <View style={[styles.card, styles.card2]}>
          <Text>Red</Text>
        </View>
        <View style={[styles.card, styles.card3]}>
          <Text>Red</Text>
        </View>
        <View style={[styles.card, styles.card2]}>
          <Text>Red</Text>
        </View>
      </View>
    </View>
  );
};

export default FlatCards;

const styles = StyleSheet.create({
  headingtext: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'green',
    paddingHorizontal: 10,
  },
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 8,

    alignItems: 'center',
  },
  card: {
    flex: 1,
    width: 100,
    height: 100,
    borderRadius: 4,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 10,
  },
  card1: {
    backgroundColor: 'lightgreen',
  },
  card2: {
    backgroundColor: 'lightcoral',
  },
  card3: {
    backgroundColor: 'lightblue',
  },
});
