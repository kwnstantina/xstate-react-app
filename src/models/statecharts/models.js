import { createModel } from 'xstate/lib/model';

export const formInputs = createModel({
        name:'',
        email: '',
        password: '',
        phoneNumber:'',
        currentPage:1,
        friendName:'',
        friendEmail:'',
        friendNameTwo:'',
        friendEmailThree:'',
        totalMembersCount:''
  });