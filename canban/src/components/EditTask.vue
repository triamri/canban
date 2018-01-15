<template>
<div>
  <fieldset>
    <legend>Edit Task Canban</legend>
    <div class="form-group">
      <label for="exampleInputEmail1">Task</label>
      <input class="form-control" v-model="list.task" placeholder="entry your task" type="text">
    </div>
    <button type="submit" class="btn btn-primary" @click="submitEditTask(list)">Submit</button>
  </fieldset>
</div>
</template>
<script>
import { mapActions, mapState } from 'vuex'
export default {
  methods: {
    ...mapActions([
      'submitEditTask'
    ])
  },
  computed: {
    ...mapState([
      'list'
    ])
  }
}
</script>
