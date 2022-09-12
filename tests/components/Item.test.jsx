import { render, screen } from "@testing-library/react"
import { Image } from "../../src/components/Image"

describe('Prueba componente en <Image />', () => { 

    const title="Saitama"
    const url = "https://one-punch.com/saitama.jpg"
    test('Debe de hacer match con el snapshot', () => { 
        const {container} = render(<Image title={title} url={url} />) 
        expect(container).toMatchSnapshot();
     })


    test('debe mostrar la imagen con el URL y el ALT indicado', () => { 
        
        render(<Image title={title} url={url} />) 
        //screen.debug()

        //expect(screen.getByRole('img').src).toBe(url);
        //expect(screen.getByRole('img').title).toBe(title);

        const {src, alt} = screen.getByRole('img');


        expect(src).toBe(url);
        expect(alt).toBe(alt)
     })


     test('debe de mostrar el titulo del componente', async () => { 
        render(<Image title={title} url={url} />) 
        expect(screen.getByText(title)).toBeTruthy();

      })
 })