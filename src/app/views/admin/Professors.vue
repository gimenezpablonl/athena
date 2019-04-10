<template>
    <Ttable :target="target"> </Ttable>
</template>

<script>
import Ttable from '../../components/Table.vue'
export default {
    name: 'professors',
    components: {
        Ttable
    },
    data(){
        return{
        target : 0
        }
    }
}
</script>
