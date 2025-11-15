import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, Alert } from 'react-native';
import CustomButton from '../components/CustomButton';

const ProfileScreen = () => {
  const [nombre, setNombre] = useState('');
  const [edad, setEdad] = useState('');
  const [bio, setBio] = useState('');

  const handleGuardar = () => {
    if (!nombre || !edad || !bio) {
      Alert.alert('Error', 'Todos los campos son obligatorios');
      return;
    }
    if (isNaN(Number(edad))) {
      Alert.alert('Error', 'La edad debe ser un número');
      return;
    }
    Alert.alert('Éxito', 'Datos guardados correctamente');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Perfil</Text>

      <TextInput
        style={styles.input}
        placeholder="Nombre"
        value={nombre}
        onChangeText={setNombre}
      />

      <TextInput
        style={styles.input}
        placeholder="Edad"
        value={edad}
        onChangeText={setEdad}
        keyboardType="numeric"
      />

      <TextInput
        style={[styles.input, styles.multiline]}
        placeholder="Biografía"
        value={bio}
        onChangeText={setBio}
        multiline
        numberOfLines={4}
      />

      <CustomButton title="Guardar" onPress={handleGuardar} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#fff' },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 20, textAlign: 'center' },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 12,
    marginBottom: 12,
    fontSize: 16,
  },
  multiline: {
    height: 100,
    textAlignVertical: 'top',
  },
});

export default ProfileScreen;