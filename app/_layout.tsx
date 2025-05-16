import { Stack } from "expo-router";
import { useFonts } from 'expo-font';
import { LogtoProvider, LogtoConfig, UserScope } from '@logto/rn';

export default function RootLayout() {
  const [loaded, error] = useFonts({
    'outfit': require('./../assets/fonts/Outfit-Regular.ttf'),
    'outfit-bold': require('./../assets/fonts/Outfit-Bold.ttf'),
  });

  const config: LogtoConfig = {
    endpoint: 'https://9204i0.logto.app/',
    appId: 'beutzznth9oxo903cufze',
    scopes: [
      UserScope.Email
    ]
  };

  return (
    <LogtoProvider config={config}>
      <Stack>
        <Stack.Screen name="Landing" options={{ headerShown: false }} />
      </Stack>
    </LogtoProvider>
  )
}
