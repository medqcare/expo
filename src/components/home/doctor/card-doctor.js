import React, { useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Image,
  TouchableOpacity,
} from 'react-native';
import { connect } from 'react-redux';
import formatRP from '../../../helpers/rupiah';
import RatingStar from '../../../assets/svg/RatingStar';
import latLongToKM from '../../../helpers/latlongToKM';
import IconFA from 'react-native-vector-icons/FontAwesome';
import IconLove from 'react-native-vector-icons/Ionicons';

// import axios from 'axios';

const mapStateToProps = (state) => ({
  isLoading: state.isLoading,
  myLocation: state.myLocation,
});

function CardDoctor({ navigation, data, myLocation, distance }) {
	const { photo, title, doctorName, specialist } = data
  	return (
		<View style={styles.Container}>
			<View style={styles.Photo}>
				<Image
				style={{ width: 55, height: 55, borderRadius: 55 }}
				source={{
					uri: photo
					? photo
					: 'https://image.freepik.com/free-vector/doctor-character-background_1270-84.jpg',
				}}
				/>
			</View>
			<View style={styles.DetailDokter}>
				<Text style={{ fontSize: 16, fontWeight: 'bold', color: '#DDDDDD' }}>
					{title} {doctorName}
				</Text>
				<Text style={{ ...styles.TextContent, textTransform: 'capitalize' }}>
					{specialist}
				</Text>
				<View>
					<View
						style={{
							flexDirection: 'row',
							alignItems: 'center',
							marginTop: 10,
						}}
					>
					<View style={{ marginRight: 8 }}>
						<RatingStar />
					</View>
					<Text style={{ color: '#B2B2B2', marginRight: 12 }}>4.7/5</Text>
					<View
						style={{
							backgroundColor: '#11BF66',
							height: 10,
							width: 10,
							borderRadius: 10,
							marginRight: 8,
						}}
					/>
					<Text style={{ color: '#B2B2B2' }}>Online</Text>
				</View>

				{/* {
					data.facilityID && <Text style={[styles.TextContent,{fontWeight:'bold'}]} >{data.facilityID.facilityName}</Text>
				}
				{
					data.facility && <Text style={[styles.TextContent,{fontWeight:'bold'}]} >{data.facility[0].facilityName}</Text>
				} */}

				{/* {<Text>{JSON.stringify(data, null, 2)}</Text>} */}

				{data.estPrice && (
					<View>
					<View style={{ flexDirection: 'row', alignItems: 'center' }} />
					<Text style={{ ...styles.TextContent, color: '#DDDDDD' }}>
						{formatRP(data.estPrice, 'IDR ')}
					</Text>
					</View>
				)}
				</View>
			</View>
			{myLocation && (
				<View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center' }}>
					<IconFA
						name="location-arrow"
						size={18}
						color="gray"
						style={{marginRight: 5, marginLeft: 1}}
					/>
					<Text style={{ color: '#DDDDDD', marginLeft: 1 }}>
						&#177;{'  ' + distance}
					</Text>
				</View>
			)}
		</View>
  );
}

const minHeight = Dimensions.get('screen').height * 0.15;
const minWidth = Dimensions.get('screen').width * 0.15;

const styles = StyleSheet.create({
  Container: {
    minWidth: 300,
    justifyContent: 'flex-start',
    flexDirection: 'row',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#2F2F2F',
  },
  Photo: {
    borderRadius: 100,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 10,
    height: 60,
    width: 60,
    overflow: 'hidden',
    padding: 5,
    borderWidth: 1,
    borderColor: '#33E204',
  },
  DetailDokter: {
    // marginLeft: 10,
    flex: 4,
    marginRight: 5,
  },
  TextContent: {
    fontSize: 14,
    color: 'gray',
  },
});

module.exports = connect(mapStateToProps)(CardDoctor);
