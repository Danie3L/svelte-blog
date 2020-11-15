<script>
export let inputValue;
export let textareaValue;
export let updateStatus;
export let handleFormSubmit;
export let handlePostUpdate;
export let handlePostsSave;

</script>
<form class="form">
    <label class="input-label">
        <input type="text" placeholder="Title" bind:value={inputValue}>
    </label>
    <label>
        <textarea cols="10" rows="8" placeholder="Description" bind:value={textareaValue}></textarea>
    </label>
    <div class="buttons-box">
        <button class="form-btn" disabled='{updateStatus}' on:click|preventDefault={handleFormSubmit}>Add new post</button>
        {#if updateStatus}
            <button class="update-btn" on:click|preventDefault={handlePostUpdate}>Update</button>
        {/if}
        <button on:click|preventDefault={handlePostsSave}>Save to database</button>

    </div>
</form>
{#if updateStatus}

{/if}
<style>
    .form {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
    }
    label {
        text-align: center;
        width: 100%;
    }
    .input-label {
        margin-top: 5%;
    }
    input {
        width: 50%;
        outline: #ccc;
    }
    textarea {
        width: 50%;
        resize: none;
        outline: #ccc;
    }
    .buttons-box {
        display: flex;
        align-items: center;
        justify-content: space-around;
    }
    button{
        margin: 3px 0 0 10px;
        cursor: pointer;
    }
</style>
