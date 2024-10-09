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

// import function to register Swiper custom elements
import { register } from 'swiper/element/bundle';
// register Swiper custom elements
register();


import { fbAuth } from '../assets/firebase/'
import { onAuthStateChanged } from "firebase/auth";


var app = new Framework7({
  name: 'Alphabeta', // App name
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
    url: '/',
    browserHistory: true,
    browserHistoryRoot: process.env.NODE_ENV === 'production' ? '' : 'http://localhost:5173/',
    browserHistorySeparator: 'mobile'
  },
  // popover: {
  //   closeByBackdropClick: true,
  // },
  // App store
  store: store,
  // App routes
  routes: routes,

  on: {
    init: function () {

      console.log('init');

      var f7 = this;





    },
    // pageMounted:function(page){
    //   // console.log('app on pageMounted', page);
    // },
    pageInit: function (page) {
      // console.log('app on pageInit', page);
    },
    // pageBeforeIn:function(page){
    //   // console.log('app on pageBeforeIn', page);
    // },
    // pageAfterIn:function(page){
    //   // console.log('app on pageAfterIn', page);
    // },
    // pageBeforeOut:function(page){
    //   // console.log('app on pageBeforeOut', page);
    // },
    // pageAfterOut:function(page){
    //   // console.log('app on pageAfterOut', page);
    // },
    // pageBeforeUnmount:function(page){
    //   // console.log('app on pageBeforeUnmount', page);
    // },
    // pageBeforeRemove:function(page){
    //   // console.log('app on pageBeforeRemove', page);
    // },

  },
  // Register service worker (only on production build)
  serviceWorker: process.env.NODE_ENV === 'production' ? {
    path: '/service-worker.js',
  } : {},
});


/*

Framework7.registerComponent(
  // component name
  'my-list-item',

  // component function
  (props, { $h }) => {
    let foo = 'bar';

    return () => $h`
      <li class="item-content" id="${props.id}">${foo}</li>
    `
  }
)

//USAGE
<div class="list">
  <ul>
    <my-list-item id="item-1"></my-list-item>
  </ul>
</div>
*/

