import React from 'react';

export default function Index({ works: works }) {
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
            {works.map((p) => {
              return (
                <article
                  key={p.id}
                  style={{
                    backgroundImage: `url(${p.thumbnail})`,
                  }}
                >
                  <a href={`/works/${p.id}`}>
                    <header className='major'>
                      <p>{p.title}</p>
                    </header>
                  </a>
                </article>
              );
            })}
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
  const body: WorksResponse = await res.json();
  const works = body.contents;
  //TODO とりあえず
  works.push(body.contents[0]);
  works.push(body.contents[0]);
  works.push(body.contents[0]);
  works.push(body.contents[0]);

  return {
    props: {
      works: works.map((w) => {
        return {
          id: w.id,
          title: w.title,
          thumbnail: w.thumbnail.url,
        };
      }),
    },
  };
}
