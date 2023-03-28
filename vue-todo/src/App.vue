<template>
  <div id="app">
    <TodoHeader/>
    <TodoInput v-on:addTodoItem="addOneItem"></TodoInput>
    <TodoList v-bind:propsdata="todoItems" 
        v-on:removeItem="removeOneItem" 
        v-on:toggleItem="toggleOneItem"></TodoList>
    <TodoFooter v-on:clearAll="clearAllItems"></TodoFooter>
  </div>
</template>

<script>
import TodoHeader from './components/TodoHeader.vue'
import TodoInput from './components/TodoInput.vue'
import TodoList from './components/TodoList.vue'
import TodoFooter from './components/TodoFooter.vue'

export default {
  data: function() {
    return {
      todoItems: []
    }
  },
  /*
    ES5 방식
    var my_cmp = {
      template: '<div>my component</div>'
    };

    new Vue({
      el: '',
      components: {
        'my-cmp': my_cmp
      }
    });
    
  */
  created : function() {
        //localStorage의 데이터를 담기
        if(localStorage.length > 0) {

            for(var i = 0; i < localStorage.length; i++) {
                if(localStorage.key(i) !== 'loglevel:webpack-dev-server') {
                    this.todoItems.push(JSON.parse(localStorage.getItem(localStorage.key(i)))); //Object인 localStorage값을 todoItems에 넣어주기
                    
                }
            }
        }
    },
  
  components: {
    //ES6방식
    // 컴포넌트 태그명 : 컴포넌트 내용
    'TodoHeader' : TodoHeader,
    'TodoInput' : TodoInput,
    'TodoList' : TodoList,
    'TodoFooter' : TodoFooter
  },

  methods: {

    addOneItem: function(todoItem) {
      var obj = {completed: false, item: todoItem};
                localStorage.setItem(todoItem, JSON.stringify(obj));
                //콘솔의 애플리케이션에서 로컬스토리지 > 에서 저장된 값을 확인 할 수 있음
      this.todoItems.push(obj);
    },

    removeOneItem: function(todoItem, index) {
            localStorage.removeItem(todoItem.item);
            this.todoItems.splice(index, 1);
    },

    toggleOneItem: function(todoItem, index) {
            //todoItem.completed = !todoItem.completed;
            this.todoItems[index].completed = !this.todoItems[index].completed;
            localStorage.removeItem(todoItem.item);
            localStorage.setItem(todoItem.item, JSON.stringify(todoItem));
    },

    clearAllItems: function() {
      localStorage.clear();
      this.todoItems = [];
    }
  }
}
</script>

<style>
  body {
    text-align: center;
    background-color: #f6f6f8;
  }

  input {
    border-style: groove;
    width: 200px;
  }

  button {
    border-style: groove;
  }

  .shadow {
    box-shadow: 5px 10px 10px rgba(0, 0, 0, 0.03);
  }
</style>
