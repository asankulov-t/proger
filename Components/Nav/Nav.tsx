import {StyleSheet} from "react-native";
import React from 'react';
import {TouchableOpacity} from "react-native-gesture-handler";

const Nav = () => {
    return (
        <View style={styles.container}>
            <TouchableOpacity>
                <Text>React</Text>
            </TouchableOpacity>
            <TouchableOpacity>
                <Text>React</Text>
            </TouchableOpacity>
            <TouchableOpacity>
                <Text>React</Text>
            </TouchableOpacity>
            <TouchableOpacity>
                <Text>React</Text>
            </TouchableOpacity>
        </View>
    );
};

export default Nav;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});