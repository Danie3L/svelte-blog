<script>
    export let post;
    export let handlePostDelete;
    export let handlePostEdit;
</script>

<section>
        <h1>{post.title}</h1>
        <p>{post.description}</p>
        <small>{post.id}</small>
        <div class="buttons-box">
            <button on:click={() => handlePostEdit(post.title,post.description,post.id)}>Edit</button>
            <button on:click={() => handlePostDelete(post.id) }>Delete</button>
        </div>
</section>

<style>
    section {
        width: 80%;
        border: 1px solid gray;
        margin: 20px auto;
        position: relative;
        min-height:180px;
        max-height: 300px;
        display: flex;
        flex-direction: column;
        overflow-y: scroll;
    }
    h1 {
        padding: 15px 0 0 20px;
        flex-grow: 1;
    }
    p {
        padding: 15px 20px 20px 20px;
        text-align: justify;
        line-height: 163%;
        flex-grow: 2;
        word-break: break-word;
    }
    small {
        position: absolute;
        right: 1.5%;
        top: 4%;
    }
    .buttons-box {
        flex-grow: 1;
        display: flex;
        align-items: center;
    }
    button {
        margin: 0 10px 10px 20px;
        padding: 5px 22px;
        cursor: pointer;
    }
</style>
