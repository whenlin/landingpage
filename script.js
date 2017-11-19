function readURL(input) {
            if (input.files && input.files[0]) {
                var reader = new FileReader();

                reader.onload = function (e) {
                    $('#blah')
                        .attr('src', e.target.result)
                        .width(150)
                        .height(200);
                };
                
                $('#message').html('<div class="alert alert-success" role="alert"><strong>File is an image! </strong></div>');
                
                reader.readAsDataURL(input.files[0]);
            } else {
                $('#message').html('<div class="alert alert-danger" role="alert">File is <strong>NOT</strong> an image</div>');
            }
        }