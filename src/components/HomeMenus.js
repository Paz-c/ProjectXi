import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {View, StyleSheet, Text, Image, TouchableOpacity} from 'react-native';

const HomeMenus = props => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity onPress={() => navigation.navigate(props.screen)}>
      <View style={styles.container}>
        <Image style={styles.image} source={props.image} />
        <View>
          <Text style={styles.text}>{props.title}</Text>
        </View>
      
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'whitesmoke',
    width: 160,
    height: 200,
    marginTop: 40,
    marginLeft: 12,
    marginRight: 20,
    padding: 5,
  },
  title: {
    color: 'white',
    textAlign: 'center',
  },
  image: {
    height: 100,
    width: 100,
    resizeMode: 'contain',
  },
});

export default HomeMenus;
