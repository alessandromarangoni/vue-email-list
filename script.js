const { createApp } = Vue

createApp({
    data() {
        return {
            mailGenerator:"https://flynn.boolean.careers/exercises/api/random/mail",
            mail:[]
        }
    },
    methods: {
        metodo() {
                for (let i = 0; i < 10; i++) {
                axios.get( this.mailGenerator ).then((mail) => {
                const mailI = this.mail[i];
                this.mail.push(mail.data.response)})}
    }}
}).mount('#app')