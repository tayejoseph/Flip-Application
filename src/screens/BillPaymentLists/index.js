import React from 'react';
import { View, ScrollView, Image } from 'react-native';
import { Text, TouchableRipple } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import { TopNav } from '../../components';
import { capitalize } from '../../helpers';
import { FlipContainer, FlipContent } from '../../Layout';
import Styles from './styles';

const bills = {
  [`Tv cable`]: {
    lists: [
      { name: 'dstv-ng', logo: require('../../assets/images/dtv.png') },
      { name: 'dstv-gh', logo: require('../../assets/images/dtv.png') },
      { name: 'gotv', logo: require('../../assets/images/gotvjpg.jpg') },
      { name: 'startimes', logo: require('../../assets/images/startTime.png') },
    ],
    inputTypes: [
      { label: 'Select Plan', type: 'picker' },
      { label: 'Meter Number', type: 'TextInput' },
    ],
  },
  Internet: {
    lists: [
      { name: 'ipnx', logo: require('../../assets/images/ipnxjpg.jpg') },
      { name: 'smile', logo: require('../../assets/images/smile.jpg') },
    ],
    inputTypes: [
      { label: 'Select Plan', type: 'picker' },
      { label: 'Meter Number', type: 'TextInput' },
    ],
  },
  Electricity: {
    lists: [
      { name: 'discos-ng', logo: require('../../assets/images/discos.jpg') },
    ],
    inputTypes: [
      { label: 'Select Plan', type: 'picker' },
      { label: 'Meter Number', type: 'TextInput' },
    ],
  },
};

const AirTime = () => {
  const { navigate } = useNavigation();
  return (
    <FlipContainer>
      <TopNav type={'titleBased'} rightTitle={'Bill Payments'} />
      <FlipContent style={Styles.contentContainer}>
        <ScrollView
          style={{
            paddingHorizontal: 10,
          }}
        >
          {Object.keys(bills).map(billType => (
            <View style={Styles.billContainer} key={billType}>
              <Text style={Styles.billWrapperLabel}>{billType}</Text>
              <View style={Styles.billItemsWrapper}>
                {bills[billType].lists.map(({ name, logo }) => (
                  <View style={Styles.billItem}>
                    <TouchableRipple
                      key={name}
                      onPress={() =>
                        navigate('BillPayment', {
                          billType: name,
                          inputTypes: bills[billType].inputTypes,
                        })
                      }
                    >
                      <>
                        <View
                          style={{
                            backgroundColor: '#fff',
                            height: 100,
                            borderWidth: 1,
                            padding: 2,
                            borderRadius: 5,
                            borderColor: '#ECECEC',
                          }}
                        >
                          <Image
                            style={{
                              width: '100%',
                              height: '100%',
                              resizeMode: 'contain',
                            }}
                            source={logo}
                          />
                        </View>
                        <Text style={{ textAlign: 'center' }}>
                          {capitalize(name)}
                        </Text>
                      </>
                    </TouchableRipple>
                  </View>
                ))}
              </View>
            </View>
          ))}
        </ScrollView>
      </FlipContent>
    </FlipContainer>
  );
};

export default AirTime;
