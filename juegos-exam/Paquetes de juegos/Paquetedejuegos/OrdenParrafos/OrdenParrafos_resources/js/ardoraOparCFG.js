//Creado con Ardora - www.webardora.net
//bajo licencia Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0)
//para otros usos contacte con el autor
var timeAct=120; timeIni=120; timeBon=0;
var successes=0; successesMax=2; attempts=0; attemptsMax=3;
var score=0; scoreMax=24; scoreInc=12; scoreDec=1
var typeGame=0;
var tiTime=true;
var tiTimeType=0;
var tiButtonTime=true;
var textButtonTime="Comenzar";
var tiSuccesses=true;
var tiAttempts=true;
var tiScore=true;
var startTime;
var colorBack="#FFFDFD"; colorButton="#91962F"; colorText="#000000"; colorSele="#FF8000";
var goURLNext=false; goURLRepeat=false;tiAval=false;
var scoOk=0; scoWrong=0; scoOkDo=0; scoWrongDo=0; scoMessage=""; scoPtos=10;
var fMenssage="Verdana, Geneva, sans-serif";
var fActi="Verdana, Geneva, sans-serif";
var fEnun="Verdana, Geneva, sans-serif";
var timeOnMessage=5; messageOk="Lo lograste"; messageTime="Se te acabo el tiempo"; messageError="Error"; messageErrorG="Error"; messageAttempts=""; isShowMessage=false;
var urlOk=""; urlTime=""; urlError=""; urlAttempts="";
var goURLOk="_blank"; goURLTime="_blank"; goURLAttempts="_blank"; goURLError="_blank"; 
borderOk="#008000"; borderTime="#FF0000";borderError="#FF0000"; borderAttempts="#FF0000";
var wordsGame="T3JkZW5QYXJyYWZvcw=="; wordsStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
function giveZindex(typeElement){var valueZindex=0; capas=document.getElementsByTagName(typeElement);
for (i=0;i<capas.length;i++){if (parseInt($(capas[i]).css("z-index"),10)>valueZindex){valueZindex=parseInt($(capas[i]).css("z-index"),10);}}return valueZindex;}
var actMaxWidth="600"; actMaxHeight="400";profG=0;dirMedia="OrdenParrafos_resources/media/";
var indexG=0;
var words1G=["QXJkb3JhIGVzIHVuIHByb2dyYW1hIGRpc2XDsWFkbyBwb3IgSm9zZSBNYW51ZWwgQm91emFuLA==","QXJkb3JhIGVzIHVuIHNvZnR3YXJlIGRlIGNvZGlnbyBhYmllcnRvLA==","cXVlIHBlcmltdXRlIGNyZWFyIGRpc3RpbnRvcyB0aXBvcyBkZSBhY3RpdmlkYWRlcw==","aW50ZXJhY3RpdmFzIHkgbXVsdGltZWRpYSBwYXJhIGxhIGludmVzdGlnYWNpw7NuLA==","bWF5b3JpdGFyaWFtZW50ZSBlcyB1bmEgYXBsaWNhY2lvbiBwYXJhIGRvY2VudGVzLg=="];
var words2G=["QXJkb3JhIHRpZW5lIGRpc3RpbnRvcyBtb2RvcyBkZSB1c28=","bG9zIGN1YWxlcyBzb24sIG1vZGVsb3MgZGUgcGFnaW5hcyB3ZWI6","MSkgSFRNTDUs","MikgQ1NTMyw=","MykgSmF2YVNjcmlwdCw=","NCkgUGhQLg=="];
var words3G=[];
var c1=[54,40,49,48,49];
var c2=[35,39,9,8,14,7];
var c3=[];
colorText="#000000";colorButton="#0099FF";colorBack="#FFFFFF";colorSele="#DEEDFE";
fMenssage="Verdana, Geneva, sans-serif";fActi="Verdana, Geneva, sans-serif";fEnun="Verdana, Geneva, sans-serif";
