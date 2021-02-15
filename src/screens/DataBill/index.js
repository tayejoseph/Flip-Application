import React from 'react';
import { View, Image } from 'react-native';
import { useRoute, useNavigation } from '@react-navigation/native';
import { Text, TouchableRipple } from 'react-native-paper';
import { TopNav } from '../../components';
import { FlipContainer, FlipContent } from '../../Layout';

import Styles from './styles';

const newWorks = [
  {
    title: 'MTN',
    logosrc: require('../../assets/images/mtn.png'),
  },
  {
    title: 'Glo',
    logosrc: require('../../assets/images/glo.png'),
  },
  {
    title: '9Mobile',
    logosrc: require('../../assets/images/9mobile.png'),
  },
  {
    title: 'Airtel',
    logosrc: require('../../assets/images/airtel.png'),
  },
];

const AirTime = () => {
  const {
    params: { type },
  } = useRoute();
  const { navigate } = useNavigation();

  return (
    <>
      <FlipContainer>
        <TopNav type={'titleBased'} rightTitle={`Buy Your ${type}`} />
        <FlipContent style={Styles.contentContainer}>
          <View>
            <Text style={{ fontWeight: 'bold' }}>
              Select Your network below
            </Text>
            <View style={Styles.netWorksContainer}>
              {newWorks.map(({ title, logosrc }) => (
                <View style={Styles.netWorkItem}>
                  <TouchableRipple
                    onPress={() => {
                      navigate('BuyData', {
                        network: title.toLowerCase(),
                        type: type.toLowerCase(),
                      });
                    }}
                  >
                    <>
                      <View style={Styles.imgContainer}>
                        <Image source={logosrc} style={Styles.img} />
                      </View>
                      <Text style={Styles.imgTitle}>{title}</Text>
                    </>
                  </TouchableRipple>
                </View>
              ))}
            </View>
          </View>
        </FlipContent>
      </FlipContainer>
    </>
  );
};

export default AirTime;
