import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';

const Elevatedcards = () => {
  return (
    <View>
      <Text style={styles.headingtext}>Elevatedcards</Text>
      <ScrollView horizontal={true} style={styles.container}>
        <View style={[styles.card, {backgroundColor: 'lightblue'}]}>
          <Text>Tap</Text>
        </View>
        <View style={[styles.card, {backgroundColor: 'lightgreen'}]}>
          <Text>Tap</Text>
        </View>
        <View style={[styles.card, {backgroundColor: 'lightcoral'}]}>
          <Text>Tap</Text>
        </View>
        <View style={[styles.card,  {backgroundColor: 'lightpink'}]}>
          <Text>Tap</Text>
        </View>
      </ScrollView>
    </View>
  );
};

export default Elevatedcards;

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

    padding: 4,
  },
  card: {
    flex: 1,
    width: 100,
    height: 100,
    borderRadius: 4,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 10,
    elevation: 10,
    shadowColor: 'black',
    shadowOffset: {width: 0, height: 0},
    shadowOpacity: 1,
    shadowRadius: 2,
  },
  card1: {
    backgroundColor: 'red',
  },

});
