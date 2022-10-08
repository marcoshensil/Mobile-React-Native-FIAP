import React from 'react';
import { View, Text, Button} from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { styles } from "../../../styles"
 
export default function Experiencia() {
  const navigation = useNavigation();
 return (
   <View>
     <Text>Formação</Text>
     <Button
        title="Abrir menu"
        onPress={ () => navigation.toggleDrawer() } 
      />
     <View style={styles.containerInfos}>
        <Text style={styles.title}>Atribuições</Text>
        <Text style={styles.text}>{char} Responsavel pelo setor de nhoque</Text>
      </View>
      <View style={styles.containerInfos}>
        <Text style={styles.title}>Projetos</Text>
      </View>
   </View>
  );
}