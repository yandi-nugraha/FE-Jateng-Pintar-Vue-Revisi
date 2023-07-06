<template>
    <ListSumberBelajar/>
</template>
<script>
  // @ is an alias to /src
import ListSumberBelajar from '@/components/ListSumberBelajarBody.vue'

export default {
    name: 'View',
    beforeCreate: function() {
        document.body.className = 'list-sumber-belajar';
        console.log('Body class changed to list-sumber-belajar');
    },
    components: {
        ListSumberBelajar
    }
}
</script>