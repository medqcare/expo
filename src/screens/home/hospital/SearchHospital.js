import React, { Component, useState, useEffect } from 'react';
import {
  View,
  ScrollView,
  Text,
  TextInput,
  FlatList,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  ActivityIndicator,
  ImageBackground,
  KeyboardAvoidingView,
  ClippingRectangle,
  Image,
  BackHandler,
  RefreshControl,
  ToastAndroid,
  StatusBar,
} from 'react-native';
import { connect } from 'react-redux';
import CardHospital from '../../../components/home/hospital/card-hospital';
import { searchAllClinics, searchClinicByName } from '../../../stores/action';
import SearchBar from '../../../components/headers/SearchBar';

import axios from 'axios';

import IconEntypo from 'react-native-vector-icons/Entypo';
import Icon from 'react-native-vector-icons/Ionicons';
import latLongToKM from '../../../helpers/latlongToKM';
import Search from '../../../assets/svg/Search';
import ArrowBack from '../../../assets/svg/ArrowBack';

import { baseURL } from '../../../config';
import { heightPercentageToDP } from 'react-native-responsive-screen';
import LottieLoader from 'lottie-react-native';

/**
 *
 * <LottieLoader source={require("../../animation/loading.json")} loop autoplay/>
 */

function SearchDoctorPage(props) {
	const { userLocation, isLoading, error } = props.userLocationReducer
	const { clinics, isLoading: clinicLoading, error: clinicError } = props.clinicReducer
	let mainFac = props.navigation.state.params.facility;
	const [loader, setLoad] = useState(false);
	const [currentPage, setCurrentPage] = useState(0);
	const [show, setShow] = useState([]);
	const [search, setSearch] = useState([]);

	useEffect(async () => {
		await props.searchAllClinics(userLocation, setShow)
	}, []);

	const _textChange = async (facility) => {
		try {
			if(!facility){
				await props.searchAllClinics(userLocation, setShow)
			} else {
				await props.searchClinicByName(facility, 'Clinic', userLocation, setShow)
			}
		} catch (error) {
			console.log(error.message, '_textChange error');
		}
	};

  const onRefresh = React.useCallback(async () => {
    await props.searchAllClinics(userLocation, setShow)
  }, [loader]);

  BackHandler.addEventListener('hardwareBackPress', () => {
    return props.navigation.navigate('Home');
  });
  return (
    <KeyboardAvoidingView
      style={styles.Container}
      behavior="height"
      enabled={false}
    >
      {/* <StatusBar hidden /> */}
      <View style={{ height: '18%' }}>
        <ImageBackground
          source={require('../../../assets/background/RectangleHeader.png')}
          style={{ flex: 1, paddingTop: heightPercentageToDP('5%') }}
        >
          <View style={{ marginHorizontal: 20, flex: 1 }}>
            <TouchableOpacity onPress={() => props.navigation.pop()}>
              <View style={{ flexDirection: 'row' }}>
                <View style={{ marginTop: 3 }}>
                  <ArrowBack />
                </View>
                <Text
                  style={{
                    fontSize: 18,
                    color: '#ffff',
                    position: 'relative',
                    marginLeft: 10,
                  }}
                >
                  Daftar Outlet
                </Text>
              </View>
            </TouchableOpacity>
            <SearchBar
              autoFocus={true}
              placeholder={'cari outlet'}
              onChangeText={(text) => _textChange(text)}
            />
          </View>
        </ImageBackground>
      </View>

      <View style={{ flex: 4.8, backgroundColor: '#121212' }}>
        {clinicLoading ? (
          <LottieLoader
            source={require('../../animation/loading.json')}
            loop
            autoPlay
          />
        ) : show?.length > 0 ? (
          <FlatList
            refreshControl={
              <RefreshControl refreshing={loader} onRefresh={onRefresh} />
            }
            data={show}
            keyExtractor={(item, index) => String(index)}
            renderItem={({ item }) => (
              <TouchableOpacity
                onPress={() =>
                  props.navigation.navigate('DetailHospital', { data: item })
                }
                style={{
                  paddingLeft: 18,
                  marginBottom: 8,
                }}
              >
                <CardHospital data={item} />
                {/* <Text style={{backgroundColor:'#F1D5CC', marginVertical:10}}>{JSON.stringify(item, null, 2)}</Text> */}
              </TouchableOpacity>
            )}
            // onEndReached={() => fetchHospitalPagination()}
            onEndReachedThreshold={1}
          />
        ) : (
          <View style={{ flex: 1, padding: 20, alignItems: 'center' }}>
            <Text style={{ color: '#DDDDDD' }}>Tidak ada klinik terdekat</Text>
          </View>
        )}

        {search === false && (
          <View
            style={{
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: '#FFF',
              flex: 1,
            }}
          >
            <Image
              source={{ uri: 'https://i.imgur.com/FPC6uwX.jpg' }}
              style={{ height: '30%', width: '40%' }}
            />
          </View>
        )}
      </View>
    </KeyboardAvoidingView>
  );
}

const dimHeight = Dimensions.get('screen').height;
const dimWidth = Dimensions.get('screen').width;

const styles = StyleSheet.create({
  Container: {
    marginHorizontal: 0,
    marginTop: 0,
    flex: 1,
    height: '100%',
    backgroundColor: '#fff',
  },

  Icon: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    minWidth: dimWidth * 0.2,
    marginBottom: '10%',
  },
  HeaderBar: {
    height: dimHeight * 0.12,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#3c9d9b',
    // padding:10
  },
  SearchBar: {
    padding: 10,
    minWidth: '100%',
  },
  NearestBar: {
    marginBottom: '1%',
    flexDirection: 'row',
    // width: "100%",
    backgroundColor: '#Fff',
    alignItems: 'center',
    paddingTop: 10,
    paddingHorizontal: 20,
    // height: "7.5%"
    flex: 0.2,
  },
  Category: {
    borderStyle: 'solid',
    borderWidth: 0.7,
    borderColor: 'gray',
    backgroundColor: '#fff',
    minHeight: dimHeight * 0.1,
    marginBottom: dimHeight * 0.02,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-evenly',
    alignItems: 'flex-start',
    paddingTop: '5%',
  },
  searchBar: {
    borderColor: '#DDDDDD',
    borderWidth: 0.8,
    padding: 5,
    height: 50,
    marginRight: 10,
    marginTop: 15,
    borderRadius: 25,
    flexDirection: 'row',
    width: '90%',
  },
  headerImage: {
    width: '100%',
    height: '100%',
    position: 'absolute',
  },
});

const mapStateToProps = (state) => {
  return state;
};

const mapDispatchToProps = {
  searchAllClinics,
  searchClinicByName,
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchDoctorPage);
