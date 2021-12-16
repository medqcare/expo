import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  Image,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from "react-native";
import { connect } from "react-redux";
import { AntDesign, MaterialIcons, MaterialCommunityIcons, FontAwesome  } from '@expo/vector-icons';
import ToggleSwitch from 'toggle-switch-react-native'
//import for the animation of Collapse and Expand
import * as Animatable from 'react-native-animatable';

//import for the collapsible/Expandable view
import Collapsible from 'react-native-collapsible';

//import for the Accordion view
import Accordion from 'react-native-collapsible/Accordion';

import ReminderSkippedLogo from '../../assets/svg/ReminderSkippedLogo'
import { ScrollView } from "react-native-gesture-handler";


const dimHeight = Dimensions.get("window").height;
const dimWidth = Dimensions.get("window").width;

function ReminderActiveList(props) {
    const data = [
        {
            information: 'Sebelum Makan',
            drugName: 'Paracetamol',
            drugQuantity: 10,
            type: 'Tablet',
            ettiquete: ['Morning', 'Afternoon', 'Night'],
            reminder: false
        },
        {
            information: 'Setelah Makan',
            drugName: 'Bodrex',
            drugQuantity: 20,
            type: 'Pil',
            ettiquete: ['Morning', 'Night'],
            reminder: true
        }
    ]
    // const CONTENT = null
    const CONTENT = [
        {
            header:  {
                information: 'Sebelum Makan',
                drugName: 'Paracetamol',
                drugQuantity: 10,
                type: 'Tablet',
                ettiquete: ['Morning', 'Afternoon', 'Night'],
                reminder: false
            },
            expanded: {
                ettiquete: [false, true, undefined]
            }
        },
        {
            header: {
                information: 'Setelah Makan',
                drugName: 'Bodrex',
                drugQuantity: 20,
                type: 'Pil',
                ettiquete: ['Morning', 'Night'],
                reminder: true
            },
            expanded: {
                ettiquete: [true, false, undefined],
            }
        },
        {
            header: {
                information: 'Setelah Makan',
                drugName: 'Bodrex',
                drugQuantity: 20,
                type: 'Pil',
                ettiquete: ['Morning', 'Night'],
                reminder: true
            },
            expanded: {
                ettiquete: [true, false, undefined],
            }
        },
        {
            header: {
                information: 'Setelah Makan',
                drugName: 'Bodrex',
                drugQuantity: 20,
                type: 'Pil',
                ettiquete: ['Morning', 'Night'],
                reminder: true
            },
            expanded: {
                ettiquete: [true, false, undefined],
            }
        },
        {
            header: {
                information: 'Setelah Makan',
                drugName: 'Bodrex',
                drugQuantity: 20,
                type: 'Pil',
                ettiquete: ['Morning', 'Night'],
                reminder: true
            },
            expanded: {
                ettiquete: [true, false, undefined],
            }
        },
        {
            header: {
                information: 'Setelah Makan',
                drugName: 'Bodrex',
                drugQuantity: 20,
                type: 'Pil',
                ettiquete: ['Morning', 'Night'],
                reminder: true
            },
            expanded: {
                ettiquete: [true, false, undefined],
            }
        },
    ]
    const [reminders, setReminders] = useState(CONTENT ? CONTENT.map(el => {
        return el.header.reminder
    }) : null)
    const toggleSwitch = (index) => {
        const newArray = reminders.map((el, idx) => {
            if(index === idx){
                el = !el
            }
            return el
        })
        setReminders(newArray)
    }

    const [activeSections, setActiveSections] = useState([]);
    const setSections = (sections, isClose, index) => {
        if(isClose){
            const newSections = sections.filter(el => {
                return el !== index
            })
            setActiveSections(newSections)
        } else {
            setActiveSections(sections.includes(undefined) ? [] : sections);
        }
    };

    const renderHeader = (section, _, isActive,) => {
        return (
          <Animatable.View
            key={_}
            duration={400}
            style={styles.eachDrugContainer}
            transition="backgroundColor"
        >
            <View
                style={styles.touchable}
            >
                <View style={styles.drugTopContainer}>
                    <Text style={styles.drugNameText}>{section.header.drugName} {section.header.drugQuantity} {section.header.type}</Text>
                    {isActive ? null :
                        <MaterialIcons 
                            name="keyboard-arrow-down" 
                            size={dimWidth * 0.05} 
                            color="#B5B5B5" 
                        />
                    }
                </View>
                <View style={styles.drugMiddleContainer}>
                    <View style={styles.informationContainer}>
                        <Text style={styles.lighterText}>{section.header.information}</Text>
                    </View>
                        {isActive ? null :
                            <View style={styles.ettiqueteContainter}>
                                <AntDesign 
                                    name="clockcircleo" 
                                    size={dimWidth * 0.035} 
                                    color="rgba(128, 128, 128, 1)" 
                                />
                                <Text style={styles.ettiqueteText}>Hari ini {section.header.ettiquete.length}x sehari</Text>
                            </View>
                        }
                </View>
                    <View style={styles.drugSeparatorContainer}/>
                
                    <View style={styles.drugBottomContainer}>
                        <Text style={styles.darkerText}>Setel pengingat</Text>
                        <ToggleSwitch
                            isOn={reminders[_]}
                            onColor="rgba(10, 88, 237, 1)"
                            offColor="#767577"
                            size="medium"
                            animationSpeed={150}
                            onToggle={isOn => toggleSwitch(_)}
                        />
                    </View>
            </View>
          </Animatable.View>
        );
    };

    const renderContent = (section, _, isActive) => {
        const { ettiquete } = section.expanded
        return (
            <Animatable.View
                key={_}
                duration={400}
                style={styles.reminderContainer}
                transition="backgroundColor">
                    {ettiquete.map((el, index) => {
                        return (
                            <View key={index} style={{paddingLeft: 14, paddingBottom: 14, }}>
                                <View style={styles.reminderTimeContainer}>
                                    <View style={{paddingHorizontal: 10}}>
                                        <View style={styles.reminderLowerContainer}>
                                            <View style={{flexDirection: "row"}}>
                                                <MaterialIcons name="access-alarm" size={24} color="rgba(128, 128, 128, 1)" />
                                                <Text style={styles.reminderTimeText}>13:00</Text>
                                            </View>
                                            <TouchableOpacity 
                                            >
                                                {el === undefined ? 
                                                    <Text>Masukin tombol</Text> :
                                                    <View style={{flexDirection: "row"}}>
                                                        {el ?
                                                            <>
                                                                <ReminderSkippedLogo/>
                                                                <Text style={{color: 'red', paddingLeft: 5}}>TERLEWAT</Text>
                                                            </>
                                                        :
                                                            <>
                                                                <FontAwesome name="check" size={24} color="green" />
                                                                <Text style={{color: 'green', paddingLeft: 5}}>DIMINUM</Text>
                                                            </>
                                                        }
                                                    </View>
                                                }
                                            </TouchableOpacity>
                                        </View>
                                    </View>
                                </View>
                            </View>
                        )
                    })}
                        <TouchableWithoutFeedback 
                            onPress={() => setSections(activeSections, true, _)}    
                        >
                            <View style={styles.closeButton}>
                                <Text style={styles.closeText}>Tutup</Text>
                                <MaterialIcons name="keyboard-arrow-up" size={30} color="rgba(243, 115, 53, 1)"/>
                            </View>
                        </TouchableWithoutFeedback>
            </Animatable.View>
        );
    };
  
    return (
        CONTENT ? 
            <ScrollView >
                <Accordion
                    activeSections={activeSections}
                    sections={CONTENT}
                    touchableComponent={TouchableWithoutFeedback}
                    expandMultiple={true}
                    renderHeader={renderHeader}
                    renderContent={renderContent}
                    duration={400}
                    onChange={setSections}
                    containerStyle={{alignItems: "center"}}
                /> 
            </ScrollView> 
        : (
            <View style={styles.noDataContainer}>
                <Text style={styles.lighterText}>Belum Ada Pengingat</Text>
            </View>
        )
    );
}

