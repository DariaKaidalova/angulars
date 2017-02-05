<?php
  if (empty($_SERVER['HTTPS']) || $_SERVER['HTTPS'] === 'off') {
      $protocol = 'http://';
  } else {
      $protocol = 'https://';
  }
  $BASE_URL = $protocol . $_SERVER['SERVER_NAME'] . dirname($_SERVER['PHP_SELF']);

  require_once 'inc/vendor/Mobile_Detect.php';
  $detect = new Mobile_Detect();

  $device = (!$detect->isMobile()) ? 'desktop' : ($detect->isTablet() ? 'tablet' : 'mobile');

  $device = (isset($_COOKIE['device']) && $_COOKIE['device']) ? $_COOKIE['device'] : $device;

  switch ($device) {
    case 'mobile':
      $viewport     = '1024px';
      $viewportMeta = '1024';
      break;
    case 'tablet':
      $viewport     = 'device-width';
      $viewportMeta = 'device-width';
      break;
    case 'desktop':
    default:
      $viewport     = 'device-width';
      $viewportMeta = 'device-width';
      break;
  }
  $isHomepage = (basename($_SERVER['PHP_SELF']) == 'index.php');
  $title = ($isHomepage) ? $siteName : $pageName.' : '.$siteName;
?>
<!doctype html>
<html class="l-html -device_<?php echo $device; ?> no-js" lang="">
<head>
  <meta charset="utf-8" />
  <meta http-equiv="x-ua-compatible" content="ie=edge">

  <title><?php echo $title; ?></title>
  <meta name="description" content="" />

  <!-- <meta property="og:image" content="<?php echo $BASE_URL; ?>/img/userfiles/og-image.png" /> -->

  <meta name="viewport" content="width=<?php echo $viewportMeta; ?>" />
  <style>
    @-ms-viewport {
      width: <?php echo $viewport; ?>;
    }
    @viewport {
      width: <?php echo $viewport; ?>;
    }
  </style>

  <link rel="shortcut icon" href="favicon.ico" />
  <link rel="apple-touch-icon" href="apple-touch-icon.png" />

  <link rel="stylesheet" href="assets/css/main.min.css?<?php echo filemtime('assets/css/main.min.css'); ?>" />

  <link href='https://fonts.googleapis.com/css?family=Roboto:400,100,100italic,300,300italic,400italic,500,500italic,700,700italic,900,900italic' rel='stylesheet' type='text/css'>

  <script src="//cdnjs.cloudflare.com/ajax/libs/modernizr/2.8.3/modernizr.min.js"></script>
  <script>window.Modernizr || document.write('<script src="assets/js/vendor/modernizr-2.8.3.min.js"><\/script>')</script>

  <script src="//ajax.googleapis.com/ajax/libs/jquery/2.2.3/jquery.min.js"></script>
  <script>window.jQuery || document.write('<script src="assets/js/vendor/jquery-2.2.3.min.js"><\/script>')</script>
  <script src="angular/angular.min.js"></script>
  <script src="angular/angular-animate.min.js"></script>
  <script src="angular/angular-route.min.js"></script>
</head>
<body class="l-body -page_<?php echo $uri; ?><?php echo (!$isHomepage) ? ' -page_inner' : ''; ?>" >
  <!--[if lt IE 8]>
    <p class="browserupgrade">You are using an <strong>outdated</strong> browser. Please <a href="http://browsehappy.com/">upgrade your browser</a> to improve your experience.</p>
  <![endif]-->
  

  <div class="l-wrapper" ng-app="app-module" ng-controller="main-controller">
    
    <header class="l-siteHeader" role="banner">
      <div class="b-siteHeader">
        <div class="l-siteNavigation">
          <ul class="b-mainNavigation">
            <li class="b-mainNavigation__item">
              <a href="#/" class="b-mainNavigation__link">Home</a>
            </li>
            <li class="b-mainNavigation__item">
              <a href="#/info" class="b-mainNavigation__link">Info</a>
            </li>
          </ul>
        </div>

        <div class="b-siteHeader__logout" ng-if="authenticated">
          <a class="b-button -size_min" ng-click="logout()"><span class="b-icon -color_white"><i class="fa fa-sign-out" aria-hidden="true"></i></span> <span class="b-button__text">Выйти</span></a>
        </div>
      </div>
    </header>

    <div class="l-content">
