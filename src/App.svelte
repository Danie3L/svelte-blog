<script>
    import Form from './components/Form.svelte';
    import Post from './components/Post.svelte';
    import SaveButton from './components/SaveButton.svelte';
    import {firestore} from "./Firebase";
    import {onMount} from 'svelte';

    let inputValue = '';
    let textareaValue = '';
    let posts = [];
    let updateStatus = false;
    let updatedPostId = null;
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
        updatedPostId = id;
        updateStatus = !updateStatus;
    };
    const handlePostUpdate = () => {
        posts[updatedPostId].title = inputValue;
        posts[updatedPostId].description = textareaValue;
        updateStatus = !updateStatus;
        inputValue = '';
        textareaValue = '';
    };
    const savePosts = () => {
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
                console.log(doc.id, "=>",doc.data());
                posts = [doc.data(),...posts];
            })
        })
    })
</script>


<main>
<SaveButton on:click={savePosts}/>
<Form bind:inputValue bind:textareaValue on:submit={handleFormSubmit} on:click={handlePostUpdate} {updateStatus}/>
    {#each posts as post}
        <Post {post} {handlePostDelete} {handlePostEdit}/>
    {/each}
</main>

<style>

</style>
