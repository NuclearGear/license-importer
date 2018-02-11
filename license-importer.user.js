// ==UserScript==
// @name license panel
// @description allow import some specific f2p game into steam library
// @author x-kdn
// @license MIT
// @version 1.00
// @include https://store.steampowered.com/account/licenses/
// ==/UserScript==

(function()
 {
    var license_panel = document.createElement('div');
    document.body.appendChild(license_panel);
    license_panel.style.width = "360px";
    license_panel.style.height = "67px";
    license_panel.style.backgroundColor = "rgba(0, 0, 0, .3)";
    license_panel.style.position = "fixed";
    license_panel.style.left = "40px";
    license_panel.style.top = "250px";
    license_panel.style.zIndex = 1;

    license_panel.innerHTML = '<pre><div align="right" style="left: 10px; top: 10px; right: 10px; bottom: 10px; position: absolute; background: rgba(255, 0, 0, 0.0);">'
                                     +'<div style="background: rgba(0, 0, 255, 0.0);">'
                                      +'<select style="z-index: 2; width: 100%" id=license_selector>'
                                        +'<option value="100102">Crush Crush</option>'
                                        +'<option value="21330">Mabinogi</option>'
                                      +'</select>'
                                     +'<br><br>'
                                       +'<a href="javascript:void(0)" type="button" id="license_request">request license<a>'
                                     +'</div>'
                                   +'</div></pre>';
    document.getElementById("license_request").onclick = (function ()
    {
     var license_selector = document.getElementById("license_selector");
     jQuery.post('//store.steampowered.com/checkout/addfreelicense', { action: 'add_to_cart', sessionid: g_sessionID, subid: license_selector.value})
              .done(function() { location.reload();})
              .fail(function() { alert("fail");});
     //alert(license_selector.value);
    });
 }
)();