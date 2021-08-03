<template>
  <div>
    <transition-group tag="div" class="row justify-content-center" name="fade" appear mode="out-in">
      <div class="mt-3 col-12 col-md-6" v-for="project in projects" :key="project.id">
        <project :project="project" />
      </div>
    </transition-group>
    <no-ssr>
      <infinite-loading
        class="my-5"
        @infinite="infiniteScroll"
      />
    </no-ssr>
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
    async infiniteScroll($state) {

      await this.$axios.$get("https://jsonplaceholder.typicode.com/posts?_page=" + this.page)
        .then(response => {
          response.forEach(item => this.projects.push(item))
          if (response.length > 1) {
            $state.loaded()
            this.page++
          } else {
            $state.complete()
          }
        })
        .catch(error => {
          console.log(error.response.data)
          $state.error()
        })
    }
  }
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
