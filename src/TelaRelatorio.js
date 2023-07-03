import React from 'react';
import { View, Text, Button } from 'react-native';
import estilos from '../Estilos/estilos';

const TelaRelatorio = ({ navigation }) => {
  const alunos = [
    { nome: 'Heloisa', saldo: 2500.75 },
    { nome: 'Maria Eduarda', saldo: 1800.50 }
  ];

  return (
    <View style={estilos.Container}>
      <Text style={estilos.welcomeText}>Relatório de Saldo</Text>

      {alunos.map((aluno, index) => (
        <Text key={index} style={estilos.TextBr}>
          Nome: {aluno.nome}
          {'\n'}
          Saldo: R$ {aluno.saldo.toFixed(2)}
        </Text>
      ))}

      <Button
        title="Voltar"
        onPress={() => navigation.goBack()}
        color="#9542f5"
      />
    </View>
  );
};

export default TelaRelatorio;