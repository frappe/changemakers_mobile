import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import styled, { css } from "@emotion/native";
import { ThemeProvider } from "@emotion/react";

const theme = {
  "gray.900": "#171717",
};

const Badge = styled.View`
  background-color: ${(props) => props.theme["gray.900"]};
  padding: 1px 6px;
  border-radius: 100px;
`;

const BadgeText = styled.Text`
  color: white;
  font-size: 12px;
`;

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <View style={styles.container}>
        <Badge>
          <BadgeText>Gamma</BadgeText>
        </Badge>
      </View>
      <StatusBar style="auto" />
    </ThemeProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
