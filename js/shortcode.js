(function ($) {
	tinymce.create('tinymce.plugins.fb_embed_post', {
		init : function(ed, url) {
			ed.addButton('fb_embed_post', {
				title : 'Embed a Facebook Post',
				image : url+'/icon.png',
				onclick : function() {
					var uri = prompt("Copy/Paste the URL of a Facebook post", "http://facebook.com/..");
					var size = prompt("Specify width in px", "550");
					if (uri !== 'undefined' && uri !== '') {
						ed.selection.setContent('[fb_embed_post href="'+uri+'/" width="'+size+'"/]');
					}
					return false;
				}
			});
		},
		createControl : function(n, cm) {
			return null;
		},
	});
	tinymce.PluginManager.add('fb_embed_post', tinymce.plugins.fb_embed_post);
})(jQuery);
