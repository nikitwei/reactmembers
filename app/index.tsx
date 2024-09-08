import { MemberModel } from '@/models/MemberModel';
import { Link } from 'expo-router';
import { useEffect, useState } from 'react';
import { View, ScrollView, Text, StyleSheet, ActivityIndicator, Image } from 'react-native';


export default function HomeScreen() {
    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState<MemberModel[]>([]);
    
    const getMembers = async () => {
        try {
            const response = await fetch('https://dummyjson.com/users');
            const json = await response.json();
            setData(json["users"]);
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    };
    
    useEffect(() => {
        getMembers();
    }, []);
    

    return (
        <ScrollView>
            <View style={styles.header} />
            {
                isLoading ? <ActivityIndicator /> :
                data.map((member) => (
                        <View style={styles.container} key={member.id}>
                            <Image source={{uri: member.image}} style={styles.memberImage}/>
                            <Text>Name : {`${member.firstName} ${member.firstName}`}</Text>
                            <Text>Email : {member.email}</Text>
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
    header: {
        height: 100
    },
    memberImage:{
        width: 50, 
        height: 50
    }
});