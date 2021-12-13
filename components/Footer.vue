<template>
    <footer class="footer">
        <h2 class="footer__heading">Join our Team of Writers</h2>
        <p class="footer__text">
            On dasdas, writers earn a living doing what they love. <br />
            Getting started is easy. Just pay a one time
            <span class="footer__text--bold">$25 fee</span> and everything is
            ready to go.
        </p>
        <button href="/" class="btn btn--primary btn--pulse" @click="makePayment">
            JOIN US
        </button>
    </footer>
</template>

<script>
export default {
    methods: {
        makePayment() {
            FlutterwaveCheckout({
                public_key: this.$config.testPublicKey,
                tx_ref: "RX1",
                amount: 500,
                currency: "USD",
                country: "US",
                payment_options: "card",
                redirect_url:
                    "http://localhost:3000/",
                meta: {
                    consumer_id: 23,
                    consumer_mac: "92a3-912ba-1192a",
                },
                customer: {
                    email: "jbond@gmail.com",
                    phone_number: "08102909304",
                    name: "James Bond",
                },
                customizations: {
                    title: "dasdas",
                    description: "Join our Team of Writers at dasdas",
                    logo: "https://i.ibb.co/wYDCtJy/logo.png",
                },
            });
        },
    },
};
</script>
