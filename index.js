let contentContainer = document.querySelector('.content')
let watch = document.querySelector('.watchImg')


contentContainer.addEventListener('mousemove',(e)=>{
    let xAxis = (window.innerWidth/2 - e.pageX)/25
    let yAxis = (window.innerHeight/2 - e.pageY)/30

    watch.style.transform = `translate(${xAxis}px,${yAxis}px)`
})