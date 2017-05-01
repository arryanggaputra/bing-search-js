# bingSearch.js
Microsoft Cognitive, Bing Search API Wrapper

Bing Search.js Is a jquery plugin to use the Bing Search API, you can use this plugin for free.

![alt tag](https://raw.githubusercontent.com/arryanggaputra/bing-search-js/master/img/demo.gif)

Requirements
------------

	- jquery-1.11.1.min.js or higher

Instalation
-----------
* Include bingSearch.js library 
```html
<script type="text/javascript" src="bingSearch.js"></script>
```

How to use?
-----------
Just call mokki function in your javascript

```js	
    $.bingSearch({
        apiKey: 'YOUR_API_KEY',
        keyword: $('.keyword').val(),
        onSuccess: function(response) {
            var data = response.webPages.value;
            $('.result').html('');
            for (var i = 0; i < data.length; i++) {
                let situs = data[i];
                let element = `
                	<div class="siteList">
                 	<a href="${situs.url}" target="_blank">${situs.name}</a> <br/>
                 	<span class="displayUrl">${situs.displayUrl}</span> <br/> 
                 	${situs.snippet}
                	</div>
                `;
                $('.result').append(element);
            }
        }
    });
```