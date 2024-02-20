import { createApp } from 'vue';
import { createStore as _createStore } from 'vuex';


export function createStore() {
    const store = _createStore({
     state()  {
         return {
              patients: 0,
          }
            

        },
       mutations: {
        ADD_PATIENT (state) {
            state.patients++;
        }
       }
    });

  
    return store;
}

