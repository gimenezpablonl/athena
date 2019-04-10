<template>
    <Ttable :target="target"> </Ttable>
</template>

<script>
import Ttable from '../../components/Table.vue'
export default {
    name: 'students',
    components: {
        Ttable
    },
    data(){
        return{
        target : 1
        }
    }
}
</script>
