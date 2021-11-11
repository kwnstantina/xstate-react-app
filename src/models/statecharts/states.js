import {Machine,createMachine} from 'xstate';

export const LightCheckbox=createMachine({
    id:'light',
    initial:"swiched_on",
    states:{
        swiched_off:{ 
            on:{
                SWITCH_ON:{
                    target: "swiched_on"
                }
            } 
        },
        swiched_on:{  
            on:{
                SWITCH_OFF:{
                    target: "swiched_off"
                }
            } 
        },
      
    }
});


export const FormState=createMachine({
    id:'multiStep',
    initial:"stepOne",
    context: {
        name:'',
        email: '',
        password: '',
        phoneNumber:'',
        currentPage:1,
        friendName:'',
        friendEmail:''
      },
    states:{
        apiResponses: {},
        validationErrors:{},
        servicesErrors: {},
    }
})