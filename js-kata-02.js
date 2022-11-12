//kata 02.js

const playWithString = function(str){

    const camelCase = str   
                    .split(' ')
                    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    
    //console.log(`#${camelCase.join('')}`)
     const hastagString =  `#${camelCase.join('')}`
    
    console.log(hastagString.length>140 ? false : hastagString)
    

   
}

//console.log (playWithString(' Hello Word sdfff sdsd  sdsd') )
playWithString('Write here your text') 



