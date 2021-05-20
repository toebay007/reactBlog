import { useState } from "react";
import { useHistory } from 'react-router-dom';

const Create = () => {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState('');
    const [isPending, setIsPending] = useState(false);
    const history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault();
        const blog = { title, body, author };

        setIsPending(true);
        fetch('http://localhost:8000/blogs',{
            method: 'POST',
            headers: {"content-type": "application/json"},
            body: JSON.stringify(blog)
        }).then(() => {
            console.log('new blog added ');
            setIsPending(false);
            // to send the user a page backward, you can use this command ---> history.go(-1);
            // to send the user back to the homepage, you use the command line below
            history.push('/');
        })
    }
    return ( 
        <div className="create">
            <h2>Add a new Blog</h2>
            <form onSubmit={handleSubmit}>
                <label>Blog title</label>
                <input type="text" 
                    required 
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <label htmlFor="">Blog body</label>
                <textarea name="" id="" cols="30" rows="10"
                 required
                 value={body}
                    onChange={(e) => setBody(e.target.value)}
                >

                </textarea>

                <label htmlFor="">
                    <select 
                        value={author}
                        onChange={(e) => setAuthor(e.target.value)}    
                    >
                        <option value="mario">Mario</option>
                        <option value="yoshi">Yoshi</option>
                    </select>
                </label>

                { !isPending && <button>Add blog</button>}
                { isPending && <button disabled>Adding blog...</button>}
                {/* <p>
                    {title}
                </p>
                <p>
                    {body}
                </p>
                <p>
                    {author}
                </p> */}

            </form>
        </div>
     );
}
 
export default Create;