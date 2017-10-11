import * as firebase from './config/FirebaseConfigurer';


let firebaseDatabase = firebase.firebaseConfig.database();

let fb = firebaseDatabase;

// fb.ref('/person').once('value',(dataSnap)=>{
//    dataSnap.forEach((childs)=>{
//       console.log('Nama : ' + childs.child('nama').val());
//       childs.child('pets').forEach((pets)=>{
//          console.log(pets.val());
//       });
//       console.log('-------------------');
//    });
// });

fb.ref('/posts').once('value',(dataSnap)=>{
    if(dataSnap.key !== 'postStars'){
        dataSnap.forEach((childs)=>{
            console.log(childs.val());
        });
    }
}).then((selesai)=>{
    bacaPostStars();
},(gagal)=>{
    console.log('Error baca data ke firebase');
});

let bacaPostStars = ()=>{
  fb.ref('/posts/postStars').orderByValue().once('value',(dataStars)=>{
     dataStars.forEach((stars)=>{
       console.log(`Nama : ${stars.key} , dengan nilai : ${stars.val()}`);
     });
  });
};


/*
        FILTERING DATA DI FIREBASE
// fb.ref('/person').orderByChild('nama').endAt('Arief').once('value',(datas)=>{
//     datas.forEach((childs)=>{
//        console.log(childs.val());
//     });
// });

// fb.ref('/person').orderByChild('nama').startAt('Arief').once('value',(datas)=>{
//     datas.forEach((childs)=>{
//         console.log(childs.val());
//     });
// });

// fb.ref('/person').orderByChild('nama').equalTo('Toro').once('value',(datas)=>{
//     datas.forEach((childs)=>{
//         console.log(childs.val());
//     });
// });
        FILTERING DATA DI FIREBASE
 */

/*
    SORTING DATA DI FIREBASE
// fb.ref('/person/002/pets').orderByKey().once('value',(datas)=>{
//     datas.forEach((childs)=>{
//         console.log(childs.val());
//     });
// });

// fb.ref('/person/002/pets').orderByValue().once('value',(datas)=>{
//     datas.forEach((childs)=>{
//         console.log(childs.val());
//     });
// });

// fb.ref('/person/002/pets').limitToLast(2).once('value',(datas)=>{
//     datas.forEach((childs)=>{
//         console.log(childs.val());
//     });
// });
    SORTING DATA DI FIREBASE
 */

/*CUSTOM ORDER DAN FILTER*/
// fb.ref('/person/002/pets').orderByValue().limitToFirst(2).once('value',(datas)=>{
//     datas.forEach((childs)=>{
//         console.log(childs.val());
//     });
// });
/*CUSTOM ORDER DAN FILTER*/



