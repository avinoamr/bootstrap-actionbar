(function ( $ ) {
    $.fn.actionbar = function() {
        if ( !jQuery.event.special.tap ) return this;
        return this.each( function ( i, el ) {
            var $this = $( this );
            if ( $this.data( "bs.actionbar" ) ) return;
            $this.data( "bs.actionbar", {} );

            var selector = ".actionbar-nav > li > a";
            $this.on( "tap.bs.actionbar", selector, function ( ev ) {
                var el = $( ev.currentTarget ).css( "opacity", 0.3 );
                setTimeout(function () { 
                    el.css( "opacity", "" );
                }, 300 );
            });
            // $this.on( "click.bs.actionbar", selector, onclick );
        });
    };
}( jQuery ));