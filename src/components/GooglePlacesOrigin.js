import React from 'react';
import {API_KEY} from '@env';
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';
import {setOrigin, setDestination} from '../redux/slices/navSlice';
import {useDispatch, useSelector} from 'react-redux';
import { View } from 'react-native';

const GooglePlacesOrigin = props => {
  const dispatch = useDispatch;
  return (
    <View>
      <GooglePlacesAutocomplete
        styles={props.style}
        placeholder={'Where From?'}
        returnKeyType={'search'}
        nearbyPlacesAPI="GooglePlacesSearch"
        debounce={400}
        query={{
          key: API_KEY,
          language: 'en',
        }}
        minLength={2}
        enablePoweredByContainer={false}
        onPress={(data, details = null) => {
          dispatch(
            setOrigin({
              location: details.geometry.location,
              description: data.description,
            }),
          );
        }}
      />
    </View>
  );
};

export default GooglePlacesOrigin;
