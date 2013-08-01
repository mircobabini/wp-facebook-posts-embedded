(function ($) {
	tinymce.create('tinymce.plugins.fb_embed_post', {  
        init : function(ed, url) {
            ed.addButton('fb_embed_post', {  
                title : 'Embed a Facebook Post',  
                image : url+'/icon.png',  
				onclick : function() {
					var uri = prompt ("Facebook Post", "Enter the url of a Facebook post");
					if (uri !== 'undefined') {
						ed.selection.setContent('[fb_embed_post uri="'+uri+'"/]');  
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