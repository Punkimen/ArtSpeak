<?
$arUrlRewrite = array(
	array(
		"CONDITION" => "#(.+?)\\.html(.*)#",
		"RULE" => "\$1.php\$2",
		"ID" => "",
		"PATH" => "",
	),
	array(
		"CONDITION" => "#^/#",
		"RULE" => "",
		"ID" => "bitrix:news",
		"PATH" => "/index.php",
	),
);

?>