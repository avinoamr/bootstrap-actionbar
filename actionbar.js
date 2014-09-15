(function ( $ ) {

    var replaceWith = $.fn.replaceWith;
    $.fn.replaceWith = function ( content ) {
        content = $( content );
        var that = this;
        var ev = $.Event( "replace", { 
            relatedTarget: content[ 0 ],
            replace: function () {
                return replaceWith.call( that, content );
            }
        });
        this.trigger( ev );
        return ev.isDefaultPrevented() ? this : ev.replace();
    }

    // animate the replacement of titles
    $( document ).on( "replace", ".actionbar-title", function ( ev ) {
        var target = $( ev.target );
        var related = $( ev.relatedTarget );
        if ( target.hasClass( "right" ) || target.hasClass( "left" ) ) return;
        ev.preventDefault();

        var direction = related.attr( "data-direction" ) || "left";
        var reversed = ( direction == "left" ) ? "right" : "left";
        target.addClass( direction );
        related
            .addClass( reversed )
            .insertAfter( target );

        setTimeout(function () {
            related.removeClass( reversed );
            setTimeout( ev.replace, 200 );
        }, 1 )
    })

    // flicker on click
    var evname = ( $.event.special.tap ? "tap" : "click" ) + ".bs.actionbar";
    var selector = ".actionbar-nav > li > a";
    $( document ).on( evname, selector, function ( ev ) {
        var el = $( ev.currentTarget ).css( "opacity", 0.3 );
        setTimeout(function () { el.css( "opacity", "" ) }, 150 );
    });
}( jQuery ));