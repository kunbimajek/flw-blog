<template>
    <ul class="socials">
        <li v-for="icon in icons" :key="icon.name" class="socials__list-item">
            <a
                href="/"
                class="socials__link"
                v-html="require(`~/assets/icons/${icon.name}.svg?raw`)"
            >
            </a>
        </li>
    </ul>
</template>

<script>
export default {
    data() {
        return {
            icons: [
                { name: "twitter", link: "" },
                { name: "dribbble", link: "" },
                { name: "figma", link: "" },
                { name: "github", link: "" },
            ],
        };
    },
    methods: {
        getImgUrl: function (path) {
            return require("~/assets/icons/" + path + ".png");
        },
    },
};
</script>
