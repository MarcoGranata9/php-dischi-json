const {createApp} = Vue;

createApp({
    data() {
        return {
            apiUrl: "server.php",
            diskArray: [],
            singleDisk: [],
            show: false,
        }
    },
    methods: {
        diskDetails(index) {
            this.show = true;
            axios.get(this.apiUrl).then((resp) => {
                console.log(resp.data[index]);
                this.singleDisk = resp.data[index];
            })
        },
        closeCanvas() {
            this.show = false;
            this.singleDisk = [];
        }
    },
    created() {
        axios.get(this.apiUrl).then((resp) => {
            this.diskArray = resp.data
        })
    }
}).mount("#app");