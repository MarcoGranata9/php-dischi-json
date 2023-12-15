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
            const params = {
                id: index,
            }
            console.log(params);
            axios.get(this.apiUrl, {params}).then((resp) => {
                console.log(resp);
                this.singleDisk = resp.data
                console.log(this.singleDisk);
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