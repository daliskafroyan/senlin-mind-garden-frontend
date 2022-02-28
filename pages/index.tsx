import type { GetStaticProps, NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { TimelineCard } from "../components/organisms/TimelineCard";
import {useQuery, gql, ApolloClient, InMemoryCache} from '@apollo/client'

const NOTES = gql`
    query getNotes{
        notes {
            data {
                id
                attributes {
                    title
                    createdAt
                    tags {
                        data {
                            attributes {
                                title
                            }
                        }
                    }
                }
            }
        }
    }
`

const Home: NextPage<{data: any, loading: any}> = ({data, loading}) => {
    console.log('#debug data 1', data)
    if (!loading) {
        data = data.notes.data;
        data.map((dat: any) => {console.log('#debug shit',dat.attributes.tags.data)})
        console.log('#debug data', data)
    }

    return (
        <div className={styles.container}>
            <Head>
                <title>Create Next App</title>
                <meta
                    name="description"
                    content="Generated by create next app"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className={styles.main}>
                    {data.map((note: any) => 
                        <TimelineCard
                            timelineTitle="Bootstrapped Information"
                            cardTitle={note.attributes.title}
                            mainTopic={'hei'}
                            specificTopic="database"
                            author="fireship"
                            location="youtube"
                        />
                    )}
            </main>
        </div>
    );
};

export const getStaticProps: GetStaticProps = async () => {
    const client = new ApolloClient({
        uri: 'http://localhost:1337/graphql',
        cache: new InMemoryCache()
    })
    
    const {loading, error, data} = await client.query({query: NOTES});

    console.log('#debug data async', data)
    return {
        props: {
            data,
            loading
        }
    }
}

export default Home;
