import React, {useState, useEffect} from 'react';
import styles from './styles'
import {View,Text, Picker, TouchableOpacity, Image} from 'react-native'
import {useNavigation, useRoute } from '@react-navigation/native'
import {FontAwesome, MaterialIcons,MaterialCommunityIcons} from '@expo/vector-icons'
import logoImg from '../../assets/logo.png'
import api from '../../services/api'

function Home(){
    const route = useRoute(); 
    const {name,projectList} = route.params.data;
   
    const [selectedValue, setSelectedValue]=useState("");
    const [customer,setCustomer]=useState("")
    const [users, setUsers]=useState([])
    

    async function handleLoad(itemValue){
        setSelectedValue(itemValue)
        const response = await api.get('users/get-users-by-project?projectName='+itemValue)
        setUsers(response.data.users?response.data.users:[])
        setCustomer(response.data.customer)
    }

    useEffect(()=>{
        api.get('users/get-users-by-project?projectName='+projectList[0]).then(response =>{
            setUsers(response.data.users)
            setCustomer(response.data.customer)
        })
    },[])

    const navigation = useNavigation();
    function navigateBack(){
        return navigation.goBack();
    }

    return(        
        <View style={styles.container}>                          
            <Text style={styles.topLeftView}><FontAwesome name="user" size={16}/> {name}</Text>    
            <Image style={styles.topRightView} source={logoImg}/>                
            <Text style={styles.topView}>Select below the project do you want:</Text>            
            <Picker
                selectedValue={selectedValue}
                style={styles.list}
                itemStyle={{height: 110, width: 150}}
                onValueChange={(itemValue) => handleLoad(itemValue)}>
                    {projectList.map(project =>(
                        <Picker.Item label={project}  value={project} />
                    ))}                
            </Picker>                                                                     
            <Text style={{...styles.topView,top: '35%'}}>Customer: {customer}</Text>  
            <View style={{...styles.topView, ...styles.mid}}>
                <Text style={{marginBottom:10}}><MaterialCommunityIcons name="account-group" size={18}/> Team </Text>
                {users.map(user=>(
                    <View>
                        <Text> 
                            <FontAwesome name="user" size={16}/> {user.name}
                        </Text>
                        <Text> 
                            <MaterialIcons name="email" /> {user.mail}
                        </Text>
                        <Text> </Text>
                        
                    </View>                                   
                ))} 
            </View>          
            <TouchableOpacity onPress={navigateBack} style={styles.bottomView}>
                <Text style={{color:"#FFFFFF"}}><MaterialIcons name="arrow-back"/>Exit</Text>
            </TouchableOpacity>
        </View>        
    );
}

export default Home;
