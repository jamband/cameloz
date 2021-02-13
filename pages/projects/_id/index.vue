<template>
  <div>
    <h1>{{ project.name }}</h1>
    <div class="text-center mb-4">
      <ProjectActions />
      <ListTaskPriorities />
    </div>
    <ListProjectTasks />
  </div>
</template>

<script>
export default {
  async asyncData ({ $axios, params, error }) {
    const project = await $axios.$get(`projects/${params.id}`).catch(() => {
      return error({ message: 'Page not found', statusCode: 404 })
    })
    return {
      project
    }
  },
  head () {
    return {
      title: this.project.name
    }
  }
}
</script>
