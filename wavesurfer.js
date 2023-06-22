console.log( "Wavesurfer is running!" );

document.addEventListener('DOMContentLoaded', function () {


    var wavesurfer = WaveSurfer.create({
        container: '.waveform',
        waveColor: '#FFF',
        progressColor: '#CCC333',
        height: 100,
        barWidth: 3,
        barRadius: 4
    });

    console.log(waveform.url);

    wavesurfer.load(waveform.url);


});


console.log( "Wavesurfer executed with no errors...!" );
