import {SafeAreaView, ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import FlatCards from './components/FlatCards';
import Elevatedcards from './components/Elevatedcards';
import Fancycards from './components/Fancycards';
import ImgScrool from './components/ImgScrool';
import ActionCards from './components/ActionCards';
import ContactList from './components/ContactList';

const App = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        <FlatCards />
        <Elevatedcards />
        <ImgScrool />
        <ContactList />
        <ActionCards />
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({});
