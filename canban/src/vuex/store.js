import Vue from 'vue'
import Vuex from 'vuex'
import firebase from 'firebase'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    btnTask: false,
    btnEditTask: false,
    listData: [],
    list: ''
  },
  mutations: {
    setbtnTask (state, payload) {
      state.btnTask = payload
    },
    setListData (state, payload) {
      state.listData = payload
    },
    setbtnEditTask (state, payload) {
      state.btnEditTask = payload.status
      state.list = payload.id
    },
    setbtnEdit (state, payload) {
      state.btnEditTask = payload
    },
    deleteTask (state, payload) {
      let index = state.listData.indexOf(payload)
      console.log(index)
      state.listData.splice(index, 1)
      console.log(state.listData)
    }
  },
  actions: {
    getDataList ({ commit }) {
      let starCountRef = firebase.database().ref('task')
      let returnArr = []
      starCountRef.on('value', (snapshot) => {
        let arr = 0
        for (var item in snapshot.val()) {
          returnArr.push()
          let getData = snapshot.val()[item]
          let newData = {
            id: item,
            task: getData.task,
            status: getData.status
          }
          returnArr[arr] = newData
          arr++
        }
        commit('setListData', returnArr)
      })
    },
    getBtnTask ({ commit }, payload) {
      commit('setbtnTask', payload)
    },
    getEditTask ({ commit }, payload) {
      commit('setbtnEditTask', payload)
    },
    submitTask ({ commit }, payload) {
      firebase.database().ref('task/').push(payload)
        .then((respone) => {
          commit('setbtnTask', false)
        })
        .catch(err => console.log(err))
    },
    submitEditTask ({ commit }, payload) {
      firebase.database().ref('task/' + payload.id).update({
        task: payload.task
      })
      commit('setbtnEdit', false)
    },
    addStatus ({ commit }, payload) {
      firebase.database().ref('task/' + payload.id).update({
        status: payload.status
      })
    },
    submitDelete ({ commit }, payload) {
      firebase.database().ref('task/' + payload.id).remove()
      commit('deleteTask', payload)
    }
  }
})

export default store
