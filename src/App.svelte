<script>
    import { Router, link, Route } from "svelte-routing";
    import Form from './components/Form.svelte';
    import Post from './components/Post.svelte';
    import {firestore} from "./Firebase";
    import {onMount} from 'svelte';
    let updatedId = 0;
    let inputValue = '';
    let textareaValue = '';
    let postId = null;
    let posts = [];
    let updateStatus = false;
    const foo = [1,2,3,4,5];
    export let url = '';
    const showError = () => {
        alert('All fields are required')
    }
    const handleFormSubmit = () => {
        if(inputValue.trim() === '' || textareaValue.trim() === ''){
            showError();
        } else {
            posts = [{
                title: inputValue,
                description: textareaValue,
                id: posts.length
            },...posts];
            inputValue = '';
            textareaValue = '';

        }
    };
    const addPost = (e) => {
        const post = e.detail;
        posts = [post,...posts];
    }
    const handlePostDelete = (id) => {
        const docRef = firestore.collection('posts').doc(String(id));
        docRef.get().then((doc) => {
            if(doc.exists) {
                docRef.delete();
            }
        })
        posts = posts.filter((post) => post.id !==id);

    };
    const handlePostEdit =  (title,description,id) => {
        inputValue = title;
        textareaValue = description;
        updateStatus = !updateStatus;
        updatedId = id;
    };

    const handlePostUpdate = () => {
        const findObj = posts.find((post) => post.id === updatedId);
        const objIndex = posts.indexOf(findObj);
        posts[objIndex].title = inputValue;
        posts[objIndex].description = textareaValue;
        updateStatus = !updateStatus;
        inputValue = '';
        textareaValue = '';
    };
    const handlePostsSave = () => {
        posts.forEach((post) => {
            firestore.collection('posts').doc(String(post.id)).set({
                title: post.title,
                description: post.description,
                id: post.id
            });
        })
    }
    onMount(() => {
        firestore.collection('posts').get().then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                posts = [doc.data(),...posts];
            })
        })
    })
</script>


<main>
    <Router url="{url}">
        <nav>
            <h1>Tesla Blog</h1>
            <a href="/" use:link>Home</a>
            <a href="form" use:link replace>Add a post</a>
        </nav>
        <div>
            <Route path="form" >
                <Form bind:inputValue bind:textareaValue {handleFormSubmit} {handlePostsSave}  {handlePostUpdate} {updateStatus}/>
            </Route>
            <Route path="/">
                {#each posts as post}
                    <Post {post} {handlePostDelete} {handlePostEdit}/>
                {/each}
            </Route>
        </div>
    </Router>


</main>

<style>
    h1 {
        color: #2a5799;
        position: relative;
        margin: 20px 20px 0 20px;
    }
    h1::after {
        content: '';
        position: absolute;
        left: 0;
        bottom: 5%;
        width: 100%;
        height: 40%;
        background: pink;
        opacity: 1;
        z-index: -1;
    }
nav {
    padding-left: 10px;
    display: flex;
    align-items: center;
    position: relative;
}
nav a {
    margin-top: 26px;
    padding-left: 15px;
    position: relative;
    text-decoration: none;
}


</style>
