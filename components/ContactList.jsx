import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';

const ContactList = () => {
  const contacts = [
    {
      uid: 1,
      name: 'Alice Johnson',
      status: 'Active',
      url: 'https://wp.scoopwhoop.com/wp-content/uploads/2023/03/335893730_1248848252414001_2214479283759117231_n.jpg?w=1024',
    },
    {
      uid: 2,
      name: 'Bob Smith',
      status: 'Inactive',
      url: 'https://jooinn.com/images/homeless-portraiture-1.jpg',
    },
    {
      uid: 3,
      name: 'Charlie Brown',
      status: 'Active',
      url: 'https://th.bing.com/th/id/OIP._a9W-syuWaFYQAaVfBa63gHaHa?w=667&h=667&rs=1&pid=ImgDetMain',
    },
    {
      uid: 4,
      name: 'Diana Prince',
      status: 'Pending',
      url: 'https://th.bing.com/th/id/OIP.x8EywSUkVJufaPvAvCzkNwHaLH?rs=1&pid=ImgDetMain',
    },
    {
      uid: 5,
      name: 'Ethan Hunt',
      status: 'Suspended',
      url: 'https://th.bing.com/th/id/OIP.z4M7Q4eH4UTw-HWntacCswAAAA?w=400&h=400&rs=1&pid=ImgDetMain',
    },
    {
      uid: 5,
      name: 'Ethan Hunt',
      status: 'Suspended',
      url: 'https://th.bing.com/th/id/OIP.z4M7Q4eH4UTw-HWntacCswAAAA?w=400&h=400&rs=1&pid=ImgDetMain',
    },
  ];
  return (
    <View>
      <Text style={styles.headingtext}>ContactList</Text>
      <ScrollView style={styles.container}  scrollEnabled={false}>
        {contacts.map(({uid, name, status, url}) => (
          <View key={uid} style={styles.userCard}>
            <Image source={{uri: url}} style={styles.userImage} />
            <View>
              <Text style={styles.userName}>{name}</Text>
              <Text style={styles.userStatus}>{status}</Text>
              
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

export default ContactList;

const styles = StyleSheet.create({
  headingtext: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'green',
    paddingHorizontal: 10,
  },
  container: {
    paddingHorizontal: 18,
    marginBottom: 8,
  },
  userCard: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    marginVertical: 10,
    backgroundColor: 'lightblue',
    borderRadius: 10,
  },
  userImage: {
    width: 60,
    height: 60,
    borderRadius: 60 / 2,
    marginRight: 15,
  },
  userName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  userStatus: {
    fontSize: 16, 
    color: 'gray',
  },
});
