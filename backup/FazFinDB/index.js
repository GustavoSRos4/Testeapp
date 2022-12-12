import { registerRootComponent } from 'expo';
import Routes from './src/Routes';

function App() {
  return (
    <Routes />
  );
}

registerRootComponent(App);

