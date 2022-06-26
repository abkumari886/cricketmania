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

        function readURL(input) {
            if (input.files && input.files[0]) {
                var reader = new FileReader();

                reader.onload = function (e) {
                    $('#img')
                        .attr('src', e.target.result)
                        .width(150)
                        .height(40);
                };

                reader.readAsDataURL(input.files[0]);
            }
        }