import React, { useContext } from 'react';
import { Spinner } from './Spinner';
import { AppContext } from '../contexts/AppContext';

export const Blogs = () => {
  const { posts, loading } = useContext(AppContext);

  return (
    <div>
      {loading ? (
        <Spinner />
      ) : (
        <>
          {posts.length === 0 ? (
            <div>
              <p>No post found</p>
            </div>
          ) : (
            posts.map((post) => (
              <div key={post.id}>
                <p>{post.title}</p>
                <p>
                  By <span>{post.author}</span> on <span>{post.category}</span>
                </p>
                <p>Posted on {post.date}</p>
                <p>{post.content}</p>
                <div>
                  {post.tags.map((tag, index) => {
                    return <span key={index}>{`#${tag}`}</span>;
                  })}
                </div>
              </div>
            ))
          )}
        </>
      )}
    </div>
  );
};
