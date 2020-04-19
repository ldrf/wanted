import React, {useState} from 'react';
import styles from './styles'
import {View,TextInput,Image,TouchableOpacity,Text} from 'react-native'
import logoImg from '../../assets/logo.png'
import {useNavigation} from '@react-navigation/native'
import api from '../../services/api'

function Login(){  

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    
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
            alert("Failed authentication.")            
        }       
        
    }        

    return(
        <View style={styles.container}>
            
            <Image source={logoImg} style={styles.logo} />
            <View style={styles.inputView} >
                <TextInput  
                    value={email}
                    clearButtonMode="always"
                    style={styles.inputText}
                    placeholder="Email" 
                    placeholderTextColor="#FFFFFF"
                    onChangeText={text => setEmail(text)}/>
            
            </View>   
            <View style={styles.inputView} >
                <TextInput  
                    value={password}
                    clearButtonMode="always"
                    style={styles.inputText}
                    placeholder="Passowrd" 
                    placeholderTextColor="#FFFFFF"
                    secureTextEntry 
                    onChangeText={text => setPassword(text)}/>                  
            </View>   
            
            <TouchableOpacity>
                    <Text style={styles.forgot}>Forgot Password?</Text>
            </TouchableOpacity> 

            <TouchableOpacity style={styles.loginBtn} onPress={handleLogin}>
                <Text style={styles.loginText}>LOGIN</Text>
            </TouchableOpacity>
        </View>                 

    );
}

export default Login;
