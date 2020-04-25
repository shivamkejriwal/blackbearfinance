import { withFirebase } from '../Firebase';

const Logger = ({ firebase }) => {
    const log = ({event, payload}) => {
        firebase.analytics.logEvent(event, payload);
        console.log(`console-${event}`, payload);
    };

    return {
        log
    };
};

export default withFirebase(Logger);