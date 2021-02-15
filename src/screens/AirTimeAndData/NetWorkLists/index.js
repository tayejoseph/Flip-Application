import React, { useState, useMemo } from 'react';
import { View, Image } from 'react-native';
import { useDispatch } from 'react-redux';
import { Text, TouchableRipple, ActivityIndicator } from 'react-native-paper';
import AirTimeModal from '../AirTimeModal';
import { colors } from '../../../constants';
import { initiateBillPayment } from '../../../store/actions/Bill';
import Styles from './styles';

const images = [
  {
    name: 'mtn',
    logo: require('../../../assets/images/mtn.png'),
  },
  {
    name: 'tigo',
    logo: require('../../../assets/images/tigo.png'),
  },
  { name: 'vodafone', logo: require('../../../assets/images/vodafone.jpg') },
];

const NetWorkLists = ({ networkLists, currency }) => {
  const dispatch = useDispatch();
  const [showModal, setDisplay] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({
    phoneError: true,
    amountError: true,
  });

  const [{ activeNetwork, ...formData }, setFormState] = useState({
    activeNetwork: '',
    amount: 0,
    itemCode: 0,
    referenceCurrency: currency,
    customerNumber: '',
  });

  const disabled = useMemo(
    () => errors.phoneError || errors.amountError || loading,
    [errors, loading]
  );

  const handleSubmit = async () => {
    setLoading(true);
    try {
      const response = await dispatch(
        initiateBillPayment(`airtime-${currency === 'NGN' ? 'ng' : 'gh'}`, {
          ...formData,
          customerNumber: `${
            currency === 'NGN' ? '+234' : '+233'
          }${formData.customerNumber.slice(1)}`,
        })
      );
    } finally {
      setLoading(false);
    }
  };
  return (
    <View style={Styles.container}>
      {showModal && (
        <AirTimeModal
          {...{
            showModal,
            hideModal: () => setDisplay(false),
            setFormState,
            setErrors,
            errors,
            disabled,
            handleSubmit,
            currency,
          }}
        />
      )}
      <View style={{ padding: 15 }}>
        {networkLists && networkLists.length === 0 ? (
          <Text>We don't have network for this area yet</Text>
        ) : !networkLists ? (
          <ActivityIndicator animating={true} color={colors.primary} />
        ) : (
          <>
            <Text style={{ fontWeight: 'bold' }}>
              Select Your network below
            </Text>
            <View style={Styles.netWorksContainer}>
              {networkLists &&
                networkLists.map(({ name, item_code }) => (
                  <TouchableRipple
                    key={item_code}
                    style={Styles.netWorkItem}
                    onPress={() => {
                      setFormState(s => ({
                        ...s,
                        activeNetwork: name.split(' ')[0].toLowerCase(),
                        itemCode: item_code,
                      }));
                      setDisplay(true);
                    }}
                  >
                    <>
                      <View style={Styles.imgContainer}>
                        <Image
                          source={
                            images.filter(
                              item =>
                                name.split(' ')[0].toLowerCase() === item.name
                            )[0].logo
                          }
                          style={Styles.img}
                        />
                      </View>
                      <Text style={Styles.imgTxt}>{name.split(' ')[0]}</Text>
                    </>
                  </TouchableRipple>
                ))}
            </View>
          </>
        )}
      </View>
    </View>
  );
};

export default NetWorkLists;
