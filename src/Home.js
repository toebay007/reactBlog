// in order to make a reactive value, we first import a function from the react node_MODULE CALLED 'useState' from react... and it can thus be further written as ...
// import { useState, useEffect} from 'react';
import Bloglist from './Bloglist';
import useFetch from './useFetch';


const Home = () => {

    const { data: blogs, isPending, error} = useFetch('http://localhost:8000/blogs');
//    const [name, setName] = useState('mario');

//    const handleDelete = (id) =>{
//         const  newBlogs  = blogs.filter(blog => blog.id !== id);
//         setBlogs(newBlogs);
//    }
   
    


    return ( 
        <div className="home">
            {error && <div> { error }</div>}
            {/* handleDelete={handleDelete} */}
            { isPending && <div>loading...</div>}
            {blogs && <Bloglist blogs={blogs} title="All blogs!" />}
            {/* you can filter the props property you need by simply filtering the result and simultanouesly running through the array of objects you need. this filter button can be very useful in terms of searchinf and displaying result */}
             
            {/* <button onClick={() => setName('Tosinlola')}>Change name</button> */}
            {/* <p>{ name }</p> */}
        </div>
     );
}
 
export default Home;