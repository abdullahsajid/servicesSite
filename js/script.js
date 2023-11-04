let openModel = document.querySelector('.open-box')
let closeModel = document.querySelector('.close-box')
let boxContent = document.querySelector('.resp-model-show')

openModel.addEventListener('click',()=>{
    boxContent.classList.add('show-box-content');
    openModel.style.display = "none"
    closeModel.style.display = "flex"
    document.querySelector('#rm-mr').classList.add('mr-remove')
})

closeModel.addEventListener('click',()=>{
    boxContent.classList.remove('show-box-content');
    openModel.style.display = "flex"
    closeModel.style.display = "none"
    document.querySelector('#rm-mr').classList.remove('mr-remove')
})