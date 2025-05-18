const form = document.querySelector('form')
form.addEventListener('submit',function(e){
    e.preventDefault()

    const height = parseInt(document.querySelector('#height').value);
    const weight = parseInt(document.querySelector('#weight').value);
    const results = (document.querySelector('#result'));
    
    if(height === '' || height < 0 || isNaN(height)){
        results.textContent = "Please give a valid data";
    }
    if(weight === '' || weight < 0 || isNaN(weight)){
        results.textContent = "Please give a valid data";
    }
    else{
     const bmi = (weight/((height*height)/10000).toFixed(2))
     results.innerHTML = `<span>${bmi}</span>`;
    }


})