import React from 'react';

export default function Index({ posts: posts }) {
  return (
    <>
      <div id='wrapper'>
        <header id='header' className='alt'>
          <a href='index.html' className='logo'>
            <strong>株式会社コクリ</strong>
          </a>
          <nav>
            <a href='index.html#menu'></a>
          </nav>
        </header>

        <nav id='menu'>
          <ul className='links'>
            <li>
              <a href='index.html'>Home</a>
            </li>
            <li>
              <a href='index.html#projects'>Projects</a>
            </li>
            <li>
              <a href='https://note.mu/chocopie116/m/m603ca11b459e'>Blogs</a>
            </li>
          </ul>
        </nav>

        <section id='banner' className='major'>
          <div className='inner'>
            <header className='major'>
              <h1>Work as Play</h1>
            </header>
            <div className='content'>
              <p>All work and no play makes Jack a dull boy.</p>
              <ul className='actions'>
                <li>
                  <a href='index.html#projects' className='button next scrolly'>
                    GET KNOWN
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </section>

        <div id='main'>
          <div className='inner' id='projects'>
            <header className='major'>
              <h2>Works</h2>
            </header>
          </div>

          <section id='one' className='tiles'>
            {posts.map((p) => {
              return (
                <article
                  key={p.id}
                  style={{
                    backgroundImage: `url(${p.thumbnail})`,
                  }}
                >
                  <a href='https://chocopie116.me/projects/e-scooter/'>
                    <header className='major'>
                      <h3>{p.title}</h3>
                      <p>法律と向き合うこと・新しい文化をつくる挑戦</p>
                    </header>
                  </a>
                </article>
              );
            })}
          </section>

          <section id='two'>
            <div className='inner'>
              <header className='major'>
                <h2>Contact</h2>
              </header>
              <p>相談・雑談歓迎します。</p>
              <a href='https://m.me/chocopie116' target='_blank'>
                <img src='img/contactme.png' />
              </a>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}

export async function getServerSideProps(context) {
  const res = await fetch('https://cocre.microcms.io/api/v1/works', {
    headers: {
      'X-API-KEY': 'dab4d32d-1f4b-44f4-a76d-3020cb4f92fe',
    },
  });
  const body = await res.json();
  console.log(body);

  return {
    props: {
      posts: [
        {
          id: 'dfdsafdasfdsa',
          title: 'test',
          thumbnail: 'https://chocopie116.me/img/projects/zero9.jpg',
        },
        {
          id: 'dfdsafdasfdsaa',
          title: 'test',
          thumbnail: 'https://chocopie116.me/img/projects/zero9.jpg',
        },
      ],
    },
  };
}
