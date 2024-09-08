import { Link } from 'expo-router';
import { View, ScrollView, Text, StyleSheet } from 'react-native';

const dummyData = [
    {
        id : 1,
        name: "John Doe",
        nik: "20240909"
    },
    {
        id : 2,
        name: "Jean Doe",
        nik: "20240909"
    }
]

export default function HomeScreen() {
    return (
        <ScrollView>
            <View style={styles.header}>

            </View>
            {
                dummyData.map((data) => (
                    <View style={styles.container} key={data.id}>
                        <Text>Name : {data.name}</Text>
                        <Text>NIK : {data.nik}</Text>
                    </View>
                ))
            }
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 15,
    },
    header:{
        height: 100
    }
});