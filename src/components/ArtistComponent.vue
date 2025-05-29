<template>
    <h3>{{ $t('music') }}</h3>
    <ul>
        <li>
            <p>{{ $t('favouritePerson') }}</p>
        </li>
        <li>
            <audio controls>
            <source src="/audio/jahan.mp3" type="audio/mp3" alt="composition personnelle au piano">"
            />
            Le navigateur ne supporte pas le format.
            </audio>
        </li>    
    </ul>
</template>