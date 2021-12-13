<template>
    <div class="card" :class="{ 'card--full': full }" v-if="post">
        <Skeleton :is-loaded="isLoaded" skeleton-class="card__image">
            <img
                :src="post.jetpack_featured_media_url"
                alt="thumbnail"
                class="card__image"
            />
        </Skeleton>
        <div class="card__body">
            <div class="card__texts">
                <Skeleton
                    :is-loaded="isLoaded"
                    :w="'40%'"
                    :h="'15px'"
                    radius="1px"
                >
                    <small class="sub">
                        Front-end
                        <span class="sub--lighter sub--with-dot"
                            >{{ formatTime }} ago</span
                        >
                    </small>
                </Skeleton>

                <Skeleton
                    :is-loaded="isLoaded"
                    :w="'80%'"
                    :h="'22px'"
                    radius="3px"
                    :m="'6px 0 10px'"
                >
                    <h5 class="card__title" v-html="post.title.rendered"></h5>
                </Skeleton>

                <Skeleton
                    :is-loaded="isLoaded"
                    :w="'100%'"
                    :h="'15px'"
                    radius="1px"
                    :m="'5px 0'"
                    :rep="4"
                >
                    <div
                        class="card__content"
                        v-html="post.excerpt.rendered"
                    ></div>
                </Skeleton>
            </div>
            <div class="card__footer">
                <Skeleton
                    :is-loaded="isLoaded"
                    :w="'20%'"
                    :h="'14px'"
                    radius="1px"
                >
                    <small class="card__footer__duration">
                        {{ readingTime }} Min Read
                    </small>
                </Skeleton>

                <Skeleton
                    :is-loaded="isLoaded"
                    :w="'20%'"
                    :h="'14px'"
                    radius="1px"
                >
                    <NuxtLink
                        :to="'/posts/' + post.slug"
                        class="card__footer__link"
                    >
                        Read Full
                        <ArrowRight />
                    </NuxtLink>
                </Skeleton>
            </div>
        </div>
    </div>
</template>

<script>
import ArrowRight from "~/assets/icons/arrow.svg?inline";
import Skeleton from "./Skeleton.vue";

export default {
    components: {
        ArrowRight,
        Skeleton,
    },
    props: {
        post: Object,
        full: Boolean,
        isLoaded: {
            type: Boolean,
            default: true,
        },
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
                let time = Math.floor(diff / periods.month)
                return  time > 1 ? `${time} months` : `${time} month`;
            } else if (diff > periods.week) {
                let time = Math.floor(diff / periods.week)
                return  time > 1 ? `${time} weeks` : `${time} week`;
            } else if (diff > periods.day) {
                let time = Math.floor(diff / periods.day)
                return  time > 1 ? `${time} days` : `${time} day`;
            } else if (diff > periods.hour) {
                let time = Math.floor(diff / periods.hour)
                return  time > 1 ? `${time} hours` : `${time} hour`;
            } else if (diff > periods.minute) {
                let time = Math.floor(diff / periods.minute)
                return  time > 1 ? `${time} minutues` : `${time} minutue`;
            }

            return "Just now";
        },
    },
};
</script>
