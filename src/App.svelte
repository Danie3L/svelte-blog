<script>
    import Form from './components/Form.svelte';
    import Post from './components/Post.svelte';
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

</script>


<main>
<Form bind:inputValue bind:textareaValue on:submit={handleFormSubmit} on:click={handlePostUpdate} {updateStatus}/>
    {#each posts as post}
        <Post {post} {handlePostDelete} {handlePostEdit}/>
    {/each}
</main>

<style>

</style>
