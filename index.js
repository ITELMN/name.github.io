var text;
var names = new Array(
						'玛丽亚木·塔什',
						'艾珂丹姆·艾合旦木江',
						'艾孜海江·阿依甫',
						'乃皮赛·艾力',
						'阿尔祖古丽·艾孜提艾',
						'努尔比耶古丽·萨迪克',
						'艾丽非热·玉苏甫',
						'穆耶赛尔·艾力木',
						'伊力哈木·阿卜力皮孜',
						'阿地拉·艾米都力',
						'古再力努尔·阿不都瓦',
						'古丽孜米拉·阿不都',
						'努尔比耶·衣沙克',
						'凯迪日耶·吐拉洪',
						'开日木拉·麦麦提尼亚',
						'依再提古丽·阿不都依',
						'哈力木拉提·吾布力',
						'安尼外尔·麦麦提图尔',
						'木艾热木·吐尔送托合',
						'孜拉力·艾买尔',
						'阿迪莱·阿卜杜许库尔',
						'阿尔祖古丽·麦麦提',
						'依布拉音·艾沙',
						'古力先·于苏因',
						'亚森·阿布都热依木',
						'古丽米热·努尔阿卜拉',
						'努尔比那·台外库力',
						'沙吾尔江·阿布都克尔',
						'图尔迪·麦麦提',
						'阿卜力提普·艾则孜',
						'色力木古丽·麦麦提',
						'阿卜力克木·阿卜来提',
						'其曼古·吐送巴克',
						'阿卜杜哈力克·阿卜杜',
						'比乃再尔·凯尤木',
						'阿卜力孜·麦麦提纳斯'
                      );

function reset(){
  // re-enable go button
  setTimeout("$('#go').removeAttr('disabled')",11005);
  var namesbreak = "";
  if(gup('names') != ""){
    var names = gup('names');
    namesbreak = names.replace(/50/g,'\n');
    namesbreak = namesbreak.replace(/%20/g,' ');          
    }
    else   {
      var names = new Array(
            '玛丽亚木',
						'艾珂丹姆',
						'艾孜海江',
						'乃皮赛',
						'阿尔祖古丽·艾',
						'努尔比耶古丽',
						'艾丽非热',
						'穆耶赛尔',
						'伊力哈木',
						'阿地拉',
						'古再力努尔',
						'古丽孜米拉',
						'努尔比耶',
						'凯迪日耶',
						'开日木拉',
						'依再提古丽',
						'哈力木拉提',
						'安尼外尔',
						'木艾热木',
						'孜拉力',
						'阿迪莱',
						'阿尔祖古丽·麦',
						'依布拉音',
						'古力先',
						'亚森',
						'古丽米热',
						'努尔比那',
						'沙吾尔江',
						'图尔迪',
						'阿卜力提普',
						'色力木古丽',
						'阿卜力克木',
						'其曼古',
						'阿卜杜哈力克',
						'比乃再尔',
						'阿卜力孜'
                      );
    for(var i in names){
      nam = names[i];
      if (nam == "" || typeof(nam) == undefined){}else{
         namesbreak = namesbreak + nam + "\n";
      }
    }
  }
  $("#namesbox").val(namesbreak);
}

function gup(para)
{
  para = para.replace(/[\[]/,"\\\[").replace(/[\]]/,"\\\]");
  var regexS = "[\\?&]"+para+"=([^&#]*)";
  var regex = new RegExp( regexS );
  var results = regex.exec( window.location.href );
  if( results == null )
    return "";
  else
    return results[1];
}

function randOrd(){
	return (Math.round(Math.random())-0.01); 
}

function save(){
        $("#varnote").hide();
        $("#popdown").show();
        $("#values").hide();
        $("div").remove("#result1");
        savenames = $("#namesbox").val();
        savenames = savenames.replace(/\n\r?/g, '101');
        $('#headline').fadeOut();
        $('#headline').text('名单已保存和更新').fadeIn();
        $("#names").show();
        $('#namesbox').attr('disabled','disabled');
}

function namelist(){
        $("#varnote").hide();
        $('#namesbox').removeAttr('disabled','disabled');
        $('#headline').text('配置名称列表');
        $("#popdown").show();
        $("#values").hide();
        $("#names").show();
        $('body').css({"overflow-y": "visible"});
}

// does the actual animation
function go(){
  $("#varnote").hide();
  $('body').css({"overflow-y": "hidden"});
  $('#go').attr('disabled','disabled');
  $('#list').attr('disabled','disabled');
  $('#save').attr('disabled','disabled');
  $('#headline').slideUp();
  $('#namesbox').slideDown();

  var count = 1;
  count = 1;
  $("div").remove("#result1");
  names = $("#namesbox").val();
  if(document) { // IE
    names=names.split("\n");
  }
  else { //Mozilla
    names=names.split("\n");
  }
  $("#values").show();
  $(".name").show();
  $("#popdown").hide();
  $("div").remove(".name");
  $("div").remove(".extra");
  $("#playback").html("");
  newtop = names.length * 200 * -1;
  //$('#values').css({top: -300});
  $('#values').css({top: + newtop});	
  names.sort( randOrd );
  var fruits = new Array ( "apple", "pear", "orange", "banana" );
  //console.log(fruits);
  //console.log(names);
  //alert(newtop);
  for(var i in names){
    if (names[i] == "" || typeof(names[i]) == undefined){
      count = count-1;
    } else {
      nam = names[i];
      //console.log(name);
      $('#values').append('<div id=result'+count+' class=name>'+nam+'</div>');
    }
    count = count+1;
  }
  for(var i in names){
    if (names[i] == "" || typeof(names[i]) == undefined){}else{
      nam = names[i];
      $('#values').append('<div class=name>'+nam+'</div>');
    }
    count = count+1;
  }
  for(var i in names){
    if (names[i] == "" || typeof(names[i]) == undefined){}else{
      nam = names[i];
      $('#values').append('<div class=name>'+nam+'</div>');
    }
    count = count+1;
  }
  text = $('#result1').text()
  $('#values').animate({top: '+176'},5000);

  // make it stand out
  setTimeout("standout(text)",5000);
  //setTimeout("$('#playback').hide('slow')",11005);
}

function standout(text){

        $('#result1').removeClass('name');
        $('.name').animate({opacity: .25});
        $('#result1').animate({height: '+=60px'});
        $('#result1').append('<div class="extra"><a class="btn btn-outline btn-primary" href="#" onClick="removevictim();">列表中清除</a></div>');
        $('#go').removeAttr('disabled','disabled');
        $('#list').removeAttr('disabled','disabled');
        $('#save').removeAttr('disabled','disabled');
        $('#headline').text('获胜者！');
        $('#headline').slideDown();
}

function removevictim(){
	// Removing victim from array and UI
	// names = names.filter(function(){ return true});
	// Rewriting namesbox contents
	var nameupdated = "";
	for(var i in names){
		nam = names[i];
                if (nam == "" || nam == text || typeof(nam) == undefined){}else{
			nameupdated = nameupdated + "\n" + nam;
		}
	}
	$('#namesbox').val("");
  $('#namesbox').val(nameupdated);
  $('#result1').html("已清除");
  $('#result1').fadeOut(1000, function(){
    $("div").remove("#result1");
  });
  $("div").remove(".name");
  $("div").remove(".extra");
  $('#headline').text('OK, 谁是下一个？');
}

