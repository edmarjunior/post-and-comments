import React, { Component } from 'react';
import Post from '../Post/Post';
import { Container } from './styles';

import edmarImg from '../../assets/edmar.jpg';
import tabataImg from '../../assets/tabata.jpg';
import brunoImg from '../../assets/bruno.jpg';
import joaoImg from '../../assets/joao.jpg';

class PostList extends Component {
    state = {
        posts: [
            {
                id: 1,
                author: {
                    name: 'Edmar Costa',
                    avatar: edmarImg,
                },
                date: '27 Abril 2020',
                content: 'Pessoal, vocês já conheceram alguém que se dizia ser vampiro?',
                comments: [
                    {
                        id: 1,
                        author: {
                            name: 'João Amaral',
                            avatar: joaoImg,
                        },
                        content: 'É o que? Cê tá doiiidooooooo.'
                    },
                    {
                        id: 2,
                        author: {
                            name: 'Tábata Costa',
                            avatar: tabataImg,
                        },
                        content: 'O Jão, branco desse jeito to achando que você é um hein kkkkkk'
                    }
                ]
            },
            {
                id: 2,
                author: {
                    name: 'Tábata Costa',
                    avatar: tabataImg,
                },
                date: '28 Abril 2020',
                content: 'Se você tivesse que dar a você próprio um prêmio por fazer o melhor, o qual seria?',
                comments: [
                    {
                        id: 3,
                        author: {
                            name: 'Bruno Alves',
                            avatar: brunoImg,
                        },
                        content: 'Vishi, sei não hein, eu manjo de comissão pra caramba!'
                    },
                    {
                        id: 4,
                        author: {
                            name: 'Edmar Costa',
                            avatar: edmarImg,
                        },
                        content: 'Vdd Brunão, mas você é bom tbm em dar PT ;) bora tomar uma?'
                    }
                ]
            },
            {
                id: 3,
                author: {
                    name: 'Edmar Costa',
                    avatar: edmarImg,
                },
                date: '29 Abril 2020',
                content: 'O que estão achando da stack node e react?',
                comments: [
                    {
                        id: 1,
                        author: {
                            name: 'João Amaral',
                            avatar: joaoImg,
                        },
                        content: 'Manooo do céu, ta da hora!'
                    },
                    {
                        id: 2,
                        author: {
                            name: 'Tábata Costa',
                            avatar: tabataImg,
                        },
                        content: 'Show de bola!'
                    }
                ]
            },
            {
                id: 4,
                author: {
                    name: 'Edmar Costa',
                    avatar: edmarImg,
                },
                date: '27 Abril 2020',
                content: 'Galera, alguém me indica alguma série ou filme?',
                comments: [
                    {
                        id: 1,
                        author: {
                            name: 'João Amaral',
                            avatar: joaoImg,
                        },
                        content: 'Como eu era antes de você. Muito bom esse, chegou a cair um cisco nos meus olhos'
                    },
                    {
                        id: 2,
                        author: {
                            name: 'Edmar Costa',
                            avatar: edmarImg,
                        },
                        content: 'Vlw Jão! vou assistir, parece ser filme pra "macho"'
                    },
                    {
                        id: 3,
                        author: {
                            name: 'Tábata Costa',
                            avatar: tabataImg,
                        },
                        content: 'Só observo ...'
                    }
                ]
            },
        ]
    }

    render() {
        return (
            <Container>
                {this.state.posts.map(post => <Post key={post.id} post={post} />)}
            </Container>
        );
    }

}

export default PostList;