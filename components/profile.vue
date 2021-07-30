<template>
  <b-row class="justify-content-center my-5">
    <b-col cols="auto" class="mb-5">
      <img class="img-fluid" src="../static/man-medium-skin-tone-beard_1f9d4-1f3fd-200d-2642-fe0f.png" alt=""/>
    </b-col>
   <b-col cols="12">
     <h1>
       I am a web developer with the skill of creating interactive websites.
       My profile includes technologies such as: <b>Laravel</b>, <b>VueJS</b>, <b>NuxtJS</b>, <b>Flex</b>.
     </h1>
     <h2 class="mt-4">
       Below I provide projects that will inspire you to think about a great idea.
     </h2>
   </b-col>
  </b-row>
</template>

<script>
export default {
  name: "profile"
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
