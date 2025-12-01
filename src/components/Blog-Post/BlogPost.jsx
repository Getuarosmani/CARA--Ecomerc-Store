import React from 'react';
import style from './BlogPost.module.scss';

export const BlogPost = ({ img, title, text = '', date, maxLength = 200, backgrounPposition = 'center' }) => {
  const trimmedText =
    text.length > maxLength ? text.slice(0, maxLength) + '...' : text;

  return (
    <section className={style['blog-post']}>
      <div className={`container ${style.container}`}>
        <div
          className={style.left}
          style={{
            backgroundImage: `url(${img})`,
            backgroundPosition: backgrounPposition,
          }}
        >
          <p className={style.date}>{date}</p>
        </div>
        <div className={style.right}>
          <h3>{title}</h3>
          <p className={style.text}>{trimmedText}</p>
          <span>Continue Reading</span>
        </div>
      </div>
    </section>
  );
};
