import React, { useState } from 'react';
import { connect } from 'react-redux';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  Image,
  BackHandler,
  ActivityIndicator,
} from 'react-native';

//action
import { resetPasswordPhone } from '../../../stores/action';
import { ToastAndroid } from 'react-native';
import GreyHeader from '../../../components/headers/GreyHeader';

const resetPasswdPhone = (props) => {
  BackHandler.addEventListener('hardwareBackPress', () => {
    props.navigation.pop();
    return true;
  });

  const [load, setLoad] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState(null);

  const validation = () => {
    setLoad(true);
    const isNumber = +phoneNumber;
    if (phoneNumber === null) {
      ToastAndroid.show(
        'Mohon untuk mengisi nomor terlebih dahulu.',
        ToastAndroid.LONG
      );
      setLoad(false);
    } else if (!isNumber) {
      ToastAndroid.show(
        'Mohon mengisi nomor dengan format yang benar',
        ToastAndroid.LONG
      );
      setLoad(false);
    } else {
      Finalvalidation();
    }
  };

  function Finalvalidation() {
    setLoad(false);

    console.log('final validation');
    props.resetPasswordPhone(
      phoneNumber,
      props.navigation.navigate,
      'InputSecretCodeOTP'
    );
  }

  return (
    <>
      <GreyHeader
        title="Reset Password"
        navigateBack="ResetPassword"
        navigate={props.navigation.navigate}
      />
      <View style={style.container}>
        <View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              paddingVertical: 16,
              paddingHorizontal: 14,
              backgroundColor: '#2F2F2F',
              borderRadius: 4,
              marginBottom: 20,
            }}
          >
            <Image
              style={style.image}
              source={require('../../../assets/png/ic_hp.png')}
            />
            <Text
              style={{ width: '80%', marginLeft: 12, color: '#f8fafc' }}
              numberOfLines={3}
            >
              Masukkan nomor hp yang sudah terdaftar untuk mengirimkan kode
              verifikasi
            </Text>
          </View>
          <TextInput
            value={phoneNumber}
            placeholder="Nomor HP"
            placeholderTextColor={'#cbd5e1'}
            style={{
              paddingVertical: 14,
              paddingHorizontal: 12,
              backgroundColor: '#2F2F2F',
              color: '#f8fafc',
            }}
            keyboardType="numeric"
            onChangeText={setPhoneNumber}
          />
        </View>
        <TouchableOpacity style={style.button} onPress={() => validation()}>
          <View>
            {load ? (
              <ActivityIndicator size={'small'} color={'#FFF'} />
            ) : (
              <Text style={{ fontSize: 16, color: '#00FFEC' }}>Kirim Kode</Text>
            )}
          </View>
        </TouchableOpacity>
      </View>
    </>
  );
};

const style = StyleSheet.create({
  container: {
    backgroundColor: '#1F1F1F',
    flex: 1,
    paddingHorizontal: 12,
    paddingVertical: 18,
    justifyContent: 'space-between',
  },
  base: {
    flex: 1,
    paddingHorizontal: 20,
  },
  content: {
    height: '15%',
    backgroundColor: '#2F2F2F',
  },
  main: {
    flexDirection: 'row',
    marginTop: 35,
    borderRadius: 5,
    backgroundColor: '#2F2F2F',
  },
  main2: {
    flexDirection: 'row',
    marginTop: -2,
    borderRadius: 5,
    height: 75,
    backgroundColor: '#2F2F2F',
  },
  image: {
    width: 45,
    height: 45,
  },
  description: {
    color: '#B5B5B5',
    fontSize: 15,
    width: '59%',
    textAlign: 'left',
    marginTop: -4,
  },
  wrapper: {
    marginTop: 25,
    marginLeft: 20,
  },
  txtInput: {
    marginTop: 35,
    borderRadius: 5,
    backgroundColor: '#2F2F2F',
  },
  txtInput2: {
    marginTop: -2,
    borderRadius: 5,
    height: 55,
    backgroundColor: '#2F2F2F',
  },
  txtInputTeks: {
    color: '#DDDDDD',
    marginTop: 15,
    width: '100%',
    height: 30,
    paddingHorizontal: 20,
    borderRadius: 3,
    color: '#DDDDDD',
    backgroundColor: '#2F2F2F',
    fontSize: 16,
  },
  button: {
    width: '95%',
    height: 50,
    marginTop: '65%',
    backgroundColor: 'rgba(31, 198, 188, 0.3)',
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.23,
    shadowRadius: 6,
    elevation: 4,
    marginHorizontal: 10,
  },
});

const mapStateToProps = (state) => {
  return state;
};

const mapDispatchToProps = {
  resetPasswordPhone,
};

export default connect(mapStateToProps, mapDispatchToProps)(resetPasswdPhone);
