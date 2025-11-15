import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

type CustomButtonProps = {
  title: string;
  onPress: () => void;
  variant?: 'primary' | 'secondary';
};

const CustomButton: React.FC<CustomButtonProps> = ({ title, onPress, variant = 'primary' }) => {
  return (
    <TouchableOpacity
      style={[styles.button, variant === 'secondary' ? styles.secondary : styles.primary]}
      onPress={onPress}
    >
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    padding: 14,
    borderRadius: 8,
    alignItems: 'center',
    marginVertical: 8,
  },
  primary: { backgroundColor: '#4CAF50' },
  secondary: { backgroundColor: '#2196F3' },
  text: { color: 'white', fontWeight: 'bold', fontSize: 16 },
});

export default CustomButton;