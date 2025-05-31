import { View, Text, TextInput } from "react-native";
import tw from "twrnc";
import { Avatar} from "react-native-paper";
import Icon from 'react-native-vector-icons/Ionicons';
// import { useTheme } from "@react-navigation/native";

const Login = () => {
    // const {colors: MD3Colors} = useTheme();
    return (
        <View style={tw`flex-1 items-center justify-center bg-[#011526]`}>
            <View style={tw`items-center justify-center mb-4`}>
                <Avatar.Image 
                    source={require('../../assets/images/av.jpeg')} 
                    size={100}
                />
                <Text style={tw`text-2xl font-bold text-white mt-2`}>Rester en contact</Text>
            </View>
            <View style={tw`justufy-center items-center`}>
                <View style={tw`bg-white m-10 rounded-xl`}>
                    <TextInput
                    style={tw`w-[300px] pl-2`}
                    placeholder="Email"
                    value=""
                    onChangeText={(text : string) => {}}
                    keyboardType='email-address'
                    />
                </View>
                <View style={tw`bg-white rounded-xl`}>
                    <TextInput
                    style={tw`w-[300px] pl-2`}
                    placeholder="*********"
                    value=""
                    onChangeText={(text : string) => {}}
                    keyboardType='default'
                    />
                    <Icon />
                    
                </View>
            </View>
        </View>
    );
};

export default Login;