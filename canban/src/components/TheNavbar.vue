<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
      <a class="navbar-brand" href="#">Canban</a>
      <div class="collapse navbar-collapse" id="navbarColor01">
        <button class="btn btn-secondary my-2 my-sm-0" data-placement="right" @click="getBtnTask(true)">Task</button>
      </div>
    </nav>
  </div>
</template>
<script>
import { mapActions } from 'vuex'

export default {
  methods: {
    ...mapActions([
      'getBtnTask'
    ])
  }
}
</script>
