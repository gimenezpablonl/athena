<template>
  <form>
    <v-container>
    <v-text-field
      v-model="username"
      :error-messages="usernameErrors"
      :counter="10"
      label="Username"
      required
      @input="$v.username.$touch()"
      @blur="$v.username.$touch()"
    ></v-text-field>
    <v-text-field
    type="'password'"
    v-model="password"
    label="Password"
    required
    @input="$v.password.$touch()"
    @blur="$v.password.$touch()"
    ></v-text-field>

    <v-btn @click="submit">submit</v-btn>
    </v-container>
  </form>
</template>

<script>
  import { validationMixin } from 'vuelidate'
  import { required } from 'vuelidate/lib/validators'

  export default {
    mixins: [validationMixin],
    validations: {
      username: { required },
      password: { required }
      },

    data: () => ({
      username: '',
      password: ''
    }),
    computed: {
      usernameErrors () {
        const errors = []
        if (!this.$v.username.$dirty) return errors
        !this.$v.username.maxLength && errors.push('Name must be at most 10 characters long')
        !this.$v.username.required && errors.push('Name is required.')
        return errors
      }
    },
    methods: {
      submit () {
        this.$v.$touch()
      },
    }
  }
</script>   