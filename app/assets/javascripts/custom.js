  $( function() {
    $( ".datepicker" ).datepicker({
	    changeMonth: true,
      	changeYear: true,
      	yearRange: '1930:2017',
    });

     /* PROJECTS BLOCK START */
    if ($('#grid').length > 0){
        var $grid = $('#grid'), //locate what we want to sort
        $filterOptions = $('.filter-options'),  //locate the filter categories
        $sizer = $grid.find('.shuffle_sizer'),

        setupFilters = function() {
            var $btns = $filterOptions.children();
            $btns.on('click', function(e) {
                e.preventDefault();
                var $this = $(this),
                isActive = $this.hasClass('active'),
                group = $this.data('group');

                if ( !isActive ) {
                    $('.filter-options button').removeClass('active');
                }
                else{
                    return;
                }

                $this.toggleClass('active');

                $grid.shuffle( 'shuffle', group );
            });

            $btns = null;
        };

        setupFilters();
        $grid.shuffle({
            itemSelector: '[class*="col-"]',
            sizer: $sizer
        });
    }
    /* PROJECTS BLOCK END */

  } );
