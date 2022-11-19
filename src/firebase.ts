import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';

const firebaseConfig = {
  apiKey: 'AIzaSyCRlhI6beCffnU3KWGKSnIxnsBg54yXCo4',
  authDomain: 'waigwa-e07e8.firebaseapp.com',
  projectId: 'waigwa-e07e8',
  storageBucket: 'waigwa-e07e8.appspot.com',
  messagingSenderId: '112338423494',
  appId: '1:112338423494:web:45951f9bc28a5eebc2d1c7',
  measurementId: 'G-KQRLBJP8NE'
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);