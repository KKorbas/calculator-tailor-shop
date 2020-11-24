const materialPrice = document.querySelector('#material-price');
const width = document.querySelector('#width');
const height = document.querySelector('#height');
const fit = document.querySelector('#fit');
const btn = document.querySelector('button');
const error = document.querySelector('.error');
const count = document.querySelector('.count')
const price = document.querySelector('.price')

const exrtraMaterial = 10;
const pernamentValue = 0.05;


const checkForm =()=>{
    if(materialPrice.value=='' || width.value=='' || height.value=="" || fit.value==0){
        error.textContent = 'Uzupełnij wszystkie pola.'
        count.style.display = 'none';
    } else {
        error.textContent = '';
        calculate()
    }
}

const calculate =()=>{
    const newMaterialPrice = parseFloat(materialPrice.value)/100;
    const newWidth = parseFloat(width.value);
    const newHeight = parseFloat(height.value);
    const newFit = parseFloat(fit.value)

    const finalPrice = (newWidth+exrtraMaterial)*newMaterialPrice+(newWidth+exrtraMaterial+newHeight*2)*pernamentValue+newFit*(newWidth+exrtraMaterial)

    price.textContent = finalPrice.toFixed(2);
    count.style.display = 'block'
}

btn.addEventListener('click', checkForm);