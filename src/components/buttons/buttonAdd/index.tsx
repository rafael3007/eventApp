import { Text, TouchableOpacity } from "react-native";
import { styles } from "./styles";

interface PropsTypes {
    caracter: string;
    press: (nome?:string)=> void;
    nome?:string;
}


export default function ButtonAdd({caracter,press,nome}:PropsTypes) {

    var typebuttonAdd = true

    typebuttonAdd = caracter === "+" 

    return (
        < TouchableOpacity
            onPress={()=>press(nome)}
            style={typebuttonAdd?styles.buttonAdd:styles.buttonRemove}
        >
            <Text style={styles.buttonText}>{caracter}</Text>
        </TouchableOpacity>
    )
}
