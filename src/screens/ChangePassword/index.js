import React, { useState, useMemo } from 'react';
import { Text } from 'react-native';
import { useDispatch } from 'react-redux';
import { TopNav, Button, TextInput } from '../../components';
import { FlipContainer, FlipContent } from '../../Layout';
import { changePassword } from '../../store/actions/Auth';
import Styles from './styles';

const ChangePassword = () => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const [formData, setFormState] = useState({
    password: '',
    newPassword: '',
    confirmPassword: '',
  });
  const disabled = useMemo(
    () =>
      !formData.password ||
      !formData.newPassword ||
      !formData.confirmPassword ||
      loading,
    [formData, loading]
  );
  const handleSubmit = async () => {
    setLoading(true);
    try {
      await dispatch(
        changePassword({
          currentPassword: formData.password,
          newPassword: formData.confirmPassword,
        })
      );
    } finally {
      setLoading(false);
    }
  };
  return (
    <FlipContainer>
      <TopNav type={'titleBased'} rightTitle={'Change Password'} />
      <FlipContent style={Styles.contentContainer}>
        <TextInput
          style={{ ...Styles.textInput }}
          label={'Old Password'}
          placeholder={'Password'}
          onChangeText={password => setFormState(s => ({ ...s, password }))}
        />

        <TextInput
          style={{ ...Styles.textInput }}
          label={'New Password'}
          placeholder={'Enter Password'}
          onChangeText={newPassword =>
            setFormState(s => ({ ...s, newPassword }))
          }
        />

        <TextInput
          style={{ ...Styles.textInput }}
          label={'Confirm New Password'}
          placeholder={'Enter Password'}
          onChangeText={confirmPassword =>
            setFormState(s => ({ ...s, confirmPassword }))
          }
        />
        <Button
          borderRadius={10}
          style={Styles.button}
          disabled={disabled}
          loading={loading}
          onPress={handleSubmit}
        >
          <Text>Change Password</Text>
        </Button>
      </FlipContent>
    </FlipContainer>
  );
};

export default ChangePassword;
