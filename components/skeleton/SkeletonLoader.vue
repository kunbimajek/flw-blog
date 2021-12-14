<template>
    <div class="card" :class="{ 'card--full': full }">
        <Skeleton :is-loaded="isLoaded" skeleton-class="card__image"/>
        <div class="card__body">
            <div class="card__texts">
                <Skeleton
                    :is-loaded="isLoaded"
                    :w="'40%'"
                    :h="'15px'"
                    radius="1px"/>

                <Skeleton
                    :is-loaded="isLoaded"
                    :w="'80%'"
                    :h="'22px'"
                    radius="3px"
                    :m="'6px 0 10px'"/>

                <Skeleton
                    :is-loaded="isLoaded"
                    :w="'100%'"
                    :h="'15px'"
                    radius="1px"
                    :m="'5px 0'"
                    :rep="4"/>
            </div>
            <div class="card__footer">
                <Skeleton
                    :is-loaded="isLoaded"
                    :w="'20%'"
                    :h="'14px'"
                    radius="1px"/>

                <Skeleton
                    :is-loaded="isLoaded"
                    :w="'20%'"
                    :h="'14px'"
                    radius="1px"
                />
            </div>
        </div>
    </div>
</template>

<script>
import Skeleton from "./Skeleton.vue";

export default {
    components: {
        Skeleton,
    },
    props: {
        full: {
            type: Boolean,
            default: false
        },
        isLoaded: {
            type: Boolean,
            default: false,
        },
    },
};
</script>
