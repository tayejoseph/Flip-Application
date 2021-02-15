import React from 'react';
import { View, Image } from 'react-native';
import { Title, Text } from 'react-native-paper';
import RBSheet from 'react-native-raw-bottom-sheet';
import { useNavigation } from '@react-navigation/native';
import { colors } from '../../../constants';
import Container, { styles, ListItemContainer } from './styles';

const ListItem = ({ title, description, imgSrc, onPress }) => {
  return (
    <ListItemContainer onPress={onPress}>
      <>
        <View>
          <Text style={styles.listItemLgTxt}>{title}</Text>
          <Text style={styles.listItemSmTxt}>{description}</Text>
        </View>
        <View>
          <Image source={imgSrc} style={styles.listItemImg} />
        </View>
      </>
    </ListItemContainer>
  );
};

const FundActionSheet = React.forwardRef((props, ref) => {
  const { navigate } = useNavigation();
  return (
    <RBSheet
      ref={ref}
      animationcurrency={'fade'}
      closeOnDragDown={true}
      height={300}
      dragFromTopOnly
      closeOnPressBack
      keyboardAvoidingViewEnabled
      customStyles={{
        container: {
          borderTopLeftRadius: 18,
          borderTopRightRadius: 18,
          paddingHorizontal: 10,
          backgroundColor: '#fff',
          paddingBottom: 32,
        },
        draggableIcon: {
          backgroundColor: colors.lightBlue,
          width: 35,
          height: 6,
          borderRadius: 3,
        },
      }}
    >
      <Container>
        <Title style={styles.title}>Select Wallet</Title>
        <ListItem
          title="NGN"
          description="Nigeria Naira"
          imgSrc={require('../../../assets/images/NigeriaFlag.png')}
          onPress={() => {
            ref.current.close();
            navigate('Deposit', { currency: 'Naira' });
          }}
        />
        <ListItem
          title="GHS"
          description="Ghana Cedis"
          imgSrc={require('../../../assets/images/GhanaFlag.png')}
          onPress={() => {
            ref.current.close();
            navigate('Deposit', { currency: 'Cedis' });
          }}
        />
        <ListItem
          title="BTC"
          description="Bitcoin"
          imgSrc={require('../../../assets/images/NigeriaFlag.png')}
          onPress={() => {
            ref.current.close();
            navigate('Deposit', { currency: 'Bitcoin' });
          }}
        />
      </Container>
    </RBSheet>
  );
});

export default FundActionSheet;
