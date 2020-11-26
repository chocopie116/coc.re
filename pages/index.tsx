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