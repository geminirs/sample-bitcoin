// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
//angular.module('App', ['ionic'])
angular.module('App', ['ionic', 'highcharts-ng'])
.config(function($stateProvider, $urlRouterProvider){
  
  $stateProvider
    .state('tabs', {
        url: '/tabs',
        abstract: true,
        templateUrl: 'views/tabs/tabs.html'
    })
      .state('tabs.rates', {
          url: '/rates',
          views: {
            'rates-tab': {
              templateUrl: 'views/rates/rates.html',
              controller: 'RatesController'   
            }
          }
          
      })
      .state('tabs.detail', {
          url: '/detail/:currency',
          views: {
            'rates-tab': {
              templateUrl: 'views/detail/detail.html',
              controller: 'DetailController'
            }
          }
      })
      .state('tabs.history', {
          url: '/history?curency',
          views: {            //subview for this state
            'history-tab': {  //name of subview
              templateUrl: 'views/history/history.html',
              controller: 'HistoryController'    
            }
          }
          
      })
      .state('tabs.currencies', {
          url: '/currencies',
          views: {
            'currencies-tab': {
              templateUrl: 'views/currencies/currencies.html'    
            }
          }
          
      })
    ;
  
  $urlRouterProvider.otherwise('/tabs/rates');

})

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      // Don't remove this line unless you know what you are doing. It stops the viewport
      // from snapping when text inputs are focused. Ionic handles this internally for
      // a much nicer keyboard experience.
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})

.factory('Currencies', function(){
  return [
    { 
      code: 'AUD',
      text: 'Australian Dollar',
      selected: true
    },
    { 
      code: 'BRL',
      text: 'Brazilian Real',
      selected: false
    },
    { 
      code: 'CAD',
      text: 'Caladian Dollar',
      selected: true
    },
    {
      code: 'CHF',
      text: 'Swiss Franc',
      selected: false
    },
    { 
      code: 'CNY',
      text: 'Chinese Yuan',
      selected: true
    },
    { 
      code: 'EUR',
      text: 'Euro',
      selected: true
    },
    { 
      code: 'GBP',
      text: 'British Pound Sterling',
      selected: true
    },
    { 
      code: 'SGD',
      text: 'Singapore Dollar',
      selected: false
    },
    { 
      code: 'USD',
      text: 'United States Dollar',
      selected: true
    }
  ];
})