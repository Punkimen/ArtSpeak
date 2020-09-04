<?
require($_SERVER["DOCUMENT_ROOT"]."/bitrix/modules/main/include/prolog_before.php");
CModule::IncludeModule("iblock");
CModule::IncludeModule('catalog');
while (ob_get_level()) ob_end_clean();
if (!defined('PUBLIC_AJAX_MODE')) {
    define('PUBLIC_AJAX_MODE', true);
} 
//header('Content-type: application/json');
$httprequest = isset($_SERVER['HTTP_X_REQUESTED_WITH'])?$_SERVER['HTTP_X_REQUESTED_WITH']:null;
if($httprequest == 'XMLHttpRequest'){
	if ($_REQUEST["action"] == 'GetWebinar' && intval($_REQUEST["section_id"])){
		$vebinar = Vebinar::GetWebinarsToday($_REQUEST["section_id"]);
		die(json_encode($vebinar));
	}
	$success["errors"] = array();
	

	if ($_REQUEST["agree"] !='on'){
		$success["errors"][] = "agree";
	}
	if ($_REQUEST["window_width"] >= 769 && !check_email($_REQUEST["email"])){
		$success["errors"][] = "email";
	}
	if (strlen($_REQUEST["phone"])<10){$success["errors"][] = "phone";}
	

	if (count($success["errors"]) == 0) {
		$el = new CIBlockElement;
		CModule::IncludeModule('form');

		$SectionId = $_REQUEST["section_id"];
		$success['LINK'] = Vebinar::GetWebinarsToday($SectionId);
		$weekday = Vebinar::GetWebinarsWeekdaID($SectionId);
		if ( $_REQUEST["link"] && $success['LINK'][$_REQUEST["link"]]){
			$success['LINK_LOCATION'] =  $success['LINK'][$_REQUEST["link"]];
		}

		$arValues = array(
			'form_text_228' => $_REQUEST["name"],
			'form_text_229' =>	preg_replace('![^0-9]+!', '', $_REQUEST["phone"]),
			'form_text_230' => $_REQUEST["email"],
			'form_text_231' => $weekday['NAME'],
			'form_text_235' => $_REQUEST["date"],
			'form_text_232' =>	$weekday['SENDPULSE_BOOK_ID'],
			'form_text_233' => $success['LINK']['NAME'],
		);
		$RESULT_ID = CFormResult::Add(37, $arValues, "N");
		


		
		$success['EMAIL'] = $_REQUEST["email"];
		$success['PHONE'] = $_REQUEST["phone"];
	}

die(json_encode($success));
}

?>