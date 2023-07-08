<template>
    <SumberBelajar/>
</template>
<script>
import SumberBelajar from '@/components/SumberBelajarBody.vue'

export default {
    name: 'View',
    beforeCreate: function() {
        document.body.className = 'sumber-belajar';
        console.log('Body class changed to sumber-belajar');
    },
    components: {
        SumberBelajar
    }
}
</script>