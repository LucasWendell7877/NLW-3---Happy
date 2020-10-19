const Database = require('./db');
const saveOrphanage = require('./saveOrphanage');

Database.then(async db => {

    // Inserir dados na tabela
    await saveOrphanage(db, {
        lat: "-23.542474",
        lng: "-46.6519013",
        name: "Lar dos meninos",
        about: "Presta assistência a crianças de 06 a 15 anos que se encontre em situação de risco e/ou vulnerabilidade social.",
        whatsapp: "985468745",
        images: [
            "https://images.unsplash.com/photo-1574647267419-cd3adf200aed?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9",
            "https://images.unsplash.com/photo-1599058945522-28d584b6f0ff?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9"
        ].toString(),
        instructions: "Presta assistência a crianças de 06 a 15 anos que se encontre em situação de risco e/ou vulnerabilidade social.",
        opening_hours: "Horário de visitas Das 8h até 18h",
        open_on_weekends: "0"
    }) 

    // Consultar dados da tabela
        const selectedOrphanages = await db.all("SELECT * FROM orphanages")
        console.log(selectedOrphanages)

    // Consultar somente 1 orphanage, pelo id
        const orphanage = await db.all('SELECT * FROM orphanages WHERE id = "2"')
        console.log(orphanage)

    // Deletar dado da tabela
        // console.log(await db.run("DELETE FROM orphanages WHERE id = '4'"))
})