import {
  GoogleSignin,
  GoogleSigninButton,
  statusCodes,
} from '@react-native-google-signin/google-signin';
import { WEB_CLIENT_ID } from '@env';
import { View, Text } from 'native-base';
import { handleTenantKey } from '@services/connectDB';

import { useAuth } from '@hooks/useAuth'

export default function () {

  const { setUser } = useAuth();

  GoogleSignin.configure({
    scopes: ['https://www.googleapis.com/auth/drive.readonly'],
    webClientId: WEB_CLIENT_ID
  });
  
   async function signIn() {
    try {
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();
      //   setState({ userInfo });
      // informações do usuário simplificada, não são as mesmas que obtemos com jwt do token
      console.log(JSON.stringify(userInfo.user.email, null, 2));
      handleTenantKey({
        userEmail:userInfo.user.email,
        validarTenant: true
      })

    } catch (error: any) {
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        // user cancelled the login flow
      } else if (error.code === statusCodes.IN_PROGRESS) {
        // operation (e.g. sign in) is in progress already
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        // play services not available or outdated
      } else {
        // some other error happened
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