import {
  Image,
  Linking,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';

const ActionCards = () => {
  const openWebsite = websiteLink => {
    Linking.openURL(websiteLink);
  };
  return (
    <View>
      <Text style={styles.headingtext}>Blog Card</Text>
      <View style={[styles.card, styles.card1]}>
        <View style={styles.headingContainer}>
          <Text style={styles.headingText}>
            How to get started with React Native
          </Text>
        </View>
        <Image
          source={{
            uri: 'https://www.allprodad.com/wp-content/uploads/2021/03/05-12-21-happy-people.jpg',
          }}
          style={styles.cardImage}
        />
        <View style={styles.bodyContainer}>
          <Text numberOfLines={2}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis
            iure illum sint? Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Facilis, inventore!
          </Text>
        </View>
        <View style={styles.footerContainer}>
          <TouchableOpacity
            onPress={() =>
              openWebsite(
                'https://www.getyourguide.com/hyderabad-l279/2-days-taj-mahal-tour-from-hyderabad-t470742/?ranking_uuid=7340526d-ce01-4f1d-b179-e7c0bc5315fc',
              )
            }>
            <Text style={styles.footerText}>Read More</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => openWebsite('https://github.com/')}>
            <Text style={styles.footerText}>Follow Me</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default ActionCards;

const styles = StyleSheet.create({
  headingtext: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'green',
    paddingHorizontal: 25,
  },
  card: {
    width: 380,
    height: 400,
    borderRadius: 4,
    marginVertical: 12,
    marginHorizontal: 16,
    backgroundColor: 'lightblue',
  },
  card1: {
    elevation: 3,
    shadowOffset: {width: 1, height: 1},
    shadowOpacity: 0.4,
    shadowColor: '#333',
  },
  headingContainer: {
    height: 50,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  headingText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  cardImage: {
    height: 250,
  },
  bodyContainer: {
    padding: 10,
  },
  footerContainer: {
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  footerText: {
    color: 'blue',
    fontWeight: 'bold',
    fontSize: 16,
    paddingHorizontal: 10,
    paddingVertical: 5,
    backgroundColor: 'lightcoral',
    borderRadius: 10,
  },
});
