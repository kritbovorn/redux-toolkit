import { NativeStackScreenProps } from '@react-navigation/native-stack'

export type RootStackParamList = {
    Home: undefined,
    Explore: undefined
};

export type HomeProps = NativeStackScreenProps<RootStackParamList, "Home">;
export type ExploreProps = NativeStackScreenProps<RootStackParamList, "Explore">;

