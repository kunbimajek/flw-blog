<template>
    <div class="card" :class="{ 'card--full': full }" v-if="post">
        <img
            :src="post.jetpack_featured_media_url"
            alt="thumbnail"
            class="card__image"
        />
        <div class="card__body">
            <div class="card__texts">
                <small class="sub">
                    Front-end
                    <span class="sub--lighter sub--with-dot">{{ formatTime }} ago</span>
                </small>
                <h5 class="card__title" v-html="post.title.rendered"></h5>
                <div class="card__content" v-html="post.excerpt.rendered"></div>
            </div>
            <div class="card__footer">
                <small class="card__footer__duration">{{ readingTime }} Min Read</small>
                <NuxtLink :to="'/posts/' + post.slug" class="card__footer__link">
                    Read Full
                    <ArrowRight />
                </NuxtLink>
            </div>
        </div>
    </div>
</template>

<script>
import ArrowRight from "~/assets/icons/arrow.svg?inline";

export default {
    components: {
        ArrowRight,
    },
    props: {
        post: Object,
        full: Boolean,
    },
    computed: {
        readingTime() {
            const text = this.post.content.rendered;
            const wordsPerMinute = 200;
            let textLength = text.trim().split(/\s+/).length;
            let time = Math.ceil(textLength / wordsPerMinute);
            return time;
        },
        formatTime() {
            const diff = Date.now() - new Date(this.post.date);

            const periods = {
                month: 30 * 24 * 60 * 60 * 1000,
                week: 7 * 24 * 60 * 60 * 1000,
                day: 24 * 60 * 60 * 1000,
                hour: 60 * 60 * 1000,
                minute: 60 * 1000,
            };

            if (diff > periods.month) {
                let time = Math.floor(diff / periods.month);
                return time > 1 ? `${time} months` : `${time} month`;
            } else if (diff > periods.week) {
                let time = Math.floor(diff / periods.week);
                return time > 1 ? `${time} weeks` : `${time} week`;
            } else if (diff > periods.day) {
                let time = Math.floor(diff / periods.day);
                return time > 1 ? `${time} days` : `${time} day`;
            } else if (diff > periods.hour) {
                let time = Math.floor(diff / periods.hour);
                return time > 1 ? `${time} hours` : `${time} hour`;
            } else if (diff > periods.minute) {
                let time = Math.floor(diff / periods.minute);
                return time > 1 ? `${time} minutues` : `${time} minutue`;
            }

            return "Just now";
        },
    },
};
</script>
