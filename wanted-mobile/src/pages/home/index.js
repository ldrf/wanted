import React, {useState, useEffect} from 'react';
import styles from './styles'
import {View,Text, Picker, TouchableOpacity} from 'react-native'
import {useNavigation, useRoute } from '@react-navigation/native'
import api from '../../services/api'

function Home(){
    const route = useRoute(); 
    const {name,projectList} = route.params.data;

    const navigation = useNavigation();
    function navigateBack(){
        return navigation.goBack();
    }
   
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

    return(
        <View style={styles.container}>
            <Text style={styles.topView2}>User:{name}</Text>                    
            <Text style={styles.topView}>Select the project do you want:</Text>            
            <Picker
                selectedValue={selectedValue}
                style={styles.list}
                onValueChange={(itemValue) => handleLoad(itemValue)}>
                    {projectList.map(project =>(
                        <Picker.Item label={project}  value={project} />
                    ))}                
            </Picker>
            <Text>Customer: {customer}</Text>  
            
            {users.map(user=>(
                <Text>{user.name} - {user.mail}</Text>
            ))}                                   
                            
           <TouchableOpacity onPress={navigateBack} style={styles.bottomView}>
               <Text style={{color:"#FFFFFF"}}>Exit</Text>
           </TouchableOpacity>
        </View>                 
    );
}

export default Home;
