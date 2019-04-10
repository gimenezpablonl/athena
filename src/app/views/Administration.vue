<template>
  <v-layout align-center justify-center column reverse fill-height>
    <v-flex xs12 sm3>
      <router-link to="/admin/students">
      <v-btn flat icon color="brown">
        <v-icon>school</v-icon>
      </v-btn>
      </router-link>
    </v-flex>
    <v-flex xs12 sm3>
      <router-link to="/admin/professors">
        <v-btn flat icon color="green">
          <v-icon>people</v-icon>
        </v-btn>
      </router-link>
    </v-flex>
  </v-layout>
</template>