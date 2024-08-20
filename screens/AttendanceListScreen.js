import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, FlatList, ImageBackground, TouchableOpacity, Alert } from 'react-native';
import { collection, onSnapshot, doc, deleteDoc, writeBatch } from 'firebase/firestore';
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

    const getCurrentDate = () => {
        const date = new Date();
        return date.toLocaleDateString();
    };

    const handleDelete = async (id) => {
        try {
            await deleteDoc(doc(db, 'attendances', id));
        } catch (error) {
            console.error("Öğrenci silinirken hata oluştu: ", error);
        }
    };

    const handleSaveAttendance = () => {
        Alert.alert(
            "Başarılı",
            "Yoklama Başarıyla Kaydedildi",
            [
                {
                    text: "Tamam",
                    onPress: async () => {
                        const batch = writeBatch(db);
                        attendanceList.forEach(item => {
                            const docRef = doc(db, 'attendances', item.id);
                            batch.delete(docRef);
                        });
                        await batch.commit();
                        setAttendanceList([]);
                    }
                }
            ]
        );
    };

    const renderItem = ({ item, index }) => (
        <View style={styles.item}>
            <Text style={styles.indexText}>{index + 1}.</Text>
            <Text style={styles.itemText}>{item.email}</Text>
            <TouchableOpacity style={styles.deleteButton} onPress={() => handleDelete(item.id)}>
                <Text style={styles.deleteText}>X</Text>
            </TouchableOpacity>
        </View>
    );

    return (
        <ImageBackground source={require('../assets/Construcator.png')} style={styles.background}>
            <View style={styles.container}>
                <View style={styles.titleContainer}>
                    <Text style={styles.title}>Yoklama Listesi</Text>
                </View>
                <View style={styles.flatListContainer}>
                <Text style={styles.dateText}>{getCurrentDate()}</Text>
                <Text style={styles.titleClass}>Mühendislik Matematiği</Text>
                    <FlatList
                        data={attendanceList}
                        renderItem={renderItem}
                        keyExtractor={(item) => item.id}
                    />
                    <TouchableOpacity
                        style={styles.button}
                        onPress={handleSaveAttendance}>
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
        backgroundColor: 'rgba(0, 0, 0, 0.16)',
        padding: 3,
        borderRadius: 4 
    },
    deleteText: {
        fontSize: 18,
        color: 'lightgray',
        padding: 0.5
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
    titleClass: {
        fontSize: 15,
        fontWeight: 'bold',
        color: "#154F91",
    },
    dateText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#154F91',
    }
});
