import { createDrawerNavigator } from "@react-navigation/drawer";
import Home from "../Pages/Screens/Home";
import General from "../Pages/Screens/General";
const Drawer=createDrawerNavigator()
const DrawerNavigation = ()=>{

    return(
        <Drawer.Navigator>
            <Drawer.Screen
                name='Home'
                component={Home}
                options={{headerShown:false}}
            />
              <Drawer.Screen
                name='General'
                component={General}
                options={{headerShown:false}}
            />
        </Drawer.Navigator>

    )
}
export default DrawerNavigation;