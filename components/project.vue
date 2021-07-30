<template>
  <div class="card h-100">
    <img src="@/static/Group 9.png" class="img-fluid w-100 h-auto" alt="">
    <div class="card-body h-100">
      <h4 class="card-title font-weight-bolder text-truncate">{{ project.title }}</h4>
      <div class="card-text mt-auto">
        Enterprise - 2019
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "project",
  props: ['project']
}
</script>

<style scoped>

</style>
