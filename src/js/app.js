import $ from 'dom7';
import Framework7 from './framework7-custom.js';

// Import F7 Styles
import '../css/framework7-custom.less';

// Import Icons and App Custom Styles
import '../css/icons.css';
import '../css/app.less';


// Import Routes
import routes from './routes.js';
// Import Store
import store from './store.js';

// Import main app component
import App from '../app.f7';


var app = new Framework7({
  name: 'Alphabeta TOEFL Certification', // App name
  theme: 'md', // Automatic theme detection
  colors: {
    primary: '#2900ff',
  },
  darkMode: false,
  el: '#app', // App root element
  component: App, // App main component
  navbar: {
    hideOnPageScroll: true,
    mdCenterTitle: true,
  },
  toolbar: {
    hideOnPageScroll: true,
  }, 
  view: {
    browserHistory: true,
    browserHistoryRoot: process.env.NODE_ENV ==='production' ? '' : 'http://localhost:5173/',
    // browserHistorySeparator:''
  },
  popover: {
    closeByBackdropClick: false,
  },
  // App store
  store: store,
  // App routes
  routes: routes,

  on: {
    init: function () {

      console.log('init');

      var f7 = this;


    },
    pageInit: function (page) {
      console.log('app on pageInit');

    },
    pageMounted:function(page){

      console.log('app on pageMounted');
      
    },
    pageBeforeIn:function(page){

    },
    
  },
  // Register service worker (only on production build)
  serviceWorker: process.env.NODE_ENV ==='production' ? {
    path: '/service-worker.js',
  } : {},
});