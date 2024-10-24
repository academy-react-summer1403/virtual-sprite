import RouterConfig from "../config/router";
import "./App.css";
import { MantineProvider } from '@mantine/core';
import "@mantine/core/styles.css";

const App = () => {
  return (
    <div>
      <MantineProvider>
        <RouterConfig />
      </MantineProvider>
    </div>
  );
};

export default App;
