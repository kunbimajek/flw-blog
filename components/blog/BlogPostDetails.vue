<template>
    <div v-if="post" class="post">
        <small class="sub">
            By Damilola Majekodunmi
            <span class="sub--lighter">1 Month Ago</span>
        </small>
        <h1 class="post__title" v-html="post.title.rendered"></h1>
        <div class="post__content" v-html="post.content.rendered"></div>
    </div>
</template>

<script>
export default {
    name: 'PostDetails',
    props: ["post"],
};
</script>
