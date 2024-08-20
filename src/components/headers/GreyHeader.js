import React from "react";
import {
    View,
    Text,
    TouchableOpacity,
    StatusBar,
    StyleSheet,
} from "react-native";
import { Ionicons, Feather } from "@expo/vector-icons";
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from "react-native-responsive-screen";

export default function GreyHeader({
    navigate,
    navigateBack = "Home",
    navigateTo,
    title = "Enter Title Here",
    edit = false,
    hidden = true,
    additionalFunction,
    params,
}) {
    async function callAllFunction() {
        await additionalFunction();
        navigate(navigateBack);
    }

    return (
        <View style={styles.container}>
            <StatusBar
                barStyle="light-content"
                translucent={true}
                backgroundColor={"transparent"}
                // hidden={hidden}
            />
            <View style={styles.touchableContent}>
                <TouchableOpacity
                    onPress={() =>
                        additionalFunction
                            ? callAllFunction()
                            : navigate(navigateBack)
                    }
                    style={{ flexDirection: "row" }}
                >
                    {/* <View style={styles.content}> */}
                    <Ionicons
                        name="arrow-back"
                        color="#fff"
                        size={25}
                        style={styles.backArrow}
                    />
                    <Text style={styles.text}>{title}</Text>
                    {/* </View> */}
                </TouchableOpacity>

                {edit ? (
                    <TouchableOpacity
                        onPress={() => navigate(navigateTo, params)}
                    >
                        <Feather
                            name="edit"
                            color="#DDDDDD"
                            size={20}
                            style={styles.edit}
                        />
                    </TouchableOpacity>
                ) : null}
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        height: hp("10%"),
        width: "100%",
        backgroundColor: "#2F2F2F",
        alignItems: "center",
        paddingTop: 20,
    },

    touchableContent: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        flex: 1,
    },
    content: {
        flexDirection: "row",
    },
    backArrow: {
        paddingHorizontal: 17.64,
    },

    text: {
        color: "#DDDDDD",
        fontSize: 18,
    },

    edit: {
        paddingRight: 20,
    },
});
