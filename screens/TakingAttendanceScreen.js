import React from "react";
import { View, Text, StyleSheet, ImageBackground, Image } from 'react-native';

export default function TakingAttendanceScreen() {
    return (
        <ImageBackground source={require('../assets/Construcator.png')} style={styles.background}>
            <View style={styles.headerContainer}>
                <Text style={styles.headerText}>YOKLAMA QR KODU</Text>
            </View>
            <View style={styles.container}>
                <Image source={require('../assets/QRCode.png')} style={styles.image} />
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
        justifyContent: 'center',
        padding: 10,
        backgroundColor: 'rgba(0, 0, 0, 0.16)',
        borderRadius: 10
    },
    image: {
        width: 300,
        height: 300
    },
    headerContainer: {
        backgroundColor: "lightblue",
        marginBottom: 30,
        padding: 5,
        borderRadius: 10,
        opacity: 0.9

    },
    headerText: {
        fontSize: 27,
        fontWeight: "bold"
    }
})