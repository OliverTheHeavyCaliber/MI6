<div class="left-panel">

    <div class="left-panel__seal">
        <img src="/img/mi6-seal.png" alt="MI6 seal">
    </div>

    <div class="left-panel__navigation">

        <a class="left-panel__link" href="{{ route('homepage') }}">Home</a>

        <a class="left-panel__link" href="{{ route('person.index') }}">People of interest</a>

        <a class="left-panel__link" href="{{ action('PersonController@people') }}">People of interest (eager loading test)</a>

        <a class="left-panel__link" href="{{ route('missions') }}">Missions</a>

        <a class="left-panel__link" href="{{ route('agent') }}">Agent access</a>

    </div>

</div>