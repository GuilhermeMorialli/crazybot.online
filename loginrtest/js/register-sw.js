"serviceWorker"in navigator&&window.addEventListener("load",(function(){navigator.serviceWorker.register(superpwa_sw.url).then((function(t){console.log("SuperPWA service worker ready"),t.active&&t.update(),function(){const t=document.createElement("div");t.className="snackbar";const e=document.createElement("p");e.id="snackbar-msg",t.appendChild(e);const o=document.createElement("button");o.type="button",o.className="snackbar-close",o.setAttribute("aria-label","snackbar-close"),o.addEventListener("click",i),o.innerHTML="&times;",t.appendChild(o),document.body.appendChild(t),window.addEventListener("online",a),window.addEventListener("offline",a),window.addEventListener("fetch",(()=>console.log("fetch"))),t.addEventListener("mouseover",(function(){null!==n&&clearTimeout(n)})),t.addEventListener("mouseout",(function(){null!==n&&(n=setTimeout(i,2500))}))}(),function(){const t="body.snackbar--show .snackbar {\n\t\t\t-webkit-transform: translateY(0);\n\t\t\ttransform: translateY(0); \n\t\t}\n\t\t.snackbar {\n\t\t\tbox-sizing: border-box;\n\t\t\tbackground-color: #121213;\n\t\t\tcolor: #fff;\n\t\t\tpadding: 10px 55px 10px 10px;\n\t\t\tposition: fixed;\n\t\t\tz-index: 9999999999999999;\n\t\t\tleft: 15px;\n\t\t\tbottom: 15px;\n\t\t\tborder-radius: 5px 8px 8px 5px;\n\t\t\tmax-width: 90%;\n\t\t\tmin-height: 48px;\n\t\t\tline-height: 28px;\n\t\t\tfont-size: 16px;\n\t\t\t-webkit-transform: translateY(150%);\n\t\t\ttransform: translateY(150%);\n\t\t\twill-change: transform;\n\t\t\t-webkit-transition: -webkit-transform 200ms ease-in-out;\n\t\t\t-webkit-transition-delay: 0s;\n\t\t\t\t\ttransition-delay: 0s;\n\t\t\t-webkit-transition: -webkit-transform 200ms ease-in-out false;\n\t\t\ttransition: -webkit-transform 200ms ease-in-out false;\n\t\t\ttransition: transform 200ms ease-in-out false;\n\t\t\ttransition: transform 200ms ease-in-out false, -webkit-transform 200ms ease-in-out false; \n\t\t}\n\t\t.snackbar p {\n\t\t\tmargin: 0;\n\t\t\tcolor: #fff;\n\t\t\ttext-align: center; \n\t\t}\n\t\t.snackbar .snackbar-close {\n\t\t\tposition: absolute;\n\t\t\ttop: 0;\n\t\t\tright: 0;\n\t\t\twidth: 45px;\n\t\t\theight: 100%;\n\t\t\tpadding: 0;\n\t\t\tbackground: #2a2a2a;\n\t\t\tborder: none;\n\t\t\tfont-size: 28px;\n\t\t\tfont-weight: normal;\n\t\t\tborder-radius: 0 5px 5px 0;\n\t\t\tcolor: #FFF;\n\t\t\tfont-family: Arial, Helvetica, sans-serif;\n\t\t}\n\t\t.snackbar .snackbar-close:hover,\n\t\t.snackbar .snackbar-close:focus {\n\t\t\tbackground: #3f3f3f;\n\t\t}\n\t\t.snackbar a {\n\t\t\tcolor: #FFF;\n\t\t\tfont-weight: bold;\n\t\t\ttext-decoration: underline; \n\t\t}",e=document.head||document.getElementsByTagName("head")[0],n=document.createElement("style");n.type="text/css",n.styleSheet?n.styleSheet.cssText=t:n.appendChild(document.createTextNode(t)),e.appendChild(n)}(),a()})).catch((function(t){console.log("Registration failed with "+t)}));const t=5e3;let e=!1,n=null;function a(){navigator.onLine?(!0===e&&o('You\'re back online <a href="javascript:location.reload()">refresh</a>'),e=!1):(o("You're currently offline"),e=!0)}function o(e){document.getElementById("snackbar-msg").innerHTML=e,document.body.classList.add("snackbar--show"),clearTimeout(n),n=setTimeout(i,t)}function i(){document.body.classList.remove("snackbar--show")}var r;window.addEventListener("beforeinstallprompt",(function(t){if(null!=(r=t)||null!=r){1==superpwa_sw.disable_addtohome&&r.preventDefault();var e=document.getElementsByClassName("superpwa-sticky-banner");if(e.length){if(r.preventDefault(),1!=superpwa_sw.enableOnDesktop&&!window.mobileCheck())return;if("function"==typeof super_check_bar_closed_or_not&&!super_check_bar_closed_or_not())return;for(var n=0;n<e.length;n++){e[n].getAttribute("data-show");e[n].style.display="flex"}}document.cookie="hidecta=no"}})),window.addEventListener("appinstalled",(function(t){var e=document.getElementsByClassName("superpwa-sticky-banner");if(e.length)for(var n=0;n<e.length;n++){e[n].getAttribute("data-show");document.cookie="hidecta=yes",e[n].style.display="none"}}));var s=document.getElementsByClassName("superpwa-add-via-class");if(null!==s)for(var c=0;c<s.length;c++)s[c].addEventListener("click",l);function l(){r&&(r.prompt(),r.userChoice.then((function(t){if("accepted"===t.outcome){var e=document.getElementsByClassName("superpwa-sticky-banner");if(e)for(var n=0;n<e.length;n++){e[n].getAttribute("data-show");e[n].style.display="none"}console.log("User accepted the prompt")}else console.log("User dismissed the prompt");r=null})))}})),window.mobileCheck=function(){let t=!1;var e;return e=navigator.userAgent||navigator.vendor||window.opera,(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(e)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(e.substr(0,4)))&&(t=!0),t},window.addEventListener("load",(function(){var t=document.querySelectorAll("link[rel='manifest']");if(t.length>1)for(var e=0;e<t.length;e++){-1==t[e].getAttribute("href").indexOf("superpwa-manifest.json")&&t[e].remove()}var n=window.navigator.userAgent,a=n.match(/iPad/i)||n.match(/iPhone/i),o=n.match(/WebKit/i);a&&o&&!n.match(/CriOS/i)&&window.matchMedia("(display-mode: standalone)").matches&&setTimeout((function(){const t=document.querySelectorAll("a[href='#']");if(t.length>1)for(var e=0;e<t.length;e++)t[e].setAttribute("href","javascript:void(0);")}),600)}));