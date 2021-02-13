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
    <button type="button" class="btn btn-primary" @click="updateProject()">
      Rename Project
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
      errors: {},
      isSubmit: false
    }
  },
  head () {
    return {
      title: `Rename: ${this.project.name}`
    }
  },
  mounted () {
    this.$refs.name.focus()
  },
  methods: {
    updateProject () {
      this.$axios.$put(`projects/${this.$route.params.id}`, {
        name: this.project.name
      }).then((response) => {
        this.$router.push({
          name: 'projects-id',
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
