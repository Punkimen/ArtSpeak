<?
require($_SERVER["DOCUMENT_ROOT"]."/bitrix/modules/main/include/prolog_before.php");

$vebinar = Vebinar::GetWebinarsID($_REQUEST['ID']);
//debug_print ($vebinar);
?>

<title>Спасибо, что Вы с нами! Осталось подтвердить регистрацию. Отройте почту!</title>

<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Document</title>

	<link rel="stylesheet" href="css/style.css?v=5">
	<link rel="stylesheet" href="css/style_media.css?v=5">
	<link rel="stylesheet" href="css/animate.css">
	<link rel="stylesheet" href="fonts/MyriadPro/stylesheet.css">
	<link rel="stylesheet" href="js/fancybox_2/jquery.fancybox.min.css">
	<link rel="stylesheet" href="js/owl-carousel-2/owl.carousel.min.css">
	<script src="js/jquery-2.0.0.min.js"></script>
	<script src="js/maskedinput.js"></script>
	<script src="js/fancybox_2/jquery.fancybox.min.js"></script>
	<script src="js/owl-carousel-2/owl.carousel.min.js"></script>
	<link rel="shortcut icon" href="favicon.ico" type="image/x-icon">
	<script src="js/main.js?v=5"></script>
	<meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1, user-scalable=no">
</head>
<body>
	
<div class="wrap">
	<div class="slide">
		<div class="slide-inner owl-carousel">
			

		<div class="slide__item slide__item-about slide-senks">
			<div class="slide__item-wrap">
				<div class="slide__item-wrap-about senks">
					<div class="text">
					<h2>Спасибо за регистрацию!</h2>
				
					<p>Подтвердите, пожалуйста, свое участие в вебинаре <br />
в одном из месседжеров. <br />
Также в месседжере я пришлю план вебинара в PDF и  <br />
несколько важных заданий для участников перед  <br />
началом.</p>
					<h3>Перейдите в мессенджер:</h3>
					<div class="messanger">
						<div class="messanger__item">
							<a href="<?=$vebinar['VIBER']?>"><img src="img/viber.jpg" alt=""></a>
						</div>
						<?/*<div class="messanger__item">
							<a href="<?=$vebinar['TELEGRAM']?>"><img src="img/telegramm.jpg" alt=""></a>
						</div>*/?>
						<div class="messanger__item">
							<a href="<?=$vebinar['FACEBOOK']?>"><img src="img/fb.jpg" alt=""></a>
						</div>
					</div>
					<p>p.s. также вам на указанную почту пришло сообщение с <br />
подтверждением регистрации,  Пожалуйста, подтвердите. </p>
				</div>
				<div class="img">
					<a href="https://www.youtube.com/watch?v=0q8s8Rzp5po" class="fancybox"><img src="img/senks-video.jpg" alt="">
					<svg width="50px" height="50px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50"> 
						<path id="path_1" fill="none" d="M49.5 25c0 13.5-10.9 24.5-24.5 24.5S.6 38.5.6 25 11.5.6 25 .6 49.5 11.5 49.5 25z"></path> 
						<path id="path_2" fill="#FFFFFF" d="M25 50c13.8 0 25-11.2 25-25S38.8 0 25 0 0 11.2 0 25s11.2 25 25 25zm-5-33.3l14.2 8.8L20 34.3V16.7z"></path>
					 </svg>
					</a>
				</div>

				</div>
				
			</div>
		</div>


		</div>
	
	<div class="slide__social">
		<div class="slide__social-item home">
			<a href="https://artspeak.ru/"></a>
		</div>
		<div class="slide__social-item line"></div>
		<div class="slide__social-item icon">
			<a href="https://www.instagram.com/olgaspeaker/" class="instagramm" target="_blank"></a>
		</div>
		<div class="slide__social-item icon">
			<a href="https://www.youtube.com/channel/UCMtWW7CrjN8VjheKUB-TN3g?view_as=subscriber" class="youtube" target="_blank"></a>
		</div>
	</div>


	</div>
</div>
<footer>
	<div class="wrap">
		<div class="footer">
			<div class="footer__item">
				© Artspeak тренинговая компания Ольги Лисиной. Все права защищены<br />
тел.: +7 495 943 0020, e-mail: info@artspeak.ru
			</div>
			<div class="footer__item footer-link">
				<a data-type="ajax" href="requisites.html" class="fancybox">Реквизиты</a>
				<a data-type="ajax" href="privacy-policy.html" class="fancybox">Политика конфиденциальности</a>				
			</div>

		</div>
	</div>
</footer>
<!-- Yandex.Metrika counter -->
<script type="text/javascript" >
   (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
   m[i].l=1*new Date();k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
   (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");

   ym(66280564, "init", {
        clickmap:true,
        trackLinks:true,
        accurateTrackBounce:true,
        webvisor:true
   });
</script>
<noscript><div><img src="https://mc.yandex.ru/watch/66280564" style="position:absolute; left:-9999px;" alt="" /></div></noscript>
<!-- /Yandex.Metrika counter -->
<!-- Facebook Pixel Code -->
<script>
!function(f,b,e,v,n,t,s)
{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};
if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s)}(window, document,'script',
'https://connect.facebook.net/en_US/fbevents.js');
fbq('init', '683622592459082');
fbq('track', 'PageView');
</script>
<noscript><img height="1" width="1" style="display:none"
src="https://www.facebook.com/tr?id=683622592459082&ev=PageView&noscript=1"
/></noscript>
<!-- End Facebook Pixel Code -->
</body>
</html>