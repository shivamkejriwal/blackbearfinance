import app from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import 'firebase/firestore';
import 'firebase/analytics';
import 'firebase/performance';

const config = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_DATABASE_URL,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_appId,
  measurementId: process.env.REACT_APP_measurementId
};
class Firebase {
  constructor() {
    if (!Firebase.instance) {
      app.initializeApp(config);
      app.analytics();
      /* Firebase APIs */
      this.auth = app.auth();
      this.db = app.database();
      this.firestore = app.firestore();
      this.analytics = app.analytics();
      this.perf = app.performance();
      /* Social Sign In Method Provider */
  
      this.googleProvider = new app.auth.GoogleAuthProvider();
      this.facebookProvider = new app.auth.FacebookAuthProvider();
      this.twitterProvider = new app.auth.TwitterAuthProvider();
      Firebase.instance = this;
    }
  }
    // *** Auth API ***
    doCreateUserWithEmailAndPassword = (email, password) =>
        this.auth.createUserWithEmailAndPassword(email, password);

    doSignInWithEmailAndPassword = (email, password) =>
        this.auth.signInWithEmailAndPassword(email, password);
    doSignInWithGoogle = () =>
      this.auth.signInWithPopup(this.googleProvider);
    doSignInWithFacebook = () =>
      this.auth.signInWithPopup(this.facebookProvider);
    doSignInWithTwitter = () =>
      this.auth.signInWithPopup(this.twitterProvider);

    doSendEmailVerification = () =>
      this.auth.currentUser.sendEmailVerification({
        url: process.env.REACT_APP_CONFIRMATION_EMAIL_REDIRECT,
      });
    doSignOut = () => this.auth.signOut();
    doPasswordReset = email => this.auth.sendPasswordResetEmail(email);
    doPasswordUpdate = password =>
        this.auth.currentUser.updatePassword(password);

    // *** User API ***
    user = uid => this.db.ref(`users/${uid}`);
    users = () => this.db.ref('users');

    // *** Articles API ***
    // getArticles = (limit = 3) => this.firestore
    //               .collection('Articles')
    //               .orderBy('date','desc')
    //               .limit(limit);
    // getArticlesByCategory = (category, limit = 3) => this.firestore
    //               .collection('Articles')
    //               .where('category', '==', category)
    //               .orderBy('date','desc')
    //               .limit(limit);
    // // *** Market API ***
    // getMarketData = (key) => this.firestore
    //               .collection('Companies')
    //               .where(key, '==', true);
    // getAdvancersDecliners = (key) => this.firestore
    //               .collection('Market-Data').doc('Advancers-Decliners');
    // getSectors = (key) => this.firestore.collection('Sector');
    // getIndustries = (key) => this.firestore.collection('Industry');
}

export default Firebase;