<script>
    export let post;
    export let handlePostDelete;
    export let handlePostEdit;
    import { Link } from "svelte-routing";

</script>

<main>
    <section>
        <h1>{post.title}</h1>
        <p>{post.description}</p>
        <small>{post.id}</small>
        <div class="buttons-box">
            <Link to="form">
                <button on:click={() => handlePostEdit(post.title,post.description,post.id)}>Edit</button>
            </Link>
            <button on:click={() => handlePostDelete(post.id) }>Delete</button>
        </div>
    </section>
</main>

<style>
    main {
        margin-top: 100px;
    }
    section {
        width: 80%;
        margin: 40px auto;
        position: relative;
        min-height:180px;
        max-height: 300px;
        display: flex;
        flex-direction: column;
        overflow-y: scroll;
    }
    a {
        color: #333;
        text-decoration: none;

        display: block;
        width: 100%;
        height: 100%;
    }
    h1 {
        padding: 15px 0 0 20px;
        flex-grow: 1;
        position: relative;
    }
    /*h1::after {*/
    /*!*    content: '';*!*/
    /*!*    position: absolute;*!*/
    /*!*    width: 5%;*!*/
    /*!*    height: 30%;*!*/
    /*!*    bottom: 15%;*!*/
    /*!*    left: 2%;*!*/
    /*!*    background: #7e7ec4;*!*/
    /*!*    z-index: -1;*!*/
    /*!*    opacity: 0.3;*!*/
    /*!*}*!*/
    p {
        padding: 15px 40px 20px 20px;
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
        padding: 5px;
        cursor: pointer;
        background: transparent;
        border: none;
        position: relative;
    }
    button::after {
        content: '';
        position: absolute;
        left: 10%;
        bottom: 0;
        background: #000;
        width: 100%;
        height: 2px;
    }
</style>
