import { StackNavigator } from "react-navigation";
// import TakePhotoScreen from "../screens/";
import TabNavigation from "./TabNavigation";

const RootNavigation = StackNavigator(
  {
    Tabs: {
      screen: TabNavigation,
      navigationOptions: {
        header: null
      }
    }
  },
  {
    mode: "modal"
  }
);

export default RootNavigation;
