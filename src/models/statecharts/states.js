import {createMachine,assign} from 'xstate';
import {validate,submit} from "../../utils/functions/functions";

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
    context:{
      errors:null,
      nextStep:null,
      values:null,
      stepTwoValues:null,
      stepThreeValues:null,
      loading:false,
      step:1,
    },
    states:{
        stepOne:{
            on:{
                NEXT:{
                  target:'nextStep',
                  actions:'validateTotalNumbers'
            }
          },
        },
        stepTwo:{
            on: {
                NEXT: {
                  target: "nextStepTwo",    
                  actions:'validateStepTwoValues'    
                },
                PREVIOUS:{
                target:'stepOne',
                actions: 'previousStep',
            },
        },
      },
        stepThree:{
                on: {
                    NEXT: {
                      target: "stepLast",
                      actions:'validateStepThreeValues'                    
                    },
                    PREVIOUS:{
                      target:'stepTwo',
                      actions: 'previousStep',
                }
              }
            },
        stepLast:{
          on: {
            SUBMIT: {
               target: 'submit',
               actions:()=>  assign({loading:true}),
               },
            PREVIOUS:{
              target:'previouLastStep',
          }     
          }
      },
      submit:{
        invoke: {
          id: "submit",
          src: (ctx) => submit(ctx),
          onDone: {target:"success",actions:(ctx)=>assign({
            loading:false
          })},
          onError: {target:"failure",actions:'validateSubmit'}
        }
      },
      nextStep: {
        on: {
            '': [
                { target: 'stepTwo', cond: (context) =>context.nextStep>1 },
                { target: 'stepOne', cond: (context) =>Object.values(context.values).length<4},
                { target: 'stepLast' }
            ]
        }
    },
    nextStepTwo: {
      on: {
          '': [
              { target: 'stepThree', cond: (context) =>context.nextStep>2 },
              { target: 'stepLast',}
          ]
      }
  },
  previouLastStep:{
    on: {
      '': [
          { target: 'stepTwo', cond: (context) =>context.nextStep==="2" },
          { target: 'stepOne', cond: (context) =>context.nextStep==="1" },
          { target: 'stepThree',cond: (context) =>context.nextStep==="3" }
      ]
  }
  },

      failure: {
        on: {
          '': { target: 'stepLast' }
      },
    },
      success:  {
        on: {
          '': { target: 'stepOne' }
      },
      }   
  }
},
  {
    actions:{
        validateTotalNumbers:assign({
          nextStep: (ctx, e)=> e.totalNumber,
          values:(ctx,e)=>e.values,
          step:(ctx, e)=> e.totalNumber==='1'? "4":"2",
        }),
        validateStepTwoValues:assign({
          stepTwoValues:(e)=>e.values,
          step:3,      
        }),
        validateStepThreeValues:assign({
          stepThreeValues:(ctx,e)=>e.values,
          step:4,
        
        }),
      validateSubmit:assign({
          errors: (context, event) => event.data.text,
          loading:false,
     }),
      previousStep: assign({
       stepTwoValues:(ctx,e)=>e.stepTwoValues,
       values:(ctx,e)=>ctx.values,
       step:(ctx)=>ctx.step-1
    }),
  },
    guards:{
       validateForm:(context)=>{ return context.totalMembersCount>1}

  }
})


export const stepMachine = createMachine({
    initial: "editing",
    context: {
      values:{
      name:'',
      email:'',
      phoneNumber:'',
      totalMembers:'',
      secondFriendName:'',
      secondFriendEmail:'',
      thirdFriendName:'',
      thirdFriendEmail:''
    },
      errors:[],
    },
    states: {
      editing: {
        on: {
          CHANGE: {
            target: "editing",
            actions:assign({
              errors:(ctx,e)=>{
                let error=validate(e,ctx)
               return ctx.errors=error
              },
                values: (ctx, e) => ({
                  ...ctx.values,
                    [e.key]: e.value
                   
                }),    
              })         
        },
        INITIAL_VALUES: {
          target: "editing",
          actions:assign({
              values: (ctx,initial) => {
                if(!initial.initial){
                  return{
                    name:'',
                    email:'',
                    phoneNumber:'',
                    totalMembers:'',
                    secondFriendName:'',
                    secondFriendEmail:'',
                    thirdFriendName:'',
                    thirdFriendEmail:''
                  }
                }
                return initial.initial.reduce((obj,cur,i)=>{ 
                  if(cur.key==='name'){
                   return{  
                     name:cur.value,
                     ...obj
                   }
                  }else
                  if(cur.key==='email'){
                    return{            
                      email:cur.value,
                      ...obj
                    }
                   }else
                   if(cur.key==='phoneNumber'){
                    return{ 
                      ...obj,
                      phoneNumber: cur.value
                    }
                   }else
                   if(cur.key==='totalMembers'){
                    return{ 
                      ...obj,
                       totalMembers:cur.value
                    }
                   }
                 } ,{})                 
                 }
                })
           },
      }, 
    },
  }
});

