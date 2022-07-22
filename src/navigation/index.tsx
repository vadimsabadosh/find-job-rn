import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ColorSchemeName, StyleSheet } from 'react-native';

import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import { RootStackParamList, RootTabParamList, RootTabScreenProps } from '../types';
import LinkingConfiguration from './LinkingConfiguration';
import { HomeScreen, MessagesScreen, AccountScreen, SettingsScreen } from '../screens';
import CustomIcon from '../components/CustomIcon/CustomIcon';
import BurgerMenu from '../components/BurgerMenu';
import UserAvatar from '../components/UserAvatar';

export default function Navigation({ colorScheme }: { colorScheme: ColorSchemeName }) {
  return (
    <NavigationContainer
      linking={LinkingConfiguration}
      theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}
    >
      <RootNavigator />
    </NavigationContainer>
  );
}

/**
 * A root stack navigator is often used for displaying modals on top of all other content.
 * https://reactnavigation.org/docs/modal
 */
const Stack = createNativeStackNavigator<RootStackParamList>();

function RootNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Root" component={BottomTabNavigator} options={{ headerShown: false }} />
      {/* <Stack.Group screenOptions={{ presentation: 'modal' }}>
        <Stack.Screen name="Modal" component={ModalScreen} />
      </Stack.Group> */}
    </Stack.Navigator>
  );
}

/**
 * A bottom tab navigator displays tab buttons on the bottom of the display to switch screens.
 * https://reactnavigation.org/docs/bottom-tab-navigator
 */
const BottomTab = createBottomTabNavigator<RootTabParamList>();

function BottomTabNavigator() {
  const colorScheme = useColorScheme();

  return (
    <BottomTab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme].tint,
        tabBarShowLabel: false,
        tabBarStyle: style.tabBar,
        headerShown: false,
      }}
    >
      <BottomTab.Screen
        name="Home"
        component={HomeScreen}
        options={({ navigation }: RootTabScreenProps<'Home'>) => ({
          tabBarIcon: ({ color }) => <CustomIcon name="home" color={color} />,
          headerRight: () => <UserAvatar />,
          headerLeft: () => <BurgerMenu />,
          headerShown: true,
          headerStyle: {
            backgroundColor: Colors.light.bgColor,
            elevation: 0,
            shadowOpacity: 0,
            borderBottomWidth: 0,
          },
          headerTitleStyle: {
            display: 'none',
          },
        })}
      />
      <BottomTab.Screen
        name="Messages"
        component={MessagesScreen}
        options={{
          tabBarIcon: ({ color }) => <CustomIcon name="chat" color={color} />,
        }}
      />
      <BottomTab.Screen
        name="Account"
        component={AccountScreen}
        options={{
          tabBarIcon: ({ color }) => <CustomIcon name="user" color={color} />,
        }}
      />
      <BottomTab.Screen
        name="Settings"
        component={SettingsScreen}
        options={{
          tabBarIcon: ({ color }) => <CustomIcon name="settings" color={color} />,
        }}
      />
    </BottomTab.Navigator>
  );
}

const style = StyleSheet.create({
  tabBar: {
    backgroundColor: '#fff',
    borderRadius: 20,
    borderTopWidth: 0,
    borderTopColor: '#fff',
    position: 'absolute',
    shadowColor: '#D9DADF',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5,
  },
});
