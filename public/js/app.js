// app.js
var routerApp = angular.module('routerApp', ['ui.router']);

routerApp.config(function($stateProvider, $urlRouterProvider) {
    
    $urlRouterProvider.otherwise('/');
    
    $stateProvider
        
        .state('home', {
            url: '/',
            templateUrl: 'home.html'
        })

        .state('contact-us', {
            url: '/contact-us',
            templateUrl: 'contact-us.html'     
        })

        .state('legal', {
            url: '/legal',
            templateUrl: 'legal.html'     
        })

        .state('terms-of-use', {
            url: '/terms-of-use',
            templateUrl: 'terms-of-use.html'     
        })

        .state('privacy', {
            url: '/privacy',
            templateUrl: 'privacy.html'     
        })

        .state('find-a-dealer-with-zip', {
            url: '/find-a-dealer/:zipcode',
            templateUrl:'find-a-dealer-with-zip.html',
            controller: function($scope, $stateParams) {
                $scope.zipcode = $stateParams.zipcode;
            }
        })
        
        .state('find-a-dealer', {
            url: '/find-a-dealer',
            templateUrl: 'find-a-dealer.html'     
        })

        .state('hyundai-assurance', {
            url: '/hyundai-assurance',
            templateUrl: 'hyundai-assurance.html'     
        })

        .state('my-hyundai', {
            url: '/my-hyundai',
            templateUrl: 'my-hyundai.html'     
        })

        .state('why-hyundai', {
            url: '/why-hyundai',
            templateUrl: 'why-hyundai.html'     
        })

        .state('blue-link', {
            url: '/blue-link',
            templateUrl: 'blue-link.html'     
        })

        .state('receive-updates', {
            url: '/receive-updates',
            templateUrl: 'receive-updates.html'     
        })

        .state('vehicle-accessories', {
            url: '/vehicle-accessories',
            templateUrl: 'vehicle-accessories.html'     
        })
     
        .state('build-and-price', {
            url: '/build-and-price',
            templateUrl: 'build-and-price.html'     
        })

        .state('search-inventory', {
            url: '/search-inventory',
            templateUrl: 'search-inventory.html'     
        })

        .state('local-offers', {
            url: '/local-offers',
            templateUrl: 'local-offers.html'     
        })

        .state('request-a-quote', {
            url: '/request-a-quote',
            templateUrl: 'request-a-quote.html'     
        })

        .state('schedule-a-test-drive', {
            url: '/schedule-a-test-drive',
            templateUrl: 'schedule-a-test-drive.html'     
        })

        .state('e-brochures', {
            url: '/e-brochures',
            templateUrl: 'e-brochures.html'     
        })

        .state('trade-in-value', {
            url: '/trade-in-value',
            templateUrl: 'trade-in-value.html'     
        })

        .state('payment-calculator', {
            url: '/payment-calculator',
            templateUrl: 'payment-calculator.html'     
        })

        .state('vehicle-lineup', {
            url: '/vehicle-lineup',
            templateUrl: 'vehicle-lineup.html'     
        })

        .state('accent', {
            url: '/accent',
            templateUrl: 'accent.html'     
        })

        .state('elantra', {
            url: '/elantra',
            templateUrl: 'elantra.html'     
        })

        .state('elantra-coupe', {
            url: '/elantra-coupe',
            templateUrl: 'elantra-coupe.html'     
        })

        .state('elantra-gt', {
            url: '/elantra-gt',
            templateUrl: 'elantra-gt.html'     
        })

        .state('veloster', {
            url: '/veloster',
            templateUrl: 'veloster.html'     
        })

        .state('sonata', {
            url: '/sonata',
            templateUrl: 'sonata.html'     
        })

        .state('azera', {
            url: '/azera',
            templateUrl: 'azera.html'     
        })

        .state('tucson', {
            url: '/tucson',
            templateUrl: 'tucson.html'     
        })

        .state('santa-fe', {
            url: '/santa-fe',
            templateUrl: 'santa-fe.html'     
        })

        .state('sonata-hybrid', {
            url: '/sonata-hybrid',
            templateUrl: 'sonata-hybrid.html'  
        })   
        
        .state('tucson-fuel-cell', {
            url: '/tucson-fuel-cell',
            templateUrl: 'tucson-fuel-cell.html'     
        })

        .state('genesis-coupe', {
            url: '/genesis-coupe',
            templateUrl: 'genesis-coupe.html'     
        })

        .state('genesis', {
            url: '/genesis',
            templateUrl: 'genesis.html'     
        })

        .state('equus', {
            url: '/equus',
            templateUrl: 'equus.html'     
        })

        .state('sonata-hybrid-plug-in', {
            url: '/sonata-hybrid-plug-in',
            templateUrl: 'sonata-hybrid-plug-in.html'     
        })

        .state('veloster-rally-edition', {
            url: '/veloster-rally-edition',
            templateUrl: 'veloster-rally-edition.html'     
        });
});