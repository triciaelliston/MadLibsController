angular.module('myAppUseController', [])
	.constant('MALE_NAME','male name')
	.constant('DIRTY_TASK', 'Dirty task')
	.constant('OBNOXIOUS_CELEBRITY', 'Obnoxious celebrity')
	.constant('JOB_TITLE', 'Job title')
	.constant('CELEBRITY','Celebrity')
	.constant('HUGE_NUMBER', 'Huge number')
	.constant('TEDIOUS_TASK', 'Tedious task')
	.constant('USELESS_SKILL', 'Useless skill')
	.constant('ADJECTIVE', 'Adjective')
	.run(function($rootScope,MALE_NAME,DIRTY_TASK,OBNOXIOUS_CELEBRITY,
		JOB_TITLE,CELEBRITY,HUGE_NUMBER,TEDIOUS_TASK,USELESS_SKILL,ADJECTIVE ) {
			$rootScope.male_name = MALE_NAME;
			$rootScope.dirty_task = DIRTY_TASK;
			$rootScope.obnoxious_celebrity = OBNOXIOUS_CELEBRITY;
			$rootScope.job_title = JOB_TITLE;
			$rootScope.celebrity = CELEBRITY;
			$rootScope.huge_number = HUGE_NUMBER;
			$rootScope.tedious_task = TEDIOUS_TASK;
			$rootScope.useless_skill = USELESS_SKILL;
			$rootScope.adjective = ADJECTIVE;
	}) 
	.controller('MyCtrl', function($scope) {
			/*
			$scope.male_name = MALE_NAME;
			$scope.dirty_task = DIRTY_TASK;
			$scope.obnoxious_celebrity = OBNOXIOUS_CELEBRITY;
			$scope.job_title = JOB_TITLE;
			$scope.celebrity = CELEBRITY;
			$scope.huge_number = HUGE_NUMBER;
			$scope.tedious_task = TEDIOUS_TASK;
			$scope.useless_skill = USELESS_SKILL;
			*$scope.adjective = ADJECTIVE;
			$scope.adjective = "xxxxx"; */
		
	})