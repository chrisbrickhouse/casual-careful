function chooseRandom(list) {
    return list[Math.floor(Math.random() * list.length)];
}

function shuffle(v) { // non-destructive.
    newarray = v.slice(0);
    for (var j, x, i = newarray.length; i; j = parseInt(Math.random() * i), x = newarray[--i], newarray[i] = newarray[j], newarray[j] = x);
    return newarray;
}

function getRandom(arr,n) {
  console.log(arr,n)
  var newArr = shuffle(arr);
  var rand = newArr.slice(0,n)
  return(rand)
}

// Choose speaker condition. 0 = k; 1 = s
var speakerCondition = Math.floor(Math.random()*2)
// Choose speed condition. 0 = cas; 1 = car
var speedCondition = Math.floor(Math.random()*2)
// Choose wordlist condition:
//    0: /t/ del
//    1: /t/ flap
//    2: schwa
//    3: minimal
//    4: 3 of each
var wordlistCondition = Math.floor(Math.random()*5)

console.log(speakerCondition,speedCondition,wordlistCondition)

var stimuliList = {
    0 : {         // speaker k
        0 : {     // cas
            0 : [ // t del
                'kcasual2_ranted.wav',
                'kcasual1_plenty.wav',
                'kcasual1_pointing.wav',
                'kcasual2_enter.wav',
                'kcasual1_gentle.wav',
                'kcasual2_haunted.wav',
                'kcasual2_mental.wav',
                'kcasual2_hinted.wav',
                'kcasual2_twenty.wav',
                'kcasual2_county.wav',
                'kcasual2_dented.wav',
                'kcasual1_rental.wav',
                'kcasual1_frontal.wav',
                'kcasual2_tainted.wav',
                'kcasual2_bounty.wav',
                'kcasual1_dentist.wav',
                'kcasual2_center.wav',
                'kcasual1_granted.wav'
            ],
            1 : [ // t flap
                'kcasual2_party.wav',
                'kcasual1_photo.wav',
                'kcasual1_beetle.wav',
                'kcasual1_pretty.wav',
                'kcasual1_letter.wav',
                'kcasual2_butter.wav',
                'kcasual2_batter.wav',
                'kcasual2_pity.wav',
                'kcasual2_chatting.wav',
                'kcasual2_cattle.wav',
                'kcasual2_lettuce.wav',
                'kcasual2_rating.wav',
                'kcasual1_water.wav',
                'kcasual2_shutter.wav',
                'kcasual1_flutter.wav',
                'kcasual2_knitting.wav',
                'kcasual1_cater.wav',
                'kcasual1_city.wav',
                'kcasual2_kitty.wav',
                'kcasual2_meter.wav'
            ],
            2 : [ // schwa
                'kcasual1_delay.wav',
                'kcasual1_pollute.wav',
                'kcasual1_canoe.wav',
                'kcasual1_police.wav',
                'kcasual1_collapse.wav',
                'kcasual1_bereave.wav',
                'kcasual1_parole.wav',
                'kcasual1_polite.wav',
                'kcasual2_collide.wav',
                'kcasual1_career.wav',
                'kcasual1_correct.wav',
                'kcasual1_believe.wav',
                'kcasual1_parade.wav',
                'kcasual1_beware.wav',
                'kcasual2_delight.wav',
                'kcasual2_balloon.wav',
                'kcasual2_select.wav',
                'kcasual2_saloon.wav',
                'kcasual1_collect.wav'
            ],
            3 : [ // minimal
                'kcasual1_delay.wav',
                'kcasual1_pollute.wav',
                'kcasual1_canoe.wav',
                'kcasual1_police.wav',
                'kcasual1_collapse.wav',
                'kcasual1_bereave.wav',
                'kcasual1_parole.wav',
                'kcasual1_polite.wav',
                'kcasual2_collide.wav',
                'kcasual1_career.wav',
                'kcasual1_correct.wav',
                'kcasual1_believe.wav',
                'kcasual1_parade.wav',
                'kcasual1_beware.wav',
                'kcasual2_delight.wav',
                'kcasual2_balloon.wav',
                'kcasual2_select.wav',
                'kcasual2_saloon.wav',
                'kcasual1_morale.wav',
                'kcasual1_spoiler.wav',
                'kcasual2_diner.wav',
                'kcasual2_keeper.wav',
                'kcasual2_object.wav',
                'kcasual2_towel.wav'
            ]
        },
        1 : {     // car
            0 : [ // t del
                'sk_center.wav',
                'sk_pointing.wav',
                'sk_county.wav',
                'sk_frontal.wav',
                'sk_ranted.wav',
                'sk_tainted.wav',
                'sk_mental.wav',
                'sk_haunted.wav',
                'sk_granted.wav',
                'sk_rental.wav',
                'sk_twenty.wav',
                'sk_gentle.wav',
                'sk_dentist.wav',
                'sk_plenty.wav',
                'sk_enter.wav',
                'sk_dented.wav',
                'sk_hinted.wav',
                'sk_bounty.wav'
            ],
            1 : [ // t flap
                'sk_beetle.wav',
                'sk_lettuce.wav',
                'sk_pretty.wav',
                'sk_butter.wav',
                'sk_letter.wav',
                'sk_pity.wav',
                'sk_rating.wav',
                'sk_photo.wav',
                'sk_kitty.wav',
                'sk_shutter.wav',
                'sk_flutter.wav',
                'sk_batter.wav',
                'sk_water.wav',
                'sk_party.wav',
                'sk_knitting.wav',
                'sk_chatting.wav',
                'sk_city.wav',
                'sk_cattle.wav',
                'sk_cater.wav',
                'sk_meter.wav'
            ],
            2 : [ // schwa
                'sk_saloon.wav',
                'sk_delay.wav',
                'sk_pollute.wav',
                'sk_believe.wav',
                'sk_polite.wav',
                'sk_canoe.wav',
                'sk_collide.wav',
                'sk_career.wav',
                'sk_select.wav',
                'sk_correct.wav',
                'sk_beware.wav',
                'sk_delight.wav',
                'sk_bereave.wav',
                'sk_collapse.wav',
                'sk_parole.wav',
                'sk_balloon.wav',
                'sk_police.wav',
                'sk_parade.wav',
                'sk_collect.wav'
            ],
            3 : [ // minimal
                'sk_clearly.wav',
                'sk_cupcake.wav',
                'sk_greasy.wav',
                'sk_power.wav',
                'sk_label.wav',
                'sk_crispy.wav',
                'sk_travel.wav',
                'sk_temper.wav',
                'sk_sugar.wav',
                'sk_tiger.wav',
                'sk_storage.wav',
                'sk_silence.wav',
                'sk_fluffy.wav',
                'sk_Tuesday.wav',
                'sk_diner.wav',
                'sk_keeper.wav',
                'sk_morale.wav',
                'sk_object.wav',
                'sk_spoiler.wav',
                'sk_towel.wav'
            ]
        }
    },
    1 : {         // speaker s
        0 : {     // cas
            0 : [ // t del
                'scasual2_plenty.wav',
                'scasual2_pointing.wav',
                'scasual1_hinted.wav',
                'scasual1_center.wav',
                'scasual2_twenty.wav',
                'scasual2_county.wav',
                'scasual2_tainted.wav',
                'scasual1_dentist.wav',
                'scasual2_gentle.wav',
                'scasual2_granted.wav',
                'scasual1_ranted.wav',
                'scasual2_dented.wav',
                'scasual2_frontal.wav',
                'scasual2_rental.wav',
                'scasual2_bounty.wav',
                'scasual1_mental.wav',
                'scasual2_haunted.wav',
                'scasual1_enter.wav'
            ],
            1 : [ // t flap
                'scasual1_chatting.wav',
                'scasual1_party.wav',
                'scasual1_pretty.wav',
                'scasual2_letter.wav',
                'scasual1_water.wav',
                'scasual1_cater.wav',
                'scasual1_lettuce.wav',
                'scasual2_city.wav',
                'scasual1_shutter.wav',
                'scasual1_rating.wav',
                'scasual1_batter.wav',
                'scasual1_butter.wav',
                'scasual1_flutter.wav',
                'scasual2_cattle.wav',
                'scasual2_photo.wav',
                'scasual1_kitty.wav',
                'scasual2_pity.wav',
                'scasual1_knitting.wav',
                'scasual1_beetle.wav',
                'scasual2_meter.wav'
            ],
            2 : [ // schwa
                'scasual2_police.wav',
                'scasual2_career.wav',
                'scasual1_parole.wav',
                'scasual2_canoe.wav',
                'scasual1_bereave.wav',
                'scasual1_correct.wav',
                'scasual2_polite.wav',
                'scasual2_collapse.wav',
                'scasual1_balloon.wav',
                'scasual2_select.wav',
                'scasual2_beware.wav',
                'scasual2_parade.wav',
                'scasual2_collide.wav',
                'scasual2_saloon.wav',
                'scasual2_pollute.wav',
                'scasual1_believe.wav',
                'scasual1_delight.wav',
                'scasual2_delay.wav',
                'scasual1_collect.wav'
            ],
            3 : [ // minimal
                'scasual1_label.wav',
                'scasual2_fluffy.wav',
                'scasual2_clearly.wav',
                'scasual1_greasy.wav',
                'scasual1_temper.wav',
                'scasual1_sugar.wav',
                'scasual1_silence.wav',
                'scasual1_travel.wav',
                'scasual1_Tuesday.wav',
                'scasual1_tiger.wav',
                'scasual1_power.wav',
                'scasual2_cupcake.wav',
                'scasual2_storage.wav',
                'scasual2_crispy.wav',
                'scasual1_morale.wav',
                'scasual1_spoiler.wav',
                'scasual1_towel.wav',
                'scasual2_diner.wav',
                'scasual2_keeper.wav',
                'scasual2_object.wav'
            ]
        },
        1 : {     // car
            0 : [ // t del
                'ss_mental.wav',
                'ss_pointing.wav',
                'ss_granted.wav',
                'ss_haunted.wav',
                'ss_rental.wav',
                'ss_county.wav',
                'ss_bounty.wav',
                'ss_center.wav',
                'ss_gentle.wav',
                'ss_frontal.wav',
                'ss_twenty.wav',
                'ss_dented.wav',
                'ss_hinted.wav',
                'ss_tainted.wav',
                'ss_enter.wav',
                'ss_ranted.wav',
                'ss_dentist.wav',
                'ss_plenty.wav'
            ],
            1 : [ // t flap
                'ss_batter.wav',
                'ss_shutter.wav',
                'ss_flutter.wav',
                'ss_chatting.wav',
                'ss_cattle.wav',
                'ss_photo.wav',
                'ss_water.wav',
                'ss_cater.wav',
                'ss_beetle.wav',
                'ss_knitting.wav',
                'ss_butter.wav',
                'ss_pretty.wav',
                'ss_pity.wav',
                'ss_kitty.wav',
                'ss_lettuce.wav',
                'ss_rating.wav',
                'ss_party.wav',
                'ss_letter.wav',
                'ss_city.wav',
                'ss_meter.wav'
            ],
            2 : [ // schwa
                'ss_beware.wav',
                'ss_career.wav',
                'ss_select.wav',
                'ss_bereave.wav',
                'ss_police.wav',
                'ss_canoe.wav',
                'ss_balloon.wav',
                'ss_delight.wav',
                'ss_pollute.wav',
                'ss_believe.wav',
                'ss_collapse.wav',
                'ss_parole.wav',
                'ss_correct.wav',
                'ss_parade.wav',
                'ss_polite.wav',
                'ss_saloon.wav',
                'ss_collide.wav',
                'ss_delay.wav',
                'ss_collect.wav'
            ],
            3 : [ // minimal
                'ss_silence.wav',
                'ss_storage.wav',
                'ss_sugar.wav',
                'ss_cupcake.wav',
                'ss_temper.wav',
                'ss_travel.wav',
                'ss_Tuesday.wav',
                'ss_fluffy.wav',
                'ss_label.wav',
                'ss_greasy.wav',
                'ss_tiger.wav',
                'ss_crispy.wav',
                'ss_power.wav',
                'ss_clearly.wav',
                'ss_diner.wav',
                'ss_keeper.wav',
                'ss_morale.wav',
                'ss_object.wav',
                'ss_spoiler.wav',
                'ss_towel.wav'
            ]
        }
    }
};

