import { worker } from 'cluster';
import React from 'react';

export default function Index({ work: work }) {
  return (
    <>
      <div id='wrapper'>
        <header id='header' className='alt'>
          <a href='https://chocopie116.me/' className='logo'>
            <strong>about me</strong>
          </a>
          <nav>
            <a href='#menu'></a>
          </nav>
        </header>

        <nav id='menu'>
          <ul className='links'>
            <li>
              <a href='https://chocopie116.me/'>Home</a>
            </li>
            <li>
              <a href='#projects'>Projects</a>
            </li>
            <li>
              <a href='https://note.mu/chocopie116/m/m603ca11b459e'>Blogs</a>
            </li>
          </ul>
        </nav>

        <section id='banner' className='major'>
          <div className='inner'>
            <header className='major'>
              <h1>{work.title}</h1>
            </header>
            <div className='content'>
              <h2>法律と向き合うこと・新しい文化をつくる挑戦</h2>
            </div>
          </div>
        </section>

        <div id='main' className='alt'>
          <section id='one'>
            <div className='inner projects'>{work.body}</div>
          </section>
        </div>
      </div>
    </>
  );
}

export async function getServerSideProps(context) {
  const workId = context.params.id;
  const res = await fetch(`https://cocre.microcms.io/api/v1/works/${workId}`, {
    headers: {
      'X-API-KEY': 'dab4d32d-1f4b-44f4-a76d-3020cb4f92fe',
    },
  });
  const w: WorkDetailResponse = await res.json();

  return {
    props: {
      work: {
        id: w.id,
        title: w.title,
        thumbnail: w.thumbnail.url,
        body: w.body,
      },
    },
  };
}
