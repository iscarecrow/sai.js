(function(){function l(a){return(a=String(a).match(m))&&0!==a.length?a[1]:"anonymous"}function f(a,b,g,f,h){if(!h&&arguments.callee.caller){for(var c=arguments.callee.caller,e=[];(c=c.arguments.callee.caller)&&!(e.push("at "+l(c)+"()"),c.caller==c););h=e.join("\n")}c={profile:"jserror",msg:a||"",file:b||"",line:g||0,num:f||"",stack:h,lost:k.join(",")};d._DATAS.push(c);return c}if(!window.monitor){var d=window.monitor={};d._DATAS=[];var k=[],e={};d.lost=function(a){e.hasOwnProperty(a)||(e[a]=!0,k.push(a))};
d.log=function(a,b){if(a){b=b||"log";3===arguments.length&&(b="product",a=Array.prototype.join.call(arguments,"|"));var g={profile:b,seed:String(a)};d._DATAS.push(g);return g}};var m=/^function\s+(\w+)\s*\(/;d.error=function(a){if(a instanceof Error)return f(a.message||a.description,a.fileName,a.lineNumber||a.line,a.number,a.stack||a.stacktrace)};window.onerror=function(a,b,d){f(a,b,d);return!1}}})();
