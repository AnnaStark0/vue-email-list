// Descrizione
// Attrvaerso l'apposita API di Boolean :api:
// https://flynn.boolean.careers/exercises/api/random/mail
// generare 10 indirizzi email e stamparli in pagina all'interno di una lista
// Bonus
// Far comparire gli indirizzi email solamente quando sono stati tutti generati.

const app = new Vue({
    el: '#root',
    data: {
        emails: []
    },
    methods: {

    },
    created() {
        // Make a request for a user with a given ID
        axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
            .then(function (response) {
                // handle success
                console.log(response.data.response);
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            });
    }
});