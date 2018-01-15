<template>
<div>
  <div v-for="list in listData" :key="list" v-if="list.status == 'todo'" class="card text-white bg-success mb-3 left" style="max-width: 20rem;">
    <div class="card-header">Todo</div>
    <div class="card-body">
      <h4 class="card-title">{{ list.task }}</h4>
      <p class="card-text">
        <button type="button" class="btn btn-primary btn-lg" @click="setLog(list.id)">Back Log</button>
        <button type="button" class="btn btn-primary btn-lg" @click="setDone(list.id)">Done</button>
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
      'addStatus'
    ]),
    setDone (id) {
      let payload = {
        id: id,
        status: 'done'
      }
      this.addStatus(payload)
    },
    setLog (id) {
      let payload = {
        id: id,
        status: 'log'
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
