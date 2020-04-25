import Firebase from '../components//Firebase//firebase'

export const Logger = () => {
    const firebase = Firebase.instance || new Firebase();
    const log = (event, payload) => {
        firebase.analytics.logEvent(event, payload);
        console.log(`console-${event}`, payload);
    };

    return {
        log
    };
};