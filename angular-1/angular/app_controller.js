/*
  AngularJS applications are controlled by controllers.
  The ng-controller directive defines the application controller.
  A controller is a JavaScript Object, created by a standard JavaScript object constructor.
*/

appModule.controller('main-controller', function($scope, $timeout, $http, $location) {

  $scope.credentials = {
    username: 'admin',
    password: 'admin'
  };

  $scope.permObj = {}
  $scope.login = function() {
    $scope.unfilled_username = false, $scope.unfilled_password = false, $scope.incorrect = false, $scope.authenticated = false;
    console.log($scope.authenticated);

    if (!$scope.permObj.ng_username) { 
      $scope.errortext = 'Пожалуйста, введите имя пользователя.';
      $scope.unfilled_username = true;
      console.log($scope.ng_username);
      return false;
    }

    if (!$scope.permObj.ng_password) { 
      $scope.errortext = 'Пожалуйста, введите пароль.';
      $scope.unfilled_password = true;
      return false;
    }

    if ( ($scope.permObj.ng_username.trim() !== $scope.credentials.username) || ($scope.permObj.ng_password.trim() !== $scope.credentials.password) ) {
      $scope.errortext = 'Неправильный логин или пароль.';
      $scope.incorrect = true;
      return false;
    }

    else {
      $scope.unfilled_username = false;
      $scope.unfilled_password = false;
      $scope.incorrect = false;
      $scope.authenticated = true;
      $scope.errortext = '';
      console.log('yeee ' + $scope.authenticated );
      $location.path("/");

      $timeout(function () {
        initFormStyler();
      }, 500);
    }
  };

  $scope.logout = function() {
    $scope.authenticated = false;
    console.log(authenticated);
  }
});

appModule.controller('form-controller', function($scope, $timeout, $http, $location) {
  $scope.types = ['Сайт', 'Приложение', 'Другое']; //$scope - when adding properties to the $scope object in the controller, the view (HTML) gets access to these properties.

  $scope.examples = [{
    name: 'Unity development', type: 'Сайт', link: 'http://ideus.biz/unity-development/', 
    descrShort: 'Lorem ipsum dolor sit amet. ', 
    descrLong: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
  },{
    name: 'kartinko.com', type: 'Сайт', link: 'http://kartinko.com/',
    descrShort: 'Lorem ipsum dolor sit amet. ', 
    descrLong: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
  },{
    name: 'abce.com', type: 'Сайт', link: 'https://abce.com/', 
    descrShort: 'Lorem ipsum dolor sit amet. ', 
    descrLong: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    }
    ,{
    name: 'seacret.net-craft.com', type: 'Сайт', link: 'http://seacret.net-craft.com', 
    descrShort: 'Lorem ipsum dolor sit amet. ', 
    descrLong: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    }
  ];

  $scope.info = [{
      title: 'Nemo enim ipsam voluptatem quia voluptas',
      content: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.'
    },{
      title: 'ed ut perspiciatis unde omnis iste natus',
      content: 'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.'
    },{
      title: 'Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet',
      content: 'Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur.'
    }
  ];

  $scope.removeItem = function (example) {
    $scope.examples.splice($scope.examples.indexOf(example),1);
    $scope.errortext = '';
  }
  
  $scope.addItem = function () {
    var item, used = false, messege_fill, messege_changeName;
        
    $scope.unfilled_name = false, $scope.unfilled_type = false, $scope.unfilled_link = false, $scope.errortext = '';

    item = {
      name: $scope.permObj.ng_name, 
      type: $scope.permObj.ng_type, 
      link: $scope.permObj.ng_link,
      descrShort: $scope.permObj.ng_descrShort,
      descrLong: $scope.permObj.ng_descrLong
    };

    messege_fill = 'Пожалуйста, заполните все поля.';
    messege_changeName = 'Имя сайта уже используется. Пожалуйста измените имя.';

    angular.forEach($scope.examples, function(value, key) { //verification that the name is not repeated
      if (value.name === $scope.permObj.ng_name) {
        used = true;
      }
      else {
        used = false;
      }
    });

    if (!($scope.permObj.ng_name)) { 
      $scope.errortext = messege_fill;
      $scope.unfilled_name = true;
      return false;
    }
    if (!($scope.permObj.ng_type)) { 
      $scope.errortext = messege_fill;
      $scope.unfilled_type = true;
      return false;
    }
    if (!($scope.permObj.ng_link)) { 
      $scope.errortext = messege_fill;
      $scope.unfilled_link = true;
      return false;
    }
    if(used === true) {
      $scope.errortext =  messege_changeName;
      return false;
    }
    else {
      $scope.unfilled_name = false;
      $scope.unfilled_type = false;
      $scope.unfilled_link = false;
      $scope.examples.push(item);
      $scope.errortext = '';
    }
  }

  $scope.propertyName = 'name';
  $scope.reverse = false;

  $scope.sortBy = function(propertyName) {
    $scope.reverse = ($scope.propertyName === propertyName) ? !$scope.reverse : false;
    $scope.propertyName = propertyName;
  };

  var searchTextAll, searchTextName, searchTitleAll, searchTitleName;
  searchTextAll = 'Поиск по таблице';
  searchTextName = 'Поиск по названию';
  searchTitleAll = 'Переход к поиску по таблице';
  searchTitleName = 'Переход к поиску по названию';
  $scope.visibleAll = true;
  $scope.searchText = searchTextName;
  $scope.searchTitle = searchTitleName;
  $scope.changeSearch = function (visibleAll) {
    if ($scope.visibleAll == true) {
      $scope.visibleAll = false;
      $scope.searchText = searchTextAll;
      $scope.searchTitle = searchTitleAll;
    }
    else {
      $scope.visibleAll = true;
      $scope.searchText = searchTextName;
      $scope.searchTitle = searchTitleName;
    }
  };

  $timeout(function () {
    initFormStyler();
  }, 500);
});



