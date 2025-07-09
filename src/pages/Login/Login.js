import React from 'react';
import { Text, View, Image, TouchableOpacity,TextInput} from 'react-native'; 
import { useState } from 'react';
import styles from './loginstyle'
import { SafeAreaView } from 'react-native-safe-area-context';
import BouncyCheckbox from "react-native-bouncy-checkbox";

const Login = () => {
    // 상태 관리용 훅   
    const [text, setText] = useState('');
    const onChangText = (inputText) => {
        setText(inputText);
    };
    return(
        <SafeAreaView style={styles.Container}>
            <View style={styles.LoginTitle}>
                <Text style={styles.Title}>로그인</Text>
                <Text style={styles.SubTitle}>서비스를 시작할려면 로그인을 하세요</Text>
            </View>
            <View>
                <Text style={styles.IdTitle}>ID</Text>
                <Image source={require('../../assets/user-solid.png')} style={styles.UserIcon}/>
                <TextInput
                    onChangText={onChangText}
                    placeholder='아이디를 입력하세요.'
                    style={styles.IdInputBox}
                />
            </View>
            <View>
                <Text style={styles.PassWordTitle}>PassWord</Text>
                <Image source={require('../../assets/password_icon.png')} style={styles.PassWordIcon}/>
                <TextInput
                    onChangText={onChangText}
                    placeholder='비밀번호를 입력하세요.'
                    secureTextEntry={true}
                    style={styles.PassWordInputBox}
                />
            </View>
            <View>
                <BouncyCheckbox
                      style={styles.checkbox}
                      size={15}
                      fillColor="#6CC7B9"
                      unfillColor="#FFFFFF"
                      text="Custom Checkbox"
                      textComponent={<Text style={styles.login}>로그인 상태 유지</Text>}
                      onPress={(isChecked) => console.log(isChecked)}     
                />
            </View>
            <View>
                <TouchableOpacity style={styles.LoginButton}>
                    <Text style={styles.LoginText}>로그인</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
}
export default Login;