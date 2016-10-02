!function(){"use strict";var t=window.smi2=window.smi2||{};t.app={name:"SMI2"},angular.module(t.app.name,["ngAnimate","ui.router","LocalStorageModule","lumx","ui.ace"])}(),angular.module("SMI2").run(["$templateCache",function(t){t.put("app/base/404.html",'<div class="not-found-view text-center"><h2>404 не найдено</h2><lx-button lx-color="blue" ui-sref="dashboard"><i class="mdi mdi-arrow-left"></i> Назад</lx-button></div>'),t.put("app/base/base.html",'<div class="wrapper"><header ui-view="header" class="header-view"></header><div class="content"><div ui-view="sidebar" ng-class="{\'show\': showSidebar}" class="sidebar-view"></div><div class="main-content"><div ui-view="breadcrumb" class="breadcrumb-view"></div><div ui-view="main" class="p"></div></div></div></div>'),t.put("app/base/breadcrumbs.html",'<ol class="breadcrumb p+"><li class="home-item"><a ui-sref="dashboard" lx-ripple="lx-ripple" class="btn btn--xs btn--white btn--fab"><i class="mdi mdi-home"></i></a></li><li ng-repeat="nav in $root.breadcrumbs" class="breadcrumb-item"><i class="icon tc-white icon--xs mdi mdi-chevron-right"></i> <a ng-if="!$last" ui-sref="{{nav.link}}(nav.params)" class="btn btn--xs btn--white btn--raised">{{nav.text}}</a> <span ng-if="$last" class="tc-white">{{nav.text}}</span></li></ol>'),t.put("app/base/header.html",'<div class="header"><div class="card bgc-blue-500 tc-white"><div class="toolbar"><div class="toolbar__left mr"><button lx-ripple="lx-ripple" ng-if="hasSidebar" ng-click="vm.switchSidebar()" class="btn btn--l btn--white btn--icon hide-gt-sm"><i class="mdi mdi-menu"></i></button> <img src="assets/images/logo.png" class="logo"></div><div class="toolbar__label fs-title header-title"><a ui-sref="dashboard" class="tc-white">Clickhouse</a></div><div class="toolbar__right"><a ui-sref="sql" href="" lx-tooltip="SQL" lx-tooltip-position="bottom" lx-ripple="white" class="btn btn--l btn--white btn--icon"><i class="mdi mdi-console"></i></a> <a ng-click="logout()" href="" lx-tooltip="Выход" lx-tooltip-position="bottom" lx-ripple="white" class="btn btn--l btn--white btn--icon"><i class="mdi mdi-lock"></i></a> <span class="header-user-name hide-sm p+">{{user}}</span></div></div></div></div>'),t.put("app/base/sidebar.html",'<div class="sidebar"><lx-dropdown class="p"><lx-dropdown-toggle class="pt"><lx-button lx-color="blue" style="min-width: 180px"><span class="float-left"><i class="icon icon--s icon--flat mdi mdi-database"></i> {{vars.selectedDatabase.name}}</span></lx-button></lx-dropdown-toggle><lx-dropdown-menu><ul><li ng-repeat="database in vars.databases" ng-click="changeDatabase(database)"><a class="dropdown-link">{{database.name}}</a></li></ul></lx-dropdown-menu></lx-dropdown><ul class="sidebar-menu p"><li class="menu-item p" ng-repeat="table in vars.tables"><a class="tc-black link" href="" ui-sref="table({dbName: vars.selectedDatabase.name, tableName: table.name})"><i class="icon icon--s icon--grey icon--flat mdi mdi-table"></i><div style="line-height: 30px;display: inline-block;width: 132px;overflow: hidden;text-overflow: ellipsis;" class="ng-binding" lx-tooltip="{{table.name}}" lx-tooltip-position="right">{{table.name}}</div></a></li></ul></div>'),t.put("app/dashboard/dashboard.html",'<div class="pl pr" flex-container="row" flex-wrap=""><div class="card" flex-item="6"><ul class="list"><li class="list-row list-row--has-separator" ng-repeat="database in vars.databases"><div class="list-row__primary"><lx-icon lx-id="database" lx-size="s" lx-color="grey" lx-type="flat"></lx-icon></div><div class="list-row__content"><a href="" ui-sref="database({dbName: database.name})"><span class="tc-black">{{database.name}}</span></a></div></li></ul></div></div>'),t.put("app/database/database.html",'<ui-view><div class="pl pr" flex-container="row" flex-wrap=""><div class="card" flex-item="6"><ul class="list"><li class="list-row list-row--has-separator" ng-repeat="table in vars.tables"><div class="list-row__primary"><lx-icon lx-id="table" lx-size="s" lx-color="grey" lx-type="flat"></lx-icon></div><div class="list-row__content"><a href="" ui-sref="table({tableName: table.name})"><span class="tc-black">{{table.name}}</span></a></div></li></ul></div></div></ui-view>'),t.put("app/login/login.html",'<div class="wrapper"><div class="header"><div class="card bgc-blue-500 tc-white"><div class="toolbar"><div class="toolbar__left mr"><img src="assets/images/logo.png" class="logo"></div><div class="toolbar__label fs-title header-title"><a ui-sref="dashboard" class="tc-white">Clickhouse</a></div></div></div></div><div class="content" style="margin-top: 2px"><div class="sidebar-view"><div class="sidebar"><ul class="sidebar-menu p"><li class="menu-item p" ng-repeat="base in vars.bases"><a class="tc-black link" href="" ng-click="vars.db = base"><div class="fs-body" style="display: inline-block; line-height: 30px; width: 180px; overflow: hidden; text-overflow: ellipsis">{{base.name}}</div><span class="tc-grey-400 fs-body-2">{{base.host}}</span></a></li></ul></div></div><div class="content"><div class="main-content"><div class="main-view"><div class="login-view"><form name="vars.loginForm" class="card"><div class="card__header p+">Подключение</div><div ng-if="vars.error" class="login-message error fs-body-1"><p class="tc-white">Неверные данные</p></div><div class="card__body p++"><lx-text-field label="название" fixed-label="true" icon="border-color"><input type="text" ng-model="vars.db.name" name="name" required="required"></lx-text-field><lx-text-field label="хост:порт" fixed-label="true" icon="server"><input type="text" ng-model="vars.db.host" name="host" required="required"></lx-text-field><lx-text-field label="логин" fixed-label="true" icon="account"><input type="text" ng-model="vars.db.login" name="login"></lx-text-field><lx-text-field label="пароль" fixed-label="true" icon="key"><input type="password" ng-model="vars.db.password" ng-click="onKeypress($event)"></lx-text-field></div><div class="card__actions text-center p+"><button ng-disabled="vars.loginForm.$invalid" ng-class="{\'btn--is-disabled\': vars.loginForm.$invalid}" lx-ripple="lx-ripple" class="btn btn--l btn--blue btn--raised btn-login" ng-click="login()">Войти</button> <button ng-if="vars.db.id" lx-ripple="lx-ripple" class="btn btn--l btn--red btn--raised btn-login" ng-click="remove()">Удалить</button></div></form></div></div></div></div></div><div class="footer"><div class="toolbar"><p class="copyright tc-white text-center"><a href="https://github.com/smi2" target="_blank" class="tc-white">СМИ2</a> &copy; {{::vars.year}}, все права защищены</p><a href="https://github.com/smi2/clickhouse-frontend" target="_blank"><i class="mdi mdi-github-circle tc-white fs-display-1"></i></a></div></div></div>'),t.put("app/sql/sql.html",'<div class="card mb+"><div class="pl+ pt+ pb+ pr"><div class="float-right" style="margin-top: -5px"><lx-text-field lx-label="Шрифт" lx-fixed-label="true" lx-icon="format-size" style="width: 60px; float: left; margin-top: -5px; margin-right: 15px;"><input type="text" ng-model="vars.fontSize"></lx-text-field><lx-dropdown lx-position="right" lx-over-toggle="true"><lx-dropdown-toggle><lx-button lx-color="black" lx-type="flat">{{vars.theme}}</lx-button></lx-dropdown-toggle><lx-dropdown-menu><ul><li ng-repeat="theme in vars.themes"><a class="dropdown-link" ng-click="setTheme(theme)">{{theme}}</a></li></ul></lx-dropdown-menu></lx-dropdown><lx-dropdown lx-position="right" lx-over-toggle="true"><lx-dropdown-toggle><lx-button lx-color="black" lx-type="flat">{{vars.format.name}}</lx-button></lx-dropdown-toggle><lx-dropdown-menu><ul><li ng-repeat="format in vars.formats"><a class="dropdown-link" ng-click="vars.format = format">{{format.name}}</a></li></ul></lx-dropdown-menu></lx-dropdown><lx-dropdown lx-position="right" lx-over-toggle="true" lx-width="250"><lx-dropdown-toggle><lx-button lx-color="black" lx-type="icon"><i class="mdi mdi-history"></i></lx-button></lx-dropdown-toggle><lx-dropdown-menu><ul ng-if="vars.sqlHistory.length == 0"><li class="tc-grey-400 pl fs-body-2">История запросов пуста</li></ul><ul ng-if="vars.sqlHistory.length > 0"><li ng-repeat="item in vars.sqlHistory track by $index"><a class="dropdown-link" ng-click="vars.sql = item">{{item}}</a></li></ul></lx-dropdown-menu></lx-dropdown></div>SQL</div><div class="card__actions"><div style="min-height: 200px; position: relative;" id="resizable"><div ng-model="vars.sql" ui-ace="{ useWrapMode : true, mode: \'clickhouse\', onLoad: aceLoaded, advanced: { enableBasicAutocompletion: true } }" style="min-height: 200px; width: 100%; height: 100%; border-bottom: 3px #eee solid; border-right: 3px #eee solid;"></div></div><lx-button lx-color="green mt" ng-click="run()"><i class="mdi mdi-play"></i> Выполнить</lx-button></div></div><div class="card"><div class="p+"><div style="white-space: nowrap; float: right; line-height: 26px; color: #666;" class="fs-caption" ng-if="vars.statistics">время: <b>{{vars.statistics.elapsed}}</b>, строк прочитано: <b>{{vars.statistics.rows_read}}</b>, байт прочитано: <b>{{vars.statistics.bytes_read}}</b></div>Результат</div><div class="card__actions p+" style="max-height: 560px; overflow-x: auto; overflow-y: auto;"><span ng-if="vars.sqlData === null" class="fs-caption">нет данных</span><div ng-if="vars.sqlData !== null" ng-bind-html="vars.sqlData"></div></div></div>'),t.put("app/table/table.html",'<div class="pl pr" flex-container="row" flex-wrap=""><div flex-item="6" class="pr+"><div class="card"><div class="data-table-container"><header class="data-table-header"><div class="data-table-header__label"><span class="fs-title">{{vars.name}}</span></div><div class="data-table-header__actions"><lx-button lx-size="l" lx-color="black" lx-type="icon" ui-sref="view"><i class="mdi mdi-eye"></i></lx-button></div></header><table class="data-table"><thead><tr class="data-table-row"><th style="width: 40px"></th><th style="width: 40%">Название</th><th style="width: 10%">Тип</th><th style="width: 10%">Default тип</th><th style="width: 10%">Значение</th></tr></thead><tbody><tr class="data-table-row" ng-repeat="field in vars.data.data"><td class="tc-grey-400">{{$index + 1}}</td><td ng-repeat="key in [\'name\', \'type\', \'default_type\', \'default_expression\'] track by $index">{{field[key]}}</td></tr></tbody></table></div></div></div><div flex-item="6"><div class="card" flex-item="6"><ui-view></ui-view></div></div></div>'),t.put("app/table/view/view.html",'<div class="pl+ pt+ pb+ pr fs-title"><div class="float-right" style="margin-top: -5px"><lx-button lx-size="l" lx-color="black" lx-type="icon" ng-click="loadPrev()" ng-disabled="vars.offset === 0"><i class="mdi mdi-arrow-left"></i></lx-button><lx-button lx-size="l" lx-color="black" lx-type="icon" ng-click="loadNext()"><i class="mdi mdi-arrow-right"></i></lx-button></div>Данные <span class="tc-grey-400">c {{vars.offset}} по {{vars.offset + vars.limit}}</span></div><div class="card__actions p+" style="max-height: 560px; overflow-x: auto; overflow-y: auto;"><span ng-if="vars.data === null" class="fs-caption">нет данных</span><lx-progress lx-type="linear" lx-color="teal" ng-if="vars.data == -1"></lx-progress><div ng-if="vars.data !== null && vars.data != -1" ng-bind-html="vars.data"></div></div>')}]),function(t,e){"use strict";function a(t,e,a,i,r){e.breadcrumbs=[{text:"База "+a.dbName,link:"database"},{text:"Таблица "+a.tableName,link:"table"},{text:"Просмотр",link:"view"}],t.vars={data:null,limit:100,offset:0},t.load=function(){t.vars.data=-1,r.query("select * from "+a.dbName+"."+a.tableName+" limit "+t.vars.offset+", "+t.vars.limit).then(function(e){t.vars.data=r.dataToHtml(e)},function(t){i.error("Ошибка "+t)})},t.loadNext=function(){t.vars.offset+=t.vars.limit,t.load()},t.loadPrev=function(){t.vars.offset>0&&(t.vars.offset-=t.vars.limit,t.load())},t.load()}t.module(e.app.name).controller("ViewController",a),a.$inject=["$scope","$rootScope","$stateParams","LxNotificationService","API"]}(angular,smi2),function(t,e){"use strict";function a(t,e,a,i){e.breadcrumbs=[{text:"База "+a.dbName,link:"database"},{text:"Таблица "+a.tableName,link:"table"}],t.vars={data:{},name:a.tableName},i.query("describe table "+a.dbName+"."+a.tableName).then(function(e){t.vars.data=e})}t.module(e.app.name).controller("TableController",a),a.$inject=["$scope","$rootScope","$stateParams","API"]}(angular,smi2),function(t,e){"use strict";function a(e,a,i,r,s,l){e.vars={sql:"",sqlHistory:r.get("sqlHistory")||[],sqlData:null,format:{},formats:[{name:"Таблица",sql:" format JSON"},{name:"JSON",sql:" format JSON"},{name:"JSON compact",sql:" format JSONCompact"},{name:"CREATE/INSERT",sql:"null"}],editor:null,statistics:null,fontSize:r.get("editorFontSize")||16,theme:r.get("editorTheme")||"cobalt"},e.vars.format=e.vars.formats[0],e.vars.themes=["ambiance","eclipse","mono_industrial","tomorrow_night_blue","chaos","github","monokai","tomorrow_night_bright","chrome","idle_fingers","pastel_on_dark","tomorrow_night_eighties","clouds","iplastic","solarized_dark","tomorrow_night","clouds_midnight","katzenmilch","solarized_light","twilight","cobalt","kr_theme","sqlserver","vibrant_ink","crimson_editor","kuroir","terminal","xcode","dawn","merbivore","textmate","dreamweaver","merbivore_soft","tomorrow"],a.breadcrumbs=[{link:"sql",text:"SQL"}],i.onbeforeunload=function(t){if(""!==e.vars.sql){var a="Хотите покинуть страницу?";return"undefined"==typeof t&&(t=window.event),t&&(t.returnValue=a),a}};var o=e.$on("$stateChangeStart",function(t){var a="Хотите покинуть страницу?";t.defaultPrevented||""===e.vars.sql||confirm(a)||t.preventDefault()});e.$on("$destroy",function(){console.log("$destroy"),o(),i.onbeforeunload=null}),e.run=function(){return""===e.vars.sql||null===e.vars.sql?void s.warning("Не введен SQL"):(-1==e.vars.sqlHistory.indexOf(e.vars.sql)&&(e.vars.sqlHistory.push(e.vars.sql),e.vars.sqlHistory.length>15&&e.vars.sqlHistory.shift(),r.set("sqlHistory",e.vars.sqlHistory)),e.vars.sqlData="загрузка...",e.vars.statistics=null,void l.query(e.vars.sql,e.vars.format.sql,!0).then(function(a){e.vars.format.name==e.vars.formats[0].name?e.vars.sqlData=l.dataToHtml(t.fromJson(a)):e.vars.sqlData='<pre class="fs-caption">'+t.toJson(a,!0)+"</pre>",e.vars.statistics=a.statistics},function(a){s.error("Ошибка"),e.vars.statistics=null,e.vars.sqlData='<pre class="fs-caption tc-red-700">'+t.toJson(a).replace(/\\n/gi,"<br/>").replace(/^"/,"").replace(/"$/,"")+"</pre>"}))},e.setTheme=function(t){e.vars.theme=t,e.vars.editor.setTheme("ace/theme/"+t),r.set("editorTheme",t)},e.aceSettings=function(){e.vars.editor.execCommand("showSettingsMenu")},e.aceLoaded=function(t){e.vars.editor=t,t.setOptions({fontSize:e.vars.fontSize+"px"}),t.setTheme("ace/theme/"+e.vars.theme)},e.$watch("vars.fontSize",function(t){t&&e.vars.editor&&(e.vars.editor.setOptions({fontSize:t+"px"}),r.set("editorFontSize",t))}),t.element("#resizable").resizable({handles:"s"})}t.module(e.app.name).controller("SqlController",a),a.$inject=["$scope","$rootScope","$window","localStorageService","LxNotificationService","API"]}(angular,smi2);var define=window.define||window.ace.define;define("ace/mode/clickhouse_highlight_rules",["require","exports","module","ace/lib/oop","ace/mode/text_highlight_rules"],function(t,e){"use strict";var a=t("../lib/oop"),i=t("./text_highlight_rules").TextHighlightRules,r=function(){var t="SELECT|INSERT|UPDATE|DELETE|FROM|WHERE|AND|OR|GROUP|BY|ORDER|LIMIT|OFFSET|HAVING|AS|CASE|WHEN|ELSE|END|TYPE|LEFT|RIGHT|JOIN|ON|OUTER|DESC|ASC|UNION|CREATE|TABLE|PRIMARY|KEY|IF|FOREIGN|NOT|REFERENCES|DEFAULT|NULL|INNER|CROSS|NATURAL|DATABASE|DROP|GRANT|ANY|ATTACH|DETACH|DESCRIBE|OPTIMIZE|PREWHERE|TOTALS|DATABASES|PROCESSLIST|SHOW",e="true|false",a="avg|count|first|last|max|min|sum|ucase|lcase|mid|len|round|rank|now|format|coalesce|ifnull|isnull|nvl|countIf|timeSlot|yesterday|today|now|toRelativeSecondNum|toRelativeMinuteNum|toRelativeHourNum|toRelativeDayNum|toRelativeWeekNum|toRelativeMonthNum|toRelativeYearNum|toTime|toStartOfHour|toStartOfFiveMinute|toStartOfMinute|toStartOfYear|toStartOfQuarter|toStartOfMonth|toMonday|toSecond|toMinute|toHour|toDayOfWeek|toDayOfMonth|toMonth|toYear|toFixedString|toStringCutToZero|reinterpretAsString|reinterpretAsDate|reinterpretAsDateTime|reinterpretAsFloat32|reinterpretAsFloat64|reinterpretAsInt8|reinterpretAsInt16|reinterpretAsInt32|reinterpretAsInt64|reinterpretAsUInt8|reinterpretAsUInt16|reinterpretAsUInt32|reinterpretAsUInt64|toUInt8|toUInt16|toUInt32|toUInt64|toInt8|toInt16|toInt32|toInt64|toFloat32|toFloat64|toDate|toDateTime|toString|bitAnd|bitOr|bitXor|bitNot|bitShiftLeft|bitShiftRight|abs|negate|modulo|intDivOrZero|intDiv|divide|multiply|minus|plus|empty|notEmpty|length|lengthUTF8|lower|upper|lowerUTF8|upperUTF8|reverse|reverseUTF8|concat|substring|substringUTF8|appendTrailingCharIfAbsent|position|positionUTF8|match|extract|extractAll|like|notLike|replaceOne|replaceAll|replaceRegexpOne|range|arrayElement|has|indexOf|countEqual|arrayEnumerate|arrayEnumerateUniq|arrayJoin|arrayMap|arrayFilter|arrayExists|arrayCount|arrayAll|arrayFirst|arraySum|splitByChar|splitByString|alphaTokens|domainWithoutWWW|topLevelDomain|firstSignificantSubdomain|cutToFirstSignificantSubdomain|queryString|URLPathHierarchy|URLHierarchy|extractURLParameterNames|extractURLParameters|extractURLParameter|queryStringAndFragment|cutWWW|cutQueryString|cutFragment|cutQueryStringAndFragment|cutURLParameter|IPv4NumToString|IPv4StringToNum|IPv4NumToStringClassC|IPv6NumToString|IPv6StringToNum|rand|rand64|halfMD5|MD5|sipHash64|sipHash128|cityHash64|intHash32|intHash64|SHA1|SHA224|SHA256|URLHash|hex|unhex|bitmaskToList|bitmaskToArray|floor|ceil|round|roundToExp2|roundDuration|roundAge|regionToCountry|regionToContinent|regionToPopulation|regionIn|regionHierarchy|regionToName|OSToRoot|OSIn|OSHierarchy|SEToRoot|SEIn|SEHierarchy|dictGetUInt8|dictGetUInt16|dictGetUInt32|dictGetUInt64|dictGetInt8|dictGetInt16|dictGetInt32|dictGetInt64|dictGetFloat32|dictGetFloat64|dictGetDate|dictGetDateTime|dictGetString|dictGetHierarchy|dictHas|dictIsIn|uniq|argMin|argMax|uniqCombined|uniqHLL12|uniqExact|groupArray|groupUniqArray|quantile|quantileDeterministic|quantileTiming|quantileTimingWeighted|quantileExact|quantileExactWeighted|quantileTDigest|median|quantiles|varSamp|varPop|stddevSamp|stddevPop|covarSamp|covarPop|corr|sequenceMatch|sequenceCount|uniqUpTo|countIf|avgIf|quantilesTimingIf|argMinIf|uniqArray|sumArray|quantilesTimingArrayIf|uniqArrayIf|medianIf|quantilesIf|varSampIf|varPopIf|stddevSampIf|stddevPopIf|covarSampIf|covarPopIf|corrIf|uniqArrayIf|sumArrayIf",i="int|numeric|decimal|date|varchar|char|bigint|float|double|bit|binary|text|set|timestamp|money|real|number|integer|uint8|uint16|uint32|uint64|int8|int16|int32|int64|float32|float64|datetime|enum8|enum16|array|tuple",r=this.createKeywordMapper({"support.function":a,keyword:t,"constant.language":e,"storage.type":i},"identifier",!0);this.$rules={start:[{token:"comment",regex:"--.*$",caseInsensitive:!0},{token:"comment",start:"/\\*",end:"\\*/"},{token:"string",regex:'".*?"'},{token:"string",regex:"'.*?'"},{token:"constant.numeric",regex:"[+-]?\\d+(?:(?:\\.\\d*)?(?:[eE][+-]?\\d+)?)?\\b"},{token:r,regex:"[a-zA-Z_$][a-zA-Z0-9_$]*\\b"},{token:"punctuation",regex:",|;"},{token:"keyword.operator",regex:"\\+|\\-|\\/|\\/\\/|%|<@>|@>|<@|&|\\^|~|<|>|<=|=>|==|!=|<>|="},{token:"paren.lparen",regex:"[\\(]"},{token:"paren.rparen",regex:"[\\)]"},{token:"text",regex:"\\s+"}]},this.normalizeRules();var s=[],l=function(t,e){t.forEach(function(t){s.push({name:t,value:t,score:0,meta:e})})};l(a.split("|"),"function"),l(t.split("|"),"keyword"),l(i.split("|"),"type"),this.completions=s};a.inherits(r,i),e.ClickhouseHighlightRules=r}),define("ace/mode/clickhouse",["require","exports","module","ace/lib/oop","ace/mode/text","ace/mode/clickhouse_highlight_rules","ace/range"],function(t,e){"use strict";var a=t("../lib/oop"),i=t("./text").Mode,r=t("./clickhouse_highlight_rules").ClickhouseHighlightRules,s=function(){this.HighlightRules=r};a.inherits(s,i),function(){this.lineCommentStart="--",this.getCompletions=function(t,e,a,i){return e.$mode.$highlightRules.completions},this.$id="ace/mode/clickhouse"}.call(s.prototype),e.Mode=s}),function(t,e){"use strict";function a(t,e){return{responseError:function(a){return 401==a.status&&e.get("$state").go("login"),t.reject(a)}}}t.module(e.app.name).service("HttpInterceptor",a),a.$inject=["$q","$injector"]}(angular,smi2),function(t,e){"use strict";function a(t,e,a){var i="currentBaseConfig",r=null,s={},l=a.get(i);l&&l.host&&(s=l),this.setConnection=function(t){a.set(i,t),s=t},this.clear=function(){r=null,s={},a.set(i,{})},this.query=function(a,i,l){var o=e.defer();i=i||" format JSON","null"==i&&(i="");var n="http://"+s.host+"/?query="+encodeURIComponent(a+" "+i)+"&user="+s.login+"&password="+s.password+"&add_http_cors_header=1";return l&&(n+="&database="+r),i?t.get(n).then(function(t){o.resolve(t.data)},function(t){o.reject(t.data)}):t.post(n).then(function(t){o.resolve(t.data)},function(t){o.reject(t.data)}),o.promise},this.getConnectionInfo=function(){return s},this.setDatabase=function(t){r=t},this.dataToHtml=function(t){console.log(t);var e='<table class="sql-table fs-body-1"><tr>',a=[];return t.meta.forEach(function(t){e+="<th>"+t.name+'<div class="fs-caption tc-grey-400">'+t.type+"</div></th>",a.push(t.name)}),t.data.forEach(function(t){e+="<tr>",a.forEach(function(a){e+="<td>"+t[a]+"</td>"}),e+="</tr>"}),e+="</table>"}}t.module(e.app.name).service("API",a),a.$inject=["$http","$q","localStorageService"]}(angular,smi2),function(t,e){"use strict";function a(t,e,a,i,r){var s="basesConfig";t.vars={bases:i.get(s)||[],db:{},error:!1},t.login=function(){if(t.vars.error=!1,t.vars.db.id){for(var a=0;a<t.vars.bases.length;a++)if(t.vars.bases[a].id==t.vars.db.id){t.vars.bases[a]=t.vars.db;break}}else t.vars.db.id=(new Date).getTime(),t.vars.bases.push(t.vars.db);i.set(s,t.vars.bases),r.setConnection(t.vars.db),r.query("SELECT 'login success'").then(function(){e.go("dashboard")},function(){t.vars.error=!0})},t.remove=function(){for(var e=0;e<t.vars.bases.length;e++)if(t.vars.bases[e].id==t.vars.db.id){t.vars.bases.splice(e,1);break}i.set(s,t.vars.bases),t.vars.db={}}}t.module(e.app.name).controller("LoginController",a),a.$inject=["$scope","$state","$filter","localStorageService","API"]}(angular,smi2),function(t,e){"use strict";function a(t,e,a){e.breadcrumbs=[{text:"Рабочий стол",link:"dashboard"}],t.vars={databases:[]},a.query("show databases").then(function(e){t.vars.databases=e.data})}t.module(e.app.name).controller("DashboardController",a),a.$inject=["$scope","$rootScope","API"]}(angular,smi2),function(t,e){"use strict";function a(t,e,a,i){e.breadcrumbs=[{text:"База "+a.dbName,link:"database",params:a}],t.vars={tables:[]},i.query("show tables from "+a.dbName).then(function(e){t.vars.tables=e.data})}t.module(e.app.name).controller("DatabaseController",a),a.$inject=["$scope","$rootScope","$stateParams","API"]}(angular,smi2),function(t,e){"use strict";function a(t,e){t.vars={databases:[],selectedDatabase:null,tables:[]},t.changeDatabase=function(a){t.vars.selectedDatabase=a,e.setDatabase(a.name),e.query("show tables from "+a.name).then(function(e){t.vars.tables=e.data})},e.query("show databases").then(function(e){t.vars.databases=e.data,t.changeDatabase(e.data[0])})}t.module(e.app.name).controller("SidebarController",a),a.$inject=["$scope","API"]}(angular,smi2),function(t,e){"use strict";function a(t,e,a){t.user=a.getConnectionInfo().name,t.logout=function(){a.clear(),e.go("login")}}t.module(e.app.name).controller("HeaderController",a),a.$inject=["$scope","$state","API"]}(angular,smi2),function(){"use strict";angular.module(smi2.app.name).run(["$rootScope","$state",function(t,e){t.breadcrumbs=[];var a=t.$on("$stateChangeError",function(t,a,i,r,s,l){"notAuthorized"==l&&e.go("login")});t.$on("$destroy",function(){a()})}])}(),function(){"use strict";angular.module(smi2.app.name).config(["$stateProvider",function(t){t.state("base",{"abstract":!0,resolve:{session:["$q","API",function(t,e){var a=t.defer();return angular.isDefined(e.getConnectionInfo().host)?a.resolve():a.reject("notAuthorized"),a.promise}]},templateUrl:"app/base/base.html"}).state("layout",{parent:"base","abstract":!0,views:{header:{templateUrl:"app/base/header.html",controller:"HeaderController"},sidebar:{templateUrl:"app/base/sidebar.html",controller:"SidebarController"},breadcrumb:{templateUrl:"app/base/breadcrumbs.html"},main:{template:"<ui-view/>"}}}).state("dashboard",{parent:"layout",url:"/",templateUrl:"app/dashboard/dashboard.html",controller:"DashboardController"}).state("login",{url:"/login",templateUrl:"app/login/login.html",controller:"LoginController"}).state("sql",{parent:"layout",url:"/sql",templateUrl:"app/sql/sql.html",controller:"SqlController"}).state("database",{parent:"layout",url:"/database/{dbName}",templateUrl:"app/database/database.html",controller:"DatabaseController"}).state("table",{parent:"database",url:"/table/{tableName}",templateUrl:"app/table/table.html",controller:"TableController"}).state("view",{parent:"table",url:"/view",templateUrl:"app/table/view/view.html",controller:"ViewController"}).state("404",{parent:"base",templateUrl:"app/base/404.html"})}])}(),function(t,e){"use strict";t.module(e.app.name).config(["$locationProvider","$httpProvider","$sceProvider","$urlRouterProvider",function(t,e,a,i){t.html5Mode(!0).hashPrefix("!"),e.interceptors.push("HttpInterceptor"),a.enabled(!1),i.otherwise(function(t){var e=t.get("$state");e.transitionTo("404")})}])}(angular,smi2);