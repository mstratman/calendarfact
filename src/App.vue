<template>
  <div id="app">
    <div>
      <router-view/>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app',
}
</script>

<style lang="scss">
html, body { height: 100%; }
html, body, * {
  font-family: 'Source Sans Pro', sans-serif;
  color: #ffffff;
}
</style>
