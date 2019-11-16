<template>
  <h1>Hello</h1>
</template>


<script>

  export default {
    name: Sidebar,
    data () {
      return {
        drawer: null,
        items: [
          { title: 'Home', icon: 'dashboard' },
          { title: 'About', icon: 'question_answer' },
        ],
      }
    },
  }
</script>