<template>
  <div>
    <div class="mb-4">
      <label class="form-label">Project</label>
      <input
        type="text"
        class="form-control"
        :value="project.name"
        aria-label="Disabled input"
        disabled
      >
    </div>
    <div class="mb-4">
      <label for="taskName" class="form-label">Task</label>
      <input
        id="taskName"
        ref="name"
        v-model="task.name"
        type="text"
        class="form-control"
        :class="{
          'is-invalid': errors.name,
          'is-valid': !errors.name && isSubmit
        }"
      >
      <div class="invalid-feedback">
        {{ errors.name ? errors.name[0] : '' }}
      </div>
    </div>
    <div class="mb-4">
      <TaskPrioritiesForm v-model="task.priority_id" />
      <div
        :class="{
          'is-invalid': errors.priority_id,
          'is-valid': !errors.priority_id && isSubmit
        }"
      />
      <div class="invalid-feedback">
        {{ errors.priority_id ? errors.priority_id[0] : '' }}
      </div>
    </div>
    <button type="button" class="btn btn-primary" @click="createTask()">
      Create
    </button>
    <div class="mt-5 text-center">
      <NLink :to="{ name: 'projects-id', params: { id: project.id } }">
        <IconChevronLeft />
        <span class="ms-1">Back to Project Home</span>
      </NLink>
    </div>
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
  data () {
    return {
      project: {},
      task: {
        name: '',
        priority_id: ''
      },
      errors: {},
      isSubmit: false
    }
  },
  head () {
    return {
      title: `Create new task for ${this.project.name}`
    }
  },
  mounted () {
    this.$refs.name.focus()
  },
  methods: {
    createTask () {
      this.$axios.$post('tasks', {
        name: this.task.name,
        priority_id: this.task.priority_id,
        project_id: this.$route.params.id
      }).then(() => {
        this.$router.push({
          name: 'projects-id',
          params: { id: this.$route.params.id }
        })
      }).catch((error) => {
        this.errors = error.response.data.errors
      })
      this.isSubmit = true
    }
  }
}
</script>
