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
    if(email === '627831101' && password ==='masud123'){
       window.location.href = 'user1.html';
    }

    // 627831102  Utsho
    else if(email === '627831102' && password ==='627831102'){
        window.location.href = 'user2.html';
    }
    //627831103    Moni
    else if(email === '627831103' && password ==='627831103'){
        window.location.href = 'user3.html';
     }
    // 627831104   Rupa
    else if(email === '627831104' && password ==='627831104'){
        window.location.href = 'user4.html';
     }
    // 627831105  Saifillah
    else if(email === '627831105' && password ==='627831105'){
        window.location.href = 'user5.html';
     }
    //  627831106  Hasad
    else if(email === '627831106' && password ==='627831106'){
        window.location.href = 'user6.html';
    }
    // 627831107  Jibon
    else if(email === '627831107' && password ==='627831107'){
        window.location.href = 'user7.html';
     }
    //  627831108 Arafat
    else if(email === '627831108' && password ==='627831108'){
        window.location.href = 'user8.html';
     }
    //  627831109   Koci
    else if(email === '627831109' && password ==='627831109'){
        window.location.href = 'user9.html';
     }
    //  627831110 Himel
    else if(email === '627831110' && password ==='627831110'){
        window.location.href = 'user10.html';
     }
    //  627831111  Habib
    else if(email === '627831111' && password ==='627831111'){
        window.location.href = 'user10.html';
     }
    //  627831112
    else if(email === '627831112' && password ==='627831112'){
        window.location.href = 'dashbord.html';
     }
    //  627831113
    else if(email === '627831113' && password ==='627831113'){
        window.location.href = 'dashbord.html';
     }
    //  627831114
    else if(email === '627831114' && password ==='627831114'){
        window.location.href = 'dashbord.html';
     }
    //  627831115
    else if(email === '627831115' && password ==='627831115'){
        window.location.href = 'dashbord.html';
     }
    //  627831116
    else if(email === '627831116' && password ==='627831116'){
        window.location.href = 'dashbord.html';
     }
    //  627831117
    else if(email === '627831117' && password ==='627831117'){
        window.location.href = 'dashbord.html';
     }
    //  627831118
    else if(email === '627831118' && password ==='627831118'){
        window.location.href = 'dashbord.html';
     }
    //  627831119
    else if(email === '627831119' && password ==='627831119'){
        window.location.href = 'dashbord.html';
     }
    //  627831120
    else if(email === '627831120' && password ==='627831120'){
        window.location.href = 'dashbord.html';
     }
    //  627831121
    else if(email === '627831121' && password ==='627831121'){
        window.location.href = 'dashbord.html';
     }
    //  627831122
    else if(email === '627831122' && password ==='627831122'){
        window.location.href = 'dashbord.html';
     }
    //  627831123
    else if(email === '627831123' && password ==='627831123'){
        window.location.href = 'dashbord.html';
     }
    //  627831124
    else if(email === '627831124' && password ==='627831124'){
        window.location.href = 'dashbord.html';
     }
    //  627831125
    else if(email === '627831125' && password ==='627831125'){
        window.location.href = 'dashbord.html';
     }
    //  627831126
    else if(email === '627831126' && password ==='627831126'){
        window.location.href = 'dashbord.html';
     }
    //  627831127
    else if(email === '627831127' && password ==='627831127'){
        window.location.href = 'dashbord.html';
     }
    //  627831128
    else if(email === '627831128' && password ==='627831128'){
        window.location.href = 'dashbord.html';
     }
    //  627831129
    else if(email === '627831129' && password ==='627831129'){
        window.location.href = 'dashbord.html';
     }
    //  627831130
    else if(email === '627831130' && password ==='627831130'){
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