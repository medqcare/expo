import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  FlatList,
  BackHandler,
} from 'react-native';
import Header from '../../components/headers/GradientHeader';
import Activity from './activity';
import LottieLoader from 'lottie-react-native';
import { NavigationActions } from 'react-navigation'


//action
import {
  getCurrentQueueingNumber,
  getTodaysRegistration,
} from '../../stores/action';

const activityList = (props) => {
	const [refresh, setRefresh] = useState(true)
	const { userData } = props.userDataReducer
	const { queues, isLoading, error } = props.queuesReducer
	const [queues1, setQueues1] = useState([
		{
			_id: '1',
			orderType: "doctor",
			doctor: {
				doctorName: "Dr. John Doe",
			},
			patient: {
				patientName: 'Mawar'
			},
			queuingNumber: '03',
			queueID: '1'
		},
		{
			_id: '2',
			orderType: "doctor",
			doctor: {
				doctorName: "Dr. User Name",
			},
			patient: {
				patientName: 'Udin'
			},
			queuingNumber: '04',
			queueID: '2'
		},
		{
			_id: '3',
			orderType: "doctor",
			doctor: {
				doctorName: "Dr. Ujang",
			},
			patient: {
				patientName: 'Eric'
			},
			queuingNumber: '05',
			queueID: '3'
		},
		{
			_id: '4',
			orderType: "layanan",
			services: {
				name: "Cek mata",
			},
			patient: {
				patientName: 'Komeng'
			},
			queuingNumber: '03',
			queueID: '3'
		},
		{
			_id: '5',
			orderType: "layanan",
			services: {
				name: "Tindakan medis",
			},
			patient: {
				patientName: 'Jane'
			},
			queuingNumber: '02',
			queueID: '3'
		},
		{
			_id: '6',
			orderType: "layanan",
			services: {
				name: "Cek jantung",
			},
			patient: {
				patientName: 'Intan'
			},
			queuingNumber: '04',
			queueID: '3'
		}
	])
	useEffect(() => {
		fetchdata();
	}, [props.navigation.state.params]);

	const navigateBack = props.navigation.state?.params?.navigateBack ? props.navigation.state?.params?.navigateBack : 'Home'

	async function fetchdata() {
		try {
			const userID = userData.userID._id
			await props.getTodaysRegistration(userID)
			setRefresh(false)
		} catch (error) {
			console.log(error);
		}
	}

	BackHandler.addEventListener('hardwareBackPress', () => {
		const backAction = NavigationActions.back();
    	props.navigation.dispatch(backAction) 
		return true;
	});

  	return (
    	<>
      		<Header title={'Antrian'} navigate={props.navigation.navigate} navigateBack={navigateBack} />
			<View style={styles.container}>
				{isLoading ? (
					<LottieLoader
						source={require('../animation/loading.json')}
						loop
						autoPlay
					/>
				) : (
					<View>
						{!queues1?.length && (
							<View
							style={{
								justifyContent: 'center',
								alignItems: 'center',
								marginTop: 25,
							}}
							>
							<Text style={{ color: '#fff' }}>
								Tidak ada daftar antrian
							</Text>
							</View>
						)}
						{isLoading ? 
							<LottieLoader
							source={require('../animation/loading.json')}
							loop
							autoPlay
							/> : 
						queues1 && (
							<FlatList
								data={queues1}
								showsVerticalScrollIndicator={false}
								renderItem={({ item: el }) => {
									return (
										<Activity
											navigation={props.navigation}
											data={el}
										/>
									);
								}}
								keyExtractor={(item) => item._id}
							/>
						)}
					</View>
				)}
			</View>
    	</>
  	);
};

const mapStateToProps = (state) => {
  return state;
};

const mapDispatchToProps = {
  getCurrentQueueingNumber,
  getTodaysRegistration,
};
export default connect(mapStateToProps, mapDispatchToProps)(activityList);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1F1F1F',
    padding: 14,
  },
  headerTitle: {
    fontSize: 25,
    fontWeight: 'bold',
    padding: 20,
    paddingTop: StatusBar.currentHeight + 20,
    backgroundColor: 'teal',
    color: '#fff',
  },
  activityCard: {
    flexDirection: 'row',
    width: '95%',
    minHeight: 100,
    alignSelf: 'center',
    backgroundColor: '#fff',
    borderRadius: 3,
    justifyContent: 'flex-start',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    marginBottom: 10,
  },
  leftActivityCard: {
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: 'limegreen',
    borderRadius: 3,
    borderTopRightRadius: 0,
    borderBottomRightRadius: 9,
    padding: 10,
    width: '25%',
  },
  rightActivityCard: {
    alignItems: 'flex-start',
    justifyContent: 'center',
    width: '75%',
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 3,
  },
});
