<template>
    <div class="aur-component aur-component-version">
        <label>{{ `ver. ${version}` }}</label>
    </div>
</template>

<script>
import { version } from '@@/package.json'

export default {
    name: 'AurVersion',
    data() {

        return {
            version: version,
        }

    },
}
</script>
