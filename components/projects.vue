<template>
  <div>
    <transition-group tag="div" class="row justify-content-center" name="fade" appear mode="out-in">
      <b-col class="mt-3" cols="12" md="6" v-for="project in projects" :key="project.id">
        <project :project="project" />
      </b-col>
    </transition-group>
    <infinite-loading
      key="spiner"
      class="my-5"
      spinner="waveDots"
      @infinite="infiniteScroll"
    />
  </div>

</template>

<script>

export default {
  name: "projects",
  data() {
    return {
      projects: [],
      page: 1
    }
  },

  computed: {
    url() { return "https://jsonplaceholder.typicode.com/posts?_page=" + this.page; }
  },

  methods: {
    infiniteScroll($state) {
      setTimeout(() => {
        this.page++
        this.$axios.$get("https://jsonplaceholder.typicode.com/posts?_page=" + this.page)
          .then(response => {
            response.forEach(item => this.projects.push(item))
            if (response.length > 1)
              $state.loaded()
            else {
              $state.complete()
            }
          })
          .catch(error => {
            console.log(error.response.data)
            $state.error()
          })
      }, 1000)
    }
  },
created () {
  this.$axios.$get("https://jsonplaceholder.typicode.com/posts?_page=" + this.page)
    .then(response => {
      response.forEach(item => this.projects.push(item))
    })
    .catch(error => {
      console.log(error.response.data)
    })
  },
  fetchOnServer: false,
}
</script>

<style scoped>
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active до версии 2.1.8 */ {
  opacity: 0;
}
</style>
