import { NativeStackScreenProps } from "@react-navigation/native-stack"

export type RootStackParamList = {
    Home: undefined,
    Detail: undefined,
    Feed: undefined,
}

export type HomeScreenNavigationProps = NativeStackScreenProps<RootStackParamList, 'Home'>
export type DetailScreenNavigationProps = NativeStackScreenProps<RootStackParamList, 'Detail'>
export type FeedScreenNavigationProps = NativeStackScreenProps<RootStackParamList, 'Feed'>