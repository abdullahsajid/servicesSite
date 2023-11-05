let openModel = document.querySelector('.open-box')
let closeModel = document.querySelector('.close-box')
let boxContent = document.querySelector('.resp-model-show')

openModel.addEventListener('click',()=>{
    boxContent.classList.add('show-box-content');
    openModel.style.display = "none"
    closeModel.style.display = "flex"
    document.querySelector('#rm-mr').classList.add('mr-remove')
    document.body.classList.add('body-model-open')
    document.querySelector('.model-open').classList.add('model-open-mt')
    document.querySelector('.option-comp').classList.add('resp-model-open-opacity')
})

closeModel.addEventListener('click',()=>{
    boxContent.classList.remove('show-box-content');
    openModel.style.display = "flex"
    closeModel.style.display = "none"
    document.querySelector('#rm-mr').classList.remove('mr-remove')
    document.body.classList.remove('body-model-open')
    document.querySelector('.model-open').classList.remove('model-open-mt')
    document.querySelector('.option-comp').classList.remove('resp-model-open-opacity')
})