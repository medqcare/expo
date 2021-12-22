import React from 'react'
import {
    View,
    Text,
    TouchableOpacity,
    StatusBar,
    StyleSheet,
} from 'react-native'
import { Ionicons, Feather } from '@expo/vector-icons'
import { 
    widthPercentageToDP as wp, 
    heightPercentageToDP as hp 
} from 'react-native-responsive-screen'




export default function GreyHeader({
    navigate,
    navigateBack = 'Home',
    navigateTo, 
    title = 'Enter Title Here', 
    edit = false,
    hidden = true
}){

    return (
        <View style={styles.container}>
            <StatusBar 
                barStyle="light-content"
                translucent={true}
                backgroundColor={'transparent'}
                hidden={hidden}
            />
            <View style={styles.touchableContent}>
                <TouchableOpacity
                    onPress={() => navigate(navigateBack)}>
                    <View style={styles.content} >
                        <Ionicons 
                                name="arrow-back" 
                                color="#fff" 
                                size={25} 
                                style={styles.backArrow} 
                        />
                        <Text style={styles.text}>{title}</Text>
                    </View>
                </TouchableOpacity>
            </View>
            {edit ? 
                <TouchableOpacity
                    onPress={() => navigate(navigateTo)}>
                    <Feather 
                        name="edit" 
                        color="#DDDDDD" 
                        size={20} 
                        style={styles.edit}
                    />
                </TouchableOpacity>
             : null}   
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        height: hp('8%'),
        width: '100%',
        backgroundColor: '#2F2F2F',
        justifyContent: 'space-between',
        alignItems: 'flex-end',
        paddingTop: 20
    },

    touchableContent: {
        flexDirection: 'row'
    },
    content: {
        flexDirection: 'row', 
        marginBottom: 20
    },
    backArrow: { 
        paddingHorizontal: 17.64
    },

    text: {
        color: '#DDDDDD',
        fontSize: 18
    },

    edit: {
        paddingRight: 20
    }

})