
import Vue from 'vue' 
import Vuex from 'vuex'
import todoApp from './modules/todoApp'
// import * as getters from './getters'
// import * as mutations from './mutations'

Vue.use(Vuex); 

export const store = new Vuex.Store({
    moduels: {
        todoApp
    }
    // state: {
    //     // headerText: 'TODO it!',
    //     todoItems: storage.fetch()
    // },
    // getters,
    // mutations

});