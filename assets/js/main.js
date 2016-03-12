$(document).ready(function(){
        
        var postTitle = document.title.replace(/ /g,'');
        var imgCount = $("article img").length;
    
        $("article img").each(function() {
        var src = this.src;
        var alt = $(this).attr("alt");
        $(this).wrap('<a href="' + src + '" data-lightbox="' + postTitle + '" data-title="' + alt + '"></a>');
});
        
        // $("article img:gt(1)").hide(); //

        
        lightbox.option({
          'resizeDuration': 150,
          'wrapAround': true,
          'albumLabel': "Bilde %1 av %2",
          'alwaysShowNavOnTouchDevices': true
    });

});   