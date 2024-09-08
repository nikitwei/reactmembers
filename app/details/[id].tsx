import { MemberModel } from '@/models/MemberModel';
import { useLocalSearchParams } from 'expo-router';
import { useEffect, useState } from 'react';
import { View, ScrollView, ActivityIndicator, Text, Image, StyleSheet } from 'react-native';

export default function HomeScreen() {
    const emptyData: MemberModel = {
        id: 0,
        firstName: '',
        lastName: '',
        age: 0,
        email: '',
        phone: '',
        birthDate: '',
        image: '',
        macAddress: '',
        university: ''
    }

    const { id } = useLocalSearchParams();
    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState<MemberModel>(emptyData);


    const getMember = async () => {
        try {
            const response = await fetch(`https://dummyjson.com/users/${id}`);
            const json = await response.json();
            setData(json);
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        getMember();
    }, []);

    return (
        <ScrollView style={{ backgroundColor: '#fff' }}>
            {
                isLoading ? <ActivityIndicator /> :
                    <View style={styles.container}>
                        <View style={styles.avatarContainer}>
                            <Image
                                source={{ uri: data.image }}
                                style={styles.avatar}
                            />
                            <Text style={styles.name}>{`${data.firstName} ${data.lastName}`}</Text>
                            <Text style={styles.email}>{data.email}</Text>
                        </View>
                        <Info title={'Phone'} text={data.phone} />
                        <Info title={'University'} text={data.phone} />
                        <Info title={'Birt Date'} text={`(${data.age}) ${data.birthDate}`} />
                        <Info title={'Mac Address'} text={data.macAddress} />
                    </View>
            }
        </ScrollView>
    );
}


type InfoData = {
    title: string,
    text: string
}

function Info(props: InfoData) {
    return (
        <View style={styles.infoContainer}>
            <Text style={styles.infoLabel}>{props.title}:</Text>
            <Text style={styles.infoValue}>{props.text}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        padding: 20,
    },
    avatarContainer: {
        alignItems: 'center',
        marginTop: 20,
    },
    avatar: {
        width: 150,
        height: 150,
        borderRadius: 75,
    },
    name: {
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: 10,
    },
    email: {
        fontSize: 12,
        color: 'grey'
    },
    infoContainer: {
        marginTop: 20,
    },
    infoLabel: {
        fontWeight: 'bold',
    },
    infoValue: {
        marginTop: 5,
    },
})