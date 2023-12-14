const {createApp} = Vue;

createApp({
    data() {
        return {
            apiUrl: "server.php",
            diskArray: [],
        }
    },
    methods: {

    },
    created() {
        axios.get(this.apiUrl).then((resp) => {
            this.diskArray = resp.data
        })
    }
}).mount("#app");