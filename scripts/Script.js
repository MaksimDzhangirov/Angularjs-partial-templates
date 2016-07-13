/// <reference path="angular.min.js" />

var myApp = angular
				.module("myModule", [])
				.controller("myController", function ($scope, $http, $location, $anchorScroll) {
					$http.get('getdata.php')
						 .then(function (response) {
						 		$scope.countries = response.data;
						 });
					$scope.scrollTo = function(countryName) {
						$location.hash(countryName);
						$anchorScroll();					
					}
				});
