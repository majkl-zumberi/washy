<script>
    import ProgressBar from './ProgressBar.svelte';
    const totalSeconds = 20;
    let secondsLeft=totalSeconds;
    let timer;
    $: progress= ((totalSeconds- secondsLeft)/totalSeconds)*100;


    function handleStartTimer(){
        timer = setInterval(()=>{
        secondsLeft-=1;
        secondsLeft === 0 && clearInterval(timer);
        },1000);
    }
    function handleResetTimer(){
        clearInterval(timer);
        secondsLeft = totalSeconds;
    }
</script>


<div bp="grid">
    <h2 bp="offset-5@md offset-5@lg 4@md 12@sm">
        Seconds left: {secondsLeft}
    </h2>
</div>

<ProgressBar {progress}/>
<div bp="grid"> 

    <button 
        bp="offset-5@md 4@md 12@sm"
        on:click="{secondsLeft === totalSeconds ? handleStartTimer : handleResetTimer}">
            {secondsLeft === totalSeconds ? 'Start':'Reset'}
    </button>
</div>

<style>
    button{
        padding: .5rem 2rem;
        background-color: rgb(0,100,200);
        color: antiquewhite;
        font-weight: bold;
        border-radius: .4rem;
        outline: none;
        display: block;
    }
    button:hover{
        background-color: darkcyan;
        transition: ease 1s;
    }
</style>