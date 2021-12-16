import React, { useState, useRef } from "react";
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  Image,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import { connect } from "react-redux";
import Header from "../../../components/headers/ReminderHeader";
import ReminderActiveList from "../../../components/reminder/ReminderActiveList";
import ReminderFinishedList from "../../../components/reminder/ReminderFinishedList";
import ReminderAddButton from '../../../assets/svg/ReminderAddButton'
import { ScrollView } from "react-native-gesture-handler";
import Swiper from 'react-native-swiper'


const dimHeight = Dimensions.get("window").height;
const dimWidth = Dimensions.get("window").width;

function Reminder(props) {
	const swiper = useRef(null)

	const userData = props.userData
	function firstName(){
		return userData.firstName.split(' ')[0]
	}

	const widthAdd = (dimWidth * 0.06945)
    const heightAdd = (dimHeight * 0.03677)

	function renderPagination(index, total, context){
		console.log(index, 'index')
	}

	function _onMomentumScrollEnd(e, state, context) {
		console.log(state.index, 'state.index')
	}

	const [index, setIndex] = useState(0)
  
  	return (
		<View style={styles.container}>
			<Header
				navigate={props.navigation.navigate}
				name={firstName()}
			/>
			<View style={styles.options}>
				<View style={styles.statusContainer}>
					<TouchableOpacity
						activeOpacity={1}
						style={index === 0 ? styles.selectedStatusInnerContainer: styles.unSelectedStatusInnerContainer}
						// onPress={() => changeStatus('Active')}
						onPress={() => {
							if(index === 1){
								swiper.current.scrollBy(-1)}
							}
						}
					>
						<Text style={index === 0 ? styles.selectedStatusText: styles.unSelectedStatusText}>AKTIF</Text>
					</TouchableOpacity>
					<TouchableOpacity
						activeOpacity={1}
						onPress={() => {
							if(index === 0){
								swiper.current.scrollBy(1)}
							}
						}
						// onPress={() => changeStatus('Finished')}
						style={index === 1 ? styles.selectedStatusInnerContainer: styles.unSelectedStatusInnerContainer}
					>
						<Text style={index === 1 ? styles.selectedStatusText: styles.unSelectedStatusText}>SELESAI</Text>
					</TouchableOpacity>
				</View>
				<TouchableOpacity 
					style={styles.optionAdd}
					onPress={() => props.navigation.navigate('AddReminderForm')}
				>
					<ReminderAddButton width={widthAdd} height={heightAdd}/>
				</TouchableOpacity>
			</View>
			<Swiper
				showsButtons={false} 
				ref={swiper}
				showsPagination={false} 
				loop={false}
				renderPagination={renderPagination(index)}
				onMomentumScrollEnd ={_onMomentumScrollEnd}
				onIndexChanged={(index) => setIndex(index)}
			>
				<ScrollView bounces={true}>
					<ReminderActiveList/>
				</ScrollView>
				<ScrollView>
					<ReminderFinishedList/>
				</ScrollView>
			</Swiper>
			{/* <ScrollView>
				{selectedStatus === 'Active' ? 
					<ReminderActiveList/> :
					<ReminderFinishedList/>
				}
			</ScrollView> */}
		</View>
  	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#1F1F1F",
		paddingBottom: dimHeight * 0.01226
	},
	
	content: {
		height: dimHeight * 0.88,
		justifyContent: "flex-start",
		alignItems: 'center',
	},

	options: {
		width: dimWidth,
		flexDirection: 'row',
		justifyContent: "space-between",
	},
	
	statusContainer: {
		flexDirection: "row",
		justifyContent: 'space-evenly',
		width: dimWidth * 0.55,
	},

	selectedStatusInnerContainer: {
		borderBottomWidth: 1,
		borderBottomColor: "rgba(119, 191, 244, 1)",
		paddingHorizontal: dimWidth * 0.024,
		paddingVertical: dimHeight * 0.0196
	},

	unSelectedStatusInnerContainer: {
		paddingHorizontal: dimWidth * 0.024,
		paddingVertical: dimHeight * 0.0196
	},

	selectedStatusText: {
		color: "rgba(119, 191, 244, 1)",
		fontSize: 12,
	},

	unSelectedStatusText: {
		color: "#B5B5B5",
		fontSize: 12,
	},

	optionAdd: {
		paddingTop: dimHeight * 0.0196,
		paddingRight: dimWidth * 0.04167
	},
});




const mapStateToProps = state => {
    return state
}

export default connect(mapStateToProps)(Reminder)