import { getInstance } from './firebase';
import { Logger } from './logger';

const replaceUndefined = (ctx) => {
    const result = {};
    Object.entries(ctx).forEach(([key, value]) => {
        result[key] = value || '';
    });
    return result;
}

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
            Logger().log('setUser-error');
            return false;
        }
    }

    // ----------------------------------------------------------

    const getClientId = (context) => {
        context = replaceUndefined(context);
        const { name, email, phone } = context;
        const id = `${name}-${email}-${phone}`.replace(' ','');
        return id;
    }

    const getWaitingClients = async () => {
        try {
            const waitingUsers = db.collection('Clients')
                .orderBy('requestCallBackDate','desc');
            const snapshot = await waitingUsers.get();
            if (snapshot.empty) {
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

    const setClients = async (context) => {
        try {
            const id = getClientId(context);
            const client = db.collection('Clients').doc(id);
            context.id = id;
            const doc = await client.get();
            const data = doc.data();
            if (!doc.exists) {
                await client.set(context);
            }
            else {
                const payload = Object.assign(data, context);
                await client.set(payload);
            }
            return true;
        }
        catch (e) {
            Logger().log('setClients-error', e);
            return false;
        }
    }

    const getClients = async (context) => {
        try {
            const id = getClientId(context);
            const client = db.collection('Clients').doc(id);
            const doc = await client.get();
            if (!doc.exists) {
                throw new Error('No Clients Founds');
            }
            return doc.data();
        }
        catch (e) {
            Logger().log('getClients-error');
            return '';
        }
    }

    const deleteClients = async (context) => {
        try {
            const id = getClientId(context);
            const client = db.collection('Clients').doc(id);
            await client.delete();
            return true;
        }
        catch (e) {
            Logger().log('deleteClients-error');
            return '';
        }
    }

    return {
        createUser,
        getUser,
        setUser,
        // ---------------
        getClientId,
        getWaitingClients,
        setClients,
        getClients,
        deleteClients
    }
};