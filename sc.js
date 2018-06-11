/*
International Telephone Input v6.0.8
https://github.com/Bluefieldscom/intl-tel-input.git
*/
!function(a){"function"==typeof define&&define.amd?define(["jquery"],function(b){a(b,window,document)}):a(jQuery,window,document)}(function(a,b,c,d){"use strict";function e(b,c){this.a=b,c&&(a.extend(c, c, {a:c.autoFormat,h:c.autoHideDialCode,d:c.defaultCountry,i:c.ipinfoToken,n:c.nationalMode,t:c.numberType,o:c.onlyCountries,p:c.preferredCountries,v:c.preventInvalidNumbers,u:c.utilsScript})),this.b=a.extend({},h,c),this.c=h,this.ns="."+f+g++,this.d=Boolean(b.setSelectionRange),this.e=Boolean(a(b).attr("placeholder")),this.f=f}var f="intlTelInput",g=1,h={allowExtensions:!1,a:!0,h:!0,autoPlaceholder:!0,d:"",geoIpLookup:null,n:!0,t:"MOBILE",o:[],p:["us","gb"],u:""},i={b:38,c:40,d:13,e:27,f:43,A:65,Z:90,g:48,h:57,i:32,Bi:8,TAB:9,k:46,l:17,m:91,n:224},j=!1;a(b).load(function(){j=!0}),e.prototype={_init:function(){return this.b.n&&(this.b.h=!1),navigator.userAgent.match(/IEMobile/i)&&(this.b.a=!1),this.isMobile=/Android.+Mobile|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),this.autoCountryDeferred=new a.Deferred,this.utilsScriptDeferred=new a.Deferred,this._b(),this._f(),this._h(),this._i(),this._initRequests(),[this.autoCountryDeferred,this.utilsScriptDeferred]},_b:function(){this._d(),this._e()},_c:function(a,b,c){b in this.m||(this.m[b]=[]);var d=c||0;this.m[b][d]=a},_d:function(){var b;if(this.b.o.length){for(b=0;b<this.b.o.length;b++)this.b.o[b]=this.b.o[b].toLowerCase();for(this.l=[],b=0;b<k.length;b++)-1!=a.inArray(k[b].iso2,this.b.o)&&this.l.push(k[b])}else this.l=k;for(this.m={},b=0;b<this.l.length;b++){var c=this.l[b];if(this._c(c.iso2,c.dialCode,c.priority),c.areaCodes)for(var d=0;d<c.areaCodes.length;d++)this._c(c.iso2,c.dialCode+c.areaCodes[d])}},_e:function(){this.n=[];for(var a=0;a<this.b.p.length;a++){var b=this.b.p[a].toLowerCase(),c=this._y(b,!1,!0);c&&this.n.push(c)}},_f:function(){this.g=a(this.a),this.g.attr("autocomplete","off"),this.g.wrap(a("<div>",{"class":"intl-tel-input"})),this.flagsContainer=a("<div>",{"class":"flag-dropdown"}).insertBefore(this.g);var b=a("<div>",{tabindex:"0","class":"selected-flag"}).appendTo(this.flagsContainer);this.h=a("<div>",{"class":"iti-flag"}).appendTo(b),a("<div>",{"class":"arrow"}).appendTo(b),this.isMobile?this.i=a("<select>",{"class":"iti-mobile-select"}).appendTo(this.flagsContainer):(this.i=a("<ul>",{"class":"country-list v-hide"}).appendTo(this.flagsContainer),this.n.length&&!this.isMobile&&(this._g(this.n,"preferred"),a("<li>",{"class":"divider"}).appendTo(this.i))),this._g(this.l,""),this.isMobile||(this.j=this.i.outerHeight(),this.i.removeClass("v-hide").addClass("hide"),this.k=this.i.children(".country"))},_g:function(a,b){for(var c="",d=0;d<a.length;d++){var e=a[d];this.isMobile?(c+="<option data-dial-code='"+e.dialCode+"' value='"+e.iso2+"'>",c+=e.name+" +"+e.dialCode,c+="</option>"):(c+="<li class='country "+b+"' data-dial-code='"+e.dialCode+"' data-country-code='"+e.iso2+"'>",c+="<div class='flag'><div class='iti-flag "+e.iso2+"'></div></div>",c+="<span class='country-name'>"+e.name+"</span>",c+="<span class='dial-code'>+"+e.dialCode+"</span>",c+="</li>")}this.i.append(c)},_h:function(){var a=this.g.val();this._af(a)?this._v(a,!0):"auto"!=this.b.d&&(this.b.d=this.b.d?this._y(this.b.d.toLowerCase(),!1,!1):this.n.length?this.n[0]:this.l[0],this._z(this.b.d.iso2),a||this._ae(this.b.d.dialCode,!1)),a&&this._u(a)},_i:function(){var b=this;if(this._j(),(this.b.h||this.b.a)&&this._l(),this.isMobile)this.i.on("change"+this.ns,function(){b._ab(a(this).find("option:selected"))});else{var c=this.g.closest("label");c.length&&c.on("click"+this.ns,function(a){b.i.hasClass("hide")?b.g.focus():a.preventDefault()});var d=this.h.parent();d.on("click"+this.ns,function(){!b.i.hasClass("hide")||b.g.prop("disabled")||b.g.prop("readonly")||b._n()})}this.flagsContainer.on("keydown"+b.ns,function(a){var c=b.i.hasClass("hide");!c||a.which!=i.b&&a.which!=i.c&&a.which!=i.i&&a.which!=i.d||(a.preventDefault(),a.stopPropagation(),b._n()),a.which==i.TAB&&b._ac()})},_initRequests:function(){var c=this;this.b.u?j?this.loadUtils():a(b).load(function(){c.loadUtils()}):this.utilsScriptDeferred.resolve(),"auto"==this.b.d?this._loadAutoCountry():this.autoCountryDeferred.resolve()},_loadAutoCountry:function(){var b=a.cookie?a.cookie("itiAutoCountry"):"";b&&(a.fn[f].autoCountry=b),a.fn[f].autoCountry?this.autoCountryLoaded():a.fn[f].startedLoadingAutoCountry||(a.fn[f].startedLoadingAutoCountry=!0,"function"==typeof this.b.geoIpLookup&&this.b.geoIpLookup(function(b){a.fn[f].autoCountry=b.toLowerCase(),a.cookie&&a.cookie("itiAutoCountry",a.fn[f].autoCountry,{path:"/"}),setTimeout(function(){a(".intl-tel-input input").intlTelInput("autoCountryLoaded")})}))},_j:function(){var a=this;this.b.a&&this.g.on("keypress"+this.ns,function(c){if(c.which>=i.i&&!c.ctrlKey&&!c.metaKey&&b.intlTelInputUtils&&!a.g.prop("readonly")){c.preventDefault();var d=c.which>=i.g&&c.which<=i.h||c.which==i.f,e=a.g[0],f=a.d&&e.selectionStart==e.selectionEnd,g=a.g.attr("maxlength"),h=a.g.val(),j=g?h.length<g:!0;if(j&&(d||f)){var k=d?String.fromCharCode(c.which):null;a._k(k,!0,d),h!=a.g.val()&&a.g.trigger("input")}d||a._handleInvalidKey()}}),this.g.on("cut"+this.ns+" paste"+this.ns,function(){setTimeout(function(){if(a.b.a&&b.intlTelInputUtils){var c=a.d&&a.g[0].selectionStart==a.g.val().length;a._k(null,c),a._ensurePlus()}else a._v(a.g.val())})}),this.g.on("keyup"+this.ns,function(c){if(c.which==i.d||a.g.prop("readonly"));else if(a.b.a&&b.intlTelInputUtils){var d=a.d&&a.g[0].selectionStart==a.g.val().length;a.g.val()?(c.which==i.k&&!d||c.which==i.Bi)&&a._k():a._v(""),a._ensurePlus()}else a._v(a.g.val())})},_ensurePlus:function(){if(!this.b.n){var a=this.g.val(),b=this.g[0];if("+"!=a.charAt(0)){var c=this.d?b.selectionStart+1:0;this.g.val("+"+a),this.d&&b.setSelectionRange(c,c)}}},_handleInvalidKey:function(){var a=this;this.g.trigger("invalidkey").addClass("iti-invalid-key"),setTimeout(function(){a.g.removeClass("iti-invalid-key")},100)},_k:function(a,b,c){var d,e=this.g.val(),f=(this._getClean(e),this.g[0]),g=0;if(this.d?(g=this._getDigitsOnRight(e,f.selectionEnd),a?e=e.substr(0,f.selectionStart)+a+e.substring(f.selectionEnd,e.length):d=e.substr(f.selectionStart-2,2)):a&&(e+=a),this.setNumber(e,null,b,!0,c),this.d){var h;e=this.g.val(),g?(h=this._getCursorFromDigitsOnRight(e,g),a||(h=this._getCursorFromLeftChar(e,h,d))):h=e.length,f.setSelectionRange(h,h)}},_getCursorFromLeftChar:function(b,c,d){for(var e=c;e>0;e--){var f=b.charAt(e-1);if(a.isNumeric(f)||b.substr(e-2,2)==d)return e}return 0},_getCursorFromDigitsOnRight:function(b,c){for(var d=b.length-1;d>=0;d--)if(a.isNumeric(b.charAt(d))&&0===--c)return d;return 0},_getDigitsOnRight:function(b,c){for(var d=0,e=c;e<b.length;e++)a.isNumeric(b.charAt(e))&&d++;return d},_l:function(){var a=this;this.b.h&&this.g.on("mousedown"+this.ns,function(b){a.g.is(":focus")||a.g.val()||(b.preventDefault(),a.g.focus())}),this.g.on("focus"+this.ns,function(){var c=a.g.val();a.g.data("focusVal",c),a.b.h&&!c&&!a.g.prop("readonly")&&a.o.dialCode&&(a._u("+"+a.o.dialCode,null,!0),a.g.one("keypress.plus"+a.ns,function(c){if(c.which==i.f){var d=a.b.a&&b.intlTelInputUtils?"+":"";a.g.val(d)}}),setTimeout(function(){var b=a.g[0];if(a.d){var c=a.g.val().length;b.setSelectionRange(c,c)}}))}),this.g.on("blur"+this.ns,function(){if(a.b.h){var c=a.g.val(),d="+"==c.charAt(0);if(d){var e=a._m(c);e&&a.o.dialCode!=e||a.g.val("")}a.g.off("keypress.plus"+a.ns)}a.b.a&&b.intlTelInputUtils&&a.g.val()!=a.g.data("focusVal")&&a.g.trigger("change")})},_m:function(a){return a.replace(/\D/g,"")},_getClean:function(a){var b="+"==a.charAt(0)?"+":"";return b+this._m(a)},_n:function(){this._o();var a=this.i.children(".active");a.length&&this._x(a),this.i.removeClass("hide"),a.length&&this._ad(a),this._p(),this.h.children(".arrow").addClass("up")},_o:function(){var c=this.g.offset().top,d=a(b).scrollTop(),e=c+this.g.outerHeight()+this.j<d+a(b).height(),f=c-this.j>d,g=!e&&f?"-"+(this.j-1)+"px":"";this.i.css("top",g)},_p:function(){var b=this;this.i.on("mouseover"+this.ns,".country",function(){b._x(a(this))}),this.i.on("click"+this.ns,".country",function(){b._ab(a(this))});var d=!0;a("html").on("click"+this.ns,function(){d||b._ac(),d=!1});var e="",f=null;a(c).on("keydown"+this.ns,function(a){a.preventDefault(),a.which==i.b||a.which==i.c?b._q(a.which):a.which==i.d?b._r():a.which==i.e?b._ac():(a.which>=i.A&&a.which<=i.Z||a.which==i.i)&&(f&&clearTimeout(f),e+=String.fromCharCode(a.which),b._s(e),f=setTimeout(function(){e=""},1e3))})},_q:function(a){var b=this.i.children(".highlight").first(),c=a==i.b?b.prev():b.next();c.length&&(c.hasClass("divider")&&(c=a==i.b?c.prev():c.next()),this._x(c),this._ad(c))},_r:function(){var a=this.i.children(".highlight").first();a.length&&this._ab(a)},_s:function(a){for(var b=0;b<this.l.length;b++)if(this._t(this.l[b].name,a)){var c=this.i.children("[data-country-code="+this.l[b].iso2+"]").not(".preferred");this._x(c),this._ad(c,!0);break}},_t:function(a,b){return a.substr(0,b.length).toUpperCase()==b},_u:function(a,c,d,e,f){var g;if(this.b.a&&b.intlTelInputUtils&&this.o){g="number"==typeof c&&intlTelInputUtils.isValidNumber(a,this.o.iso2)?intlTelInputUtils.formatNumberByType(a,this.o.iso2,c):!e&&this.b.n&&"+"==a.charAt(0)&&intlTelInputUtils.isValidNumber(a,this.o.iso2)?intlTelInputUtils.formatNumberByType(a,this.o.iso2,intlTelInputUtils.numberFormat.NATIONAL):intlTelInputUtils.formatNumber(a,this.o.iso2,d,this.b.allowExtensions,f);var h=this.g.attr("maxlength");h&&g.length>h&&(g=g.substr(0,h))}else g=a;this.g.val(g)},_v:function(b,c){b&&this.b.n&&this.o&&"1"==this.o.dialCode&&"+"!=b.charAt(0)&&("1"!=b.charAt(0)&&(b="1"+b),b="+"+b);var d=this._af(b),e=null;if(d){var f=this.m[this._m(d)],g=this.o&&-1!=a.inArray(this.o.iso2,f);if(!g||this._w(b,d))for(var h=0;h<f.length;h++)if(f[h]){e=f[h];break}}else"+"==b.charAt(0)&&this._m(b).length?e="":b&&"+"!=b||(e=this.b.d.iso2);null!==e&&this._z(e,c)},_w:function(a,b){return"+1"==b&&this._m(a).length>=4},_x:function(a){this.k.removeClass("highlight"),a.addClass("highlight")},_y:function(a,b,c){for(var d=b?k:this.l,e=0;e<d.length;e++)if(d[e].iso2==a)return d[e];if(c)return null;throw new Error("No country data for '"+a+"'")},_z:function(a,b){this.o=a?this._y(a,!1,!1):{},b&&this.o.iso2&&(this.b.d={iso2:this.o.iso2}),this.h.attr("class","iti-flag "+a);var c=a?this.o.name+": +"+this.o.dialCode:"Unknown";this.h.parent().attr("title",c),this._aa(),this.isMobile?this.i.val(a):(this.k.removeClass("active"),a&&this.k.find(".iti-flag."+a).first().closest(".country").addClass("active"))},_aa:function(){if(b.intlTelInputUtils&&!this.e&&this.b.autoPlaceholder&&this.o){var a=this.o.iso2,c=intlTelInputUtils.numberType[this.b.t||"FIXED_LINE"],d=a?intlTelInputUtils.getExampleNumber(a,this.b.n,c):"";"function"==typeof this.b.customPlaceholder&&(d=this.b.customPlaceholder(d,this.o)),this.g.attr("placeholder",d)}},_ab:function(a){var b=this.isMobile?"value":"data-country-code";if(this._z(a.attr(b),!0),this.isMobile||this._ac(),this._ae(a.attr("data-dial-code"),!0),this.g.trigger("change"),this.g.focus(),this.d){var c=this.g.val().length;this.g[0].setSelectionRange(c,c)}},_ac:function(){this.i.addClass("hide"),this.h.children(".arrow").removeClass("up"),a(c).off(this.ns),a("html").off(this.ns),this.i.off(this.ns)},_ad:function(a,b){var c=this.i,d=c.height(),e=c.offset().top,f=e+d,g=a.outerHeight(),h=a.offset().top,i=h+g,j=h-e+c.scrollTop(),k=d/2-g/2;if(e>h)b&&(j-=k),c.scrollTop(j);else if(i>f){b&&(j+=k);var l=d-g;c.scrollTop(j-l)}},_ae:function(b,c){var d,e=this.g.val();if(b="+"+b,this.b.n&&"+"!=e.charAt(0))d=e;else if(e){var f=this._af(e);if(f.length>1)d=e.replace(f,b);else{var g="+"!=e.charAt(0)?a.trim(e):"";d=b+g}}else d=!this.b.h||c?b:"";this._u(d,null,c)},_af:function(b){var c="";if("+"==b.charAt(0))for(var d="",e=0;e<b.length;e++){var f=b.charAt(e);if(a.isNumeric(f)&&(d+=f,this.m[d]&&(c=b.substr(0,e+1)),4==d.length))break}return c},autoCountryLoaded:function(){"auto"==this.b.d&&(this.b.d=a.fn[f].autoCountry,this._h(),this.autoCountryDeferred.resolve())},destroy:function(){this.isMobile||this._ac(),this.g.off(this.ns),this.isMobile?this.i.off(this.ns):(this.h.parent().off(this.ns),this.g.closest("label").off(this.ns));var a=this.g.parent();a.before(this.g).remove()},getExtension:function(){return this.g.val().split(" ext. ")[1]||""},getNumber:function(a){return b.intlTelInputUtils?intlTelInputUtils.formatNumberByType(this.g.val(),this.o.iso2,a):""},getNumberType:function(){return b.intlTelInputUtils?intlTelInputUtils.getNumberType(this.g.val(),this.o.iso2):-99},getSelectedCountryData:function(){return this.o||{}},getValidationError:function(){return b.intlTelInputUtils?intlTelInputUtils.getValidationError(this.g.val(),this.o.iso2):-99},isValidNumber:function(){var c=a.trim(this.g.val()),d=this.b.n?this.o.iso2:"";return b.intlTelInputUtils?intlTelInputUtils.isValidNumber(c,d):!1},loadUtils:function(b){var c=this,d=b||this.b.u;!a.fn[f].loadedUtilsScript&&d?(a.fn[f].loadedUtilsScript=!0,a.ajax({url:d,success:function(){a(".intl-tel-input input").intlTelInput("utilsLoaded")},complete:function(){c.utilsScriptDeferred.resolve()},dataType:"script",cache:!0})):this.utilsScriptDeferred.resolve()},selectCountry:function(a){a=a.toLowerCase(),this.h.hasClass(a)||(this._z(a,!0),this._ae(this.o.dialCode,!1))},setNumber:function(a,b,c,d,e){this.b.n||"+"==a.charAt(0)||(a="+"+a),this._v(a),this._u(a,b,c,d,e)},utilsLoaded:function(){this.b.a&&this.g.val()&&this._u(this.g.val()),this._aa()}},a.fn[f]=function(b){var c=arguments;if(b===d||"object"==typeof b){var g=[];return this.each(function(){if(!a.data(this,"plugin_"+f)){var c=new e(this,b),d=c._init();g.push(d[0]),g.push(d[1]),a.data(this,"plugin_"+f,c)}}),a.when.apply(null,g)}if("string"==typeof b&&"_"!==b[0]){var h;return this.each(function(){var d=a.data(this,"plugin_"+f);d instanceof e&&"function"==typeof d[b]&&(h=d[b].apply(d,Array.prototype.slice.call(c,1))),"destroy"===b&&a.data(this,"plugin_"+f,null)}),h!==d?h:this}},a.fn[f].getCountryData=function(){return k},a.fn[f].version="6.0.8";for(var k=[["Afghanistan (‫افغانستان‬‎)","af","93"],["Albania (Shqipëri)","al","355"],["Algeria (‫الجزائر‬‎)","dz","213"],["American Samoa","as","1684"],["Andorra","ad","376"],["Angola","ao","244"],["Anguilla","ai","1264"],["Antigua and Barbuda","ag","1268"],["Argentina","ar","54"],["Armenia (Հայաստան)","am","374"],["Aruba","aw","297"],["Australia","au","61"],["Austria (Österreich)","at","43"],["Azerbaijan (Azərbaycan)","az","994"],["Bahamas","bs","1242"],["Bahrain (‫البحرين‬‎)","bh","973"],["Bangladesh (বাংলাদেশ)","bd","880"],["Barbados","bb","1246"],["Belarus (Беларусь)","by","375"],["Belgium (België)","be","32"],["Belize","bz","501"],["Benin (Bénin)","bj","229"],["Bermuda","bm","1441"],["Bhutan (འབྲུག)","bt","975"],["Bolivia","bo","591"],["Bosnia and Herzegovina (Босна и Херцеговина)","ba","387"],["Botswana","bw","267"],["Brazil (Brasil)","br","55"],["British Indian Ocean Territory","io","246"],["British Virgin Islands","vg","1284"],["Brunei","bn","673"],["Bulgaria (България)","bg","359"],["Burkina Faso","bf","226"],["Burundi (Uburundi)","bi","257"],["Cambodia (កម្ពុជា)","kh","855"],["Cameroon (Cameroun)","cm","237"],["Canada","ca","1",1,["204","226","236","249","250","289","306","343","365","387","403","416","418","431","437","438","450","506","514","519","548","579","581","587","604","613","639","647","672","705","709","742","778","780","782","807","819","825","867","873","902","905"]],["Cape Verde (Kabu Verdi)","cv","238"],["Caribbean Netherlands","bq","599",1],["Cayman Islands","ky","1345"],["Central African Republic (République centrafricaine)","cf","236"],["Chad (Tchad)","td","235"],["Chile","cl","56"],["China (中国)","cn","86"],["Colombia","co","57"],["Comoros (‫جزر القمر‬‎)","km","269"],["Congo (DRC) (Jamhuri ya Kidemokrasia ya Kongo)","cd","243"],["Congo (Republic) (Congo-Brazzaville)","cg","242"],["Cook Islands","ck","682"],["Costa Rica","cr","506"],["Côte d’Ivoire","ci","225"],["Croatia (Hrvatska)","hr","385"],["Cuba","cu","53"],["Curaçao","cw","599",0],["Cyprus (Κύπρος)","cy","357"],["Czech Republic (Česká republika)","cz","420"],["Denmark (Danmark)","dk","45"],["Djibouti","dj","253"],["Dominica","dm","1767"],["Dominican Republic (República Dominicana)","do","1",2,["809","829","849"]],["Ecuador","ec","593"],["Egypt (‫مصر‬‎)","eg","20"],["El Salvador","sv","503"],["Equatorial Guinea (Guinea Ecuatorial)","gq","240"],["Eritrea","er","291"],["Estonia (Eesti)","ee","372"],["Ethiopia","et","251"],["Falkland Islands (Islas Malvinas)","fk","500"],["Faroe Islands (Føroyar)","fo","298"],["Fiji","fj","679"],["Finland (Suomi)","fi","358"],["France","fr","33"],["French Guiana (Guyane française)","gf","594"],["French Polynesia (Polynésie française)","pf","689"],["Gabon","ga","241"],["Gambia","gm","220"],["Georgia (საქართველო)","ge","995"],["Germany (Deutschland)","de","49"],["Ghana (Gaana)","gh","233"],["Gibraltar","gi","350"],["Greece (Ελλάδα)","gr","30"],["Greenland (Kalaallit Nunaat)","gl","299"],["Grenada","gd","1473"],["Guadeloupe","gp","590",0],["Guam","gu","1671"],["Guatemala","gt","502"],["Guinea (Guinée)","gn","224"],["Guinea-Bissau (Guiné Bissau)","gw","245"],["Guyana","gy","592"],["Haiti","ht","509"],["Honduras","hn","504"],["Hong Kong (香港)","hk","852"],["Hungary (Magyarország)","hu","36"],["Iceland (Ísland)","is","354"],["India (भारत)","in","91"],["Indonesia","id","62"],["Iran (‫ایران‬‎)","ir","98"],["Iraq (‫العراق‬‎)","iq","964"],["Ireland","ie","353"],["Israel (‫ישראל‬‎)","il","972"],["Italy (Italia)","it","39",0],["Jamaica","jm","1876"],["Japan (日本)","jp","81"],["Jordan (‫الأردن‬‎)","jo","962"],["Kazakhstan (Казахстан)","kz","7",1],["Kenya","ke","254"],["Kiribati","ki","686"],["Kuwait (‫الكويت‬‎)","kw","965"],["Kyrgyzstan (Кыргызстан)","kg","996"],["Laos (ລາວ)","la","856"],["Latvia (Latvija)","lv","371"],["Lebanon (‫لبنان‬‎)","lb","961"],["Lesotho","ls","266"],["Liberia","lr","231"],["Libya (‫ليبيا‬‎)","ly","218"],["Liechtenstein","li","423"],["Lithuania (Lietuva)","lt","370"],["Luxembourg","lu","352"],["Macau (澳門)","mo","853"],["Macedonia (FYROM) (Македонија)","mk","389"],["Madagascar (Madagasikara)","mg","261"],["Malawi","mw","265"],["Malaysia","my","60"],["Maldives","mv","960"],["Mali","ml","223"],["Malta","mt","356"],["Marshall Islands","mh","692"],["Martinique","mq","596"],["Mauritania (‫موريتانيا‬‎)","mr","222"],["Mauritius (Moris)","mu","230"],["Mexico (México)","mx","52"],["Micronesia","fm","691"],["Moldova (Republica Moldova)","md","373"],["Monaco","mc","377"],["Mongolia (Монгол)","mn","976"],["Montenegro (Crna Gora)","me","382"],["Montserrat","ms","1664"],["Morocco (‫المغرب‬‎)","ma","212"],["Mozambique (Moçambique)","mz","258"],["Myanmar (Burma) (မြန်မာ)","mm","95"],["Namibia (Namibië)","na","264"],["Nauru","nr","674"],["Nepal (नेपाल)","np","977"],["Netherlands (Nederland)","nl","31"],["New Caledonia (Nouvelle-Calédonie)","nc","687"],["New Zealand","nz","64"],["Nicaragua","ni","505"],["Niger (Nijar)","ne","227"],["Nigeria","ng","234"],["Niue","nu","683"],["Norfolk Island","nf","672"],["North Korea (조선 민주주의 인민 공화국)","kp","850"],["Northern Mariana Islands","mp","1670"],["Norway (Norge)","no","47"],["Oman (‫عُمان‬‎)","om","968"],["Pakistan (‫پاکستان‬‎)","pk","92"],["Palau","pw","680"],["Palestine (‫فلسطين‬‎)","ps","970"],["Panama (Panamá)","pa","507"],["Papua New Guinea","pg","675"],["Paraguay","py","595"],["Peru (Perú)","pe","51"],["Philippines","ph","63"],["Poland (Polska)","pl","48"],["Portugal","pt","351"],["Puerto Rico","pr","1",3,["787","939"]],["Qatar (‫قطر‬‎)","qa","974"],["Réunion (La Réunion)","re","262"],["Romania (România)","ro","40"],["Russia (Россия)","ru","7",0],["Rwanda","rw","250"],["Saint Barthélemy (Saint-Barthélemy)","bl","590",1],["Saint Helena","sh","290"],["Saint Kitts and Nevis","kn","1869"],["Saint Lucia","lc","1758"],["Saint Martin (Saint-Martin (partie française))","mf","590",2],["Saint Pierre and Miquelon (Saint-Pierre-et-Miquelon)","pm","508"],["Saint Vincent and the Grenadines","vc","1784"],["Samoa","ws","685"],["San Marino","sm","378"],["São Tomé and Príncipe (São Tomé e Príncipe)","st","239"],["Saudi Arabia (‫المملكة العربية السعودية‬‎)","sa","966"],["Senegal (Sénégal)","sn","221"],["Serbia (Србија)","rs","381"],["Seychelles","sc","248"],["Sierra Leone","sl","232"],["Singapore","sg","65"],["Sint Maarten","sx","1721"],["Slovakia (Slovensko)","sk","421"],["Slovenia (Slovenija)","si","386"],["Solomon Islands","sb","677"],["Somalia (Soomaaliya)","so","252"],["South Africa","za","27"],["South Korea (대한민국)","kr","82"],["South Sudan (‫جنوب السودان‬‎)","ss","211"],["Spain (España)","es","34"],["Sri Lanka (ශ්‍රී ලංකාව)","lk","94"],["Sudan (‫السودان‬‎)","sd","249"],["Suriname","sr","597"],["Swaziland","sz","268"],["Sweden (Sverige)","se","46"],["Switzerland (Schweiz)","ch","41"],["Syria (‫سوريا‬‎)","sy","963"],["Taiwan (台灣)","tw","886"],["Tajikistan","tj","992"],["Tanzania","tz","255"],["Thailand (ไทย)","th","66"],["Timor-Leste","tl","670"],["Togo","tg","228"],["Tokelau","tk","690"],["Tonga","to","676"],["Trinidad and Tobago","tt","1868"],["Tunisia (‫تونس‬‎)","tn","216"],["Turkey (Türkiye)","tr","90"],["Turkmenistan","tm","993"],["Turks and Caicos Islands","tc","1649"],["Tuvalu","tv","688"],["U.S. Virgin Islands","vi","1340"],["Uganda","ug","256"],["Ukraine (Україна)","ua","380"],["United Arab Emirates (‫الإمارات العربية المتحدة‬‎)","ae","971"],["United Kingdom","gb","44"],["United States","us","1",0],["Uruguay","uy","598"],["Uzbekistan (Oʻzbekiston)","uz","998"],["Vanuatu","vu","678"],["Vatican City (Città del Vaticano)","va","39",1],["Venezuela","ve","58"],["Vietnam (Việt Nam)","vn","84"],["Wallis and Futuna","wf","681"],["Yemen (‫اليمن‬‎)","ye","967"],["Zambia","zm","260"],["Zimbabwe","zw","263"]],l=0;l<k.length;l++){var m=k[l];k[l]={name:m[0],iso2:m[1],dialCode:m[2],priority:m[3]||0,areaCodes:m[4]||null}}});