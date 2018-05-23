;(function () {
    window.G = {};
	G.httpType = location.protocol.replace(':', '');
    //是否生产环境
    G.isProduct = window.location.href.indexOf('test.tf56.com') > -1 ? false : true;
    
    //获取API的url
    G.getApiUrl = function (url) {
        if (G.isProduct) {
            return G.httpType + '://static.tf56.com/bigDataBigScreenWeb/' + url;
        }
        else {
            return G.httpType + '://statictest.tf56.com/bigDataBigScreenWeb/' + url;          
        }
    };
    
    //封装ajax请求,Get请求
    G.ajax = function (param) {
        var ajaxConf = {}
        ajaxConf = {
            type: 'get',
            url: param.url,
            data: param.data,
            async: true,
            dataType: 'json',
            timeout: param.timeout || 60000,
            contentType: "application/x-www-form-urlencoded; charset=utf-8",
            processData: true,
            success: function (data) {
                if (typeof param.callback == 'function') {
                    param.callback(data);
                }
            },
            error: function (r) {
                if (typeof param.errorCallback == 'function') {
                    param.errorCallback(r);
                }
            }
        }
        return $.ajax($.extend(ajaxConf, param));
    };
})();