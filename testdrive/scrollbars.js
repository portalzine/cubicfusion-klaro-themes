document.getElementsByClassName('cn-learn-more').addEventListener("click", function() {
    //The first argument are the elements to which the plugin shall be initialized
	alert("here")
    //The second argument has to be at least a empty object or a object with your desired options
    OverlayScrollbars(document.getElementsByClassName('cm-modal'), { className: "os-theme-thin-dark" });
});