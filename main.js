$(document).ready(function(){
  $('.form').each(function() {
      $(this).submit (function(e) {
        if (!this.checkValidity()) {
          e.preventDefault();
          $(this).addClass('was-validated');
        }
      });
    });
})