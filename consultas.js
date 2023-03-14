import pkg from 'pg';
import Cursor from 'pg-cursor'
const {Pool} = pkg;

const pool = new Pool({
    host: 'localhost',
    database: 'ejemplo_cursores',
    user: 'node',
    password: '123456',
    port: 5432,
    max: 5,
    idleTimeoutMillis: 3000,
    connectionTimeoutMillis: 2000,
})




export const addPais = (nombre, continente, poblacion, pib_2019, pib_2020) => {
    
    return new Promise(async (resolve, reject) => {
        try {

            //primer paso begin
            await pool.query('BEGIN');
        
            //segundo insertar registro tabla paises
            await pool.query(`
                INSERT INTO paises (nombre, continente, poblacion) VALUES($1, $2, $3)
            `, [nombre, continente, poblacion]);
        
            //insertar registro en paises_pib
            await pool.query(`
                INSERT INTO paises_pib (nombre, pib_2019, pib_2020) VALUES($1, $2, $3)
            `, [nombre, pib_2019, pib_2020]);
        
            //crear registro en paises_data_web
            await pool.query(`
            INSERT INTO paises_data_web (nombre_pais, accion) VALUES($1, $2)
            `, [nombre, 1])
        
            //FINALMENTE GURDAMOS LOS CAMBIOS
            await pool.query('COMMIT')
            resolve("País agregado correctamente.")
            
           } catch (error) {
            await pool.query('ROLLBACK')
            reject("Error al ingresar el país.")
           }
    })
}