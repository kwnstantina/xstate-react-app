

export const validate=(e,ctx)=> {

  const regEmail= /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(e.key==="name" &&  !(/^[a-zA-Z]+$/).test(e.value)){
          return {[e.key]:"Please add a correct name"};
    }

    if(e.key==="email" &&  !regEmail.test(e.value)){
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

export function submit(values) {
  console.log("Submitting", values);

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      return Math.random() < 0.4 || values.one === "error"
        ? reject()
        : resolve();
    }, 1000000);
  });
}
  