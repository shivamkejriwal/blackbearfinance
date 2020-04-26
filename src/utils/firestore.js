import { getInstance } from './firebase';
import { Logger } from './logger';

export const Firestore = () => {
    const firebase = getInstance();
    const db = firebase.firestore;

    const createUser = async (uid, payload) => {
        try {
            if(uid) {
                const doc =  db.collection('Users').doc(uid);
                // eslint-disable-next-line no-unused-vars
                const user = await doc.set({
                    'uid': uid,
                    'email': payload.email,
                    'displayName': payload.displayName,
                });
                Logger.log('createUser-success');
                return true;
            }
            else throw new Error('No UID');
        }
        catch (e) {
            console.log('createUser-error', e);
            return false;
        }
    }

    const getUser = async () => {
        try {
            const currentUser = firebase.auth.currentUser;
            if (currentUser) {
                console.log('getUser-currentUser', currentUser);
                const user = db.collection('Users').doc(currentUser.uid);
                let doc = await user.get();
                if (!doc.exists) {
                    console.log('getUser-NoDoc');
                    createUser(currentUser.uid, currentUser);
                    doc = await user.get();
                } 

                const data = doc.data();
                console.log('getUser-foundUser', {
                    uid: data.uid
                });
                return data;
            }
            else throw new Error('No CurrentUser');
        }
        catch (e) {
            console.log('getUser-error', e);
            return '';
        }
    }

    const setUser = async (currentUser, context) => {
        try {
            const user = db.collection('Users').doc(currentUser.uid);
            const doc = await user.get();
            const data = doc.data(); 
            const payload = Object.assign(data, context);
            await user.set(payload);
            return true;
        }
        catch (e) {
            console.log('setUser-error', e);
            return false;
        }
    }

    return {
        createUser,
        getUser,
        setUser
    }
};