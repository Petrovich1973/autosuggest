var autosuggest = document.querySelector('.autosuggest'),
	suggest = document.querySelector('.suggest'),
	suggestItem = document.querySelectorAll('.suggest > ul > li');

autosuggest.onfocus = handleFocus;

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
	handleBlur();
}