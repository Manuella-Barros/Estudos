export const data = {
    posts: [
        {
            id: 1,
            author: "Jane Cooper",
            role: "Dev Front-end",
            elapsedTime: "1 hora",
            profilePicture: "/imagens/posts/profile-1",
            postContent: 'Fala galeraa 👋\n' + '\n' + 'Acabei de subir mais um projeto no meu portfólio. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀\n' + '\n' + ' 👉 jane.design/doctorcare\n' + '\n' + '#novoprojeto #nlw #rocketseat',
            comments: [],
        },
        {
            id: 2,
            author: "Devon Lane",
            role: "Dev Full Stack",
            elapsedTime: "2 hora",
            profilePicture: "/imagens/posts/profile-2",
            postContent: 'Fala pessoal 👋\n' + '\n' + 'Finalmente finalizei meu novo site/portfólio. Foi um baita desafio criar todo o design e codar na unha, mas consegui 💪🏻 \n' + '\n' + 'Acesse e deixe seu feedback 👉 devonlane.design\n' + '\n' + '#uiux #userexperience',
            comments: [
                {
                    id: 1,
                    author: "Leslie Alexander",
                    elapsedTime: "2 horas",
                    textComment: "Muito bom, devon! Top demais!",
                    likes: 33,
                    profilePicture: "/imagens/profileIcon.png",
                },
                {
                    id: 2,
                    author: "Jenny Wilson",
                    elapsedTime: "3 horas",
                    textComment: "Adorei seu novo portfólio, devon",
                    likes: 2,
                    profilePicture: "/imagens/posts/profile-3.jpg",
                },
                {
                    id: 3,
                    author: "Bessie Cooper",
                    elapsedTime: "3 horas",
                    textComment: "Amei! Vou me inspirar nele!",
                    likes: 5,
                    profilePicture: "/imagens/posts/profile-4.jpg",
                },
            ],
        },
    ],
};
