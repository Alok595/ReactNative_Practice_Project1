import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';

const Fancycards = ({title, description, link, footer, label}) => {
  return (
    <View>
      <Text style={styles.headingtext}>Trending Places</Text>
      <View style={[styles.card, styles.card1]}>
        <Image
          source={{
            uri: link,
          }}
          style={styles.cardimg}
        />
        <View style={styles.cardbody}>
          <Text style={styles.cardtitle}>{title}</Text>
          <Text style={styles.cardLabel}>{label}</Text>
          <Text style={styles.cardDesc}>{description}</Text>
          <Text style={styles.cardFooter}>{footer}</Text>
        </View>
      </View>
    </View>
  );
};

export default Fancycards;

const styles = StyleSheet.create({
  headingtext: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'green',
    paddingHorizontal: 10,
  },
  card: {
    width: 380,
    height: 360,
    borderRadius: 4,

    marginVertical: 12,
    marginHorizontal: 16,
  },
  card1: {
    backgroundColor: '#FFFFFF',
    elevation: 10,
    shadowOffset: {width: 1, height: 1},
  },
  cardimg: {
    height: 180,
    marginBottom: 8,
    borderTopLeftRadius: 4,
    borderTopRightRadius: 6,
  },
  cardbody: {
    flex: 1,
    flexGrow: 1,
    paddingHorizontal: 12,
  },
  cardtitle: {
    fontWeight: 'bold',
    fontSize: 18,
    color: 'black',
    marginBottom: 6,
    textAlign: 'center',
  },
  cardLabel: {
    fontWeight: 'bold',
    fontSize: 16,
    color: 'black',
  },
  cardDesc: {
    fontSize: 14,
    color: 'black',
    marginBottom: 12,
    marginTop: 6,
    flexShrink: 1,
  },
  cardFooter: {
    fontSize: 12,
    color: 'black',
  },
});
