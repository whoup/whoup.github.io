'use strict'

$( document ).ready(function() {
  Parse.initialize("hURi3JLB3HegEFsSplfjjmeyEzup0xk5BWSp6q6U", "mK7YFExlvlH85Exau5LaujOWxZEC6tvBIdugjgRN");
  $("#signup").submit(function(e) {
    e.preventDefault();
    var email_re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    var name_input = $('#name-field').val();
    var email_input = $('#email-field').val();
    if (name_input != null && name_input != "") {
      if(email_re.test(email_input) ) {
        $('submit-button').html('Saving...');
        var Lead = Parse.Object.extend("Lead");
        var lead = new Lead();
        lead.save({name: name_input, email: email_input}).then(function(object) {
          $('#form-wrapper').addClass('hidden');
          $('#success-message').removeClass('hidden');
        });
      } else {
        $('#email-field').addClass('error');
      }
    } else {
      $('#name-field').addClass('error');
      if(!email_re.test(email_input) ) {
        $('#email-field').addClass('error');
      }
    }
  });
});
