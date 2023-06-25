import PostsGrid from '../posts/posts-grid'
import classes from './featured-posts.module.css'

export default function FeaturedPosts(props) {
  
  return (
    <section className={classes.latest}>
      <h3 id='projects'>My Projects</h3>
          <PostsGrid posts={props.posts} />
    </section>
  )
}
