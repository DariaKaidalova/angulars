<?php
$pageName = 'Home';
$siteName = 'Sites and apps';
$uri = 'home';
require('inc/header.php');
?>

<main class="b-content" role="main">
	<div>
		<ng-view></ng-view>

		<?php include('page-login.php'); ?>
	</div>
</main>

<?php require('inc/footer.php'); ?>