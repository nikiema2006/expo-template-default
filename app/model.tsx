/* title
title School Mobile App Data Model

// define tables
eleves [icon: user, color: yellow]{
  id int pk
  prenom varchar
  nom varchar
  classe_id int
  annee_scolaire_id int
  date_naissance date
  created_at timestamp
}

parents [icon: users, color: orange]{
  id int pk
  prenom varchar
  nom varchar
  telephone varchar
  email varchar
  adresse varchar
  created_at timestamp
}

eleve_parent [icon: link, color: lightblue]{
  id int pk
  eleve_id int
  parent_id int
}

professeurs [icon: user, color: green]{
  id int pk
  prenom varchar
  nom varchar
  email varchar
  telephone varchar
  specialite varchar
  created_at timestamp
}

administration [icon: user-check, color: purple]{
  id int pk
  prenom varchar
  nom varchar
  email varchar
  telephone varchar
  role varchar // directeur, censeur, fondateur, secrétaire
  privileges jsonb
  created_at timestamp
}

classes [icon: layers, color: blue]{
  id int pk
  nom varchar
  annee_scolaire_id int
  created_at timestamp
}

matieres [icon: book, color: red]{
  id int pk
  nom varchar
  description varchar
  created_at timestamp
}

classe_matiere_professeur [icon: link, color: lightblue]{
  id int pk
  classe_id int
  matiere_id int
  professeur_id int
  annee_scolaire_id int
}

emplois_du_temps [icon: calendar, color: teal]{
  id int pk
  classe_id int
  jour_semaine varchar
  heure_debut time
  heure_fin time
  matiere_id int
  professeur_id int
  annee_scolaire_id int
}

notes [icon: edit-3, color: pink]{
  id int pk
  eleve_id int
  matiere_id int
  trimestre int
  annee_scolaire_id int
  note decimal
  appreciation varchar
  date timestamp
}

annees_scolaires [icon: calendar, color: gray]{
  id int pk
  libelle varchar // ex: 2024-2025
  date_debut date
  date_fin date
  created_at timestamp
}

// define relationships
eleves.classe_id > classes.id
eleves.annee_scolaire_id > annees_scolaires.id
eleve_parent.eleve_id > eleves.id
eleve_parent.parent_id > parents.id
parents.id < eleve_parent.parent_id
professeurs.id < classe_matiere_professeur.professeur_id
classes.id < classe_matiere_professeur.classe_id
matieres.id < classe_matiere_professeur.matiere_id
classe_matiere_professeur.annee_scolaire_id > annees_scolaires.id
emplois_du_temps.classe_id > classes.id
emplois_du_temps.matiere_id > matieres.id
emplois_du_temps.professeur_id > professeurs.id
emplois_du_temps.annee_scolaire_id > annees_scolaires.id
notes.eleve_id > eleves.id
notes.matiere_id > matieres.id
notes.annee_scolaire_id > annees_scolaires.id
classes.annee_scolaire_id > annees_scolaires.id

// Many-to-many relationships
eleves.id <> eleve_parent.eleve_id
parents.id <> eleve_parent.parent_id
classes.id <> classe_matiere_professeur.classe_id
matieres.id <> classe_matiere_professeur.matiere_id
professeurs.id <> classe_matiere_professeur.professeur_id
*/
/*
import {useState} from 'react'
import { Text, View, Pressable, SafeAreaView, StyleSheet } from 'react-native';
import {LineChart, BarChart} from 'react-native-gifted-charts'

export default function App() {
  const [index,setIndex] = useState(-1)
  const data = [{value:10},{value:14},{value:16},{value:9},{value:12},]
  const data2 = [{value:12},{value:19},{value:18},{value:14},{value:13},]
  return (
    <SafeAreaView style={styles.container}>
      <BarChart
      data={data}
      focusBarOnPress
      focusedBarIndex={index}
      renderTooltip={(item)=>(
        <View style={[styles.button, {width:30}]}>
          <Text>{item.value}</Text>
        </View>)}
      />
      <LineChart
        dataSet={[{data},{data:data2}]}
        focusEnabled
        showStripOnFocus
        focusedDataPointLabelComponent={(item)=>(
          <View style={[styles.button, {width:30}]}>
            <Text>{item.value}</Text>
          </View>)}
        focusedDataPointIndex={index}
      />

      <Text>Press a day to select:</Text>

      <View style={styles.row}>
        <Pressable onPress={()=>setIndex(0)} style={styles.button}>
          <Text>{'Sun'}</Text>
        </Pressable>
        <Pressable onPress={()=>setIndex(1)} style={styles.button}>
          <Text>{'Mon'}</Text>
        </Pressable>
        <Pressable onPress={()=>setIndex(2)} style={styles.button}>
          <Text>{'Tue'}</Text>
        </Pressable>
        <Pressable onPress={()=>setIndex(3)} style={styles.button}>
          <Text>{'Wed'}</Text>
        </Pressable>
        <Pressable onPress={()=>setIndex(4)} style={styles.button}>
          <Text>{'Thu'}</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  button:{backgroundColor:'cyan', padding:6, width:44, borderRadius:6},
  row:{flexDirection:'row', justifyContent:'space-between',marginTop:20}
});
*/