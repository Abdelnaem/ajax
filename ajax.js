/*
pure javascript ajax for blogger feeds
*/
!function(){var s=0,a=document.head,c=window.eval;window.jsonp=function(e){s+=1;var n,t,o=e.url,r=document.createElement("script"),c=e.data,i=!1;if(/\?/.test(o)||(o+="?"),c)for(n in c)o+="&"+encodeURIComponent(n)+"="+encodeURIComponent(c[n]);return o+="&"+(e.callback||"callback")+"=window.jsonp._callback_"+s,window.jsonp["_callback_"+s]=function(){if(!i)return"function"==typeof e.success?e.success.apply(this,arguments):void 0},r.onerror=function(){if(!i)return"function"==typeof e.error?e.error.apply(this,arguments):void 0},r.src=o,a.appendChild(r),(t=r)&&"function"==typeof t.remove?t.remove():t&&t.parentElement&&"function"==typeof t.parentElement.removeChild&&t.parentElement.removeChild(t),{abort:function(){i=!0}}},window.get=function(n){var t,e,o=n.url,r=n.data;if(window.XMLHttpRequest?t=new XMLHttpRequest:window.ActiveXObject&&(t=new ActiveXObject("Microsoft.XMLHTTP")),t){if(t.onreadystatechange=function(){if(4==t.readyState&&200==t.status&&"function"==typeof n.success)try{n.success(JSON.parse(t.responseText))}catch(e){try{n.success(c(t.responseText))}catch(e){}}},/\?/.test(o)||(o+="?"),r)for(e in r)o+="&"+encodeURIComponent(e)+"="+encodeURIComponent(r[e]);return t.onerror=function(){if("function"==typeof n.error)return n.error.apply(this,arguments)},t.open("GET",o,!0),t.send(),t}}}();
