<template>
  <div class="dropdown d-inline-block">
    <button
      id="projectActionsMenuLink"
      class="btn btn-link dropdown-toggle"
      type="button"
      data-bs-toggle="dropdown"
      aria-expanded="false"
    >
      Actions
      <span class="ms-1"><IconChevronDown /></span>
    </button>
    <ul
      class="dropdown-menu"
      aria-labelledby="projectActionsMenuLink"
    >
      <li>
        <NLink
          class="dropdown-item"
          :to="{
            name: 'projects-id-tasks-create',
            params: { id:this.$route.params.id }
          }"
        >
          Create New Task
        </NLink>
      </li>
      <li><hr class="dropdown-divider"></li>
      <li>
        <NLink class="dropdown-item" :to="{ name: 'index' }">
          Back To Projects
        </NLink>
      </li>
      <li>
        <NLink
          class="dropdown-item"
          :to="{
            name: 'projects-id-update',
            params: { id: this.$route.params.id}
          }"
        >
          Rename This Project
        </NLink>
      </li>
      <li>
        <button
          type="button"
          class="dropdown-item"
          @click="deleteProject()"
        >
          Delete This Project
        </button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  methods: {
    deleteProject () {
      if (confirm('Are you sure?')) {
        this.$axios.$delete(`projects/${this.$route.params.id}`).then(() => {
          this.$router.push({ name: 'index' })
        })
      }
    }
  }
}
</script>
