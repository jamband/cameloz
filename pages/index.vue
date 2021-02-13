<template>
  <div>
    <h1>Projects</h1>
    <hr>
    <div class="text-end">
      <NLink :to="{ name: 'projects-create' }">
        <IconPlusCircleFill />
        <span class="ms-1">Create New Project</span>
      </NLink>
    </div>
    <ListProjects />
  </div>
</template>

<script>
import { APP_NAME } from '~/utils/constants'

export default {
  head () {
    return {
      title: APP_NAME,
      titleTemplate: ''
    }
  }
}
</script>