const textStyles = {
	darkerText : {
		color: 'rgba(181, 181, 181, 1)', 
	},

	lighterText: {
		color: "rgba(221, 221, 221, 1)"
	},

    redText: {
        color: 'rgba(243, 115, 53, 1)'
    }
}

const styles = StyleSheet.create({
	eachDrugContainer: {
		paddingTop: dimHeight * 0.015,
	},

	touchable: {
		backgroundColor: '#2F2F2F',
		width: dimWidth * 0.9,
		paddingTop: dimHeight * 0.0246,
		paddingBottom: dimHeight * 0.0209,
		justifyContent: "center",
		alignItems: "center"
	},

	drugTopContainer: {
		flexDirection: 'row',
		width: '90%',
		justifyContent: "space-between",
	},

	informationContainer: {
		backgroundColor: 'rgba(31, 31, 31, 1)',
		paddingHorizontal: dimWidth * 0.0139,
		paddingVertical: dimHeight * 0.00491 
	},

	drugMiddleContainer: {
		width: '90%',
		paddingTop: dimHeight * 0.01962,
		paddingBottom: dimHeight * 0.02942,
        flexDirection: "row"
	},

	drugNameText: {
		...textStyles.lighterText,
		fontWeight: '500',
		fontSize: 16
	},

    ettiqueteContainter: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        paddingLeft: dimWidth * 0.02315
    },

	ettiqueteText: {
		...textStyles.darkerText,
        paddingLeft: dimWidth * 0.02315
	},

	darkerText : {
		...textStyles.darkerText, 
	},

	drugSeparatorContainer: {
		backgroundColor: '#474747',
		height: dimHeight * 0.0015,
		width: '100%',
	},

	drugBottomContainer: {
		paddingTop: dimHeight * 0.01839,
		flexDirection: "row",
		width: '90%',
		justifyContent: "space-between",
        alignItems: "center",
	},
    
    reminderSwitch: { 
        transform: [
            { 
                // scaleX: 1.5
                scaleX: dimWidth * 0.0031
            }, 
            { 
                // scaleY: 1.5 
                scaleY: dimHeight * 0.0015 
            }
        ],
        height: dimHeight * 0.029,
    },

    reminderContainer: {
        backgroundColor: '#2F2F2F',
        width: dimWidth * 0.9,
    },

    reminderTimeContainer: {
		borderBottomWidth: 1,
		borderBottomColor: 'rgba(71, 71, 71, 1)',
		paddingBottom: 10,
		// backgroundColor: 'red'
	},

    reminderTopContainer: {
		alignSelf: "flex-start",
		backgroundColor: 'rgba(47, 47, 47, 1)',
		paddingVertical: 4,
		paddingHorizontal: 6
	},

    reminderLowerContainer: {
		flexDirection: "row",
		justifyContent: "space-between",
        // backgroundColor: 'blue'
	},

	reminderTimeText: {
		color: 'rgba(181, 181, 181, 1)',
		fontSize: 20,
		fontWeight: '500',
		paddingLeft: 5
	},
	
    closeButton: {
        flexDirection: "row",
		width: '90%',
        alignSelf: "center",
        alignItems: "center",
        paddingBottom: 15
    },

    noDataContainer: {
        paddingTop: dimHeight * 0.015
    },

    lighterText: {
		...textStyles.lighterText,
	},

    closeText: {
        paddingRight: 10,
        ...textStyles.redText
    }
});




const mapStateToProps = state => {
    return state
}

export default connect(mapStateToProps)(ReminderActiveList)