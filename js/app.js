var holacracyLister = angular.module("holacracyLister", []);

holacracyLister.controller("HolacracyController", function() {
	this.companies = HolacracyCompanies;
});

var HolacracyCompanies = [
	{
		name: "Kolibri",
		url: "http://www.kolibri.is",
		place: "Reykjavík, Iceland"
	},
	{
		name: "Precision Nutrition",
		url: "http://www.precisionnutrition.com",
		place: "Toronto, Canada"
	}];