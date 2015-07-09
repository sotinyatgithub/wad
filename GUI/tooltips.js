// This file declares the text of the tooltips, and does related DOM manipulation to set tooltips on elements that need them. 
app.init.tooltips = function(app){
    var tooltips = {
        waveform             : "The shape of the sound wave. This is very important for determining the timbre of the instrument.",
        volume               : "The peak volume of the instrument. An instrument with its volume set to 1 is at max volume, and an instrument with its volume set to 0 is completely silent.",
        panning              : "The left/right stereo balance of the instrument. Setting panning to -1 causes the instrument to only play out of the left speaker. Setting panning to 1 causes the instrument to only play out of the right speaker. If panning is left at 0, the instrument will play at the same volume from both speakers.",
        'pitch-shift-coarse' : "Notes played from this instrument are pitch-shifted up or down by this many semitones. +12 shifts the pitch up a full octave. -12 shifts the pitch down a full octave.",
        'pitch-shift-fine'   : "Notes played from this instrument are pitch-shifted up or down by this many cents. 100 cents = 1 semitone.",
        'volume-attack'      : "Time, in seconds, from the onset of a note to peak volume.",
        'volume-decay'       : "Time, in seconds, from peak volume to sustain volume.",
        'volume-sustain'     : "Sustain volume level. This is a percent of the peak volume.",
        'volume-release'     : "Time, in seconds, from releasing a note to zero volume.",
        'filter'             : "Filters modify the instrument by removing certain frequencies from the sound. Uncheck the box next to \"Filter\" if you don't want to use a filter at all.",
        'filter-type'        : "A low-pass filter removes high frequencies from the instrument, allowing low frequencies to 'pass' through. A high-pass filter does the opposite. A quick internet search can tell you what the other filters do.",
        'filter-frequency'   : "The frequency, in hertz, to which the filter is applied.",
        'filter-q'           : "Q-factor, also known as resonance. This affects how steep the cutoff is beyond the filter frequency."

    }
     


    $(document).ready(function(){
        for ( var tooltip in tooltips ) {
            $('[data-tooltip="' + tooltip + '"]').attr('title', tooltips[tooltip])
        }
    })
}