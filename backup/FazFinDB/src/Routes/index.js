import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Cadastrolista from '../pages/Cadastro-listas';
import Hometeste from '../pages/Hometeste';

const Stack = createNativeStackNavigator();

function Routes() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="HomeScreen" component={Hometeste}  initialParams={{'idfaz':''}}/>
                <Stack.Screen name="Cadastro" component={Cadastrolista} initialParams={{'idfaz':''}} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default Routes;