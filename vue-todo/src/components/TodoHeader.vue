<template>
   <header>
        <h1>ToDo it!</h1>
        <h1>{{ this.$store.state.headerText }}</h1>

   </header>
</template>

<style scoped>
  
  h1 {
    color: #2F3852;
    font-weight: 900;
    margin: 2.5rem 0 1.5rem;
  }

  
</style>