// post method
const myform = document.getElementById('myForm');

        myform.addEventListener('submit',function(e){
            e.preventDefault();

            const formdata = new FormData(this);
            const searchParms = new URLSearchParams();

            for(const pair of formdata) {
                searchParms.append(pair[0],pair[1]);
            }

            fetch('https://jsonplaceholder.typicode.com/posts',{
                method: 'post',
                body: searchParms
            }).then(function(response){
                return response.text();
            }).then(function(text){
                console.log(text);
            }).catch(function(error){
                console.error(error);
            })
        });
// Image uploading function
        function readURL(input) {
            if (input.files && input.files[0]) {
                var reader = new FileReader();

                reader.onload = function (e) {
                    $('#blah')
                        .attr('src', e.target.result)
                        .width(150)
                        .height(80);
                };

                reader.readAsDataURL(input.files[0]);
            }
        }
        var loadFile = function(event) {
            var reader = new FileReader();
            reader.onload = function(){
              var output = document.getElementById('output');
              output.src = reader.result;
            };
            reader.readAsDataURL(event.target.files[0]);
          };

          function readsURL(input) {
            if (input.files && input.files[0]) {
                var reader = new FileReader();

                reader.onload = function (e) {
                    $('#blah1')
                        .attr('src', e.target.result)
                        .width(150)
                        .height(80);
                };

                reader.readAsDataURL(input.files[0]);
            }
        }
        var loadFile = function(event) {
            var reader = new FileReader();
            reader.onload = function(){
              var output = document.getElementById('output');
              output.src = reader.result;
            };
            reader.readAsDataURL(event.target.files[0]);
          };