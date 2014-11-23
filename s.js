var logo = document.getElementById('logo');
// logo.addEventListener('click', function (event) {
// 	document.body.setAttribute('data-launcher', document.body.getAttribute('data-launcher')==='true'?'false':'true');
// });


var propagate_on_touch = document.querySelectorAll('[data-propagation-target]');
for (var i = propagate_on_touch.length - 1; i >= 0; i--) {
	propagate_on_touch[i].propagation_target = (function (origin_element) {
		this.setAttribute('data-launcher', this.getAttribute('data-launcher')==='true'?'false':'true');
	}).bind(propagate_on_touch[i]);
	propagate_on_touch[i].addEventListener('click', function (event) {
		this.propagation_target(this);
		var targets = document.querySelectorAll('[data-propagation-target="'+this.getAttribute('data-propagation-target')+'"]');
		for (var j = targets.length - 1; j >= 0; j--) {
			if(targets[j]!=this){
				if(targets[j].propagation_timeout) clearTimeout(targets[j].propagation_timeout);
				var targetBoundingRect = targets[j].getBoundingClientRect();
				var delay = Math.sqrt(
					Math.pow(event.pageX - (event.pageX>targetBoundingRect.right?targetBoundingRect.right:(event.pageX<targetBoundingRect.left?targetBoundingRect.left:event.pageX)), 2)
				  + Math.pow(event.pageY - (event.pageY>targetBoundingRect.bottom?targetBoundingRect.bottom:(event.pageY<targetBoundingRect.top?targetBoundingRect.top:event.pageY)), 2))
				targets[j].propagation_timeout = window.setTimeout(targets[j].propagation_target.bind(undefined, this), 250*delay/window.innerWidth);
			}
		};
		event.stopPropagation();
	});
};