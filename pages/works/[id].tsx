import React from 'react';

export default function Index({ posts: posts }) {
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
              <h1>電動キックボードの社会実装</h1>
            </header>
            <div className='content'>
              <h2>法律と向き合うこと・新しい文化をつくる挑戦</h2>
            </div>
          </div>
        </section>

        <div id='main' className='alt'>
          <section id='one'>
            <div className='inner projects'>
              <h2 id='tag-line'>Tag Line</h2>

              <p>自動運転を前に残された唯一のモビリティ革命。</p>

              <h2 id='story'>Story</h2>

              <p>
                初めて出会った時に衝撃を受けました。
                <br />
                モビリティにおける自動運転の前の唯一の革命だなと。
                <br />
                この移動体験を日本でも広めたいというところからプロジェクトは始まりました。
              </p>

              <h2 id='achivements'>Achivements</h2>

              <ul>
                <li>法律(車両法・道路交通法)の仮説検証を進める</li>
                <li>Shopify を使った EC サイトの構築</li>
                <li>販売促進(動画制作・記事作成)</li>
                <li>SNS アカウントの運用</li>
                <li>会社運営</li>
              </ul>

              <h2 id='reference'>Reference</h2>

              <ul>
                <li>
                  <a href='https://zero9.hop-on.jp/' target='_blank'>
                    製品紹介ページ
                  </a>
                </li>
                <li>
                  <a
                    href='https://prtimes.jp/main/html/rd/p/000000003.000047192.html'
                    target='_blank'
                  >
                    PR
                    TIMES(人気の公道走行可能な電動キックボードZERO9、日本での予約販売開始！渋谷パルコでの展示や無料試乗会も開催)
                  </a>
                </li>
                <li>
                  <a
                    href='https://www.youtube.com/channel/UC4Ne-lcQJZr6dSb-FJYc2og'
                    target='_blank'
                  >
                    YouTube チャンネル
                  </a>
                </li>
                <li>
                  <a href='https://twitter.com/hop__on' target='_blank'>
                    Twitter アカウント
                  </a>
                </li>
                <li>
                  <a href='https://swallow-scooter.com/' target='_blank'>
                    ECサイト(Shopify)
                  </a>
                </li>
                <li>
                  <a href='https://www.hop-on.jp/about' target='_blank'>
                    K-Mobility合同会社
                  </a>
                </li>
              </ul>
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
