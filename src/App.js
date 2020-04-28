import React from 'react';
import Header from './components/Header/Header';
import PostList from './components/PostList/PostList';
import GlobalSyle from './styles/global';

function App() {
    return (
        <>
            <GlobalSyle />
            <Header />
            <PostList />
        </>
    );
}

export default App;