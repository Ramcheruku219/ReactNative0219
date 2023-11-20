import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
// import DrawerNavigation from "./Routes/DrawerNavigation";

import Home from "./Pages/Screens/Home";
import General from "./Pages/Screens/General";
const Stack =createStackNavigator()

const App =()=>{
  return(
    <NavigationContainer>
      <Stack.Navigator>

        <Stack.Screen
          name=" Home"
          component={ Home}
          
        />

      </Stack.Navigator>
    </NavigationContainer>


  )
}

export default App;