<script>
    export let progress = 0;
</script>

<div bp="grid">
    <div bp="offset-5@md 4@md 12@sm" class="progress-container">
        <div  
            class="{progress===100?' progress-bar progress-bar-full':'progress-bar'}"
            style="width:{progress}%;">
        </div>
    </div>
</div>

<style>
    .progress-container{
        margin: 20px 0;
        border:solid 2px rgb(3, 116, 228);
        border-radius: 25px;
    }
    .progress-bar{
        transition : width 1s ease;
        border-top-left-radius: 25px;
        border-bottom-left-radius: 25px;
        height: 30px;
        background-color: rgb(0,100,200);
    }
    .progress-bar-full{
        border-top-right-radius: 25px;
        border-bottom-right-radius: 25px;
        
    }
</style>