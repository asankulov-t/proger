import React from 'react';
import Nav from "./Nav/Nav";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
const Tab = createBottomTabNavigator();

const StackManager = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Home" component={Nav} />
        </Tab.Navigator>
    );
};

export default StackManager;