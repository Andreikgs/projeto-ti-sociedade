import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "../pages/Login";
import Dashboard from "../pages/Dashboard";


const Stack = createNativeStackNavigator();

export default props =>(
    
    <NavigationContainer>
        <Stack.Navigator
            initialRouteName="Login"
            screenOptions={{headerShown:false}}
        >
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Dash" component={Dashboard} />
        </Stack.Navigator>
    </NavigationContainer>

)