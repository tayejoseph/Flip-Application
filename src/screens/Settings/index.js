import React from 'react';
import { TopNav } from '../../components';
import { FlipContainer, FlipContent } from '../../Layout';
import { List } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import { Styles } from './styles';

const Settings = () => {
  const { navigate } = useNavigation();
  return (
    <FlipContainer>
      <TopNav type={'titleBased'} rightTitle={'Settings'} />
      <FlipContent>
        <List.Item
          title="Bank Account"
          style={Styles.listItem}
          onPress={() => navigate('Account')}
        />
        <List.Item
          title="Password"
          style={Styles.listItem}
          onPress={() => navigate('ChangePassword')}
        />
      </FlipContent>
    </FlipContainer>
  );
};

export default Settings;
