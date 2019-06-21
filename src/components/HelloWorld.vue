<template>
  <div class="hello">
    <h2>{{msg}}</h2>
    <hr />
    <h3>{{count}}</h3>
    <p>
      <button @click="increment">+</button>
      <button @click="decrement">-</button>

    </p>
  </div>
</template>

<script>

import {mapGetters, mapActions} from 'vuex'

export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Hello Vuex',
    }
  },
  computed: {
    ...mapGetters(['count']) //TODO ... 扩展用算符，扩展以后就可以继续添加其他部分
  },
  methods:{
    ...mapActions([
      'increment',
      'decrement',
    ]),

  },


}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
