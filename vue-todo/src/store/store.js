/*
package.json파일(pom.xml과 흡사?)에서 불러온 Library들을 node_modules에 저장
이를 import를 통해서 적용시킴 (Back단과 동일)
*/
import Vue from 'vue' 
import Vuex from 'vuex'

Vue.use(Vuex); 
// use를 통해서 등록한 라이브러리를 Plugin하여 전역에서 사용할 수 있게 처리

const storage = {
    fetch() {
        const arr = [];
        if(localStorage.length > 0) {

            for(var i = 0; i < localStorage.length; i++) {
                if(localStorage.key(i) !== 'loglevel:webpack-dev-server') {
                    arr.push(JSON.parse(localStorage.getItem(localStorage.key(i)))); //Object인 localStorage값을 todoItems에 넣어주기
                    
                }
            }
        }
    }
};

export const store = new Vuex.Store({
    // export 를 통해서 다른데서 import하여 사용가능
    state: {
        // headerText: 'TODO it!',
        todoItems: storage.fetch
    }
});