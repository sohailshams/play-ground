// import { View, Text } from "react-native";
// import React from "react";

// export default function HomeScreen() {
//   return (
//     <View className="flex-1 items-center justify-center bg-white">
//       <Text className="text-red-500">HomeScreen</Text>

//     </View>
//   );
// }
import * as React from "react";
import * as WebBrowser from "expo-web-browser";
import { makeRedirectUri, useAuthRequest } from "expo-auth-session";
import { Button } from "react-native";

WebBrowser.maybeCompleteAuthSession();

// Endpoint
const discovery = {
  authorizationEndpoint: "https://github.com/login/oauth/authorize",
  tokenEndpoint: "https://github.com/login/oauth/access_token",
  revocationEndpoint:
    "https://github.com/settings/connections/applications/7860ffa956dc515c2725",
};

export default function App() {
  const [request, response, promptAsync] = useAuthRequest(
    {
      clientId: "7860ffa956dc515c2725",
      scopes: ["identity"],
      redirectUri: makeRedirectUri({
        scheme: "https://localhost:19006",
      }),
    },
    discovery
  );

  React.useEffect(() => {
    if (response?.type === "success") {
      const { code } = response.params;
    }
  }, [response]);

  return (
    <Button
      disabled={!request}
      title="Login"
      onPress={() => {
        promptAsync();
      }}
    />
  );
}
