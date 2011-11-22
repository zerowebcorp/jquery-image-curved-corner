/*
jQuery Image Corner Plugin
Vivek
vivekv@vivekv.com
http://www.vivekv.com
*/

(function($){
     $.fn.corner = function (options) {

	var defaults = {
		radius : '1em 4em 1em 4em'
	};

	var options = $.extend(defaults,options);

		return this.each(function(){
			var obj = $(this);
			obj.css(
				{"border-radius": options.radius },
				{"-moz-border-radius": options.radius}
			);
		});
	}
})(jQuery);
