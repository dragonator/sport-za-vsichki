$(function(){

    var options_users = {            
        beforeSubmit:  before_users,
        success: after_users           
    };

    var options_couch = {            
        beforeSubmit:  before_couch,
        success: after_couch            
    };

    var options_centur = {            
        beforeSubmit:  before_centur,
        success: after_centur            
    };




    function after_users(responseText, statusText, xhr, $form)  { 
      var obj = jQuery.parseJSON( responseText );
      $('#output_users').removeClass("hidden").addClass('alert-'+ obj.status ).html(obj.data);
      if( obj.status == 'success') {
        $('[type="reset"]').trigger('click');
      }
    } 

    function before_users(formData, jqForm, options) { 
        $('#output_users').removeClass().addClass('alert hidden').empty();
    }


    function after_couch(responseText, statusText, xhr, $form)  { 
      var obj = jQuery.parseJSON( responseText );
      $('#output_couch').removeClass("hidden").addClass('alert-'+ obj.status ).html(obj.data);
      if( obj.status == 'success') {
        $('[type="reset"]').trigger('click');
      }
    } 

    function before_couch(formData, jqForm, options) { 
        $('#output_couch').removeClass().addClass('alert hidden').empty();
    }


    function after_centur(responseText, statusText, xhr, $form)  { 
      var obj = jQuery.parseJSON( responseText );
      $('#output_centur').removeClass("hidden").addClass('alert-'+ obj.status ).html(obj.data);
      if( obj.status == 'success') {
        $('[type="reset"]').trigger('click');
      }
    } 

    function before_centur(formData, jqForm, options) { 
        $('#output_centur').removeClass().addClass('alert hidden').empty();
    }

});

