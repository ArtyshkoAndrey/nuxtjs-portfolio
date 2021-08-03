<template>
  <div class="container">
    <profile></profile>
    <projects></projects>
  </div>
</template>

<script>
export default {
  head: {
    title: 'Веб-разработчик Filliton',
    meta: [
      {charset: 'utf-8'},
      {name: 'viewport', content: 'width=device-width, initial-scale=1, shrink-to-fit=no'},
      {
        hid: 'description',
        name: 'description',
        content: 'Сайт портфолио самого крутого веб-программиста Артышко Андрея'
      }
    ],
    link: [{rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'}],
  },
  data() {
    return {
    }
  }
}
</script>
