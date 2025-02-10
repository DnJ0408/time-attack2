import StateControl from "./components/StateManager";
import Level1 from "./components/DeepNestedStructure";
import {
  AppContainer,
  Content,
  DeepStructure,
} from "./styles/StyledComponents";
import { MessageContextProvider } from "./context/MessageContext";
import { useState } from "react";

// prop drilling 브랜치
function App() {
  const [message, setMessage] = useState("");

  return (
    <MessageContextProvider>
      <AppContainer>
        <h2>[내배캠] 스탠다드반 프로젝트 - Prop Drilling 예제</h2>
        <Content>
          <StateControl />
          <DeepStructure>
            <Level1 />
          </DeepStructure>
        </Content>
      </AppContainer>
    </MessageContextProvider>
  );
}

export default App;
