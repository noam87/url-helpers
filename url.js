;(function(window, exports) {
  var C = {};
    
  appendToNamespace("Clusterfoo", "url", C);
  
  function appendToNamespace(namespace, elementName, elementValue) {
    if (typeof window[namespace] === "object") {
      window[namespace][elementName] = elementValue;
    }
    var oldNamespaceFunction = function(){};
    if (typeof window[namespace] == "function") {
      oldNamespaceFunction = window[namespace];
    }
    if (typeof window[namespace] !== "object") {
      window[namespace] = function() {
        window[namespace] = {};
        oldNamespaceFunction();
        window[namespace][elementName] = elementValue;
      }
    }
  }

  ////
  // Build a url.
  //
  // Params:
  //
  // * host [String]
  // * path [String] (optional)
  // * queryParams [{ "key": "value" }]
  //
  // Example:
  //
  // URL.build("http://example.com", "/path/to/thing", { "success": "true" });
  // URL.build("http://example.com", { "success": "true" });
  exports.build = C.build =  build;
  function build(host, path, queryParams) {
    if (typeof path !== "string") var path = "";
    if (typeof queryParams !== "object") var queryParams = {};
    if (typeof path == "object") { queryParams = path; path = ""; };

    var url = host;
    url = removeTrailingSlash(url);
    if (path.length > 0) url += path;
    url = removeTrailingSlash(url);
    if (Object.keys(queryParams).length > 0) url = addQueryParams(url);
    return url

    // Add query params to url string
    function addQueryParams(url) {
      url += "?"
      for (key in queryParams) { url += key + "=" + queryParams[key] + "&"; }
      return url;
    }

    // remove trailing "/" from url
    function removeTrailingSlash(string) {
      if (endsInSlash(string)) return string.substring(0, thing.length - 1);
      return string;
    }

    // Does the string end in "/"?
    function endsInSlash(string) { return string.slice(-1) == "/" }
  }

  // Query string helpers
  exports.queryString = C.queryString = queryString = {};

  ////
  // Get value of querystring variable
  queryString.get = getQueryVariable;
  function getQueryVariable(variable) {
    var query = window.location.search.substring(1);
    var vars = query.split('&');
    for (var i = 0; i < vars.length; i++) {
        var pair = vars[i].split('=');
        if (decodeURIComponent(pair[0]) == variable) {
            return decodeURIComponent(pair[1]);
        }
    }
    console.log('Query variable %s not found', variable);
  }

})(typeof window !== "undefined" ? window : {},
   typeof exports !== "undefined" ? exports : {});
