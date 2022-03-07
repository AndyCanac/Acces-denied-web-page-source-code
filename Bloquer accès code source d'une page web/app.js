// bloque l'accès au clique droit


contextMenuCatch = {
    ie: function refresh(){
        if( document.all ){
            return false;
        }
    },
    netscape: function refresh1(e){
        if( document.layers || (document.getElementById && !document.all) ){
            if( e.which == 2 || e.which == 3 ){
                return false;
            }
        }
    }
}
        if (document.layers) {
            document.captureEvents(Event.mousedown);
            document.onmousedown = contextMenuCatch.netscape;
        }   

    else {
            document.onmouseup = contextMenuCatch.netscape;
            document.oncontextmenu = contextMenuCatch.ie;
        }
    document.oncontextmenu = new Function("return false");
    document.onselectstart = new Function("return false");

    // Sinon plus simple mais que clique droit sinon rajouter  user-select: none; dans le css

    document.oncontextmenu = function clic(e){
        return false;
    }



// bloque l'accès à la touche f12 et au ctrl+S , ctrl+shift+i , ctrl+u

    document.onkeydown = function test(e) {
        if (e.keyCode === 123 || (e.ctrlKey  && e.keyCode === 83 || e.ctrlKey && e.keyCode === 85 || e.ctrlKey && e.shiftKey && e.keyCode === 73)) {
        return false;
        } 
        
        else {
            return true;
            }
        };