<template>
  <div class="row justify-content-center my-5">
    <div id="stars">
      <div class="shooting_star"></div>
      <div class="shooting_star"></div>
      <div class="shooting_star"></div>
      <div class="shooting_star"></div>
      <div class="shooting_star"></div>
      <div class="shooting_star"></div>
      <div class="shooting_star"></div>
      <div class="shooting_star"></div>
      <div class="shooting_star"></div>
      <div class="shooting_star"></div>
      <div class="shooting_star"></div>
      <div class="shooting_star"></div>
      <div class="shooting_star"></div>
      <div class="shooting_star"></div>
      <div class="shooting_star"></div>
      <div class="shooting_star"></div>
      <div class="shooting_star"></div>
      <div class="shooting_star"></div>
      <div class="shooting_star"></div>
      <div class="shooting_star"></div>
    </div>
    <div class="col-auto mb-4">
      <div id="start">
        <img class="img-fluid" id="face" src="~/static/man-medium-skin-tone-beard_1f9d4-1f3fd-200d-2642-fe0f.png" alt=""/>
        <img src="~/static/hello.png" class="img-fluid" id="hello" alt="hello">
      </div>

    </div>
   <div class="col-12">
     <h1>
       I am a web developer with the skill of creating interactive websites.
       My profile includes technologies such as: <b class="text-decoration-underline" id="laravel">Laravel</b>, <b>VueJS</b>, <b>NuxtJS</b>, <b>Flex</b>.
     </h1>
     <h2 class="mt-4">
       Below I provide projects that will inspire you to think about a great idea.
     </h2>
   </div>
  </div>
</template>

<script>
export default {
  name: "profile",
  data() {
    return {
      click: 0
    }
  },
  mounted () {
    this.$nextTick(() => {
      document.getElementById('laravel').onclick = () => {
        this.click++
        console.log(this.click)

        if (this.click === 3) {
          this.click = 0

          document.getElementById('stars').style.display = 'block'
          setTimeout( () => {
            document.getElementById('stars').style.display = 'none'
          }, 3000)
        }
      }
    })
  }
}
</script>

<style scoped>
 h1, h2 {
   font-family: 'Montserrat',serif;
 }
 img {
   height: 100px;
   --animate-delay: 2s;
   animation: backInDown;
   animation-duration: 1s;
 }
</style>
