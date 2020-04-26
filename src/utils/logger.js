import { getInstance } from './firebase';

export const Logger = () => {
    const firebase = getInstance();
    const log = (event, payload) => {
        if(!payload) {
            firebase.analytics.logEvent(event);
            console.log(`console-${event}`);
        }
        else if(payload && !payload.consoleOnly) {
            firebase.analytics.logEvent(event, payload);
        }
        else {
            firebase.analytics.logEvent(event, payload);
            console.log(`console-${event}`, payload);
        }
    };

    return {
        log
    };
};