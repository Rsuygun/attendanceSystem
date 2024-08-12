import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, ImageBackground, ActivityIndicator } from 'react-native';
import QRCode from 'react-native-qrcode-svg';
import CryptoJS from 'crypto-js';

export default function TakingAttendanceScreen() {
    const [qrValue, setQrValue] = useState("");

    useEffect(() => {
        const updateQrCode = () => {
            const timestamp = new Date().toISOString();
            const hash = CryptoJS.SHA256(timestamp).toString(CryptoJS.enc.Hex);
            setQrValue(hash);
        };
        updateQrCode();
        const intervalId = setInterval(updateQrCode, 5000);
        return () => clearInterval(intervalId);
    }, []);

    return (
        <ImageBackground source={require('../assets/Construcator.png')} style={styles.background}>
            <View style={styles.headerContainer}>
                <Text style={styles.headerText}>YOKLAMA QR KODU</Text>
            </View>
            <View style={styles.container}>
                {qrValue ? (
                    <QRCode
                        value={qrValue}
                        size={280}
                        backgroundColor="transparent"
                        color="black"
                    />
                ) : (
                    <ActivityIndicator size="large" color="#0000ff" />
                )}
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
});
