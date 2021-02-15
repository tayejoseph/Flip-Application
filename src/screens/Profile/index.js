import React, { useState, useMemo } from 'react';
import { Text } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { TopNav, Button, TextInput } from '../../components';
import { handleUpateProfile } from '../../store/actions/Auth';
import { FlipContainer, FlipContent } from '../../Layout';
import Styles from './styles';

const Profile = () => {
  const { user } = useSelector(s => s.auth);
  const dispatch = useDispatch();
  const [formData, setFormState] = useState({
    firstName: user.firstName ? user.firstName : '',
    lastName: user.lastName ? user.lastName : '',
    phoneNumber: user.phoneNumber ? user.phoneNumber : '',
  });
  const [errors, setError] = useState([]);
  const [loading, setLoading] = useState(false);

  const disabled: boolean = useMemo(
    () =>
      loading ||
      !formData.firstName ||
      !formData.lastName ||
      !formData.phoneNumber ||
      errors.length > 0,
    [formData, loading, errors]
  );

  const handleSubmit = async () => {
    setLoading(true);
    try {
      await dispatch(handleUpateProfile(user.id, formData));
    } finally {
      setLoading(false);
    }
  };
  return (
    <FlipContainer>
      <TopNav type={'titleBased'} rightTitle={'Edit Profile'} />
      <FlipContent style={Styles.contentContainer}>
        <TextInput
          style={{ ...Styles.textInput }}
          label={'First Name'}
          value={formData.firstName}
          placeholder={'Enter Your First Name'}
          onChangeText={firstName => setFormState(s => ({ ...s, firstName }))}
        />

        <TextInput
          style={{ ...Styles.textInput }}
          label={'Last Name'}
          value={formData.lastName}
          placeholder={'Enter Your Last Name'}
          onChangeText={lastName => setFormState(s => ({ ...s, lastName }))}
        />

        <TextInput
          style={{ ...Styles.textInput }}
          label={'Phone Number'}
          value={formData.phoneNumber}
          placeholder={'Enter Your Phone Number'}
          onChangeText={phoneNumber =>
            setFormState(s => ({ ...s, phoneNumber }))
          }
        />
        <Button
          borderRadius={10}
          style={Styles.button}
          loading={loading}
          disabled={disabled}
          onPress={handleSubmit}
        >
          <Text>Update Profile</Text>
        </Button>
      </FlipContent>
    </FlipContainer>
  );
};

export default Profile;
