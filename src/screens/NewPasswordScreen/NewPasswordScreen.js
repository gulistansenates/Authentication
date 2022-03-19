import { View, Text ,StyleSheet,ScrollView} from 'react-native'
import React, {useState} from 'react'
import CustomInput from '../components/CustomInput'
import CustomButton from '../components/CustomButton';
import { useNavigation } from '@react-navigation/native';

const NewPasswordScreen = () => {
    const [code, setCode] = useState('');
    const [newPassword, setNewPassword] = useState('');
    
    const navigation = useNavigation();
 
    const onSubmitPressed = () => {
      navigation.navigate('Home');
    };

    const onSignInPressed = () => {
      navigation.navigate('SignIn');
  };
  return (
    <ScrollView showsVerticalScrollIndicator = {false}>
     <View style = {styles.root}>
      <Text style = {styles.title}> Reset your password</Text>

       <CustomInput 
          placeholder ="Code" value = {code}  setValue = {setCode} />

       <CustomInput 
          placeholder ="Enter your new passwordd" value = {newPassword}  setValue = {setNewPassword} />

        
        <CustomButton text ="Submit" onPress = {onSubmitPressed}/>


        <CustomButton
         text= "Back to Sign In"
         onPress= {onSignInPress}
         type= "TERTİARY"
         />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create ({
    root: {
        alignItems: 'center' ,
        padding: 10 ,
    },

    title: {
      fontsize: 24,
      fontWeight: 'bold',
      color: '#051C60',
      margin: 10,
    }
});

export default NewPasswordScreen