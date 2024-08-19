import React, { useCallback, useEffect, useRef, useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  FlatList,
  TouchableOpacity,
  RefreshControl,
  ScrollView,
  SafeAreaView,
  StatusBar,
  Platform,
  ActivityIndicator,
  BackHandler,
  Image

} from 'react-native';
import Checkbox from 'expo-checkbox';
import { connect, useDispatch, useSelector } from 'react-redux';
import { formatNumberToRupiah } from '../../../helpers/formatRupiah';
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';
import SearchBar from '../../../components/headers/SearchBar';
import { MedicalServicesDummy } from './dummyData';
import GradientSearchBarHeader from '../../../components/headers/GradientSearchBarHeader';
import { Entypo, FontAwesome, FontAwesome5, } from '@expo/vector-icons'
import { getMedicalServices } from '../../../stores/action'
import LottieLoader from 'lottie-react-native'
import getDistanceFromLatLonInKm from '../../../helpers/latlongToKM'
import keys from '../../../stores/keys';
import {
	GREY_SECONDARY,
	GREEN,
	BLUE_PRIMARY,
	BLACK_PRIMARY,
	BLACK_SECONDARY,
	GREY_BORDER_LINE
} from '../../../values/color.js'

const { 
    SET_MEDICAL_SERVICES,
    SET_MEDICAL_SERVICES_CURRENTPAGE,
    SET_MEDICAL_SERVICES_TYPE,
    SET_MEDICAL_SERVICES_STATUS,
    SET_MEDICAL_SERVICES_LOADING,
    SET_MEDICAL_SERVICES_ERROR,
} = keys.medicalServicesKeys

const dimHeight = Dimensions.get('window').height;
const dimWidth = Dimensions.get('window').width;

