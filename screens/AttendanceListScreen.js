import React from "react";
import { View, Text, StyleSheet, FlatList, ImageBackground } from 'react-native';

export default function AttendanceScreen() {
    return (
        <ImageBackground source={require('../assets/Construcator.png')} style={styles.background}>
            <View style={styles.container}>
                <Text style={styles.title}>Yoklama Listesi</Text>
                <FlatList>
                    <View style={styles.item}>
                        <Text style={styles.itemText}>Liste</Text>
                    </View>
                </FlatList>
            </View>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        resizeMode: 'cover',
        justifyContent: 'center',
        alignItems: 'center'
    },
    container: {
        flex: 1,
        padding: 30
    },
    title: {
        fontSize: 40,
        fontWeight: 'bold',
        marginBottom: 10,
        color: "#154F91"
    },
    item: {
        padding: 15,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
    },
    itemText: {
        fontSize: 18,
    },
})