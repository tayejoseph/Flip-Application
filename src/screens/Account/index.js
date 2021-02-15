import React, { useEffect } from 'react';
import { View, ScrollView } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import { List, ActivityIndicator, Text } from 'react-native-paper';
import { colors } from '../../constants';
import { TopNav, Button } from '../../components';
import { FlipContainer, FlipContent } from '../../Layout';
import { handleGetBankAccs } from '../../store/actions/Banking';
import Styles from './styles';

const Account = () => {
  const { navigate } = useNavigation();
  const dispatch = useDispatch();
  const { accountData } = useSelector(s => s.user);

  useEffect(() => {
    dispatch(handleGetBankAccs());
  }, [dispatch]);

  return (
    <FlipContainer>
      <TopNav type={'titleBased'} rightTitle={'Bank Accounts'} />
      <FlipContent style={Styles.contentContainer}>
        {!accountData ? (
          <ActivityIndicator animating={true} color={colors.primary} />
        ) : (
          <>
            {accountData.length === 0 ? (
              <Text style={{ textAlign: 'center', marginVertical: 40 }}>
                Your Account Lists is Empty
              </Text>
            ) : (
              <ScrollView style={{ paddingHorizontal: 20 }}>
                {accountData.map(item => (
                  <List.Item
                    key={item.id}
                    onPress={() =>
                      navigate('AccountDetail', {
                        actionType: 'edit',
                        accountNumber: item.accountNumber,
                      })
                    }
                    title={item.bankName}
                    description={() => (
                      <View>
                        <Text>{item.accountName.toLowerCase()}</Text>
                        <Text>{item.accountNumber}</Text>
                      </View>
                    )}
                    titleStyle={Styles.titleStyle}
                    right={() => (
                      <View
                        style={{
                          justifyContent: 'center',
                        }}
                      >
                        <Text style={{ fontWeight: 'bold' }}>
                          {item.currency}
                        </Text>
                      </View>
                    )}
                    style={Styles.listItem}
                  />
                ))}
              </ScrollView>
            )}
            <Button
              borderRadius={10}
              style={{ marginTop: 20, marginHorizontal: 20 }}
              onPress={() => navigate('AccountDetail', { actionType: 'add' })}
            >
              <Text>Add Bank Account</Text>
            </Button>
          </>
        )}
      </FlipContent>
    </FlipContainer>
  );
};

export default Account;
