import React from 'react';
import { ScrollView, View, Text, Image } from 'react-native';

import { styles } from "../../../styles"
 
const Home = () => {
  const char = '-'

  return(
    <ScrollView>
      <View style={styles.containerLogo}>
        <View style={styles.frame}>
          <Image 
            source={{ uri: 'https://entirelyextreme.com/wp-content/uploads/2018/08/foundation-logo.png?ezimgfmt=rs:362x362/rscb1/ng:webp/ngcb1' }}
            style={{ width: 200, height: 200 }}
          />
        </View>
      </View>
      <View style={styles.containerInfos}>
        <Text style={styles.title}>Dados Pessoais</Text>
        <Text style={styles.text}>{char} Marcos Henrique da Silva</Text>
        <Text style={styles.text}>{char} 22 anos</Text>
      </View>
      <View style={styles.containerInfos}>
        <Text style={styles.title}>Formação</Text>
        <Text style={styles.text}>{char} FATEC - Interrompido</Text>
        <Text style={styles.text}>{char} FIAP</Text>
      </View>
      <View style={styles.containerInfos}>
        <Text style={styles.title}>Experiência</Text>
        <Text style={styles.text}>{char} Operaode de Caixa</Text>
        <Text style={styles.text}>{char} Auxiliar de Produção</Text>
      </View>
      <View style={styles.containerInfos}>
        <Text style={styles.title}>Projetos</Text></View>
    </ScrollView>
  )
}
 
export default Home;