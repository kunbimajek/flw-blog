<template>
    <div>
        <BlogPosts />
        <Footer />
    </div>
</template>

<script>
export default {
    head() {
        return {
            script: [
                {
                    src: "https://checkout.flutterwave.com/v3.js",
                },
            ],
        };
    },
};
</script>
