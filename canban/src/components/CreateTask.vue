<template>
<div>
  <fieldset>
    <legend>Task Canban</legend>
    <div class="form-group">
      <label for="exampleInputEmail1">Task</label>
      <input class="form-control" v-model="formData.task" placeholder="entry your task" type="text">
    </div>
    <button type="submit" class="btn btn-primary" @click="submitTask(formData)">Submit</button>
  </fieldset>
</div>
</template>
<script>
import { mapActions } from 'vuex'
export default {
  data () {
    return {
      formData: {
        task: '',
        status: 'log'
      }
    }
  },
  methods: {
    ...mapActions([
      'submitTask'
    ])
  }
}
</script>
