import { getInstance } from './firebase';

export const Authentication = () => {
    const firebase = getInstance();
    const getCurrentUser = () => firebase.auth().currentUser;
    
    return {
        getCurrentUser
    }
}