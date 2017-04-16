var autosuggest = document.querySelector('.autosuggest'),
	suggest = document.querySelector('.suggest'),
	suggestItem = document.querySelectorAll('.suggest li');

autosuggest.onfocus = handleFocus;





var handleRequest = (function() {	
	var urlDefault = 'assets/data1.json';
    return {
        request(url) {
        	var _self = this;
			var XHR = ( "onload" in new XMLHttpRequest() ) ? XMLHttpRequest : XDomainRequest;
			var xhr = new XHR();
			xhr.open('GET', url || urlDefault, true);
			xhr.setRequestHeader('Access-Control-Allow-Origin', 'application/json');
			xhr.onload = function() {
			  _self.responses( JSON.parse(this.responseText) );
			}
			xhr.onerror = function() {
			  console.log( 'readyState= ' + this.readyState );
			  console.log( 'status=' + this.status );
			}
			xhr.send();
        },
        responses(response) {
        	console.log(response);
        }
    }
}());

//handleRequest.request();





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
        addItem(values) {
            basket.push(values);
        },
        getItemCount() {
            return basket.length;
        },
        getTotal() {
           var q = this.getItemCount(),p=0;
            while(q--){
                p+= basket[q].price; 
            }
            return p;
        },
        creatList() {
           var res = basket.map( function(row) {
           		return '<div>' + row + '</div>'
           }).join('');
            return res;
        }
    }
}());



//var form = document.querySelector("#form");
document.querySelector("#form").addEventListener("submit", function(e) {
	var _self = this;
	e.preventDefault();
	console.log(_self.elements.city.value, _self.elements.phone.value);
	_self.classList.add('action');
	document.querySelector("#res").classList.add('action');
	setTimeout(function() {
		document.querySelector("#resultCity").innerText = _self.elements.city.value;
		document.querySelector("#resultPhone").innerText = _self.elements.phone.value;
		document.querySelector("#res").classList.remove('action');
	}, 1000);
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


// "use strict";

// class Polygon {
//   constructor(height, width) {
//     this.height = height;
//     this.width = width;
//   }
// }

// class Square extends Polygon {
//   constructor(sideLength) {
//     super(sideLength, sideLength);
//   }
//   get area() {
//     return this.height * this.width;
//   }
//   set sideLength(newLength) {
//     this.height = newLength;
//     this.width = newLength;
//   }
// }

// var square = new Square(2);









/**
 * Merge defaults with user options
 * @private
 * @param {Object} defaults Default settings
 * @param {Object} options User options
 * @returns {Object} Merged values of defaults and options
 */

// $('#form').onsubmit = function(e) {
// 	console.log(e)
// 	return false;
// };










//var urlRequest = 'assets/data1.json';

// var XHR = ( "onload" in new XMLHttpRequest() ) ? XMLHttpRequest : XDomainRequest;

// var xhr = new XHR();

// xhr.open('GET', urlRequest, true);

// xhr.setRequestHeader('Access-Control-Allow-Origin', 'application/json');

// xhr.onload = function() {
//   console.log( JSON.parse(this.responseText) );
// }

// xhr.onerror = function() {
//   console.log( 'readyState= ' + this.readyState );
//   console.log( 'status=' + this.status );
// }

// xhr.send();


// autosuggest.onblur = function() {
// 	console.log('onblur')
// 	if(!this.value.length) {
// 		handleBlur()
// 	}
// };