const token=~~[Math.random() * 12345678]

const pictures=['1.jpg','2.jpg','3.jpg']

function login(username){
    console.log('process token user now')
    return new Promise((success,failed)=>{
        setTimeout(()=>{
            if(username != "yuska_alfian")  failed("sorry wrong data"); 
            success({token})
        },200)
    })
}

function getUser(token){
    console.log('processing.. apiKey')
    return new Promise((success,failed)=>{
        if(!token) failed ("Sorry no token.cannot access")
          setTimeout(() => {
            success ({ apiKey: "x123" })
          }, 500);

    })
}

function getPictures(apiKey){
    console.log("processing.. pictures");
    return new Promise((success,failed)=>{
        if(!apiKey) failed ("no apikey key")
        setTimeout(()=>{
            success ({pic:pictures})
        },1500)
        
    })
}

async function userDisplay(){
    
    const {token}= await login('yuska_alfian')
    const {apiKey}= await getUser(token)
    const {pic}= await getPictures(apiKey)

    console.log(`
            'token anda adalah' ${token}
            'apikey anda adalah'${apiKey}
            'data picture anda adalah' ${pic}    
    `)
}

userDisplay()

// const user=login("123456")
// user.then(function(response){
//     const {token}=response
//     getUser(token).then(function(response){
//         console.log({response})
//             const {apiKey}=response
//             console.log(apiKey)
//     }).catch(err=>console.log(err))
// }).catch(err=>console.log(err))





























// const token=~~[Math.random() * 12345678]

// const pictures=['1.jpg','2.jpg','3.jpg']

// function login(username,callback){
//     console.log('proses...memvalidasi data..')
//     setTimeout(()=>{
//         callback({token,username})
//     },200)
// }

// function getUser(token){
//     if(token)return {apiKey:'x123'}

// }

// function getPictures(apiKey){
//      if(apiKey)return pictures
// }

// login('aaa', function(response){
//     console.log('kelar =>',response)
// })


// // const user= login('Yuska_alfian')
// // console.log(user.token)

// // const {apiKey}=getUser(user.token)
// // console.log(apiKey)

// // const getUserPictures=getPictures(apiKey)
// // console.log(getUserPictures)