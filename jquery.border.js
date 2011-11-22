(function($){
     $.fn.border = function (options) {
		return this.each(function(){
			var obj = $(this);
				obj.css({"border-radius": '1em 4em 1em 4em'},{"-moz-border-radius": "1em 4em 1em 4em"});
		});
	}
})(jQuery);
