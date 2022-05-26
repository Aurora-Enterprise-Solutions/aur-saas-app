<template>
    <div class="aur-component aur-component-dot" :style="{ color }">
        <div class="aur-component-dot__inner" />
    </div>
</template>

<script>
export default {
    name  : 'AurDot',
    props : {
        color: {
            type    : String,
            default : undefined,
        },
    },
}
</script>
