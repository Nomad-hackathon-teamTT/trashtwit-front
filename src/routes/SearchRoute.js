import { StackNavigator } from "react-navigation";
import SearchScreen from "../screens/SearchScreen";
import SharedRoutes, { SharedOptions } from "./SharedRoutes";

const SearchRoute = StackNavigator(
  {
    Search: {
      screen: SearchScreen
    },
    ...SharedRoutes
  },
  {
    ...SharedOptions
  }
);

export default SearchRoute;