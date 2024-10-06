
import HomePage from '../pages/home.f7';
import AboutPage from '../pages/about.f7';
import FormPage from '../pages/form.f7';
import ProfilePage from '../pages/profile.f7';


import DynamicRoutePage from '../pages/dynamic-route.f7';
import RequestAndLoad from '../pages/request-and-load.f7';
import NotFoundPage from '../pages/404.f7';

import { firebaseApp, fbAuth, logoutFb, googleProvider } from '../assets/firebase/'
import { onAuthStateChanged, signInWithPopup, signInWithEmailAndPassword, GoogleAuthProvider } from "firebase/auth";

var routes = [
  {
    path: '/',
    component: HomePage,
  },
  {
    path: '/about/',
    component: AboutPage,
  },
  {
    path: '/form/',
    component: FormPage,
  },


  {
    path: '/dynamic-route/blog/:blogId/post/:postId/',
    component: DynamicRoutePage,
  },
  {
    path: '/request-and-load/user/:userId/',
    async: function ({ router, to, resolve }) {
      // App instance
      var app = router.app;

      // Show Preloader
      app.preloader.show();

      // User ID from request
      var userId = to.params.userId;

      // Simulate Ajax Request
      setTimeout(function () {
        // We got user data from request
        var user = {
          firstName: 'Vladimir',
          lastName: 'Kharlampidi',
          about: 'Hello, i am creator of Framework7! Hope you like it!',
          links: [
            {
              title: 'Framework7 Website',
              url: 'http://framework7.io',
            },
            {
              title: 'Framework7 Forum',
              url: 'http://forum.framework7.io',
            },
          ]
        };
        // Hide Preloader
        app.preloader.hide();

        // Resolve route to load page
        resolve(
          {
            component: RequestAndLoad,
          },
          {
            props: {
              user: user,
            }
          }
        );
      }, 1000);
    },
  },
  {
    path: '/profile/user/:userId/',
    async: function ({ router, to, resolve }) {
      // App instance
      var app = router.app;

      // Show Preloader
      app.preloader.show();

      async function getProfile(e) {
        const currentUser = await fbAuth.currentUser;
        
        app.preloader.hide();
        if (currentUser) {
          // User is signed in, see docs for a list of available properties
          // https://firebase.google.com/docs/reference/js/auth.user
          // ...
  
          // User ID from request
          var userId = to.params.userId;
  
          // Resolve route to load page
          resolve(
            {
              component: ProfilePage,
            },
            {
              props: {
                user: currentUser,
                uid: currentUser.uid,
              }
            }
          );
        } else {
          // No user is signed in.
        }
      }


        


      setTimeout(() => {
        getProfile();

      }, 1000);




    },
  },
  {
    path: '(.*)',
    component: NotFoundPage,
  },
];

export default routes;