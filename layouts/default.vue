<template> 
  <div class="page">
    <Header />
    <main class="main"> 
    <!-- /.main -->
     <nuxt />
     </main> 
    <Footer /> 
     <script src="https://kit.fontawesome.com/44e8ef5ccc.js" crossorigin="anonymous"></script>
     </div>
  <!-- /.page -->
 
</template>

<script>
import Header from '~/components/header/Header'; 
import Footer from '~/components/footer/Footer';
export default {
  components: 
  {
    Header, 
    Footer
  }
}
</script>

<style lang="sass" 
scoped>

</style>