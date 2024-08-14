import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, FlatList, ImageBackground } from 'react-native';
import { collection, onSnapshot } from 'firebase/firestore';
import { db } from '../firebase';

export default function AttendanceScreen() {
    const [attendanceList, setAttendanceList] = useState([]);

    useEffect(() => {
        const unsubscribe = onSnapshot(collection(db, 'attendances'), snapshot => {
            const list = snapshot.docs.map(doc => ({
                id: doc.id,
                ...doc.data()
            }));
            setAttendanceList(list);
        }, error => {
            console.error("Error fetching attendance data: ", error);
        });

        return () => unsubscribe();
    }, []);

    const renderItem = ({ item }) => (
        <View style={styles.item}>
            <Text style={styles.itemText}>{item.email}</Text>
        </View>
    );

    return (
        <ImageBackground source={require('../assets/Construcator.png')} style={styles.background}>
            <View style={styles.container}>
                <View style={styles.titleContainer}>
                    <Text style={styles.title}>Yoklama Listesi</Text>
                </View>
                <View style={styles.flatListContainer}>
                    <FlatList
                        data={attendanceList}
                        renderItem={renderItem}
                        keyExtractor={(item) => item.id}
                    />
                </View>
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
        padding: 15
    },
    titleContainer: {
        backgroundColor: 'lightblue',
        borderRadius: 10,
        padding: 10,
    },
    title: {
        fontSize: 40,
        fontWeight: 'bold',
        color: "#154F91",
        padding: 10,
        marginLeft: 50,
        marginRight: 50
    },
    item: {
        padding: 12,
        borderBottomWidth: 2,
        borderBottomColor: 'lightblue',
    },
    itemText: {
        fontSize: 18,
        color: '#154F91',
        fontWeight: 'bold'
    },
    flatListContainer: {
        backgroundColor: 'rgba(0, 0, 0, 0.12)',
        padding: 20,
        marginVertical: 20,
        borderRadius: 10,
        fontSize: 10,
        marginBottom: 90
    }
});
