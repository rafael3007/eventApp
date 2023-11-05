import { Alert, FlatList, ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { styles } from './styles'
import Participant from '../../components/Participant'
import ButtonAdd from '../../components/buttons/buttonAdd'
import { useState } from 'react'

export default function Home() {

    const [participants, setParticipant] = useState<string[]>([])
    const [participantName, setParticipantName] = useState('')

    function handleParticipantAdd() {
        var participantTemp = participants.map(name => name.toUpperCase())
        if (participantTemp.includes(participantName.toUpperCase())) {
            return Alert.alert("Alerta!", "Já existe um participant registrado com esse nome")
        }
        setParticipant([...participants, participantName])
        setParticipantName('')
    }

    function handleParticipantRemove(nome:string){
        Alert.alert("AVISO!",`Deseja realmente remover ${nome} do evento?`,[
            {
              text: 'Cancelar',
              onPress: () => console.log('Cancel Pressed'),
              style: 'cancel',
            },
            {text: 'Excluir', onPress: () => setParticipant(prevState=>prevState.filter(pName => pName.toUpperCase() !== nome.toUpperCase() ))},
          ])
       
    }


    return (
        <View style={styles.container}>
            <Text style={styles.eventName} >
                Nome do Evento
            </Text>
            <Text style={styles.eventDate}>
                Sexta, 4 de Novembro de 2023
            </Text>

            <View style={styles.form}>
                <TextInput
                    style={styles.input}
                    placeholderTextColor="#6B6B6B"
                    placeholder="Nome do participante"
                    keyboardType='default'
                    value={participantName}
                    onChangeText={setParticipantName}
                />
                <ButtonAdd caracter='+' press={handleParticipantAdd} />
            </View>

            <ScrollView
                showsVerticalScrollIndicator={false}
            >
                <FlatList
                    data={participants}
                    keyExtractor={item => item}
                    renderItem={({ item }) => (
                        < Participant
                            key={item}
                            nome={item}
                            onRemove={(item:string)=>handleParticipantRemove(item)}
                        />)}
                    ListEmptyComponent={()=>(
                        <Text style={styles.listEmptyText}>
                            Ninguém chegou no evento ainda? Adicione participantes à sua lista de presença.
                        </Text>
                    )}
                />
            </ScrollView>
        </View>
    )
}
