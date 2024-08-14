import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, FlatList, ImageBackground, TouchableOpacity } from 'react-native';
import { collection, onSnapshot, doc, deleteDoc } from 'firebase/firestore';
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
            console.error("Yoklama verilerini alırken hata oluştu: ", error);
        });

        return () => unsubscribe();
    }, []);

    const handleDelete = async (id) => {
        try {
            await deleteDoc(doc(db, 'attendances', id));
        } catch (error) {
            console.error("Öğrenci silinirken hata oluştu: ", error);
        }
    };

    const renderItem = ({ item, index }) => (
        <View style={styles.item}>
            <Text style={styles.indexText}>{index + 1}.</Text>
            <Text style={styles.itemText}>{item.email}</Text>
            <View style={styles.deleteButtonContainer}>
                <TouchableOpacity style={styles.deleteButton} onPress={() => handleDelete(item.id)}>
                    <Text style={styles.deleteText}>X</Text>
                </TouchableOpacity>
            </View>
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
                    <TouchableOpacity
                        style={styles.button}>
                        <Text style={styles.buttonText}>Yoklamayı Kaydet</Text>
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
        flexDirection: 'row',
        alignItems: 'center',
        padding: 15,
        borderBottomWidth: 1,
        borderBottomColor: 'lightblue',
        justifyContent: 'space-between'
    },
    itemText: {
        fontSize: 18,
        color: '#154F91',
        fontWeight: 'bold',
        flex: 1
    },
    flatListContainer: {
        backgroundColor: 'rgba(0, 0, 0, 0.12)',
        padding: 20,
        marginVertical: 20,
        borderRadius: 10,
        fontSize: 10,
        marginBottom: 90
    },
    indexText: {
        fontSize: 18,
        fontWeight: 'bold',
        marginRight: 10,
        color: 'black'
    },
    deleteButton: {
        marginLeft: 'auto',
    },
    deleteText: {
        fontSize: 18,
        color: 'darkgray',
        padding: 2,
        marginHorizontal: 2
    },
    button: {
        backgroundColor: 'lightblue',
        padding: 0.1,
        borderRadius: 10,
        alignItems: 'center',
        width: 280,
        marginLeft: 30,
        height: 50
    },
    buttonText: {
        padding: 14,
        color: '#154F91',
        fontSize: 23,
        fontWeight: 'bold'
    },
    deleteButtonContainer: {
        backgroundColor: 'rgba(0, 0, 0, 0.16)',
        borderRadius: 5
    }
});
