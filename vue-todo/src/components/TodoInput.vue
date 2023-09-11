<template>
  <div class="inputBox shadow">
    <input type="text" v-model="newTodoItem" v-on:keyup.enter="addTodo">
    <!-- <button v-on:click="addTodo">Add</button> -->
    <span class="addContainer" v-on:click="addTodo">
        <i class="fas fa-plus addBtn"></i>
    </span>

    <Modal v-if="showModal" v-on:close="showModal = false">
        <h3 slot="header">Warning!</h3>
        <h4 slot="body">Type Something</h4>
        <h5 slot="footer">Enter after type contents</h5>
    </Modal>

  </div>
</template>

<script>
import Modal from './common/Modal.vue';

export default {
    data: function() {
        return {
            newTodoItem: "",
            showModal: false
        }
    },
    methods: {
        addTodo: function() {
            if(this.newTodoItem !== '') {
                const item = this.newTodoItem.trim();
                this.$store.commit('addOneItem', item);
                this.clearInput();
            } else {
                this.showModal =!this.showModal;
            }
        },
        clearInput: function() {
            this.newTodoItem='';
        }
    },
    components: {
        Modal
    }
}
</script>

<style scoped>
    input:focus {
        outline: none;
    }

    .inputBox {
        background: white;
        height: 50px;
        line-height: 50px;
        border-radius: 5px;
    }
    .inputBox input {
        border-style: none;
        font-size: 0.9rem;
    }
    .addContainer {
        float: right;
        background: linear-gradient(to right, #6478FB, #8763FB);
        display: block;
        width: 3rem;
        border-radius: 0 5px 5px 0;
    }
    .addBtn {
        color: white;
        vertical-align: middle;
    }
</style>