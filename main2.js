const token = ~~[Math.random() * 12345678];

const pictures = ["1.jpg", "2.jpg", "3.jpg"];

function login(username, callback) {
  console.log("process token user now");
  setTimeout(() => {
    callback({ token, username });
  }, 200);
}

function getUser(token, callback) {
  console.log("processing.. apiKey");
  if (token)
    setTimeout(() => {
      callback({ apiKey: "x123" });
    }, 500);
}

function getPictures(apiKey, callback) {
  console.log("processing.. pictures");
  if (apiKey)
    setTimeout(() => {
      callback({ pic: pictures });
    }, 1500);
}

login("yuska", function (response) {
  const { token } = response;
  // console.log('token=>',token)
  getUser(token, function (response) {
    const { apiKey } = response;
    getPictures(apiKey, function (response) {
      const { pic } = response;
      console.log(pic);
    });
  });
});

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