function MedicalServices({navigation, userData, getMedicalServices, userLocationReducer, medicalServicesReducer}) {
	const dispatch = useDispatch()
	const { lat: userLat, lng: userLng } = userLocationReducer.userLocation;
	const { medicalServices: medicalServicesR, isLoading, error, type, status, currentPage: currentPageR } = medicalServicesReducer
	const [refreshLoading, setRefreshLoading] = useState(false)
	const [medicalServices, setMedicalServices] = useState(medicalServicesR)
	const [currentPage, setCurrentPage] = useState(1)
	const [hasNextPage, setHasNextPage] = useState(false)
	const [discountFilter, setDiscountFilter] = useState('')

	useEffect(async () => {
		await searchMedicalServices()
	}, [])

	async function changeDiscountFilter(dicountFilter) {
		try {
			setCurrentPage(1)
			setHasNextPage(false)
			setDiscountFilter(dicountFilter)
			await searchMedicalServices(null, dicountFilter, 1)
		} catch(error) {
			console.log(error, 'changeDiscountFilter function error')
		}

	}

	async function searchMedicalServices(addPage, filter = '', currentPageParam){
		try {
			const currentPageInsideFunction = currentPageParam ? currentPageParam : currentPage
			const returnHasNextPage = await getMedicalServices(type, status, currentPageInsideFunction, medicalServicesR, addPage, setMedicalServices, setCurrentPage, filter)
			if(returnHasNextPage) setHasNextPage(true)
			else setHasNextPage(false)
		}
		catch(error){
			console.log(error)
			console.log('error di penunjang list')
		}
	}

	async function searchFunction(text){
		if(text){
			const lowerCase = text.toLowerCase()
			const newMedicalServiceList = medicalServicesR.filter(el => el.name.toLowerCase().includes(lowerCase))
			setMedicalServices(newMedicalServiceList)
		}
		else {
			setMedicalServices(medicalServicesR)
		}
	}

	const onRefresh = useCallback(async () => {
		dispatch({
			type: SET_MEDICAL_SERVICES_TYPE,
			payload: 'UMUM'
		})
		dispatch({
			type: SET_MEDICAL_SERVICES_STATUS,
			payload: true
		})
		setCurrentPage(1)
		searchMedicalServices();
	}, [refreshLoading]);

	BackHandler.addEventListener('hardwareBackPress', () => {
		navigation.pop();
		return true;
	});

	function renderMedicalService({item}){
		const { clinic, discount, itemCheck, name, basePrice, price, schedule, status, photo } = item
		const defaultLocation = {
			lat: -6.2416152,
			long: 106.9947997,
		}

		let clinicLocation;

		if(typeof clinic.location === "object"){
			const { coordinates } = clinic.location
			const [long, lat] = coordinates
			clinicLocation = { lat, long }
		} else {
			const parsedLocation = JSON.parse(clinic.location)

			if (parsedLocation) {
				const { coordinates } = parsedLocation
				const [long, lat] = coordinates
				clinicLocation = {
					lat,
					long
				}
			}
		}

		let distance = 0

		if (userLat && userLng && clinicLocation) {
		   distance = Math.floor(getDistanceFromLatLonInKm(clinicLocation.lat, clinicLocation.long, userLat, userLng))
		}


		return (
			<View style={styles.medicalServiceCardContainer}>
				<View style={styles.leftContent}>
					<View style={{marginBottom: 4}}>
						<Text style={textStyles.nameColor}>{name}</Text> 
					</View>
					<View style={{flexDirection: 'row', alignItems:'center', marginBottom: 7}}>
						<FontAwesome5 name="hospital-alt" size={12} color="#A5A5A5" />
						<Text style={textStyles.greyColorWithPaddingLeftText}>{clinic.name}</Text> 
					</View>
					<View style={{flexDirection: 'row', alignItems:'center', marginBottom: 7}}>
						<Entypo name="location" size={12} color="#A5A5A5" />
						<Text numberOfLines={2} style={[textStyles.greyColorWithPaddingLeftText, { width: '90%'}]}>{clinic.address}</Text> 
					</View>
					{userLat && userLng && clinicLocation ? (
					<View style={{flexDirection: 'row', alignItems:'center', marginBottom: 7}}>
						<FontAwesome name="location-arrow" size={12} color="#A5A5A5" />
						<Text style={textStyles.greyColorWithPaddingLeftText}>{distance} Km</Text> 
					</View>
					) : null}

					<TouchableOpacity 
						onPress={() => navigation.navigate('MedicalServiceDetail', { item })}
						style={styles.makeAppointmentButton}>
						<Text style={textStyles.whiteColorText}>Lihat Detail</Text>
					</TouchableOpacity>
				</View>

				<View style={styles.rightContent}>
					<Image source={{uri: photo != null && photo.url ? photo.url : 'https://th.bing.com/th/id/OIP.-MMHEFs3KUsUPZMcRrHP-gHaEo?pid=ImgDet&rs=1'}} style={{width:60,height:60}}/>
					<View 
						style={{alignItems: 'flex-end'}}
					>
						{discount ? (
							<View style={styles.promoContainer}>								
								<Text style={textStyles.promoText}>Promo</Text>
							</View>
						): null} 
						<Text style={[textStyles.greyColorText]}>Biaya Mulai Dari</Text>
						<View style={{flexDirection: 'row'}}>
							<Text style={ discount ? textStyles.strikedThroughPrice : textStyles.greyColorText}>{formatNumberToRupiah(basePrice)}</Text>
							{discount ? (
								<Text style={textStyles.discountedPrice}>{formatNumberToRupiah(price)}</Text>
							) : null}
						</View>
					</View>
				</View>
			</View>
		)
	}

	return (
		<View 
			style={styles.container}
		>
			{/* Header */}
			<GradientSearchBarHeader
				navigate={navigation.pop}
				navigateBack = "Home"
				title = "Layanan Medis"
				placeholder={'cari layanan medis...'}
				searchFunction={searchFunction}
				// option
			/>

			{/* Map Selection */}
			<View style={styles.mapSelectionContainer}>
				<View 
					style={{
						paddingVertical: heightPercentageToDP('1%'),
						marginVertical: heightPercentageToDP('1%'),
						marginHorizontal: widthPercentageToDP('0.5%'),
					}}
				>
					<Text style={textStyles.mapSelectionText}>Filter diskon</Text>
				</View>
				{discountFilter === 'discountedItems' ? 
					<TouchableOpacity
						onPress={() => {
							changeDiscountFilter('noDiscount')
						}}
						style={styles.mapSelectionButton}
					>
						<Text style={textStyles.discountedItemText}>Penunjang berdiskon</Text>
					</TouchableOpacity>
					: discountFilter === 'noDiscount' ? 
					<TouchableOpacity
						onPress={() => {
							changeDiscountFilter('')
						}}
						style={styles.mapSelectionButton}
					>
						<Text style={textStyles.noDiscountText}>Tidak ada diskon</Text>
					</TouchableOpacity> :
					<TouchableOpacity
						onPress={() => {
							changeDiscountFilter('discountedItems')
						}}
						style={styles.mapSelectionButton}
					>
						<Text style={textStyles.noFilterText}>Semua penunjang</Text>
					</TouchableOpacity>
				}
			</View>

			{/* Content */}
			{isLoading ? (
				// <ActivityIndicator style={styles.noContentContainer} size={"small"} color={"blue"} />
				<LottieLoader
					source={require('../../animation/loading.json')}
					style={styles.noContentContainer}
					loop
					autoPlay
				/>
			) :
			( medicalServices.length > 0 ? (
				<>
				<FlatList
					refreshControl={
						<RefreshControl refreshing={refreshLoading} onRefresh={onRefresh} />
					}
					style={styles.contentContainer}
					data={medicalServices}
					keyExtractor={(item, index) => String(index)}
					renderItem={renderMedicalService}
					onEndReached={() => {
						if(hasNextPage) {
							console.log('Using searchMedicalService function')
							searchMedicalServices(true, discountFilter)
						}
					}}
					onEndReachedThreshold={1}
					ListFooterComponent={() => 
						hasNextPage && (
							<View style={{paddingVertical: 15}}>
								<ActivityIndicator size={"large"} color={"white"} />
							</View>
						)
					}
				/>
				</>
			) :
			(
				<View style={styles.noContentContainer}>
					<Text style={textStyles.whiteColorText}>Tidak ada layanan medis</Text>
				</View>
			)
			)}

			{/* <View style={styles.contentContainer}>
				{MedicalServicesDummy.map((MedicalService, indexMedicalService) => {
					return (
						<MedicalServiceCard key={indexMedicalService} dataDetail={MedicalService}/>
					)
				})}
			</View> */}
		</View>
	)
}

