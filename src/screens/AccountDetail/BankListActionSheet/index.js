import React, { useState, useEffect, useRef } from 'react';
import { ScrollView, View, TextInput } from 'react-native';
import { Text } from 'react-native-paper';
import Icon from '../../../lib/icon';
import RBSheet from 'react-native-raw-bottom-sheet';
import { colors } from '../../../constants';
import Container, { styles, ListItemContainer } from './styles';

const ListItem = props => {
  return (
    <ListItemContainer onPress={props.handleSelectBank}>
      <Text style={styles.bankName}>{props.name}</Text>
    </ListItemContainer>
  );
};

const FundActionSheet = React.forwardRef(({ bankLists, setFormState }, ref) => {
  const [search, setState] = useState('');
  const inputRef = useRef(null);
  const [filteredLists, setBankLists] = useState(bankLists);

  // useEffect(() => {
  //   if (inputRef.current && ref.current.state.modalVisible) {
  //     inputRef.current.focus();
  //   }
  // }, [inputRef, ref]);

  useEffect(() => {
    if (search) {
      setBankLists(() =>
        bankLists.filter(item =>
          item.name.toLowerCase().includes(search.toLowerCase())
        )
      );
    } else {
      setBankLists(bankLists);
    }
  }, [search, bankLists]);
  return (
    <RBSheet
      ref={ref}
      animationcurrency={'fade'}
      closeOnDragDown={true}
      height={500}
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
        <View style={styles.searchBoxContainer}>
          <Icon
            name="search-outline"
            size={20}
            color={'#737581'}
            style={{ marginRight: 15, fontWeight: 'bold' }}
          />
          <TextInput
            value={search}
            ref={inputRef}
            placeholder={'Search'}
            onChangeText={search => setState(search)}
            style={{ flex: 1 }}
          />
        </View>
        <ScrollView style={{ height: 380 }}>
          {filteredLists &&
            filteredLists
              .sort((a, b) =>
                a.name.toLowerCase() > b.name.toLowerCase() ? 1 : -1
              )
              .map(item => (
                <ListItem
                  key={item.code}
                  {...item}
                  handleSelectBank={() => {
                    setFormState(s => ({
                      ...s,
                      bankCode: item.code,
                      bankName: item.name,
                      bankId: item.id,
                    }));
                    ref.current.close();
                  }}
                />
              ))}
        </ScrollView>
      </Container>
    </RBSheet>
  );
});

export default FundActionSheet;
