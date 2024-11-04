const Cliente = require("./models/cliente");

const llenandoDeFlojo = () => {
    for(let i = 0 ; i < 10 ; i++){
        Cliente.create({
            rut: `11111111-${i}`,
            nombre: `nombre ${i}`,
            direccion: `direccion ${i}`,
            correo: `correo${i}@mail.com`,
            telefono: `123456789${i}`
        });
    }
}

llenandoDeFlojo();