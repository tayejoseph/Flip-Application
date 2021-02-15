//@flow
import { default as React, useState } from 'react';
import { ScrollView, View, StatusBar } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { TouchableRipple, Text } from 'react-native-paper';
import { useDispatch } from 'react-redux';
import AsyncStorage from '@react-native-community/async-storage';
import { TopNav, Button } from '../../components';
import styles, { Container } from './styles';
import { colors } from '../../constants';
import { logOut } from '../../store/actions/Auth';
import Icon from '../../lib/icon';

const MenuItem = ({ title, icon, onPress }): React$Node => {
  return (
    <TouchableRipple onPress={onPress} style={styles.menuItem}>
      <View style={styles.menuItemContent}>
        <Icon
          name={icon}
          color={colors.secondary}
          size={20}
          style={{ marginRight: 16 }}
        />
        <Text style={styles.menuItemTitle}>{title}</Text>
      </View>
    </TouchableRipple>
  );
};

const Menu = (): React$Node => {
  const { navigate } = useNavigation();
  const dispatch = useDispatch();
  const [items] = useState<Array>([
    {
      title: 'Profile',
      icon: 'person-circle-outline',
      route: 'Profile',
    },
    {
      title: 'Settings',
      icon: 'settings-outline',
      route: 'Setting',
    },
    {
      title: 'Bank Accounts',
      icon: 'card-outline',
      route: 'Account',
    },
    // {
    //   title: 'Refer & Earn/FAQs',
    //   icon: 'timer-outline',
    //   route: '',
    // },
    {
      title: 'Contact Support',
      icon: 'cog-outline',
      route: '',
    },
    {
      title: 'logout',
      icon: 'log-out-outline',
      route: 'logout',
    },
  ]);

  const handleLogout = async () => {
    dispatch(logOut());
  };

  return (
    <Container>
      <StatusBar backgroundColor={colors.primary} barStyle={'default'} />
      <TopNav
        right={() => (
          <Button
            color={'#fff'}
            mode={'text'}
            compact={true}
            style={{ backgroundColor: 'none', border: 'none' }}
          >
            <Text>Menu</Text>
          </Button>
        )}
      />
      <ScrollView
        style={styles.container}
        contentContainerStyle={{
          justifyContent: 'center',
          flex: 1,
        }}
      >
        {items.map(({ route, ...props }, index) => (
          <MenuItem
            key={index}
            {...props}
            onPress={() =>
              route === 'logout'
                ? handleLogout()
                : route
                ? navigate(route)
                : null
            }
          />
        ))}
      </ScrollView>
    </Container>
  );
};

export default Menu;
