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
    <View style={styles.container} key={props.id}>
      <Image source={{ uri: props.image }} style={styles.memberImage} />
      <Text>Name : {`${props.firstName} ${props.lastName}`}</Text>
      <Text>Email : {props.email}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 15,
  },
  memberImage: {
    width: 50,
    height: 50
  }
});
