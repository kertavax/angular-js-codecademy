var holacracyLister = angular.module("holacracyLister", []);

holacracyLister.controller("HolacracyController", function() {
	this.companies = HolacracyCompanies;
});

holacracyLister.controller("PanelController", function() {
	this.tab = 3;
	this.selectTab = function(setTab) {
		this.tab = setTab;
	};
	this.isSelected = function (checkTab) {
		return this.tab === checkTab;
	}
});

holacracyLister.controller("ReviewController", function() {
	this.review = {};
	this.addReview = function(company) {
		company.reviews.push(this.review);
		this.review = {};
	}
})

var HolacracyCompanies = [
	{
		name: "Kolibri",
		url: "http://www.kolibri.is",
		place: "Reykjavík, Iceland",
		running: true,
		reviews: [
			{
				stars: 5,
				body: "I love this company!",
				author: "kertavax@gmail.com"
			},
			{
				stars: 2,
				body: "This company is so-so …",
				author: "kertavax@gmail.com"
			}
		]
	},
	{
		name: "Precision Nutrition",
		url: "http://www.precisionnutrition.com",
		place: "Toronto, Canada",
		running: true,
		reviews: [
			{
				stars: 4,
				body: "I sure do like this company!",
				author: "kertavax@gmail.com"
			},
			{
				stars: 1,
				body: "This company is the worst!",
				author: "kertavax@gmail.com"
			}
		]
	}];