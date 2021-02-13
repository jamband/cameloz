<template>
  <div>
    <div v-if="$fetchState.pending" class="text-center">
      <AppLoading />
    </div>
    <div v-else-if="$fetchState.error">
      Request failure.
    </div>
    <div v-else>
      <div v-for="task in tasks" :key="task.id" class="mb-3">
        <div class="row">
          <div class="col-10">
            {{ task.name }}
            <span class="ms-2 badge bg-primary text-dark">{{ task.priority.name }}</span>
          </div>
          <div class="d-flex col text-center">
            <div class="ms-auto dropdown">
              <button
                id="taskActions"
                class="btn btn-link m-0 py-0 px-1 dropdown-toggle"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <IconThreeDots />
              </button>
              <ul class="dropdown-menu" aria-labelledby="taskActions">
                <li>
                  <NLink
                    :to="{
                      name: 'projects-id-tasks-task-update',
                      params: { id: task.project.id, task: task.id }
                    }"
                    class="dropdown-item"
                  >
                    Update
                  </NLink>
                </li>
                <li>
                  <button
                    class="dropdown-item"
                    type="button"
                    @click="deleteTask(task.id)"
                  >
                    Delete
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr>
      </div>
      <AppPagination :last-page="lastPage" />
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      tasks: [],
      lastPage: 1
    }
  },
  async fetch () {
    const tasks = await this.$axios.$get(
      `tasks?project_id=${this.$route.params.id}`,
      { params: this.$route.query }
    )
    this.tasks = tasks.data
    this.lastPage = tasks.meta.last_page
  },
  watch: {
    '$route.query': '$fetch'
  },
  methods: {
    deleteTask (id) {
      if (confirm('Are you sure?')) {
        this.$axios.$delete(`tasks/${id}`).then(() => {
          Object.keys(this.$route.query).length
            ? this.$router.push({
              name: 'projects-id',
              params: { id: this.$route.params.id }
            })
            : this.$fetch()
        })
      }
    }
  }
}
</script>
