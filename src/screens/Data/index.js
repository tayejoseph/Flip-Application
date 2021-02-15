import React, { useState } from 'react';
import { Text } from 'react-native';
import { TopNav, Button, TextInput } from '../../components';
import { FlipContainer, FlipContent } from '../../Layout';
import Styles from './styles';

const Profile = () => {
  const [formData, setFormState] = useState({
    firstName: '',
    lastName: '',
    phoneNumber: '',
  });
  return (
    <FlipContainer>
      <TopNav type={'titleBased'} rightTitle={'Edit Profile'} />
      <FlipContent style={Styles.contentContainer}>
        <TextInput
          style={{ ...Styles.textInput }}
          label={'First Name'}
          placeholder={'Enter Your First Name'}
          onChangeText={firstName => setFormState(s => ({ ...s, firstName }))}
        />

        <TextInput
          style={{ ...Styles.textInput }}
          label={'Last Name'}
          placeholder={'Enter Your Last Name'}
          onChangeText={lastName => setFormState(s => ({ ...s, lastName }))}
        />

        <TextInput
          style={{ ...Styles.textInput }}
          label={'Phone Number'}
          placeholder={'Enter Your Phone Number'}
          onChangeText={phoneNumber =>
            setFormState(s => ({ ...s, phoneNumber }))
          }
        />
        <Button borderRadius={10} style={Styles.button}>
          <Text>Update Profile</Text>
        </Button>
      </FlipContent>
    </FlipContainer>
  );
};

export default Profile;
