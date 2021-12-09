import emailjs from 'emailjs-com';

export const validate=(e,ctx)=> {

  const regEmail= /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if((e.key==="name" || e.key==="secondFriendName" || e.key==="thirdFriendName") &&  !(/^[a-zA-Z]+$/).test(e.value)){
          return {[e.key]:"Please add a correct name"};
    }

    if((e.key==="email" || e.key==="secondFriendEmail" || e.key==="thirdFriendEmail" ) &&  !regEmail.test(e.value)){
         return {[e.key]:"Please add a valid email"};
    }

    if(e.key==="phoneNumber" &&  !(/^[0-9]+$/).test(e.value)){
      return  {[e.key]:"Please add a correct  phone number"};
    }
    if(e.key==="totalMembers" &&  e.value>3){
      return  {[e.key]:"Max total number 3"};
    }


    return [];
}

export const  submit= async (values)=> {
  let valuesToSend=values.values;
  let tempParams = {
    to_name :valuesToSend.name,
    from_name:'kwnna',
    email:values,
    email :valuesToSend.email,
    message :"Welcome to our team",
   reply_to:valuesToSend.email
   }
let result=await  emailjs.send('serviceId', 'templateId', tempParams,'userId');
return result.json();
}


export const calculateNavigationStep=(totalPages)=>{
  if(totalPages==='1'){
    return 4
  }
  else{
    return 2
  }
}
  