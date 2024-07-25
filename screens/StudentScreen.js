import React from 'react';
import { View, Text, StyleSheet, ImageBackground, Image, TouchableOpacity } from 'react-native';

export default function StudentScreen( {navigation} ) {

    const goToAttendance = () => {
        navigation.navigate('Attendance');
    };

    return (
        <ImageBackground source={require('../assets/Construcator.png')} style={styles.background}>
            <View style={styles.headerContainer}>
                <Text style={styles.headerText}>DİCLE ÜNİVERSİTESİ</Text>
                <Image source={require('../assets/universite.jpg')} style={styles.image} />
            </View>
            <View style={styles.container}>
                <Image source={require('../assets/yoklama.png')} style={styles.image1} />
                <View>
                    <TouchableOpacity
                        onPress={goToAttendance}
                        style={styles.textBackground}>
                        <Text style={styles.text}>Yoklamaya Katıl</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        resizeMode: 'cover',
    },
    headerContainer: {
        justifyContent: 'flex-start',
        alignItems: 'center',
        padding: 10,
        backgroundColor: 'rgba(0, 0, 0, 0.2)',
    },
    headerText: {
        color: "#154F91",
        fontSize: 25,
        fontWeight: "bold",
        marginBottom: 20,
        marginVertical: 10
    },
    image: {
        width: 395,
        height: 150,
        borderRadius: 10,
    },
    container: {
        backgroundColor: 'lightblue',
        alignItems: 'center',
        justifyContent: 'center',
        margin: 70,
        borderRadius: 70,
    },
    image1: {
        width: 200,
        height: 200,
        margin: 20,
        borderRadius: 70
    },
    text: {
        padding: 10,
        margin: 5,
        color: 'white',
        fontWeight: 'bold',

    },
    textBackground: {
        backgroundColor: '#154F91',
        borderRadius: 50,
        marginBottom: 10
    }
});