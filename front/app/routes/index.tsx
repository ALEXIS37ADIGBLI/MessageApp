import { NavigationContainer, DefaultTheme, ThemeProvider, NavigationIndependentTree } from "@react-navigation/native";
import StackNavigator from "../navigation/StackNavigator";
import { StatusBar } from "react-native";

const Routes = () => {
    const MyTheme = {
        ...DefaultTheme,
        colors: {
            ...DefaultTheme.colors,
            background: '#011526',
            primary: '#011526',
            text: 'black',
        },
    };

    return (
        <NavigationIndependentTree>
            <NavigationContainer theme={MyTheme}>
                <StatusBar
                barStyle="light-content"
                backgroundColor="#011526"
            />
                <StackNavigator />
            </NavigationContainer>
        </NavigationIndependentTree>
    );
};

export default Routes;