import { MemberListItem } from '@/components/MemberListItem';
import { MemberModel } from '@/models/MemberModel';
import { useLocalSearchParams } from 'expo-router';
import { useEffect, useState } from 'react';
import { View, ScrollView, ActivityIndicator, Text, Image } from 'react-native';

export default function HomeScreen() {
    const emptyData: MemberModel = {
        id: 0,
        firstName: '',
        lastName: '',
        age: 0,
        gender: '',
        email: '',
        phone: '',
        birthDate: '',
        image: '',
        bloodGroup: '',
        height: 0,
        weight: 0,
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
        <ScrollView>
            <View style={{ height: 100 }} />
            {
                isLoading ? <ActivityIndicator /> :
                    <View>
                        <Image source={{ uri: data.image }} />
                        <Text>Name : {`${data.firstName} ${data.lastName}`}</Text>
                        <Text>Email : {data.email}</Text>
                    </View>

            }
        </ScrollView>
    );
}