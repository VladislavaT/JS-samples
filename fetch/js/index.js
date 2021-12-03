const url = 'https://jsonplaceholder.typicode.com/users'; 
let out = '';
const spinner = document.getElementById('spinner');
const container = document.querySelector('.container')

function showSpinner() {
    spinner.className = 'show';
    setTimeout(() => {
      spinner.className = spinner.className.replace('show', '');
    }, 500);
  }

fetch(url)
    .then(function(response) {
        return response.json();
    })
    .then((data) => {
        data.forEach((data) => {
            out +=
            `<div class = 'widthDiv' data-id ='${data.id}'>
            
            <span id='address'>
            <p>
            Address: 
                <p class ='margin'  contenteditable ='true'>street: ${data.address.street}</p>
                <p class ='margin'  contenteditable ='true'>suite: ${data.address.suite}</p>
                <p class ='margin'  contenteditable ='true'>city: ${data.address.city}</p>
                <p class ='margin'  contenteditable ='true'>zipcode: ${data.address.zipcode}</p>
                <span class ='margin'  contenteditable ='true'>geo: 
                    <p class ='margin'>lat:${data.address.geo.lat}</p>
                    <p class ='margin'>lng:${data.address.geo.lng}</p>
                </span>
            </span>
            </p>
    
            <p>
            company: 
            <span id='company' contenteditable ='true'>
            <p class ='margin'  contenteditable ='true'>name: ${data.company.name}</p>
            <p class ='margin'  contenteditable ='true'>catchPhrase: ${data.company.catchPhrase}</p>
            <p class ='margin'  contenteditable ='true'>bs: ${data.company.bs}</p>
            </span>
            </p>
    
            <p>
            email: 
            <span id='email' contenteditable ='true'>${data.email}</span>
            </p>
    
            
            <p>
            id: 
            <span  id='id' contenteditable ='true'>${data.id}</span>
            </p>
    
            <p>
            name: 
            <span id='name' contenteditable ='true'>${data.name}</span>
            </p>
    
            <p>
            username: 
            <span id='username' contenteditable ='true'>${data.username}</span >
            </p>
    
            <p>
            website: 
            <span id='website' contenteditable ='true'>${data.website}</span>
            </p>
    
            <button class ='margin' name='Update' id ='UPDATE'>Update</button>
            <button class ='margin' name='Delete' id ='DELETE'>Delete</button>
    
            </div>
            `;
        })
        
        container.innerHTML = out;
    })
    .catch(function (err) {
        console.log('error:', err)
    })
            
container.addEventListener('click', function showHello(element) {
    element.preventDefault();
    let deleteBtn = element.target.id === 'DELETE';
    let updBtn = element.target.id === 'UPDATE';
    const parent = element.target.parentElement;
    let id = element.target.parentElement.dataset.id;
    // DELETE 
    if(deleteBtn){
        showSpinner();
        fetch(`${url}/${id}`,{
            method: 'DELETE'
        })
        .then((response) => response.json())
        .then(() => parent.remove())
    }

    if(updBtn){
        showSpinner();

        let addressContent = parent.querySelector('#address').textContent;
        let companyContent = parent.querySelector('#company').textContent;
        let emailContent = parent.querySelector('#email').textContent;
        let idContent = parent.querySelector('#id').textContent;
        let nameContent = parent.querySelector('#name').textContent;
        let usernameContent = parent.querySelector('#username').textContent;
        let websiteContent = parent.querySelector('#website').textContent;

        fetch(`${url}/${id}`,{
            method: 'PATCH',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify({
                address:addressContent,
                company:companyContent,
                email:emailContent,
                id:idContent,
                name:nameContent,
                username:usernameContent,
                website:websiteContent
            })
        })
        .then((response) => response.json())
        .then((data) => console.log(data))
    


    }
})