import Layout from "../components/Layout";

export function getStaticProps(){
    return {
        props: {
            number: Math.random()
        }
    }
}

export default function Estatico(props) {
    return(

            <Layout title="Conteudo estatico">
                <h1> Gerar numero random</h1>
                <div>{props.number}</div>
            </Layout>
    )
}