const loginInfiJS = () =>{

    const userEmail =document.getElementById('emaile-adrres');
    const email =userEmail.value ;

    const userPassword =document.getElementById('password-input');
    const password =userPassword.value;

    if(email ==='' || password ===''){
      alert('Please Fill Up All Your Information')
   }
    else{
    // 1  Masud Rana
    if(email === '7484301' && password ==='masud123'){
       window.location.href = 'All Html/user1.html';
    }

    // 7484302  Utsho
    else if(email === '7484302' && password ==='7484302'){
        window.location.href = 'All Html/user2.html';
    }
    //7484303    Moni
    else if(email === '7484303' && password ==='7484303'){
        window.location.href = 'All Html/user3.html';
     }
    // 7484304   Rupa
    else if(email === '7484304' && password ==='7484304'){
        window.location.href = 'All Html/user4.html';
     }
    // 7484305  Saifillah
    else if(email === '7484305' && password ==='7484305'){
        window.location.href = 'All Html/user5.html';
     }
    //  7484306  Hasad
    else if(email === '7484306' && password ==='7484306'){
        window.location.href = 'All Html/user6.html';
    }
    // 7484307  Jibon
    else if(email === '7484307' && password ==='7484307'){
        window.location.href = 'All Html/user7.html';
     }
    //  7484308 Arafat
    else if(email === '7484308' && password ==='7484308'){
        window.location.href = 'All Html/user8.html';
     }
    //  7484309   Koci
    else if(email === '7484309' && password ==='7484309'){
        window.location.href = 'All Html/user9.html';
     }
    //  7484310 Himel
    else if(email === '7484310' && password ==='7484310'){
        window.location.href = 'All Html/user10.html';
     }
    //  7484311  Habib
    else if(email === '7484311' && password ==='7484311'){
        window.location.href = 'All Html/user10.html';
     }
    //  7484312
    else if(email === '7484312' && password ==='7484312'){
        window.location.href = 'dashbord.html';
     }
    //  7484313
    else if(email === '7484313' && password ==='7484313'){
        window.location.href = 'dashbord.html';
     }
    //  7484314
    else if(email === '7484314' && password ==='7484314'){
        window.location.href = 'dashbord.html';
     }
    //  7484315
    else if(email === '7484315' && password ==='7484315'){
        window.location.href = 'dashbord.html';
     }
    //  7484316
    else if(email === '7484316' && password ==='7484316'){
        window.location.href = 'dashbord.html';
     }
    //  7484317
    else if(email === '7484317' && password ==='7484317'){
        window.location.href = 'dashbord.html';
     }
    //  7484318
    else if(email === '7484318' && password ==='7484318'){
        window.location.href = 'dashbord.html';
     }
    //  7484319
    else if(email === '7484319' && password ==='7484319'){
        window.location.href = 'dashbord.html';
     }
    //  7484320
    else if(email === '7484320' && password ==='7484320'){
        window.location.href = 'dashbord.html';
     }
    //  7484321
    else if(email === '7484321' && password ==='7484321'){
        window.location.href = 'dashbord.html';
     }
    //  7484322
    else if(email === '7484322' && password ==='7484322'){
        window.location.href = 'dashbord.html';
     }
    //  7484323
    else if(email === '7484323' && password ==='7484323'){
        window.location.href = 'dashbord.html';
     }
    //  7484324
    else if(email === '7484324' && password ==='7484324'){
        window.location.href = 'dashbord.html';
     }
    //  7484325
    else if(email === '7484325' && password ==='7484325'){
        window.location.href = 'dashbord.html';
     }
    //  7484326
    else if(email === '7484326' && password ==='7484326'){
        window.location.href = 'dashbord.html';
     }
    //  7484327
    else if(email === '7484327' && password ==='7484327'){
        window.location.href = 'dashbord.html';
     }
    //  7484328
    else if(email === '7484328' && password ==='7484328'){
        window.location.href = 'dashbord.html';
     }
    //  7484329
    else if(email === '7484329' && password ==='7484329'){
        window.location.href = 'dashbord.html';
     }
    //  7484330
    else if(email === '7484330' && password ==='7484330'){
        window.location.href = 'dashbord.html';
     }
   
    else{
     alert('Invalide Email Or Password')
    }
   }
 
//  })
}


 document.getElementById('submit-btn') .addEventListener('click',function(){
    loginInfiJS();
 });

 document.getElementById('password-input').addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
       loginInfiJS();
    }
});
 document.getElementById('emaile-adrres').addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
       loginInfiJS();
    }
});

if(email ===''){
   alert('please give your email or id')
}