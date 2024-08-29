import { Header } from "./components/Header";
import { Post, PostType } from "./components/Post";
import styles from './App.module.css';
import './global.css';
import { Sidebar } from "./components/Sidebar";

const posts: PostType[] = [
  {
      id: 1,
      author: {
          avatarUrl: "https://images.unsplash.com/photo-1596982061417-3a686a450552?q=50&w=300&h=300&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          name: "Logan",
          role: "Web Developer"
      },
      content: [
          { type: 'paragraph', content: 'Fala galeraa 👋'},
          { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
          { type: 'link', content: 'logan.design/doctorcare'},
      ],
      publishedAt: new Date('2024-08-28 08:13:30'),
  },
  {
      id: 2,
      author: {
          avatarUrl: "https://images.unsplash.com/photo-1452857297128-d9c29adba80b?q=60&w=400&h=400&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          name: "Eevee",
          role: "Back-end Developer"
      },
      content: [
          { type: 'paragraph', content: 'Oieeee 👋'},
          { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
          { type: 'link', content: 'eevee.design/port01'},
      ],
      publishedAt: new Date('2024-08-26 19:35:50'),
  }
]

function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map(post => {
            return (
                <Post 
                key={post.id}
                post={post}
                />
            )
          })}
        </main>
      </div>
    </div>
  )
}

export default App
