import React from 'react';
import { View, StyleSheet } from 'react-native';
import CustomButton from '../components/CustomButton';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

type RootStackParamList = {
  Home: undefined;
  Tabs: { screen?: string };
};

type HomeScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Home'>;

type Props = {
  navigation: HomeScreenNavigationProp;
};

const HomeScreen: React.FC<Props> = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <CustomButton
        title="Ir a Perfil"
        onPress={() => navigation.navigate('Tabs', { screen: 'Profile' })}
      />
      <CustomButton
        title="Ir a Configuración"
        variant="secondary"
        onPress={() => navigation.navigate('Tabs', { screen: 'Settings' })}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
});

export default HomeScreen;