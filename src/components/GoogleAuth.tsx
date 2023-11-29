import {
  GoogleSignin,
  GoogleSigninButton,
  statusCodes,
} from '@react-native-google-signin/google-signin';
import { View, Text } from 'native-base';
import { handleTenantKey } from '@services/connectDB';
import { Alert } from 'react-native';
import { WEB_CLIENT_ID } from '@env';

import { useAuth } from '@hooks/useAuth'

export default function () {

  const { setUser } = useAuth();

  GoogleSignin.configure({
    // scopes: ['https://www.googleapis.com/auth/drive.readonly'],
    // // webClientId: WEB_CLIENT_ID,
    webClientId: '476099768900-3jgrsnrcalu3b64ikkvc6araopq617kf.apps.googleusercontent.com',
    
  });

  async function signOut() {
    try {
      await GoogleSignin.signOut();
    } catch (error) {
      console.error(error);
    }
  }

  async function signIn() {
    try {
      // #1 Conexão com a API do Google
      await GoogleSignin.hasPlayServices();
      // #2 Salvamento das informações da API
      const userInfo = await GoogleSignin.signIn();
      //   setState({ userInfo });
      // informações do usuário simplificada, não são as mesmas que obtemos com jwt do token
      // console.log(JSON.stringify(userInfo, null, 2));
      let primeiroNomeJSON = JSON.stringify(userInfo.user.givenName, null, 2)
      let primeiroNome = primeiroNomeJSON.replace(/^"(.*)"$/, '$1');
      let segundoNomeJSON = JSON.stringify(userInfo.user.familyName, null, 2)
      let segundoNome = segundoNomeJSON.replace(/^"(.*)"$/, '$1');
      // console.log(typeof primeiroNome)
      // #3 Consulta na API do banco multi-Tenant

      let serverResposta = await handleTenantKey({
        email: userInfo.user.email,
        retornarDados: true,
      })
      console.log(serverResposta.tenantValido)
      console.log('serverResposta')
      // #4 Consulta na API do banco multi Tenant
      if (serverResposta.tenantValido != false) {
        setUser((prevState) => ({
          ...prevState,
          validado: serverResposta.tenantValido,
          email: serverResposta.dadosUsuario.email,
          nome: primeiroNome
        }))
      } else {
        Alert.alert(
          'Usuário não cadastrado',
          '',
          [
            {
              text: 'Cancelar',
              onPress: () => console.log('Botão Cancelar Pressionado'),
              style: 'cancel',
            },
            {
              text: 'Cadastrar',
              onPress: () => console.log('Botão OK Pressionado'),
            },
          ],
          { cancelable: false }
        );
      }

      // #5 Limpeza dos dados de autenticação da API Googler
      await signOut()
      // Escapes caso a aplicação dê erro com suas devidas manutenções
    } catch (error: any) {
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        Alert.alert(
          'Login Cancelado',
          '',
          [
            {
              text: 'OK',
              onPress: () => console.log('Botão OK Pressionado'),
            },
          ],
          { cancelable: false }
        );
        await signOut()
        // user cancelled the login flow
      } else if (error.code === statusCodes.IN_PROGRESS) {
        // operation (e.g. sign in) is in progress already
        await signOut()
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        // play services not available or outdated
        Alert.alert(
          'Playservice not available',
          '',
          [
            {
              text: 'OK',
              onPress: () => console.log('Botão OK Pressionado'),
            },
          ],
          { cancelable: false }
        );
        await signOut()
      } else {
        // some other error happened
        Alert.alert(
          'Erro alternativo',
          `${error}`,
          [
            {
              text: 'OK',
              onPress: () => console.error(error),
            },
          ],
          { cancelable: false }
        );
        await signOut()
      }
    }

  }

  return (
    <View>
      <GoogleSigninButton
        size={GoogleSigninButton.Size.Wide}
        color={GoogleSigninButton.Color.Dark}
        onPress={signIn}
      />
    </View>
  )
}