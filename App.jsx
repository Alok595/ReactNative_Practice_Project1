import {SafeAreaView, ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import FlatCards from './components/FlatCards';
import Elevatedcards from './components/Elevatedcards';
import Fancycards from './components/Fancycards';
import ImgScrool from './components/ImgScrool';

const App = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        <FlatCards />
        <Elevatedcards />
        <ImgScrool />
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({});
