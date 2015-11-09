window.Parsley.on('field:error', function() {
  /* This global callback will be called for any field that fails validation. */
/*   console.log('Validation failed for: ', this.$element); */
  $(this.$element).addClass('invalid')
});

function getUrlParameter(name) {
        name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
        var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
        results = regex.exec(location.search);
        return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
    }
    var qsp = 'villa',
        para = getUrlParameter(qsp);

$('#villa').val(para);   //  assign URL param to select field