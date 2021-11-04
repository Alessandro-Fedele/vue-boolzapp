Vue.config.devtools = true;

new Vue({
    el: "#root",
    data: {
        contacts: [
            {
                name: `Simone`,
                avatar: `../img/avatar_1.jpg`,
                messages: [
                    {
                        date: `10/01/2020 15:30:55`,
                        text: `Hai portato a spasso il cane?`,
                        status: `sent`
                    },
                    {
                        date: `10/01/2020 15:32:03`,
                        text: `Ricordati di dargli da mangiare`,
                        status: `sent`
                    },
                    {
                        date: `10/01/2020 16:15:22`,
                        text: `Tutto fatto!`,
                        status: `received`
                    },
                    {
                        date: `10/01/2020 16:16:55`,
                        text: `Sicuro?`,
                        status: `sent`
                    },
                    {
                        date: `10/01/2020 16:17:22`,
                        text: `No.. è scappato!`,
                        status: `received`
                    },
                ],
            },
            {
                name: `Jhonny`,
                avatar: `../img/avatar_2.jpg`,
                messages: [
                    {
                        date: `20/03/2020 16:30:01`,
                        text: `Ciao come stai?`,
                        status: `sent`
                    },
                    {
                        date: `20/03/2020 16:30:55`,
                        text: `Bene grazie! Stasera ci vediamo?`,
                        status: `received`
                    },
                    {
                        date: `20/03/2020 16:35:03`,
                        text: `Certo! Ti va di andare al cinema?`,
                        status: `sent`
                    },
                    {
                        date: `20/03/2020 17:30:22`,
                        text: `Hey.. ma che fine hai fatto?`,
                        status: `sent`
                    },
                    {
                        date: `20/03/2020 17:48:09`,
                        text: `Mi sono addormentato!`,
                        status: `received`
                    },
                ],
            },
            {
                name: `Samuele`,
                avatar: `../img/avatar_3.jpg`,
                messages: [
                    {
                        date: `28/03/2020 10:10:40`,
                        text: `Ho rotto la macchina!`,
                        status: `received`
                    },
                    {
                        date: `28/03/2020 10:20:10`,
                        text: `E come hai fatto?`,
                        status: `sent`
                    },
                    {
                        date: `28/03/2020 12:15:22`,
                        text: `Sono andato contro un muro, dovro ripagare i danni`,
                        status: `received`
                    },
                    {
                        date: `28/03/2020 12:20:10`,
                        text: `Ti sei fatto male?`,
                        status: `sent`
                    },
                ],
            },
            {
                name: `Carlo`,
                avatar: `../img/avatar_4.jpg`,
                messages: [
                    {
                        date: `10/01/2020 15:30:55`,
                        text: `Lo sai che hanno aperto una nuova pizzeria?`,
                        status: `sent`
                    },
                    {
                        date: `10/01/2020 15:50:06`,
                        text: `Che aspettiamo ad andare?`,
                        status: `received`
                    },
                    {
                        date: `10/01/2020 15:50:55`,
                        text: `Fanno anche i Kebab!`,
                        status: `sent`
                    },
                    {
                        date: `10/01/2020 15:51:16`,
                        text: `Vorrà dire che mangerò sia una pizza che il kebab!`,
                        status: `received`
                    },
                    {
                        date: `10/01/2020 16:00:12`,
                        text: `Ottima idea!`,
                        status: `sent`
                    },
                ],
            },
            {
                name: `Luigi`,
                avatar: `../img/avatar_5.jpg`,
                messages: [
                    {
                        date: `10/01/2020 19:30:55`,
                        text: `Devo dirti una cosa importante`,
                        status: `sent`
                    },
                    {
                        date: `10/01/2020 19:30:57`,
                        text: `Rispondi`,
                        status: `sent`
                    },
                    {
                        date: `10/01/2020 19:30:59`,
                        text: `Dai rispondi`,
                        status: `sent`
                    },
                    {
                        date: `10/01/2020 19:31:01`,
                        text: `Rispondiiiiiiiii`,
                        status: `sent`
                    },
                    {
                        date: `10/01/2020 19:32:00`,
                        text: `Ora ti blocco! Avanti parla!`,
                        status: `received`
                    },
                    {
                        date: `10/01/2020 19:35:01`,
                        text: `Mi sono scordato..`,
                        status: `sent`
                    },
                    {
                        date: `10/01/2020 19:36:20`,
                        text: `-.-`,
                        status: `received`
                    },
                ],
            },
            {
                name: `Samantha`,
                avatar: `../img/avatar_6.jpg`,
                messages: [
                    {
                        date: `10/01/2020 15:30:55`,
                        text: `Che facciamo per cena?`,
                        status: `sent`
                    },
                    {
                        date: `10/01/2020 15:52:39`,
                        text: `Carne?`,
                        status: `received`
                    },
                    {
                        date: `10/01/2020 15:52:40`,
                        text: `O pesce?`,
                        status: `received`
                    },
                    {
                        date: `10/01/2020 15:52:41`,
                        text: `O pasta?`,
                        status: `received`
                    }
                ],
            },
            {
                name: `Marco`,
                avatar: `../img/avatar_7.jpg`,
                messages: [
                    {
                        date: `10/01/2020 23:30:55`,
                        text: `Qual'è il colmo per un gorilla?`,
                        status: `received`
                    },
                    {
                        date: `10/01/2020 23:31:00`,
                        text: `Non voglio saperlo`,
                        status: `sent`
                    },
                    {
                        date: `10/01/2020 23:31:55`,
                        text: `Entrare nel Guinness dei Primati!`,
                        status: `received`
                    },
                    {
                        date: `10/01/2020 23:32:00`,
                        text: `............`,
                        status: `sent`
                    },
                ],
            },
            {
                name: `Flavio`,
                avatar: `../img/avatar_8.jpg`,
                messages: [
                    {
                        date: `10/01/2020 3:30:55`,
                        text: `Sai qual è il colmo per un ago?`,
                        status: `sent`
                    },
                    {
                        date: `10/01/2020 3:50:00`,
                        text: `Flavio.. sono le 3 di notte!`,
                        status: `received`
                    },
                    {
                        date: `10/01/2020 3:50:55`,
                        text: `Non sentirsi in vena`,
                        status: `sent`
                    },
                    {
                        date: `10/01/2020 3:51:00`,
                        text: `Buonanotte`,
                        status: `received`
                    },
                ],
            },
        ],
        index: 0,
        newMsg: "",
    },
    methods: {
        // al click sul nome vengono generate tutte le sue chat
        chat: function (i)
        {
            this.index = i;
        },
        // stampo il messaggio scritto dall'utente
        userI: function (index)
        {
            const date = new Date().toLocaleDateString();
            let userMsg = {
                text: this.newMsg,
                date,
                status: "sent"
            };
            this.contacts[this.index].messages.push(userMsg);
            this.newMsg = "",
                // ritardo di mezzo secondo la risposta automatica
                setTimeout(() =>
                {
                    let rispostaAutomatica = ["Ok", "Non posso", "Ci sentiamo presto!", "Domani magari", "Grazie"];
                    let rispostaRandom = Math.round(Math.random() * 4);
                    let userMsg = {
                        text: rispostaAutomatica[rispostaRandom],
                        date,
                        status: "received"
                    };
                    this.contacts[this.index].messages.push(userMsg);
                }, 500);
        },
        lastMsg: function ()
        {
            let el = this.contacts[this.index].messages;
            let res = el.map(({ date }) => date);
            return res[res.length - 1];
        },
        // funzione per scollare in automatico all'ultimo messaggio copiata spudoratamente da internet
        scrollToEnd: function ()
        {
            let container = this.$el.querySelector(".main-chat-container");
            container.scrollTop = container.scrollHeight;
        }
    }
});