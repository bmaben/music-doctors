<template>
  <HeaderView />
  <div class="simple-about">
    <h1>Who are The Music Doctors?</h1>
    <p>Welcome to Music Doctor. If you are sick of the same old music, we 
      have the cure for you. Here you will be prescribed with new music - from 
      the local scene, or international bands, we have the music knowledge to find 
      exactly what you're looking for. 
      Learn a little more about us <a>here</a>
      </p>
      
      <p>
      Patients Helped: {{ patients_count }} <br/>
      <button @click="addPatientsCount">Accurately Prescribed</button>
      </p>
      
     
  </div>

</template>

<script>
import { createStore } from 'vuex';

import HeaderView from '../views/HeaderView.vue'
export default {
  components: { HeaderView },
  methods: {
  addPatientsCount(){
    this.$store.commit('ADD_PATIENT')
  }
    
},
computed: {
  patients_count () {
    return this.$store.state.patients;
  }
}

}
</script>

<style scoped>
.simple-about {
  padding-top: 5px;
  margin-top: 45px;
  background-color: lightgray;
  border-radius: 8px;
  width: 75%;

}

</style>