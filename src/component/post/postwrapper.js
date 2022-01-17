import React from 'react';
import styled from 'styled-components';
import PostPreview from './postpreivew';

const Wrapper = styled.div`
    margin-right: 10%;
    margin-bottom: 10%;
`

const PostWrapper = ({ posts }) => {
    return(
        <Wrapper>
            {posts.map(post => 
                    <PostPreview author={post.author.nickname} place={post.place} city={post.city} likes={post.like_users.length} content={post.contents} image={post.image}>
                    </PostPreview>
                )}
        </Wrapper>
    )
}

export default PostWrapper;