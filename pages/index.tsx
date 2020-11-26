import React from 'react'

export default function Index({posts: posts}) {
    return (
        <>
            <div>Hello world!!!</div>
            {posts.map((p) => {
                return (
                    <div>
                        <p>{ p.title }</p>
                        <p>{ p.id }</p>
                    </div>
                )
            })}
        </>
    )
}

export async function getServerSideProps(context) {
    const res = await fetch("https://cocre.microcms.io/api/v1/works", {
        headers: {
       "X-API-KEY": "dab4d32d-1f4b-44f4-a76d-3020cb4f92fe"
        }
    });
    const body = await res.json()
    console.log(body)



    return {
      props: {
          posts: [
              {
                  id: 'dfdsafdasfdsa',
                  title: 'test',
                  thumbnail: 'https://chocopie116.me/img/projects/zero9.jpg'
              },
              {
                  id: 'dfdsafdasfdsa',
                  title: 'test',
                  thumbnail: 'https://chocopie116.me/img/projects/zero9.jpg'
              }
          ]
      }
    }
}