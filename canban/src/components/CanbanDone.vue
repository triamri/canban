<template>
<div>
  <div v-for="list in listData" :key="list" v-if="list.status == 'done'" class="card text-white bg-success mb-3 left" style="max-width: 20rem;">
    <div class="card-header">Done</div>
    <div class="card-body">
      <h4 class="card-title">{{ list.task }}</h4>
      <p class="card-text">
        <button type="button" class="btn btn-primary btn-lg" @click="setTodo(list.id)">Todo</button>
        <button type="button" class="btn btn-primary btn-lg" @click="submitDelete(list)">Delete</button>
      </p>
    </div>
  </div>
</div>
</template>
<script>
import { mapActions, mapState } from 'vuex'
export default {
  methods: {
    ...mapActions([
      'getDataList',
      'submitDelete',
      'addStatus'
    ]),
    setTodo (id) {
      let payload = {
        id: id,
        status: 'todo'
      }
      this.addStatus(payload)
    }
  },
  computed: {
    ...mapState([
      'listData'
    ])
  },
  created () {
    this.getDataList()
  }
}
</script>
