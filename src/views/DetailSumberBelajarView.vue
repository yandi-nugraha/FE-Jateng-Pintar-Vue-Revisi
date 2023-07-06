<template>
    <DetailPage pageTitle="Sumber Belajar" contentTitle="Mari Belajar Membaca" />
</template>

<script>
import DetailPage from '../components/DetailPage.vue'

export default {
    name: 'View',
    beforeCreate: function() {
        document.body.className = 'detail-sumber-belajar';
        console.log('Body class changed to detail-sumber-belajar');
    },
    components: {
        DetailPage
    }
}
</script>