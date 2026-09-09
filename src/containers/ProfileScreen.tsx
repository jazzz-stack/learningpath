import { Text } from 'react-native';

export const ProfileScreen = ({ route }: any) => {
  const { id } = route.params || {};
  return <Text>User Profile ID: {id}</Text>;
};
