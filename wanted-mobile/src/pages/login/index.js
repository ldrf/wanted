import React, {useState} from 'react';
import styles from './styles'
import {View,TextInput,Image,TouchableOpacity,Text,Modal} from 'react-native'
import logoImg from '../../assets/logo.png'
import {FontAwesome} from '@expo/vector-icons'
import {useNavigation} from '@react-navigation/native'
import api from '../../services/api'

function Login(){  

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [errorModalVisible, setErrorModalVisible]=useState(false)
    
    const navigation = useNavigation();
    
    async function handleLogin(){

        const response = await api.get('login/validate-mail-password?mail='+email+'&password='+password);
        const{name,projectList} = response.data
        setEmail("")
        setPassword("")

        const data = {            
            name,
            projectList
        }
        
        if(name){
            navigation.push('Home', {data})
        }else{
            setErrorModalVisible(true)
        }       
        
    }        

    return(
        <View style={styles.container}>
            
            <Image style={styles.logo} source={logoImg}/>
            <View style={styles.inputView} >                
                <TextInput  
                    value={email}
                    clearButtonMode="always"
                    style={styles.inputText}
                    placeholder="Mail" 
                    placeholderTextColor="#FFFFFF"
                    onChangeText={text => setEmail(text)}/>
            
            </View>   
            <View style={styles.inputView} >
                <TextInput  
                    value={password}
                    clearButtonMode="always"
                    style={styles.inputText}
                    placeholder="Password" 
                    placeholderTextColor="#FFFFFF"
                    secureTextEntry 
                    onChangeText={text => setPassword(text)}/>                  
            </View>   
            
            <TouchableOpacity>
                    <Text style={styles.forgot}>Forgot Password?</Text>
            </TouchableOpacity> 

            <TouchableOpacity style={styles.loginBtn} onPress={handleLogin}>
                <Text style={styles.loginText}>LOGIN <FontAwesome name="unlock-alt"/></Text>
            </TouchableOpacity>
            
            <Modal animationType="slide" transparent={true} visible={errorModalVisible}>
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <Text style={styles.forgot}>Failed authentication</Text>
                        <TouchableOpacity style={{marginTop:10}} onPress={() => {setErrorModalVisible(false) }}>
                            <Text style={{...styles.forgot,fontWeight:"bold"}}>OK</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
        </View>                 

    );
}

export default Login;
