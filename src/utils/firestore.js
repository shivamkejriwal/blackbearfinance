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
                Logger().log('createUser-success');
                return true;
            }
            else throw new Error('No UID');
        }
        catch (e) {
            // console.log('createUser-error', e);
            Logger().log('createUser-error');
            return false;
        }
    }

    const getUser = async () => {
        try {
            const currentUser = firebase.auth.currentUser;
            if (currentUser) {
                Logger().log('getUser-currentUser', {
                    currentUser,
                    consoleOnly: true
                });
                const user = db.collection('Users').doc(currentUser.uid);
                let doc = await user.get();
                if (!doc.exists) {
                    createUser(currentUser.uid, currentUser);
                    doc = await user.get();
                } 

                const data = doc.data();
                Logger().log('getUser-success', {
                    uid: data.uid
                });
                return data;
            }
            else throw new Error('No CurrentUser');
        }
        catch (e) {
            // console.log('getUser-error', e);
            Logger().log('getUser-error');
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
            // console.log('setUser-error', e);
            Logger().log('setUser-error');
            return false;
        }
    }

    const getWaitingClients = async () => {
        try {
            const waitingUsers = db.collection('Users')
                .where('requestCallBackCount', '>', 0)
                .orderBy('requestCallBackCount','desc');
            const snapshot = await waitingUsers.get();
            if (snapshot.empty) {
                console.log('No matching documents.');
                throw new Error('No clients waiting');
            }
            const results = [];
            snapshot.forEach(doc => results.push(doc.data()));
            return results;
        }
        catch (e) {
            Logger().log('getWaitingClients-error');
            return [];
        }
    }

    return {
        createUser,
        getUser,
        setUser,
        getWaitingClients
    }
};