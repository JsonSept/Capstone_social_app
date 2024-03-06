<template>
  <div>
    <h1>This is the signup page</h1>
  </div>
  <div>
    <input type="text" name="username" placeholder="username" v-model="username"><br><br>
    <input type="text" name="password" placeholder="password" v-model="password"><br><br>
    <button @click='registerUser()'>SignUp</button>
  </div>

<!-- <router-link to="user"><button>Signup</button></router-link> -->
</template>


<script>
export default {
  data(){
    return {
      username:null,
      password:null
    }
  },
  computed: {
    registerUser(){
      this.$Store.dispatch("registerUser",this.$data)
    }
  }
}

</script>