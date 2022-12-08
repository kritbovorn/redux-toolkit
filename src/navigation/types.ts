import { NativeStackScreenProps } from "@react-navigation/native-stack"

export type RootStackParamList = {
    Home: undefined,
    Detail: undefined,
    Feed: undefined,
    Modal: undefined,
    ModalFirst: undefined,
    ModalSecond: undefined
}

export type HomeScreenNavigationProps = NativeStackScreenProps<RootStackParamList, 'Home'>
export type DetailScreenNavigationProps = NativeStackScreenProps<RootStackParamList, 'Detail'>
export type FeedScreenNavigationProps = NativeStackScreenProps<RootStackParamList, 'Feed'>
export type ModalScreenNavigationProps = NativeStackScreenProps<RootStackParamList, 'Modal'>
export type ModalFirstScreenNavigationProps = NativeStackScreenProps<RootStackParamList, 'ModalFirst'>
export type ModalSecondScreenNavigationProps = NativeStackScreenProps<RootStackParamList, 'ModalSecond'>