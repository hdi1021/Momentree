import { StyleSheet } from 'react-native';


const styles = StyleSheet.create({
    Container: {
        flex: 1,
        justifyContent: 'flex-start',
        backgroundColor: '#F7F7F7',
    },
    LoginTitle: {
        marginTop: 85,
    },
    Title: {
        textAlign: 'center',
        fontSize: 24,
        fontWeight: 'bold',
        color: '#111111',
    },
    SubTitle: {
        marginTop: 15,
        textAlign: 'center',
        fontSize: 12,
        color: '#353535',
        fontWeight: '300',
    },
    IdTitle: {
        textAlign: 'left',
        marginTop: 110,
        marginLeft: 30,
        fontSize: 13,
        fontWeight: '300',
        color: '#909090',
    },
    IdInputBox: {
        marginTop: 10,
        marginLeft: 30,
        marginRight: 30,
        height: 50,
        borderWidth: 1,
        borderColor: '#D2D2D2',
        borderRadius: 10,
        paddingLeft: 40,
        fontSize: 11,
    },
    PassWordInputBox: {
        marginTop: 10,
        marginLeft: 30,
        marginRight: 30,
        height: 50,
        borderWidth: 1,
        borderColor: '#D2D2D2',
        borderRadius: 10,
        paddingLeft: 15,
        fontSize: 11,
        paddingLeft: 40,
    },
    PassWordTitle: {
        textAlign: 'left',
        marginTop: 30,
        marginLeft: 30,
        fontSize: 13,
        fontWeight: '300',
        color: '#909090',
    },
    UserIcon :{
        position: 'absolute',
        top: 150,
        left: 45,
        width: 20,
        height: 20,
    },
    PassWordIcon: {
        position: 'absolute',
        top: 70,
        left: 49,
        width: 12,
        height: 15,
    },
    checkbox: {
        marginTop: 10,
        marginLeft: 30,
    },
    login:{
        marginLeft: 10,
        fontSize: 12,
        color: '#C7C7C7'
    },
    LoginButton: {
        marginTop: 45,
        marginLeft: 30,
        marginRight: 30,
        height: 50,
        backgroundColor: '#6CC7B9',
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    LoginText: {
        fontSize: 16,
        color: '#FFFFFF',
        fontWeight: 'bold',
    },

});
export default styles;