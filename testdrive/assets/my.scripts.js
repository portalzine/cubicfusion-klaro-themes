function setStyleSheet(url){var stylesheet = document.getElementById("theme"); stylesheet.setAttribute('href', url);}
		
var cm_event = document.createEvent('Event');

cm_event.initEvent('consentWindowOpen', true, true);

document.addEventListener('consentWindowOpen', function (e) {
    console.log("consentWindowOpen")
}, false);
	
document.addEventListener("DOMContentLoaded", function(e) {        

        var cm_target 		= document.getElementById( "klaro" );
        var cm_visible 	= false;	

        var observer 	= new MutationObserver(function(mutationRecords) {

            var cm_body 	= document.getElementsByClassName("cm-body"),
                cm_header	= document.getElementsByClassName("cm-header"),
                cm_footer	= document.getElementsByClassName("cm-footer");

            if(document.querySelectorAll('#klaro .cookie-modal').length > 0 && cm_visible == false){	
                cm_visible = true;

                document.dispatchEvent(cm_event);

                var instance = OverlayScrollbars(
                        cm_body, { className :"os-theme-round-dark" }
                    ); 

                cm_body[0].style.maxHeight = (window.innerHeight - 
                                                (
                                                    cm_header[0].offsetHeight+
                                                    cm_footer[0].offsetHeight
                                                )- 400
                                              )  +"px";
            }else{
                cm_visible = false;
            }
        });

      observer.observe(cm_target, {
        childList: true, 
        subtree: true, 
        characterDataOldValue: true 
      });
});