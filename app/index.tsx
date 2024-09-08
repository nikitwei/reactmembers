import { MemberListItem } from '@/components/MemberListItem';
import { MemberModel } from '@/models/MemberModel';
import { useEffect, useState } from 'react';
import { View, ScrollView, ActivityIndicator } from 'react-native';


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
            <View style={{height: 100}} />
            {
                isLoading ? <ActivityIndicator /> :
                    data.map((member) => (
                        <MemberListItem
                            id={member.id}
                            image={member.image}
                            firstName={member.firstName}
                            lastName={member.lastName}
                            email={member.email}
                        />
                    ))
            }

        </ScrollView>
    );
}