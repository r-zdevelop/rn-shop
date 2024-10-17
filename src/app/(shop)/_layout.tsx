import { Tabs } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { StyleSheet } from "react-native";
import { FontAwesome } from '@expo/vector-icons';

function TabBarIcon(props: { name: React.ComponentProps<typeof FontAwesome>['name']; color: string }) {
    return <FontAwesome size={24} style={{ marginBottom: -3 }} {...props} />;
}

const TabsLayout = () => {
    return (
        <SafeAreaView style={styles.safeArea}>
            <Tabs
                screenOptions={{
                    tabBarActiveTintColor: '#1BC464',
                    tabBarInactiveTintColor: 'gray',
                    tabBarLabelStyle: {
                        fontSize: 16,
                    },
                    tabBarStyle: {
                        borderTopLeftRadius: 20,
                        borderTopRightRadius: 20,
                        paddingTop: 10,
                    },
                    headerShown: false,
                }}
            >
                <Tabs.Screen name='index' options={{
                    title: 'shop',
                    tabBarIcon: (props) => <TabBarIcon name='shopping-cart' {...props} />
                }} />
                <Tabs.Screen name='orders' options={{
                    title: 'orders',
                    tabBarIcon: (props) => <TabBarIcon name='book' {...props} />
                }} />
            </Tabs>
        </SafeAreaView>
    )
}

export default TabsLayout

// styles
const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
    },
})