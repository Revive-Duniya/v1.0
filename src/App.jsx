import WebRoute from "./routes";
import { WalletProvider } from "./context/WalletContext";

const App = () => {
  return (
    <WalletProvider>
      <WebRoute />
    </WalletProvider>
  );
};

export default App;
