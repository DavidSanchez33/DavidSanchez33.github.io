//Creado con Ardora - www.webardora.net
//bajo licencia Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0)
//para otros usos contacte con el autor
var timeAct=360; timeIni=360; timeBon=0;
var successes=0; successesMax=0; attempts=0; attemptsMax=5;
var score=0; scoreMax=10; scoreInc=10; scoreDec=1
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
var timeOnMessage=5; messageOk="Lo lograste"; messageTime="Lo siento"; messageError="Error"; messageErrorG="Error"; messageAttempts=""; isShowMessage=false;
var urlOk=""; urlTime=""; urlError=""; urlAttempts="";
var goURLOk="_blank"; goURLTime="_blank"; goURLAttempts="_blank"; goURLError="_blank"; 
borderOk="#008000"; borderTime="#FF0000";borderError="#FF0000"; borderAttempts="#FF0000";
var wordsGame="Q29sb3JlYXJfTGV5ZW5kYQ=="; wordsStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
function giveZindex(typeElement){var valueZindex=0; capas=document.getElementsByTagName(typeElement);
for (i=0;i<capas.length;i++){if (parseInt($(capas[i]).css("z-index"),10)>valueZindex){valueZindex=parseInt($(capas[i]).css("z-index"),10);}}return valueZindex;}
var joinPar=[];
var c=["#F4171D","#F4171D","#F4171D","#F4171D","#F4171D","#F4171D","#F4171D","#F4171D","#F4171D","#F4171D","#F4171D","#F4171D","#F4171D","#F4171D","#F4171D","#F4171D","#F4171D","#F4171D","#F4171D","#F4171D","#F4171D","#F4171D","#F4171D","#F4171D","#0000B9","#0000B9","#0000B9","#0000B9","#0000B9","#B0B0FF"];
var x=["401","276","245","313","246","226","241","249","348","353","353","367","363","365","362","357","382","412","430","436","293","297","286","277","60","68","39","154","129","420"];
var y=["36","111","105","148","127","144","147","144","64","80","86","80","86","82","81","97","121","109","126","133","55","65","75","58","82","49","35","180","200","89"];
var t=["","","","","","","","","","","","","","","","","","","","","","","","","","","","","",""];
var cM=["#F4171D","#0000B9","#B0B0FF"];
var tM=["Capitalista","Capitalistas","Paises no aliados"];
var indexColor=0;
