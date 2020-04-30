const noop = (a, b, c) => {}

export const middleware = () => {
    window.fbq = window.fbq || noop;
};