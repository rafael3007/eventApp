import { Text, View } from "react-native";
import { styles } from "./styles";
import ButtonAdd from "../buttons/buttonAdd";

interface ParticipantProps {
    nome: string;
    onRemove: (nome:string) => void;
}

export default function Participant(props:ParticipantProps) {


    return (
        <>
            <View style={styles.container}>
                <Text style={styles.name}>{props.nome}</Text>
                <ButtonAdd caracter="-" press={()=>props.onRemove(props.nome)} />
            </View>

        </>
    )

}
