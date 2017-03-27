var autosuggest = document.querySelector('.autosuggest'),
	suggest = document.querySelector('.suggest'),
	suggestItem = document.querySelectorAll('.suggest li');

autosuggest.onfocus = handleFocus;



var urlRequest = 'http://kladr-api.ru/api.php?contentType=city&limit=10&query=мос';
//var urlRequest = 'http://tanko.ru/index.html';

var XHR = ( "onload" in new XMLHttpRequest() ) ? XMLHttpRequest : XDomainRequest;

var xhr = new XHR();

xhr.open('GET', urlRequest, true);

//xhr.setRequestHeader('Access-Control-Allow-Origin', 'application/json');

xhr.onload = function() {
  console.log( this.responseText );
}

xhr.onerror = function() {
  console.log( 'readyState= ' + this.readyState );
  console.log( 'status=' + this.status );
}

xhr.send();


// autosuggest.onblur = function() {
// 	console.log('onblur')
// 	if(!this.value.length) {
// 		handleBlur()
// 	}
// };

for (var i = 0; i < suggestItem.length; i++) {
	var item = suggestItem[i];
	item.onclick = handleClick;
}

function handleFocus () {
	autosuggest.classList.add("show");
	suggest.classList.add("show");
}

function handleBlur () {
	autosuggest.classList.remove("show");
	suggest.classList.remove("show");
}

function handleClick (e) {
	console.log(e.target.innerText);
	autosuggest.value = e.target.innerText;
	basketModule.addItem(e.target.innerText)
	handleBlur();
}


////////////////////////

var basketModule = (function() {
  var basket = [];
    return {
        addItem: function(values) {
            basket.push(values);
            document.querySelector('.result').innerHTML = this.creatList();
        },
        getItemCount: function() {
            return basket.length;
        },
        getTotal: function() {
           var q = this.getItemCount(),p=0;
            while(q--){
                p+= basket[q].price; 
            }
            return p;
        },
        creatList: function() {
           var res = basket.map( function(row) {
           		return '<div>' + row + '</div>'
           }).join('');
            return res;
        }
    }
}());



/**
 * Merge defaults with user options
 * @private
 * @param {Object} defaults Default settings
 * @param {Object} options User options
 * @returns {Object} Merged values of defaults and options
 */
var autocomplete = (function() {
	function getStart(value) {
		return value
	}
    return {
    	init: function(options) {
			var defaults = {
				crasota: 'defaultcrasota',
				pipec: 'defaultpipec',
				width: 'defaultwidth'
			}
		    var extended = {};
		    var prop;
		    for (prop in defaults) {
		        if (Object.prototype.hasOwnProperty.call(defaults, prop)) {
		            extended[prop] = defaults[prop];
		        }
		    }
		    for (prop in options) {
		        if (Object.prototype.hasOwnProperty.call(options, prop)) {
		            extended[prop] = options[prop];
		        }
		    }
		    return this.show(extended)
    	},
    	show: function(extended) {
    		
    		extended.parent.onclick = console.log( extended, '\n\n', getStart(extended.parent.textContent) )

    	}
    }
}());

var $ = function(id) {
	return document.querySelector(id)
};

autocomplete.init({
	parent: $('#task'),
	width: 500
})

// $('#form').onsubmit = function(e) {
// 	console.log(e)
// 	return false;
// };

//var form = document.querySelector("#form");
$("#form").addEventListener("submit", function(e) {
	e.preventDefault();
	console.log(this.elements.city.value, this.elements.phone.value);
	$("#resultCity").innerText = this.elements.city.value;
	$("#resultPhone").innerText = this.elements.phone.value;
	return false;
});

// var s,
// NewsWidget = {

//   settings: {
//     numArticles: 5,
//     articleList: $(".result"),
//     moreButton: $("#df")
//   },

//   init: function() {
//     // kick things off
//     s = this.settings;
//     console.log(s)
//   }

// };
// NewsWidget.init()