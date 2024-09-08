import { Link } from 'expo-router';
import { Image, StyleSheet, Text, View } from 'react-native';

type MemberListItemModel = {
  id: number,
  image: string,
  firstName: string,
  lastName: string,
  email: string
}

export function MemberListItem(props: MemberListItemModel) {
  return (
    <Link href={`/details/${props.id}`} style={styles.link}>
      <View style={styles.container} key={props.id}>
        <Image source={{ uri: props.image }} style={styles.memberImage} />
        <Text>Name : {`${props.firstName} ${props.lastName}`}</Text>
        <Text>Email : {props.email}</Text>
      </View>
    </Link>
  );
}

const styles = StyleSheet.create({
  link: {
    marginHorizontal:'auto',
    marginBottom:20
  },
  container: {
    display:'flex',
    flexDirection:'row'
  },
  memberImage: {
    width: 50,
    height: 50
  }
});
