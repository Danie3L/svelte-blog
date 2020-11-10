<script>
export let inputValue;
export let textareaValue;
export let updateStatus;
</script>
<form on:submit|preventDefault class="form">
    <label class="input-label">
        <input type="text" placeholder="Title" bind:value={inputValue}>
    </label>
    <label>
        <textarea cols="10" rows="8" placeholder="Description" bind:value={textareaValue}></textarea>
    </label>
    <div class="buttons-box">
        <button class="form-btn" disabled='{updateStatus}'>Add new post</button>
    </div>
</form>
{#if updateStatus}
    <button class="update-btn" on:click>Update</button>
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
    }
    button{
        margin: 3px 0 0 10px;
        cursor: pointer;
    }
    .update-btn {
        display: block;
        margin: 5px auto;
    }
</style>
