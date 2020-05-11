import { getImagen } from "../../base/11-async-await"


describe('Pruebas con async-await y Fetch', () => {

    test('debe de retornar el url de la imagen', async() => {
        
        const url = await getImagen();
        // console.log(url)
        expect( url.includes('https://') ).toBe( true );

    })
    
    
})
