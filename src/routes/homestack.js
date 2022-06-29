import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import Home from "../screens/home";
import Form from "../screens/form";
import Message from "../screens/message";

const screens = {
    Home:{
        screen: Home,
        navigationOptions: {
            headerShown: false,
          }
    },
    Form:{
        screen: Form,
        navigationOptions: {
            headerShown: false,
          }
    },
    Message:{
        screen: Message,
        navigationOptions: {
            headerShown: false,
          }
    }
}

const HomeStack = createStackNavigator(screens);
export default createAppContainer(HomeStack)