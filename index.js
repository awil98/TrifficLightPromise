//huge courtesy to my friend Florin for css of the traffic light. https://twitter.com/florinpop1705

let active = 0
let lights = document.querySelectorAll('.circle')

const switchLight = (currentLight) =>{
    currentLight.classList.add(currentLight.getAttribute('color'));
}
const turnOffLight = (currentLight) =>{
    currentLight.className = 'circle'
}

const changeLight = ()=>{
   return new Promise((resolve, reject)=>{
        switchLight(lights[active])
        setTimeout(()=>{
            turnOffLight(lights[active])
            resolve(`${lights[active++].getAttribute('color')} Light Toggled`)
            console.log(active)
        }, 4000)
   })
}

(async function() {
    try{
        await changeLight()
        await changeLight()
        await changeLight()
    }catch(err){
        console.log(err)
    }
})();

