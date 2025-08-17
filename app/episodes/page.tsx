import {API} from '../../assets/api/api';
import {EpisodeType, ResponseType} from '../../assets/api/rick-and-morty-api';
import {PageWrapper} from '../../components/PageWrapper/PageWrapper';
import {Card} from '../../components/Card/Card';
import {getLayout} from '../../components/Layout/BaseLayout/BaseLayout';
import {GetServerSideProps} from 'next';
import * as process from "node:process";

// export const getServerSideProps: GetServerSideProps = async ({res}) => {
//     const episodes = await API.rickAndMorty.getEpisodes()
//
//     if (!episodes) {
//         return { notFound: true }
//     }
//
//     return {
//         props: { episodes }
//     }
// }

const getEpisodes = async (): Promise<ResponseType<EpisodeType>> => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_RICK_API_URL}`)
    return await res.json()
}

export default async function Episodes() {
    const {results} = await getEpisodes()

    const episodesList = results.map(episode => (
        <Card key={episode.id} name={episode.name}/>
    ))

    return (
        <PageWrapper>
            {episodesList}
        </PageWrapper>
    )
}

