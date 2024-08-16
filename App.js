import React, { useEffect } from "react";
import thunk from "redux-thunk";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import reducer from "./src/stores/reducers";
import store from "./src/stores";
import Navigation from "./src/navigation";
import { View } from "react-native";
import * as Font from "expo-font";

function App() {
    useEffect(() => {
        async function loadFonts() {
            try {
                await Font.loadAsync({
                    "Inter-Medium": require("./android/app/src/main/assets/fonts/Inter-Medium.ttf"),
                    "Inter-Regular": require("./android/app/src/main/assets/fonts/Inter-Regular.ttf"),
                    "Inter-Bold": require("./android/app/src/main/assets/fonts/Inter-Bold.ttf"),
                    "Inter-SemiBold": require("./android/app/src/main/assets/fonts/Inter-SemiBold.ttf"),
                    "Inter-ExtraBold": require("./android/app/src/main/assets/fonts/Inter-ExtraBold.ttf"),
                    "Inter-Light": require("./android/app/src/main/assets/fonts/Inter-Light.ttf"),
                });
            } catch (error) {
                console.log("loadFonts", error);
            }
        }

        loadFonts();
    }, []);

    return (
        <Provider store={store}>
            <View style={{ backgroundColor: "#1F1F1F", flex: 1 }}>
                <Navigation></Navigation>
            </View>
        </Provider>
    );
}

export default App;
