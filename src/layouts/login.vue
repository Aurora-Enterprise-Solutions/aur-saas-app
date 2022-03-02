<template>
    <div class="aur-layout aur-layout-login">
        <div class="aur-logo-wrapper">
            <aur-logo />
        </div>

        <div class="aur-content-wrapper">
            <Nuxt />
        </div>

        <div class="aur-rigths">
            <span class="caption">{{ $t('global.rigths', { year: new Date().getFullYear() }) }}</span>
        </div>
    </div>
</template>
