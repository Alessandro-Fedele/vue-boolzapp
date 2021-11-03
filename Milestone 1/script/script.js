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
                        status: `sent`,
                        color: `msgGreen`
                    },
                    {
                        date: `10/01/2020 15:32:03`,
                        text: `Ricordati di dargli da mangiare`,
                        status: `sent`,
                        color: `msgGreen`
                    },
                    {
                        date: `10/01/2020 16:15:22`,
                        text: `Tutto fatto!`,
                        status: `received`,
                        color: `msgWhite`
                    },
                    {
                        date: `10/01/2020 16:16:55`,
                        text: `Sicuro?`,
                        status: `sent`,
                        color: `msgGreen`
                    },
                    {
                        date: `10/01/2020 16:17:22`,
                        text: `No.. In verità è scappato!`,
                        status: `received`,
                        color: `msgWhite`
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
                        status: `sent`,
                        color: `msgGreen`
                    },
                    {
                        date: `20/03/2020 16:30:55`,
                        text: `Bene grazie! Stasera ci vediamo?`,
                        status: `received`,
                        color: `msgWhite`
                    },
                    {
                        date: `20/03/2020 16:35:03`,
                        text: `Certo! Ti va di andare al cinema?`,
                        status: `sent`,
                        color: `msgGreen`
                    },
                    {
                        date: `20/03/2020 17:30:22`,
                        text: `Hey.. ma che fine hai fatto?`,
                        status: `sent`,
                        color: `msgGreen`
                    },
                    {
                        date: `20/03/2020 17:48:09`,
                        text: `Scusa! Mi sono addormentato! Ci vidiamo alle 9!`,
                        status: `received`,
                        color: `msgWhite`
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
                        status: `received`,
                        color: `msgWhite`
                    },
                    {
                        date: `28/03/2020 10:20:10`,
                        text: `E come hai fatto?`,
                        status: `sent`,
                        color: `msgGreen`
                    },
                    {
                        date: `28/03/2020 12:15:22`,
                        text: `Sono andato contro un muro, dovro ripagare i danni`,
                        status: `received`,
                        color: `msgWhite`
                    },
                    {
                        date: `28/03/2020 12:20:10`,
                        text: `Basta che tu stai bene! Ti sei fatto male?`,
                        status: `sent`,
                        color: `msgGreen`
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
                        status: `sent`,
                        color: `msgGreen`
                    },
                    {
                        date: `10/01/2020 15:50:06`,
                        text: `Che aspettiamo ad andare?`,
                        status: `received`,
                        color: `msgWhite`
                    },
                    {
                        date: `10/01/2020 15:50:55`,
                        text: `Fanno anche i Kebab!`,
                        status: `sent`,
                        color: `msgGreen`
                    },
                    {
                        date: `10/01/2020 15:51:16`,
                        text: `Vorrà dire che mangerp sia una pizza che il kebab!`,
                        status: `received`,
                        color: `msgWhite`
                    },
                    {
                        date: `10/01/2020 16:00:12`,
                        text: `Ottima idea!`,
                        status: `sent`,
                        color: `msgGreen`
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
                        status: `sent`,
                        color: `msgGreen`
                    },
                    {
                        date: `10/01/2020 19:30:57`,
                        text: `Rispondi`,
                        status: `sent`,
                        color: `msgGreen`
                    },
                    {
                        date: `10/01/2020 19:30:59`,
                        text: `Dai rispondi`,
                        status: `sent`,
                        color: `msgGreen`
                    },
                    {
                        date: `10/01/2020 19:31:01`,
                        text: `Rispondiiiiiiiii`,
                        status: `sent`,
                        color: `msgGreen`
                    },
                    {
                        date: `10/01/2020 19:32:00`,
                        text: `Ora ti blocco! Avanti parla!`,
                        status: `received`,
                        color: `msgWhite`
                    },
                    {
                        date: `10/01/2020 19:35:01`,
                        text: `Mi sono scordato..`,
                        status: `sent`,
                        color: `msgGreen`
                    },
                    {
                        date: `10/01/2020 19:36:20`,
                        text: `-.-`,
                        status: `received`,
                        color: `msgWhite`
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
                        status: `sent`,
                        color: `msgGreen`
                    },
                    {
                        date: `10/01/2020 15:52:39`,
                        text: `Carne?`,
                        status: `received`,
                        color: `msgWhite`
                    },
                    {
                        date: `10/01/2020 15:52:40`,
                        text: `O pesce?`,
                        status: `received`,
                        color: `msgWhite`
                    },
                    {
                        date: `10/01/2020 15:52:41`,
                        text: `O pasta?`,
                        status: `received`,
                        color: `msgWhite`
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
                        status: `received`,
                        color: `msgGreen`
                    },
                    {
                        date: `10/01/2020 23:31:00`,
                        text: `Non voglio saperlo`,
                        status: `sent`,
                        color: `msgWhite`
                    },
                    {
                        date: `10/01/2020 23:31:55`,
                        text: `Entrare nel Guinness dei Primati!`,
                        status: `received`,
                        color: `msgGreen`
                    },
                    {
                        date: `10/01/2020 23:32:00`,
                        text: `............`,
                        status: `sent`,
                        color: `msgWhite`
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
                        status: `sent`,
                        color: `msgGreen`
                    },
                    {
                        date: `10/01/2020 3:50:00`,
                        text: `Flavio.. sono le 3 di notte!`,
                        status: `received`,
                        color: `msgWhite`
                    },
                    {
                        date: `10/01/2020 3:50:55`,
                        text: `Non sentirsi in vena`,
                        status: `sent`,
                        color: `msgGreen`
                    },
                    {
                        date: `10/01/2020 3:51:00`,
                        text: `Buonanotte`,
                        status: `received`,
                        color: `msgWhite`
                    },
                ],
            },
        ]
    }
});