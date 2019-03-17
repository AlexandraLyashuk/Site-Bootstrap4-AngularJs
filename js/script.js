var app = angular.module('app', [])

app
.controller('MyFirstController', showPopUp);

showPopUp.$inject = ['$rootScope', '$scope', '$http'];

function showPopUp($rootScope, $scope, $http) {
    var ctrl = $scope;
    console.log(ctrl);
    ctrl.staff = [
        {
            photo: 'img/stuff.jpg',
            fullName: 'Vlad Ivanov',
            jobName: 'Designer',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, necessitatibus.'
        },
        {
            photo: 'img/stuff.jpg',
            fullName: 'Bogdan Makarov',
            jobName: 'Manager',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, necessitatibus.'
        },
        {
            photo: 'img/stuff.jpg',
            fullName: 'Pavel Konov',
            jobName: 'Copywriter',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, necessitatibus.'
        },
        {
            photo: 'img/stuff.jpg',
            fullName: 'Max Belov',
            jobName: 'SEO',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, necessitatibus.'
        }
    ];

    ctrl.services = [
        {
            image: 'img/comp.png',
            fullName: 'web design',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, necessitatibus.'
        },
        {
            image: 'img/mobile.png',
            fullName: 'mobile apps',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, necessitatibus.'
        },
        {
            image: 'img/photo.png',
            fullName: 'photography',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, necessitatibus.'
        },
        {
            image: 'img/sound.png',
            fullName: 'marketing',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, necessitatibus.'
        }
    ]
}