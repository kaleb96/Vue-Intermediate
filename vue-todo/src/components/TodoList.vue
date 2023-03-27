<template>
    <div>
        <!-- ul 단축키
            ul>li*3 ul 태그 안에 li태그 3개를 만듬
        -->
        <ul>
            <!-- todoItems에서 todoitem 만큼 반복한다 -->
            <li v-for="(todoItem, index) in todoItems" :key="todoItem.item" class="shadow">
                <i class="checkBtn fa-sharp fa-solid fa-check" v-bind:class="{checkBtnCompleted: todoItem.completed}"
                v-on:click="toggleComplete(todoItem, index)"></i>
                <span v-bind:class="{textCompleted: todoItem.completed}">{{ todoItem.item }}</span>
                <!-- v-bind를 통해 textCompleted의 값에 따른 todoItem.item값의 textCompleted 스타일링이 출력됨 -->
                <span class="removeBtn" v-on:click="removeTodo(todoItem, index)">
                    <i class="fa-solid fa-trash-can"></i>
                </span>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    data : function() {
        return {
            todoItems: []
        }
    },
    methods: {
        removeTodo: function(todoItem, index) {
            console.log(todoItem, index);
            localStorage.removeItem(todoItem);
            this.todoItems.splice(index, 1);
        },

        toggleComplete: function(todoItem, index) {
            console.log(todoItem, index);
            todoItem.completed = !todoItem.completed;
            localStorage.removeItem(todoItem.item);
            localStorage.setItem(todoItem.item, JSON.stringify(todoItem));
        }
    },

    created : function() {
        //localStorage의 데이터를 담기
        if(localStorage.length > 0) {

            for(var i = 0; i < localStorage.length; i++) {
                if(localStorage.key(i) !== 'loglevel:webpack-dev-server') {
                   
                    // this.todoItems.push(localStorage.key(i)); 키의 값 넣기
                    // localStorage.getItem(localStorage.key(i)); localStorage의 value 값 받기
                    // console.log(JSON.parse(localStorage.getItem(localStorage.key(i)))); localStorage 값 확인
                    this.todoItems.push(JSON.parse(localStorage.getItem(localStorage.key(i)))); //Object인 localStorage값을 todoItems에 넣어주기
                    
                }
            }
        }
    },


}
</script>

<style scoped>
    ul {
        list-style-type: none;
        padding-left: 0px;
        margin-top: 0;
        text-align: left;
    }

    li  {
        display: flex;
        min-height: 50px;
        height: 50px;
        line-height: 50px;
        margin: 0.5rem 0;
        padding: 0 0.9rem;
        background: white;
        border-radius: 5px;
    }

    .checkBtn {
        line-height: 45px;
        color: #62acde;
        margin-right: 5px;
    }

    .checkBtnCompleted {
        color: #b3adad;
    }

    .textCompleted {
        text-decoration: line-through;
        color: #b3adad;
    }

    .removeBtn {
        margin-left: auto;
        color: #de4343;
    }
</style>

