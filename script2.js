jQuery.prototype.text = function(text=''){
	this.each(element => {if (text) {element.innerText = text}})
	return this;
}

$('button').text('Btn');
$('button').click(e => console.log(e.target.innerText));


