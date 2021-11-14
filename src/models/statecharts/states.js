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
    states:{
        stepOne:{
            on: {
                NEXT:  "stepTwo" ,
            }
          },
        stepTwo:{
            on: {
                NEXT: {
                  target: "stepThree",        
                },
            },
        },
        stepThree:{
                on: {
                    NEXT: {
                      target: "stepLast",
                      
                    }
                }
            },
        stepLast:{
          invoke: {
            id: "submitting",
            src: ctx => submit(ctx),
            onDone: "success",
            onError: "failure"

          }
      },
      failure: {
        on: {
          RETRY: "stepLast"
        }
      },
      success: {
        type: "final"
      }, 
    }, 
        guards:{
            ruleForTotalMembers:(context)=>{ return context.totalMembersCount>1},
        }
})


export const stepMachine = createMachine({
    initial: "editing",
    context: {
      values:{},
      errors:[]
    },
    states: {
      editing: {
        on: {
          CHANGE: {
            target: "editing",
            actions:assign({
              errors:(ctx,e)=>{
                let error=validate(e,ctx)
               // return  [...ctx.errors, error]  
               return ctx.errors=error
               
              },
                values: (ctx, e) => ({
                  ...ctx.values,
                  [e.key]: e.value, 
                }),
                
              })
        },
      }, 
    },

}
});