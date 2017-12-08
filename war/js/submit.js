tinyMCE.init({
        // General options
        mode : "textareas",
        theme : "advanced",
        plugins : "inlinepopups,fullscreen,advimage",

        // Theme options
        theme_advanced_buttons1 : "bold,italic,underline,strikethrough,|,justifyleft,justifycenter,justifyright,justifyfull,|,fontselect,fontsizeselect,image,fullscreen,link",
        theme_advanced_buttons2 : "image,fullscreen",
        theme_advanced_buttons2 :"",
        theme_advanced_toolbar_location : "top",
        theme_advanced_toolbar_align : "left",
        theme_advanced_statusbar_location : "bottom",
        theme_advanced_resizing : true,
        invalid_elements : "div,script,abbr,acronym,address,applet,area,bdo,big,blockquote,button,caption,cite,code,col,colgroup,dd,del,dfn,iframe,input,ins,isindex,kbd,label,legend,map,menu,noscript,object,optgroup,option,param,textarea,var,ruby,samp,select,rtc",
        // Skin options
        skin : "o2k7",
        skin_variant : "silver",

        // Replace values for the template plugin
        template_replace_values : {
                username : "Some User",
                staffid : "991234"
        }
});