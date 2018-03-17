import { StackNavigator } from "react-navigation";
import ProfileScreen from "../screens/ProfileScreen";
import SharedRoutes, { SharedOptions } from "./SharedRoutes";

const ProfileRoute = StackNavigator(
  {
    Profile: {
      screen: ProfileScreen
    },
    ...SharedRoutes
  },
  {
    ...SharedOptions
  }
);

export default ProfileRoute;