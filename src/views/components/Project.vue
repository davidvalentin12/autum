<template>
      <v-card>
        <v-toolbar color="orange lighten-1" dark>

          <v-toolbar-title>Project</v-toolbar-title>

          <v-spacer></v-spacer>

          <v-btn icon>
            <v-icon>fa-edit</v-icon>
          </v-btn>
        </v-toolbar>
<v-list subheader dense>
          <v-subheader>6h 37m</v-subheader>
          <v-list-group>
            <v-list-tile color="orange" slot="activator">
              <v-list-tile-content>
                <v-list-tile-title>Tasks</v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>
            <!-- TASK 1 -->
            <v-list-tile @click="a=0" v-for="task in tasks"
            :key="task.title">
            <v-list-tile-action >
            </v-list-tile-action >
            <v-list-tile-content>
              <v-list-tile-title>{{ task.title}}</v-list-tile-title>
              <v-list-tile-sub-title>{{ task.time}}</v-list-tile-sub-title>
            </v-list-tile-content>

            <v-list-tile-action >
              <v-btn icon ripple>
                <v-icon color="grey lighten-1">{{task.icon}}</v-icon>
              </v-btn>
            </v-list-tile-action>
            </v-list-tile>
            <!-- NEW TASK -->
            <v-divider></v-divider>
            <v-list-tile @click="a=0">
            <v-list-tile-action >
              <v-btn icon ripple>
                <v-icon color="blue lighten-1">add_circle</v-icon>
              </v-btn>
              </v-list-tile-action >

              <v-list-tile-content>
                <v-list-tile-title>New Task</v-list-tile-title>
              </v-list-tile-content>

              <v-list-tile-action>
              </v-list-tile-action>
            </v-list-tile>
          </v-list-group>

          <v-divider></v-divider>
        </v-list>
<!-- DETAILS-->
        <v-list subheader dense three-line>
             <v-list-tile>
            <v-list-tile-content>
              <v-list-tile-title>Description</v-list-tile-title>
              <v-list-tile-sub-title>Set the content filtering level to restrict appts that can be downloaded</v-list-tile-sub-title>
            </v-list-tile-content>
          </v-list-tile>

           <v-list-tile>
            <v-list-tile-content>
            <v-list-tile-title>Deadline</v-list-tile-title>
              <v-list-tile-sub-title >05/03/2019</v-list-tile-sub-title>
            </v-list-tile-content>
          </v-list-tile>

          <v-list-tile>
            <v-list-tile-content>
            <v-list-tile-title>Task Creation</v-list-tile-title>
              <v-list-tile-sub-title >01/01/2019</v-list-tile-sub-title>
            </v-list-tile-content>
          </v-list-tile>

           <v-list-tile>
            <v-list-tile-content>
            <v-list-tile-title>Status</v-list-tile-title>
              <v-list-tile-sub-title >In progress</v-list-tile-sub-title>
            </v-list-tile-content>
          </v-list-tile>

          <v-divider></v-divider>
        </v-list>
      </v-card>
</template>

<style lang="scss" scoped>
</style>

<script>

export default {
  name: 'ProjectToggleItem',
  data: () => {
    return {

    }
  },
  created: function () {
    this.tasks = [
      {
        title: 'Task 1',
        time: '1h 36m',
        icon: 'play_circle_outline'
      },
      {
        title: 'Task 2',
        time: '3h 36m',
        icon: 'pause_circle_outline'
      }
    ]
  },
  methods: {
  }
}
</script>
