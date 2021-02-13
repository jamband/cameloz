<template>
  <div>
    <div v-if="$fetchState.pending" class="text-center">
      <AppLoading />
    </div>
    <div v-else-if="$fetchState.error">
      Request failure.
    </div>
    <ul v-else class="list-unstyled">
      <li v-for="project in projects" :key="project.id">
        <NLink :to="{ name: 'projects-id', params: { id: project.id } }">
          {{ project.name }}
        </NLink>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data () {
    return {
      projects: []
    }
  },
  async fetch () {
    this.projects = await this.$axios.$get('projects')
  }
}
</script>
