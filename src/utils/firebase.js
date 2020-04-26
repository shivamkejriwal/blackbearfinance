import Firebase from '../components/Firebase/firebase'

export const getInstance = () => {
    const firebase = Firebase.instance || new Firebase();
    return firebase;
}