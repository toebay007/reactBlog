import { Link } from 'react-router-dom';

const Bloglist = ({blogs, title}) => {
    // you can eith make use of the direct props property by using props in the above bracket, then putting them into a variable like the variable below ... or you can do it above like the sample, by simply destructuring the object props... in such a case, you include a curly braces above and put in the props value you need.
    // const blogs = props.blogs;
    // const title = props.title;

    // console.log(props.blogs);
    return ( 
        <div className="blog-list">
            <h2>{ title }</h2>
            {blogs.map((blog) => (
                <div className="blog-preview" key={blog.id}>
                    <Link to={ `/blogs/${blog.id}` }>
                        <h2>{blog.title}</h2>
                        <p> written by { blog.author}</p>                    
                    </Link>
                 
                </div>
            ))}
        </div>
     );
}
 
export default Bloglist;