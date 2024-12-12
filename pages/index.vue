<template>
    <div>
        <lineUp :clusters="clusters" />
    </div>
</template>
<script lang="ts" setup>
const { data, error } = await useFetch("/api/line_up");
if (error) {
    console.log(error)
}
const clusters = (data.value as LineUp).clusters;
</script>