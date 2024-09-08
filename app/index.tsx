import { Link } from 'expo-router';
import { View, ScrollView, Text, StyleSheet } from 'react-native';

const dummyData = {
    name : "John Doe",
    nik : "20240909"
}

export default function HomeScreen() {
    return (
        <View style={styles.container}>
            <Text>Name : {dummyData.name}</Text>
            <Text>NIK : {dummyData.nik}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
        margin: 20,
    },
});