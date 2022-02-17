@extends('layouts.main')

@section('content')

<div class="list-of-people">

    <h1 class="list-of-people__headline">People of interest (eager loading test)</h1>

    <ul class="list-of-people__list">

        @foreach ($people as $person)
            <li class="list-of-people__person">
                <img class="image" src="/images/{{ $person->image->path }}" alt="mugshot">
                <div class="info">
                    <div class="name">{{ $person->name }}</div>
                    <div class="occupation">{{ $person->occupation }}</div>
                    <div class="status-text">Status: {{ $person->status->name }}</div>
                    {{-- <div class="other-people-with-status">
                        <h3>Other people with the "{{ $person->status->name }}" status:</h3>
                        <ul>
                            @foreach ($person->status->people as $person_with_status)
                                <li>{{ $person_with_status->name }}</li>
                            @endforeach
                        </ul>
                    </div> --}}
                </div>
            </li>
        @endforeach

    </ul>

</div>

@endsection