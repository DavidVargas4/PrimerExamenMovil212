import React, { useState } from 'react';
import { View, Text, Switch, StyleSheet } from 'react-native';
import CustomButton from '../components/CustomButton';

const SettingsScreen = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [showAdvanced, setShowAdvanced] = useState(false);

  const theme = {
    background: isDarkMode ? '#121212' : '#fff',
    card: isDarkMode ? '#1e1e1e' : '#f9f9f9',
    text: isDarkMode ? '#fff' : '#000',
    border: isDarkMode ? '#444' : '#ddd',
  };

  return (
    <View style={[styles.container, { backgroundColor: theme.background }]}>
      <Text style={[styles.title, { color: theme.text }]}>Configuración</Text>

      <View style={[styles.card, { backgroundColor: theme.card, borderColor: theme.border }]}>
        <View style={styles.switchRow}>
          <Text style={[styles.label, { color: theme.text }]}>Modo Oscuro</Text>
          <Switch value={isDarkMode} onValueChange={setIsDarkMode} />
        </View>

        <CustomButton
          title={showAdvanced ? 'Ocultar Avanzado' : 'Mostrar Avanzado'}
          onPress={() => setShowAdvanced(!showAdvanced)}
          variant="secondary"
        />

        {showAdvanced && (
          <View style={[styles.advanced, { borderColor: theme.border }]}>
            <Text style={[styles.advancedText, { color: theme.text }]}>- Notificaciones</Text>
            <Text style={[styles.advancedText, { color: theme.text }]}>- Seguridad</Text>
            <Text style={[styles.advancedText, { color: theme.text }]}>- Permisos</Text>
          </View>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 20, textAlign: 'center' },
  card: {
    padding: 20,
    borderRadius: 12,
    borderWidth: 1,
    elevation: 2,
  },
  switchRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  label: { fontSize: 16, fontWeight: '600' },
  advanced: {
    marginTop: 16,
    padding: 12,
    borderWidth: 1,
    borderRadius: 8,
  },
  advancedText: {
    fontSize: 14,
    marginVertical: 4,
  },
});

export default SettingsScreen;