import React, { useState } from 'react';
import { StyleSheet, View, Text, TextInput, Button, FlatList, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function App() {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [weight, setWeight] = useState('');
  const [sleepHours, setSleepHours] = useState('');

  const [healthTips, setHealthTips] = useState([]);

  const handlePress = () => {
    const tips = [];

    if (age < 30) {
      tips.push('Exercite-se pelo menos 30 minutos por dia.');
    }

    if (weight > 80) {
      tips.push('Reduza a ingestão de alimentos com alto teor calórico.');
    }

    if (sleepHours < 8) {
      tips.push('Tente dormir pelo menos 8 horas por noite.');
    }
    if (age > 40 && age < 60) {
      tips.push('Faça um exame de rotina anualmente.');
    }
  
    if (weight < 60) {
      tips.push('Consuma alimentos ricos em proteínas, como carne, peixe e ovos.');
    }
  
    if (sleepHours > 9) {
      tips.push('Considere reduzir as horas de sono, pois o excesso de sono pode ter efeitos negativos na saúde.');
    }
  
    if (age > 60) {
      tips.push('Mantenha-se ativo com atividades físicas de baixo impacto, como caminhada e natação.');
    }
  
    if (weight > 100) {
      tips.push('Consulte um nutricionista para criar um plano de alimentação saudável.');
    }
  

    setHealthTips(tips);
  }

  const renderItem = ({ item }) => (
    <View style={styles.item}>
      <Ionicons name="ios-checkmark-circle" size={24} color="green" style={{ marginRight: 8 }} />
      <Text style={styles.title}>{item}</Text>
    </View>
  );

  return (
    <ScrollView>
    <View style={styles.container}>
      <Text style={styles.paragraph}>
      {'\n'}
      </Text>
      <Text style={styles.heading}>Digite suas informações:</Text>

      <TextInput
        style={styles.input}
        placeholder="Nome"
        value={name}
        onChangeText={text => setName(text)}
      />

      <TextInput
        style={styles.input}
        placeholder="Idade"
        keyboardType="numeric"
        value={age}
        onChangeText={text => setAge(text)}
      />

      <TextInput
        style={styles.input}
        placeholder="Peso (kg)"
        keyboardType="numeric"
        value={weight}
        onChangeText={text => setWeight(text)}
      />

      <TextInput
        style={styles.input}
        placeholder="Horas de sono"
        keyboardType="numeric"
        value={sleepHours}
        onChangeText={text => setSleepHours(text)}
      />

      <Button title="Obter dicas de saúde" onPress={handlePress} />

      <FlatList
        data={healthTips}
        renderItem={renderItem}
        keyExtractor={item => item}
      />
      
    </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  heading: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 4,
    padding: 8,
    marginBottom: 16,
  },
  item: {
    backgroundColor: '#5cd1cb',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 16,
  },
});
