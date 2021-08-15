import React from 'react';
import {FlatList, SafeAreaView, Text} from 'react-native';
import HomeMenus from './HomeMenus';
import Car from '../assets/car.png';

const HomeMenuList = () => {
  const data = [
    {id: 1, title: 'Get A Ride', Image: Car, screen: 'MAP'},
    {id: 2, title: ' History', Image: Car, screen: 'HISTORY'},
    
  ];

  return (
    <FlatList
      keyExtractor={items => items.id}
      data={data}
      numColumns={2}
      renderItem={({item}) => (
        <HomeMenus title={item.title} image={item.Image} screen={item.screen} />
      )}
    />
  );
};

export default HomeMenuList;
