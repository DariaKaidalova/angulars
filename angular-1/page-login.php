<div class="l-login" ng-if="!authenticated">
	<form action="" class="b-login">
		<div class="b-login__item">
			<label for="username" class="b-control__title">Имя пользователя</label>
			<input type="text" id="username" class="b-control__field" ng-model="permObj.ng_username"/>
		</div>
		<div class="b-login__item">
			<label for="password" class="b-control__title">Пароль</label>
			<input type="password" id="password" class="b-control__field" ng-model="permObj.ng_password">
		</div>
		<div class="b-errors">{{errortext}}</div>
		<div class="l-button -align_center">
  			<a class="b-button" ng-click="login()"><span class="b-icon -color_white"><i class="fa fa-sign-in" aria-hidden="true"></i></span> <span class="b-button__text">Войти</span></a>
		</div>
	</form>
</div>

