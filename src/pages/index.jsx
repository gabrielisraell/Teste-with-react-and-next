import Link from "next/link";
import Navegador from "../components/Navegador";

export default function Home() {
    return (
        <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexWrap: 'wrap',
            height: '100vh'
        }}>
            <Navegador text="example" destino="/example" />
            <Navegador text="stylish" destino="/stylish" cor="crimson" />
            <Navegador text="testeReact" destino="/testeReact" cor="#41ec7a" />
            <Navegador text="estado One" destino="/estadoOne" cor="blue" />
            <Navegador text="estado Two" destino="/estadoTwo" cor="pink" />
            <Navegador text="Estatico" destino="/estatico" cor="#103f5e" />
        </div>
    )
}