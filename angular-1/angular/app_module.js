/*
	An AngularJS module defines an application.
	The module is a container for the different parts of an application.
	The module is a container for the application controllers.
	Controllers always belong to a module.
*/

var appModule = angular.module('app-module', ['ngAnimate', 'ngRoute'])
	.config(function($routeProvider, $httpProvider) { //Для конфигурации маршрутов используется объект $routeProvider
		$routeProvider.when('/', {
			templateUrl: 'page-form.php',
      controllers: 'main-controller'
		})

    .when('/info', {
			templateUrl: 'page-info.php',
      controllers: 'main-controller'
		})

    .when('/login', {
      templateUrl: 'page-login.php',
      controllers: 'main-controller'
    })

    .otherwise({
			redirectTo: '/'
		});

		initFormStyler();
	});
	
appModule.directive('projectsList', function () {
  return {
    scope: {
      data: '= projectsList'
    }, // получаем изолированный scope, в котором будет только data, "=" значит биндинг двухсторонний, т.е. изменяем в директиве в контроллере значение тоже поменяется
    restrict: 'A',

    link: function(scope, element, attrs) { //linking — связывание переменных используемых в шаблоне и переменных в scope
      var wrap = angular.element('<div>').addClass('l-list');
      element.append(wrap);
      var ul = angular.element('<ul>').addClass('b-list');
      wrap.append(ul);
      for (var i = 0; i < scope.data.length; i++) {
        var li = angular.element('<li>').addClass('b-list__item');
        li.append(angular.element('<div>').addClass('b-list__title').text(scope.data[i].title));
        li.append(angular.element('<div>').addClass('b-list__content').text(scope.data[i].content));
        ul.append(li);
        wrap
      }
      setTimeout(function(){
        scope.data = 'arctur'; //записывает новые данные
        scope.$apply(); //запускает функцию digest, которая обновляет scope и в контроллере тоже, используется обычно при евентах (click и т.д.)
      }, 5000);
    }
  }
});

appModule.directive('sometext', function () {
  return {
    restrict : "E",
    template : "<div><small>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur.</small></div>"
  }
});
	