console.log(stimuliList[speakerCondition][speedCondition][0])

if (wordlistCondition === 4) {
    var tdel = getRandom(stimuliList[speakerCondition][speedCondition][0],3)
    var flap = getRandom(stimuliList[speakerCondition][speedCondition][1],3)
    var schw = getRandom(stimuliList[speakerCondition][speedCondition][2],3)
    var minm = getRandom(stimuliList[speakerCondition][speedCondition][3],3)
    var wordlist = tdel.concat(flap, schw, minm)
} else {
    var possible_words = stimuliList[speakerCondition][speedCondition][wordlistCondition]
    var wordlist = getRandom(possible_words,12)
}

wordlist = shuffle(wordlist)

var data = {};

data.wordlist = wordlist
data.speakerCondition = speakerCondition
data.speedCondition = speedCondition
data.wordlistCondition = wordlistCondition

for (i = 1; i < 13; i++) {
    document.getElementById("audio"+i).src = "http://stanford.edu/~ctb77/studies/files/sounds/"+wordlist[i-1]
}

$(document).ready(function() {
    showSlide("intro");
    $('#gotoInstructions').click(function() {
        document.body.scrollTop = document.documentElement.scrollTop = 0;
        showSlide('instructions');
    });
    $('#gotoCheck').click(function(){
        document.body.scrollTop = document.documentElement.scrollTop = 0;
        showSlide('audioCheck');
    });

    document.getElementById('sampleAudio').src = "http://stanford.edu/~sunwooj/experiments/dec1/stimuli/sample.wav";

    $('#startbutton').click(function() {
        var nat = document.getElementById("native").checked;
        var spe = document.getElementById("speaker").checked;
        if (nat == true && spe == true) {
            document.body.scrollTop = document.documentElement.scrollTop = 0;
            showSlide('freeResponse');
        }
        else {
            checkboxwarning = "Please check both boxes to confirm that you meet the necessary requirements, in order to proceed to the experiment.";
            $("#checkboxWarning").html(checkboxwarning);
        }
    });

    $('#playaudio').click(function(){
        document.getElementById('audio1').addEventListener('ended',function() {
            document.getElementById('audio2').play(); });
        document.getElementById('audio2').addEventListener('ended',function() {
            document.getElementById('audio3').play(); });
        document.getElementById('audio3').addEventListener('ended',function() {
            document.getElementById('audio4').play(); });
        document.getElementById('audio4').addEventListener('ended',function() {
            document.getElementById('audio5').play(); });
        document.getElementById('audio5').addEventListener('ended',function() {
            document.getElementById('audio6').play(); });
        document.getElementById('audio6').addEventListener('ended',function() {
            document.getElementById('audio7').play(); });
        document.getElementById('audio7').addEventListener('ended',function() {
            document.getElementById('audio8').play(); });
        document.getElementById('audio8').addEventListener('ended',function() {
            document.getElementById('audio9').play(); });
        document.getElementById('audio9').addEventListener('ended',function() {
            document.getElementById('audio10').play(); });
        document.getElementById('audio10').addEventListener('ended',function() {
            document.getElementById('audio11').play(); });
        document.getElementById('audio11').addEventListener('ended',function() {
            document.getElementById('audio12').play(); });
        document.getElementById('audio1').play();
    });

    $('#veributton').click(function() {
        var response = document.getElementById("speakerPerception").value;
        if (response == '') {
            $("#veriWarning").html("Please respond to the question.")
        } else {
            data.response = response;
            document.body.scrollTop = document.documentElement.scrollTop = 0;
            showSlide('language');
        }
    });

    $('#lgsubmit').click(function() {
        var seclang = $('#otherlangForm').serialize();
        var gender = $('#genderForm').serialize();
        var age = $('#ageForm').serialize();
        var race = $('#ethnicityForm').serialize();
        var region = $('#dialect').val();
        region = region.replace (/,/g, "");
        var region_com = $('#lang_com').val();
        region_com = region_com.replace (/,/g, "");

        data.seclang = seclang;
        data.gender = gender;
        data.age = age;
        data.race = race;
        data.region = region;
        data.regionComments = region_com;

        showSlide('finish');
        setTimeout(function() { turk.submit(data)}, 1000);
    });
});

function showSlide (slideName) {
    $('.slide').hide();
    $('#' + slideName).show();
}
