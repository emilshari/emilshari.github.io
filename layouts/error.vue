<template>
    <div v-if="is404"> 
        404
    </div>
</template>

<script>
export default {
    props: ["error"], 
    layout: "empty",
    computed: 
    {
        is404() 
        {
            return this.error.statusCode == 404;
        }
    } 
}
</script>

<style>

</style>