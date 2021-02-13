<template>
  <div>
    <div class="mb-4">
      <label for="projectName" class="form-label">Project</label>
      <input
        id="projectName"
        ref="name"
        v-model="project.name"
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
    <button
      type="button"
      class="btn btn-primary"
      @click="createProject()"
    >
      Create New Project
    </button>
  </div>
</template>

<script>
export default {
  data () {
    return {
      project: {
        name: ''
      },
      errors: {},
      isSubmit: false
    }
  },
  head () {
    return {
      title: 'Create New Project'
    }
  },
  mounted () {
    this.$refs.name.focus()
  },
  methods: {
    createProject () {
      this.$axios.$post('projects', {
        name: this.project.name
      }).then((response) => {
        this.$router.push({
          name: 'projects-id-tasks-create',
          params: { id: response.id }
        })
      }).catch((error) => {
        this.errors = error.response.data.errors
        this.isSubmit = true
      })
    }
  }
}
</script>
