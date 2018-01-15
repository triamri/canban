<template>
  <div id="app">
    <TheNavbar></TheNavbar>
    <app-canban></app-canban>
  </div>
</template>

<script>
import TheNavbar from './components/TheNavbar'
import AppCanban from './components/AppCanban'
export default {
  name: 'App',
  components: {
    TheNavbar,
    AppCanban
  }
}
</script>

<style>
</style>
