import { StackNavigator } from "react-navigation";
import NotificationScreen from "../screens/NotificationScreen";
import SharedRoutes, { SharedOptions } from "./SharedRoutes";

const NotificationRoute = StackNavigator(
  {
    Notifications: {
      screen: NotificationScreen
    },
    ...SharedRoutes
  },
  {
    ...SharedOptions
  }
);

export default NotificationRoute;