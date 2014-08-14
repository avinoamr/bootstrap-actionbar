(function ( $ ) {
    $.fn.actionbar = function() {
        var evname = $.event.special.tap ? "tap" : "click";
        return this.each( function ( i, el ) {
            var $this = $( this );
            if ( $this.data( "bs.actionbar" ) ) return;
            $this.data( "bs.actionbar", {} );

            var selector = ".actionbar-nav > li > a";
            $this.on( evname + ".bs.actionbar", selector, function ( ev ) {
                var el = $( ev.currentTarget ).css( "opacity", 0.3 );
                setTimeout(function () { 
                    el.css( "opacity", "" );
                }, 150 );
            });
            // $this.on( "click.bs.actionbar", selector, onclick );
        });
    };
}( jQuery ));