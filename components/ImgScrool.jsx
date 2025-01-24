import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Fancycards from './Fancycards';

const ImgScrool = () => {
  const cards = [
    {
      title: 'Taj Mahal',
      description: 'React Native lets you create mobile apps using JavaScript.',
      link: 'https://cdn.getyourguide.com/img/tour/647ce592138df.jpeg/132.webp',
      footer: 'Powered by React Native',
      label:"Agra"
    },
    {
      title: 'Red Fort',
      description: 'Expo is a framework for building React Native apps faster.',
      link: 'https://th.bing.com/th/id/OIP.jztaN96H0w4PjEeZ5pspJwHaEY?w=312&h=185&c=7&r=0&o=5&dpr=1.3&pid=1.7',
      footer: 'Develop with Expo',
      label:"Delhi"
    },
    {
      title: 'Ram Mandir',
      description: 'The official React documentation to master React concepts.',
      link: 'https://th.bing.com/th/id/OIP.OmDzEiLTWPaZxwH515PJzAHaGk?w=203&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7',
      footer: 'React Official Docs',
      label:"Ayodha"
    },
  ];

  return (
    <ScrollView horizontal={true}>
      <Fancycards title={cards[0].title} description={cards[0].description} link={cards[0].link} footer={cards[0].footer} label={cards[0].label} />
      <Fancycards title={cards[1].title} description={cards[1].description} link={cards[1].link} footer={cards[1].footer} label={cards[1].label} />
      <Fancycards title={cards[2].title} description={cards[2].description} link={cards[2].link} footer={cards[2].footer} label={cards[2].label} />
    </ScrollView>
  );
};

export default ImgScrool;

const styles = StyleSheet.create({});
