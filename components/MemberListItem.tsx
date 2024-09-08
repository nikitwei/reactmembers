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
    <View style={styles.card}>
      <Image style={styles.image} source={{ uri: props.image }} />
      <View style={styles.cardMember}>
        <Text style={styles.name}>{`${props.firstName} ${props.lastName}`}</Text>
        <Text style={styles.email}>{props.email}</Text>
        <Link href={`/details/${props.id}`}
          style={styles.ButtonDetail}>
          <Text style={styles.ButtonDetailText}>show details</Text>
        </Link>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  cardMember: {
    marginLeft: 20,
    marginTop: 10,
  },

  image: {
    width: 90,
    height: 90,
    borderRadius: 45,
  },

  card: {
    shadowColor: '#00000021',
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.37,
    shadowRadius: 7.49,
    elevation: 12,
    marginVertical: 10,
    marginHorizontal: 20,
    backgroundColor: 'white',
    flexBasis: '46%',
    padding: 10,
    flexDirection: 'row',
  },

  name: {
    fontSize: 18,
    flex: 1,
    alignSelf: 'flex-start',
    color: '#008080',
    fontWeight: 'bold',
  },

  email: {
    fontSize: 14,
    flex: 1,
    alignSelf: 'flex-start',
    color: '#696969',
  },

  ButtonDetail: {
    marginTop: 10,
    paddingHorizontal: 10,
    paddingVertical: 5,
    width: 115,
    borderRadius: 30,
    backgroundColor: '#00BFFF',
  },

  ButtonDetailText: {
    color: '#FFFFFF',
    fontSize: 16,
  },
});
