<template>
  <div>
    <h1>{{ greet }}</h1>
 <router-link to="signup"><button>START</button></router-link>
    
  </div>
</template>

<script>


export default {
 data(){
  return {
    greet: "this is the Starting page"
  }
 }
}
</script>
