<template>
  <div>
    <v-toolbar flat color="white">
      <v-toolbar-title>Students list</v-toolbar-title>
      <v-divider
        class="mx-2"
        inset
        vertical
      ></v-divider>
      <v-spacer></v-spacer>
      <v-dialog v-model="dialog" max-width="600px">
        <template v-slot:activator="{ on }">
          <v-btn color="primary" dark class="mb-2" v-on="on">New student</v-btn>
        </template>
        <v-card>
          <v-card-title>
            <span class="headline">{{ formTitle }}</span>
          </v-card-title>

          <v-card-text>
            <v-container grid-list-md>
              <v-layout wrap>
                <v-flex xs12 sm6 md4>
                  <v-text-field v-model="editedItem.name" label="Name"></v-text-field>
                </v-flex>
                <v-flex xs12 sm6 md4>
                  <v-text-field v-model="editedItem.last_name" label="Lastname"></v-text-field>
                </v-flex>
              </v-layout>
            </v-container>
          </v-card-text>

          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="blue darken-1" flat @click="close">Cancel</v-btn>
            <v-btn color="blue darken-1" flat @click="save">Save</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-toolbar>
    <v-data-table
      :headers= "headers"
      :items="students"
      class="elevation-1"
    >
      <template v-slot:items="props">
        <td>{{ props.item.name }}</td>
        <td>{{ props.item.last_name }}</td>
        <td class="justify-center layout px-0">          <v-icon
            small
            class="mr-2"
            @click="editItem(props.item)"
          >
            edit
          </v-icon>
          <v-icon
            small
            @click="deleteItem(props.item)"
          >
            delete
          </v-icon>
        </td>
      </template>
      <template v-slot:no-data>
        <v-btn color="primary" @click="initialize">Refresh</v-btn>
      </template>
    </v-data-table>
  </div>
</template>
<script>
 export default {
    data: () => ({
      dialog: false,
      headers: [
        { text: 'Name', value: 'name', align: 'center'},
        { text: 'Lastname', value: 'last_name', align: 'center'},
        { text: 'Actions', value: 'name',align: 'center', sortable: false }
      ],
      students: [],
      editedIndex: -1,
      editedItem: {
        name: '',
        last_name: ''
      },
      defaultItem: {
        name: '',
        last_name: ''
      }
    }),

    computed: {
      formTitle () {
        return this.editedIndex === -1 ? 'New Student' : 'Edit Student'
      }
    },

    watch: {
      dialog (val) {
        val || this.close()
      }
    },

    created () {
      this.initialize()
    },

    methods: {
      initialize(){
        this.getStudents()
      }
      ,
      getStudents(){
        fetch('/api/students/get', {
          method: 'POST',
        })
        .then(res => res.json())
        .then(data => this.students = data)
      },
      postStudents(){
          fetch('/api/students/post', {
          method: 'POST',
          body: JSON.stringify(this.editedItem),
          headers: {
          'Accept' : 'application/json',
          'Content-type' : 'application/json'
          }
        })
        .then(res => res.json())
        .then(data => console.log(data))
      },
      editStudent(i){
        const url = '/api/students/put/'.concat(this.students[i]._id)
          fetch(url, {
          method: 'PUT',
          body: JSON.stringify(this.students[i]),
          headers: {
          'Accept' : 'application/json',
          'Content-type' : 'application/json'
          }
        })
        .then(res => res.text())
        .then(data => console.log(data))
      },
      deleteStudent(i){
        const url = '/api/students/delete/'.concat(this.students[i]._id)
          fetch(url, {
          method: 'DELETE',
          headers: {
          'Accept' : 'application/json',
          'Content-type' : 'application/json'
          }
        })
        .then(res => res.json())
        .then(data => console.log(data))
      },
      editItem (item) {
        this.editedIndex = this.students.indexOf(item)
        this.editedItem = Object.assign({}, item)
        this.dialog = true
      },

      deleteItem (item) {
        const index = this.students.indexOf(item)
        confirm('Are you sure you want to delete this student?')
        this.deleteStudent(index)
        this.students.splice(index, 1)
      },

      close () {
        this.dialog = false
        setTimeout(() => {
          this.editedItem = Object.assign({}, this.defaultItem)
          this.editedIndex = -1
        }, 300)
      },

      save () {
        if (this.editedIndex > -1) {
          Object.assign(this.students[this.editedIndex], this.editedItem)
          this.editStudent(this.editedIndex)
        } else {
          this.postStudents()
          this.students.push(this.editedItem)
          this.initialize()
        }
        this.close()
      }
    }
  }
</script>