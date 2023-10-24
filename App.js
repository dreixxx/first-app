import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import Screen1 from "./src/screens/Screen1";
import Screen2 from "./src/screens/Screen2";
    
import LogIn from "./src/screens/LogIn";
import LogUp from "./src/screens/LogUp";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const App = () => (
    <NavigationContainer>
        <Tab.Navigator>
            <Tab.Screen name="Screen1" component={Screen1} />
            <Tab.Screen name="Screen2" component={Screen2} />
        </Tab.Navigator>
        <Stack.Navigator options="false">
            <Stack.Screen name="Log In" component={LogIn} />
            <Stack.Screen name="Log Up" component={LogUp} />
        </Stack.Navigator>
    </NavigationContainer>
);
export default App;