const textStyles = StyleSheet.create({
	mapSelectionText: {
		paddingLeft: widthPercentageToDP('1.5%'), 
		color: '#A5A5A5'
	},

	noFilterText: {
		color: GREY_SECONDARY
	},

	noDiscountText: {
		color: '#F37335'
	},

	discountedItemText: {
		color: GREEN
	},

	whiteColorText: {
		color: '#DDDDDD'
	},
	
	greyColorText: {
		color: '#A5A5A5'
	},
	
	greyColorWithPaddingLeftText: {
		color: '#A5A5A5',
		paddingLeft: 12,
	},
	
	nameColor: {
		color: '#DDDDDD',
		fontWeight: '400',
		fontSize: 16,
		textTransform: 'capitalize'
	},

	promoText: {
		color: '#14AE5F'
	},

	strikedThroughPrice: {
		textDecorationLine: 'line-through',
		textDecorationStyle: 'solid',
		color: '#A5A5A5'
	},

	discountedPrice: {
		color: '#14AE5F',
		paddingLeft: widthPercentageToDP('1%')
	},
})

const styles = StyleSheet.create({
	container: {
		backgroundColor: '#1F1F1F',
		height: dimHeight,
		flex: 1
	},

	mapSelectionContainer: {
		backgroundColor: '#333333',
		paddingHorizontal: widthPercentageToDP('2.5%'),
		flexDirection: 'row',
		justifyContent: 'space-between'
	},
	
	mapSelectionButton: {
		paddingVertical: heightPercentageToDP('1%'),
		paddingHorizontal: widthPercentageToDP('2.5%'),
		marginVertical: heightPercentageToDP('1%'),
		marginHorizontal: widthPercentageToDP('0.5%'),
		borderRadius: 8,
		backgroundColor: BLACK_PRIMARY,
	},

	contentContainer: {
		paddingBottom: heightPercentageToDP('2%'),
		paddingHorizontal: widthPercentageToDP('4%'),
	},

	noContentContainer: {
		justifyContent: 'center',
		alignItems: 'center',
		paddingTop: 15
	},
	
	medicalServiceCardContainer: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		paddingVertical: heightPercentageToDP('2%'),
		borderBottomWidth: 1,
		borderBottomColor: '#3E3D3D',
		flex: 1,
	},

	leftContent: {
		alignItems: 'flex-start',
		flex: 0.5
	}, 

	makeAppointmentButton: {
		backgroundColor: '#005EA2',
		paddingVertical: heightPercentageToDP('1%'),
		marginTop: heightPercentageToDP('1%'),
		paddingHorizontal: widthPercentageToDP('2%'),
		borderRadius: 8
	},

	rightContent: {
		alignItems: 'flex-end',
		flex: 0.5
	},

	promoContainer: {
		marginVertical: heightPercentageToDP('0.5%'),
		backgroundColor: '#1D3E2D',
		paddingVertical: heightPercentageToDP('0.2%'),
		paddingHorizontal: widthPercentageToDP('1%'),
		borderRadius: 10
	}
});

const mapStateToProps = (state) => state;

const mapDispatchToProps = {
	getMedicalServices
}

export default connect(mapStateToProps, mapDispatchToProps)(MedicalServices);
