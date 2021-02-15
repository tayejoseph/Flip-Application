import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { TouchableRipple, Text, IconButton } from 'react-native-paper';
import { Container, Left, Middle, Right, Styles } from './styles';
import { colors } from '../../constants';
import Icon from '../../lib/icon';

const TopNav = ({
  left,
  middle,
  right,
  handleBackClick,
  type,
  style,
  rightTitle,
}) => {
  const navigation = useNavigation();
  return (
    <Container style={style}>
      {type === 'titleBased' ? (
        <>
          <Left>
            {left ? (
              left()
            ) : (
              <IconButton
                icon={'arrow-left'}
                size={20}
                onPress={() => navigation.goBack()}
                color={colors.secondary}
              />
            )}
          </Left>
          <Middle>{middle && middle()}</Middle>
          <Right>
            {rightTitle && (
              <Text style={Styles.titleBasedNavTxtRight}>{rightTitle}</Text>
            )}
          </Right>
        </>
      ) : (
        <>
          <Left>
            {left ? (
              left()
            ) : (
              <TouchableRipple
                style={Styles.backBtn}
                onPress={() => {
                  if (typeof handleBackClick === 'function') handleBackClick();
                  else {
                    navigation.goBack();
                  }
                }}
              >
                <Icon name="arrow-back-outline" size={20} color={'#ffff'} />
              </TouchableRipple>
            )}
          </Left>
          <Middle>{middle && middle()}</Middle>
          <Right>{right && right()}</Right>
        </>
      )}
    </Container>
  );
};

export default TopNav;
