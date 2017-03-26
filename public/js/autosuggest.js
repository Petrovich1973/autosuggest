var autosuggest = document.querySelector('.autosuggest'),
	suggest = document.querySelector('.suggest'),
	suggestItem = document.querySelectorAll('.suggest li');

autosuggest.onfocus = handleFocus;
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
    		
    		extended.parent.onclick = console.log( getStart(extended.parent.innerText) )

    	}
    }
}());

var $ = function(id) {
	return document.querySelector(id)
};

autocomplete.init({
	parent: $('#list'),
	width: 500
})

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