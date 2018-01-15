<template>
<div>
  <div class="container">
    <div class="row padding">
      <create-task v-if="btnTask"></create-task>
      <edit-task v-if="btnEditTask"></edit-task>
    </div>
    <div class="row padding">
      <canban-backlog></canban-backlog>
      <canban-todo></canban-todo>
      <canban-done></canban-done>
    </div>
  </div>
</div>
</template>
<script>
import { mapActions, mapState } from 'vuex'
import CreateTask from './CreateTask'
import EditTask from './EditTask'
import CanbanBacklog from './CanbanBacklog'
import CanbanTodo from './CanbanTodo'
import CanbanDone from './CanbanDone'
export default {
  components: {
    CreateTask,
    EditTask,
    CanbanBacklog,
    CanbanTodo,
    CanbanDone
  },
  methods: {
    ...mapActions([
      'getBtnTask'
    ])
  },
  computed: {
    ...mapState([
      'btnTask',
      'btnEditTask'
    ])
  }
}
</script>
<style>
.padding {
  padding-top: 20px;
}
.left {
  margin-left: 20px;
}
</style>
