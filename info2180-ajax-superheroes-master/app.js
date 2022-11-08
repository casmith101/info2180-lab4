window.onload= function(){
    let button= this.document.querySelector('#btn')
    let search= document.querySelector('#search')
    let searchValue = search.value;

    button.addEventListener("click", function(element){
        element.preventDefault();

        fetch('http://localhost/info2180-lab4/info2180-ajax-superheroes-master/superheroes.php?query='+ searchValue)
            .then(response => {
                if (response.ok){
                    return response.text()
                }else{
                    return Promise.reject('Something went wrong')
                }
            })
            .then(data => {
                let result = document.querySelector('#result');
                result.innerHTML = data;
                /*console.log(data);*/
            })
    })

    /*$.ajax('http://localhost/info2180-lab4/info2180-ajax-superheroes-master/superheroes.php', {
        method: 'GET'
    }).done(function(response) {
        result.text(response);
        result.innerHTML
    })*/
}
