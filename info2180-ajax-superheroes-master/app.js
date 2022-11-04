window.onload= function(){
    let button= this.document.querySelector('#btn')

    button.addEventListener("click", function(element){
        element.preventDefault();

        fetch('http://localhost/info2180-lab4/info2180-ajax-superheroes-master/superheroes.php')
            .then(response => {
                if (response.ok){
                    return response.text()
                }else{
                    return Promise.reject('Something went wrong')
                }
            })
            .then(data => {
                let list = document.querySelector('#list');
                list.innerHTML = data;
                alert(data);
            })
    })
}
