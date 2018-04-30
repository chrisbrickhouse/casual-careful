function titleCase(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

function getRandom(arr, n) {
    var result = new Array(n),
        len = arr.length,
        taken = new Array(len);
    if (n > len)
        throw new RangeError("getRandom: more elements taken than available");
    while (n--) {
        var x = Math.floor(Math.random() * len);
        result[n] = arr[x in taken ? taken[x] : x];
        taken[x] = --len;
    }
    return result;
}

function chooseRandom(list) {
    return list[Math.floor(Math.random() * list.length)];
}

function shuffle(v) { // non-destructive.
    newarray = v.slice(0);
    for (var j, x, i = newarray.length; i; j = parseInt(Math.random() * i), x = newarray[--i], newarray[i] = newarray[j], newarray[j] = x);
    return newarray;
}

function setSliders(arr) {
  for (var i = 0; i < arr.length; i++) {
    var qn = i+2
    var q = arr[i]
    qText = 'How '+q+' does the speaker sound?'
    qLeft = 'Not '+q+' at all'
    qRight= 'Extremely '+q
    qCent = titleCase(q)
    document.getElementById("Q"+qn).innerHTML = qText
    document.getElementById("Q"+qn+"L").innerHTML = qLeft
    document.getElementById("Q"+qn+"R").innerHTML = qRight
    document.getElementById("Q"+qn+"C").innerHTML = qCent
  }
}

function setAudio(arr) {
    for (i = 1; i <= arr.length; i++) {
        document.getElementById("audio"+i).src = "http://stanford.edu/~ctb77/studies/files/sounds/"+arr[i-1]
    }
}

function playAudio() {
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
      document.getElementById('audio1').play();
}

function get_wordlist(cond,list) { // Still needs mixed condition added
    var wl;
    console.log(cond,list)
    if (cond == 'k_cas_del' && list == 0) {
        wl = [
            'kcasual1_rental.wav',
            'kcasual2_tainted.wav',
            'kcasual1_gentle.wav',
            'kcasual2_hinted.wav',
            'kcasual2_ranted.wav',
            'kcasual2_haunted.wav',
            'kcasual2_twenty.wav',
            'kcasual1_frontal.wav',
        ]
    } else if (cond == 'k_cas_del' && list == 1) {
        wl = [
            'kcasual2_center.wav',
            'kcasual1_plenty.wav',
            'kcasual2_county.wav',
            'kcasual2_enter.wav',
            'kcasual1_dentist.wav',
            'kcasual2_bounty.wav',
            'kcasual1_granted.wav',
            'kcasual2_dented.wav',
        ]
    } else if (cond == 'k_cas_flap' && list == 0) {
        wl = [
            'kcasual2_butter.wav',
            'kcasual2_chatting.wav',
            'kcasual1_beetle.wav',
            'kcasual1_pretty.wav',
            'kcasual1_cater.wav',
            'kcasual2_party.wav',
            'kcasual2_batter.wav',
            'kcasual2_shutter.wav',
        ]
    } else if (cond =='k_cas_flap' && list == 1) {
        wl = [
            'kcasual2_cattle.wav',
            'kcasual2_kitty.wav',
            'kcasual2_lettuce.wav',
            'kcasual1_water.wav',
            'kcasual1_city.wav',
            'kcasual1_photo.wav',
            'kcasual2_pity.wav',
            'kcasual2_rating.wav',
        ]
    } else if (cond == 'k_cas_schwa' && list == 0) {
        wl = [
            'kcasual1_canoe.wav',
            'kcasual1_bereave.wav',
            'kcasual1_pollute.wav',
            'kcasual1_polite.wav',
            'kcasual1_correct.wav',
            'kcasual1_career.wav',
            'kcasual2_collide.wav',
            'kcasual2_delight.wav',
        ]
    } else if (cond == 'k_cas_schwa' && list == 1) {
        wl = [
            'kcasual2_select.wav',
            'kcasual2_saloon.wav',
            'kcasual1_parade.wav',
            'kcasual1_delay.wav',
            'kcasual1_police.wav',
            'kcasual1_collapse.wav',
            'kcasual2_balloon.wav',
            'kcasual1_believe.wav',
        ]
    } else if (cond == 'k_cas_min' && list == 0) { // Only has 7 not 8 items
        wl = [
            'kcasual1_fluffy.wav',
            'kcasual2_power.wav',
            'kcasual2_silence.wav',
            'kcasual2_storage.wav',
            'kcasual2_tiger.wav',
            'kcasual1_temper.wav',
            'kcasual2_label.wav',
        ]
    } else if (cond = 'k_cas_min' && list == 1) { // Only has 7 not 8 items
        wl = [
            'kcasual2_sugar.wav',
            'kcasual1_greasy.wav',
            'kcasual2_crispy.wav',
            'kcasual1_travel.wav',
            'kcasual2_cupcake.wav',
            'kcasual2_Tuesday.wav',
            'kcasual2_clearly.wav',
        ]
    } else if (cond == 'k_car_del' && list == 0) {
        wl = [
            'sk_rental.wav',
            'sk_tainted.wav',
            'sk_gentle.wav',
            'sk_hinted.wav',
            'sk_ranted.wav',
            'sk_haunted.wav',
            'sk_twenty.wav',
            'sk_frontal.wav',
        ]
    } else if (cond == 'k_car_del' && list == 1) {
        wl = [
            'sk_center.wav',
            'sk_plenty.wav',
            'sk_county.wav',
            'sk_enter.wav',
            'sk_dentist.wav',
            'sk_bounty.wav',
            'sk_granted.wav',
            'sk_dented.wav',
        ]
    } else if (cond == 'k_car_flap' && list == 0) {
        wl = [
            'sk_butter.wav',
            'sk_chatting.wav',
            'sk_beetle.wav',
            'sk_pretty.wav',
            'sk_cater.wav',
            'sk_party.wav',
            'sk_batter.wav',
            'sk_shutter.wav',
        ]
    } else if (cond =='k_car_flap' && list == 1) {
        wl = [
            'sk_cattle.wav',
            'sk_kitty.wav',
            'sk_lettuce.wav',
            'sk_water.wav',
            'sk_city.wav',
            'sk_photo.wav',
            'sk_pity.wav',
            'sk_rating.wav',
        ]
    } else if (cond == 'k_car_schwa' && list == 0) {
        wl = [
            'sk_canoe.wav',
            'sk_bereave.wav',
            'sk_pollute.wav',
            'sk_polite.wav',
            'sk_correct.wav',
            'sk_career.wav',
            'sk_collide.wav',
            'sk_delight.wav',
        ]
    } else if (cond == 'k_car_schwa' && list == 1) {
        wl = [
            'sk_select.wav',
            'sk_saloon.wav',
            'sk_parade.wav',
            'sk_delay.wav',
            'sk_police.wav',
            'sk_collapse.wav',
            'sk_balloon.wav',
            'sk_believe.wav',
        ]
    } else if (cond == 'k_car_min' && list == 0) { // Only has 7 not 8 items
        wl = [
            'sk_fluffy.wav',
            'sk_power.wav',
            'sk_silence.wav',
            'sk_storage.wav',
            'sk_tiger.wav',
            'sk_temper.wav',
            'sk_label.wav',
        ]
    } else if (cond = 'k_car_min' && list == 1) { // Only has 7 not 8 items
        wl = [
            'sk_sugar.wav',
            'sk_greasy.wav',
            'sk_crispy.wav',
            'sk_travel.wav',
            'sk_cupcake.wav',
            'sk_Tuesday.wav',
            'sk_clearly.wav',
        ]
    } else if (cond == 's_cas_del' && list == 1) {
        wl = [
            'scasual2_rental.wav',
            'scasual2_tainted.wav',
            'scasual2_gentle.wav',
            'scasual1_hinted.wav',
            'scasual1_ranted.wav',
            'scasual2_haunted.wav',
            'scasual2_twenty.wav',
            'scasual2_frontal.wav',
        ]
    } else if (cond == 's_cas_del' && list == 0) {
        wl = [
            'scasual1_center.wav',
            'scasual2_plenty.wav',
            'scasual2_county.wav',
            'scasual1_enter.wav',
            'scasual1_dentist.wav',
            'scasual2_bounty.wav',
            'scasual2_granted.wav',
            'scasual2_dented.wav',
        ]
    } else if (cond == 's_cas_flap' && list == 1) {
        wl = [
            'scasual1_butter.wav',
            'scasual1_chatting.wav',
            'scasual1_beetle.wav',
            'scasual1_pretty.wav',
            'scasual1_cater.wav',
            'scasual1_party.wav',
            'scasual1_batter.wav',
            'scasual1_shutter.wav',
        ]
    } else if (cond =='s_cas_flap' && list == 0) {
        wl = [
            'scasual2_cattle.wav',
            'scasual1_kitty.wav',
            'scasual1_lettuce.wav',
            'scasual1_water.wav',
            'scasual2_city.wav',
            'scasual2_photo.wav',
            'scasual2_pity.wav',
            'scasual1_rating.wav',
        ]
    } else if (cond == 's_cas_schwa' && list == 1) {
        wl = [
            'scasual2_canoe.wav',
            'scasual1_bereave.wav',
            'scasual2_pollute.wav',
            'scasual2_polite.wav',
            'scasual1_correct.wav',
            'scasual2_career.wav',
            'scasual2_collide.wav',
            'scasual1_delight.wav',
        ]
    } else if (cond == 's_cas_schwa' && list == 0) {
        wl = [
            'scasual2_select.wav',
            'scasual2_saloon.wav',
            'scasual2_parade.wav',
            'scasual2_delay.wav',
            'scasual2_police.wav',
            'scasual2_collapse.wav',
            'scasual1_balloon.wav',
            'scasual1_believe.wav',
        ]
    } else if (cond == 's_cas_min' && list == 1) { // Only has 7 not 8 items
        wl = [
            'scasual2_fluffy.wav',
            'scasual1_power.wav',
            'scasual1_silence.wav',
            'scasual2_storage.wav',
            'scasual1_tiger.wav',
            'scasual1_temper.wav',
            'scasual1_label.wav',
        ]
    } else if (cond = 's_cas_min' && list == 0) { // Only has 7 not 8 items
        wl = [
            'scasual1_sugar.wav',
            'scasual1_greasy.wav',
            'scasual2_crispy.wav',
            'scasual1_travel.wav',
            'scasual2_cupcake.wav',
            'scasual1_Tuesday.wav',
            'scasual2_clearly.wav',
        ]
    } else if (cond == 's_car_del' && list == 1) {
        wl = [
            'ss_rental.wav',
            'ss_tainted.wav',
            'ss_gentle.wav',
            'ss_hinted.wav',
            'ss_ranted.wav',
            'ss_haunted.wav',
            'ss_twenty.wav',
            'ss_frontal.wav',
        ]
    } else if (cond == 's_car_del' && list == 0) {
        wl = [
            'ss_center.wav',
            'ss_plenty.wav',
            'ss_county.wav',
            'ss_enter.wav',
            'ss_dentist.wav',
            'ss_bounty.wav',
            'ss_granted.wav',
            'ss_dented.wav',
        ]
    } else if (cond == 's_car_flap' && list == 1) {
        wl = [
            'ss_butter.wav',
            'ss_chatting.wav',
            'ss_beetle.wav',
            'ss_pretty.wav',
            'ss_cater.wav',
            'ss_party.wav',
            'ss_batter.wav',
            'ss_shutter.wav',
        ]
    } else if (cond =='s_car_flap' && list == 0) {
        wl = [
            'ss_cattle.wav',
            'ss_kitty.wav',
            'ss_lettuce.wav',
            'ss_water.wav',
            'ss_city.wav',
            'ss_photo.wav',
            'ss_pity.wav',
            'ss_rating.wav',
        ]
    } else if (cond == 's_car_schwa' && list == 1) {
        wl = [
            'ss_canoe.wav',
            'ss_bereave.wav',
            'ss_pollute.wav',
            'ss_polite.wav',
            'ss_correct.wav',
            'ss_career.wav',
            'ss_collide.wav',
            'ss_delight.wav',
        ]
    } else if (cond == 's_car_schwa' && list == 0) {
        wl = [
            'ss_select.wav',
            'ss_saloon.wav',
            'ss_parade.wav',
            'ss_delay.wav',
            'ss_police.wav',
            'ss_collapse.wav',
            'ss_balloon.wav',
            'ss_believe.wav',
        ]
    } else if (cond == 's_car_min' && list == 1) { // Only has 7 not 8 items
        wl = [
            'ss_fluffy.wav',
            'ss_power.wav',
            'ss_silence.wav',
            'ss_storage.wav',
            'ss_tiger.wav',
            'ss_temper.wav',
            'ss_label.wav',
        ]
    } else if (cond = 's_car_min' && list == 0) { // Only has 7 not 8 items
        wl = [
            'ss_sugar.wav',
            'ss_greasy.wav',
            'ss_crispy.wav',
            'ss_travel.wav',
            'ss_cupcake.wav',
            'ss_Tuesday.wav',
            'ss_clearly.wav',
        ]
    }
    console.log(wl)
    setAudio(wl)
}

function get_slider_data() {
  var slidervals = []
  for (var i = 2; i < 14; i++) {
    var response = $('#sliderval'+i).val();
    slidervals[i-2] = response;
  }
  data.sliderVals.push(slidervals)
}

// Condition list
var conditions = [
  'k_cas_del',
  'k_cas_flap',
  'k_cas_schwa',
  'k_cas_min',
  'k_car_del',
  'k_car_flap',
  'k_car_schwa',
  'k_car_min',
  's_cas_del',
  's_cas_flap',
  's_cas_schwa',
  's_cas_min',
  's_car_del',
  's_car_flap',
  's_car_schwa',
  's_car_min'
]

// Wordlists
var del_lists = [
  [
    'rental',
    'tainted',
    'gentle',
    'hinted',
    'ranted',
    'haunted',
    'twenty',
    'frontal'
  ],
  [
    'center',
    'plenty',
    'county',
    'enter',
    'dentist',
    'bounty',
    'granted',
    'dented'
  ]
]
var flap_lists = [
  [
    'butter',
    'chatting',
    'beetle',
    'pretty',
    'cater',
    'party',
    'batter',
    'shutter'
  ],
  [
    'cattle',
    'kitty',
    'lettuce',
    'water',
    'city',
    'photo',
    'pity',
    'rating'
  ]
]
var schwa_lists = [
  [
    'canoe',
    'bereave',
    'pollute',
    'polite',
    'correct',
    'career',
    'collide',
    'delight'
  ],
  [
    'select',
    'saloon',
    'parade',
    'delay',
    'police',
    'collapse',
    'balloon',
    'believe'
  ]
]
var min_lists = [
  [
    'object',
    'fluffy',
    'morale',
    'power',
    'silence',
    'storage',
    'temper',
    'label'
  ],
  [
    'keeper',
    'sugar',
    'greasy',
    'travel',
    'cupcake',
    'Tuesday',
    'clearly',
    'diner'
  ]
]
var mix_lists = [
  [
    'select',
    'party',
    'pollute',
    'power',
    'county',
    'rating',
    'hinted',
    'sugar'
  ],
  [
    'dentist',
    'silence',
    'career',
    'collapse',
    'greasy',
    'pretty',
    'water',
    'gentle'
  ]
]

// choose whether s gets all a lists or b lists, as there's no reason to randomize each condition individually since there's no real correlation
// 0 = k gets wordlists A; s gets wordlists B
// 1 = s gets wordlists A; s gets wordlists B
var k_lists = Math.floor(Math.random()*2)

var c_order = shuffle(conditions)
var m_order = shuffle([
    'k_cas_mix',
    'k_car_mix',
    's_cas_mix',
    's_car_mix'
])
// mixed condition trials always last
var trialOrder = c_order.concat(m_order)

var sliderOrder = [
  'educated',
  'friendly',
  'calm',
  'young',
  'quiet',
  'bored',
  'serious',
  'soft-spoken',
  'confident',
  'articulate',
  'introverted',
  'clear',
];
var sliderOrder = shuffle(sliderOrder)
console.log(sliderOrder)
console.log(trialOrder)
setSliders(sliderOrder)//set randomizes order once, may be worth doing it for each trial

var data = {};
var trialnum = 0;
var TOTAL_TRIALS = trialOrder.length

data.trialOrder = trialOrder.slice() //Makes a copy rather than ref
data.sliderOrder = sliderOrder
data.sliderVals = []
data.comments = []

$(document).ready(function() {
    showSlide("intro");
    $('#gotoInstructions').click(function() {
        document.body.scrollTop = document.documentElement.scrollTop = 0;
        showSlide('instructions');
    });
    $('#gotoCheck').click(function(){
        document.body.scrollTop = document.documentElement.scrollTop = 0;
        showSlide('audioCheck');
    })

    document.getElementById('sampleAudio').src = "http://stanford.edu/~sunwooj/experiments/dec1/stimuli/sample.wav";

    $('#startbutton').click(function() {
        var nat = document.getElementById("native").checked;
        var spe = document.getElementById("speaker").checked;
        if (nat == true && spe == true) {
        document.body.scrollTop = document.documentElement.scrollTop = 0;
        var trial = trialOrder.shift();
        console.log(trial,k_lists)
        get_wordlist(trial,k_lists);
        showSlide("sliderPage");
        }
        else {
            checkboxwarning = "Please check both boxes to confirm that you meet the necessary requirements, in order to proceed to the experiment.";
            $("#checkboxWarning").html(checkboxwarning);
        }
    });

    $('#veributton').click(function () {
        var txt = document.getElementById("verText").value;
        if (txt == "" || txt == null) {
            warning = "Please enter your answer in the box.";
            $("#veriWarning").html(warning);
        } else {
            document.body.scrollTop = document.documentElement.scrollTop = 0;
            data.verification = txt
            showSlide("sliderPage")
        }
    });

    $('#nextTrial').click(function(){
      // Record the data present
      get_slider_data();
      var textbox_data = document.getElementById('speakerPerception').value;
      data.comments.push(textbox_data)
      document.getElementById('speakerPerception').value = "";
      // Check if it's the end of the experiment
      if (trialnum >= TOTAL_TRIALS) {
        // If end, go to next slide
        showSlide('language');
        return;
      }
      trialnum += 1;
      document.body.scrollTop = document.documentElement.scrollTop = 0;
      // Reset sliders
      refreshSlider();
      var trial = trialOrder.shift();
      console.log(trial,k_lists)
      get_wordlist(trial,k_lists);
    })

    $('#lgsubmit').click(function(){
      showSlide("finished");
      setTimeout(function() { turk.submit(data)}, 1000);
    })
});

function showSlide (slideName) {
    $('.slide').hide();
    $('#' + slideName).show();
}


var stimuliVector = {};
var sentenceStim = {};
var audioVector = {};
var audioStim = {};
var followUp = {};
var audioRandom = Math.floor(Math.random() * 10);


// Codes for sliders
// Slider2
$( function() {
    $( "#slider2" ).slider({
      value: 50,
      min: 0,
      max: 100,
      step: 1,
      slide: function( event, ui ) {

        $("#slider2").css({"background": "#CCFFFF"});
        $("#slider2 .ui-slider-handle").css({
                      "background": "#E0F5FF",
                      "border-color": "#001F29"
                  });

        m_val = ui.value;
        if (m_val < 0) {
            $(ui.handle).text("?");
        }
        else {
            $(ui.handle).text(m_val);
        }
        $( "#sliderval2" ).val( ui.value );
      }
    });
    $( "#sliderval2" ).val( $( "#slider2" ).slider( "value" ) );
  } );

// Slider3
$( function() {
    $( "#slider3" ).slider({
      value: 50,
      min: 0,
      max: 100,
      step: 1,
      slide: function( event, ui ) {

        $("#slider3").css({"background": "#CCFFFF"});
        $("#slider3 .ui-slider-handle").css({
                      "background":"#E0F5FF",
                      "border-color": "#001F29"
                  });

        m_val = ui.value;
        if (m_val < 0) {
            $(ui.handle).text("?");
        }
        else {
            $(ui.handle).text(m_val);
        }
        $( "#sliderval3" ).val( ui.value );
      }
    });
    $( "#sliderval3" ).val( $( "#slider3" ).slider( "value" ) );
  } );

// Slider4
$( function() {
    $( "#slider4" ).slider({
      value: 50,
      min: 0,
      max: 100,
      step: 1,
      slide: function( event, ui ) {

        $("#slider4").css({"background": "#CCFFFF"});
        $("#slider4 .ui-slider-handle").css({
                      "background":"#E0F5FF",
                      "border-color": "#001F29"
                  });

        m_val = ui.value;
        if (m_val < 0) {
            $(ui.handle).text("?");
        }
        else {
            $(ui.handle).text(m_val);
        }
        //$(ui.handle).text(m_val);
        $( "#sliderval4" ).val( ui.value );
      }
    });
    $( "#sliderval4" ).val( $( "#slider4" ).slider( "value" ) );
  } );

// Slider 5
$( function() {
    $( "#slider5" ).slider({
      value: 50,
      min: 0,
      max: 100,
      step: 1,
      slide: function( event, ui ) {

        $("#slider5").css({"background": "#CCFFFF"});
        $("#slider5 .ui-slider-handle").css({
                      "background": "#E0F5FF",
                      "border-color": "#001F29"
                  });

        m_val = ui.value;
        if (m_val < 0) {
            $(ui.handle).text("?");
        }
        else {
            $(ui.handle).text(m_val);
        }
        $( "#sliderval5" ).val( ui.value );
      }
    });
    $( "#sliderval5" ).val( $( "#slider5" ).slider( "value" ) );
  } );

// Slider 6
$( function() {
      $( "#slider6" ).slider({
        value: 50,
        min: 0,
        max: 100,
        step: 1,
        slide: function( event, ui ) {

          $("#slider6").css({"background": "#CCFFFF"});
          $("#slider6 .ui-slider-handle").css({
                        "background": "#E0F5FF",
                        "border-color": "#001F29"
                    });

          m_val = ui.value;
          if (m_val < 0) {
              $(ui.handle).text("?");
          }
          else {
              $(ui.handle).text(m_val);
          }
          $( "#sliderval6" ).val( ui.value );
        }
      });
      $( "#sliderval6" ).val( $( "#slider6" ).slider( "value" ) );
  } );

  // Slider 7
$( function() {
      $( "#slider7" ).slider({
        value: 50,
        min: 0,
        max: 100,
        step: 1,
        slide: function( event, ui ) {

          $("#slider7").css({"background": "#CCFFFF"});
          $("#slider7 .ui-slider-handle").css({
                        "background": "#E0F5FF",
                        "border-color": "#001F29"
                    });

          m_val = ui.value;
          if (m_val < 0) {
              $(ui.handle).text("?");
          }
          else {
              $(ui.handle).text(m_val);
          }
          $( "#sliderval7" ).val( ui.value );
        }
      });
      $( "#sliderval7" ).val( $( "#slider7" ).slider( "value" ) );
    } );

    // Slider 8
    $( function() {
        $( "#slider8" ).slider({
          value: 50,
          min: 0,
          max: 100,
          step: 1,
          slide: function( event, ui ) {

            $("#slider8").css({"background": "#CCFFFF"});
            $("#slider8 .ui-slider-handle").css({
                          "background": "#E0F5FF",
                          "border-color": "#001F29"
                      });

            m_val = ui.value;
            if (m_val < 0) {
                $(ui.handle).text("?");
            }
            else {
                $(ui.handle).text(m_val);
            }
            $( "#sliderval8" ).val( ui.value );
          }
        });
        $( "#sliderval8" ).val( $( "#slider8" ).slider( "value" ) );
      } );

// Slider 9
$( function() {
    $( "#slider9" ).slider({
      value: 50,
      min: 0,
      max: 100,
      step: 1,
      slide: function( event, ui ) {
        $("#slider9").css({"background": "#CCFFFF"});
        $("#slider9 .ui-slider-handle").css({
                      "background": "#E0F5FF",
                      "border-color": "#001F29"
                  });
        m_val = ui.value;
        if (m_val < 0) {
            $(ui.handle).text("?");
        } else {
            $(ui.handle).text(m_val);
        }
        $( "#sliderval9" ).val( ui.value );
      }
    });
    $( "#sliderval9" ).val( $( "#slider9" ).slider( "value" ) );
} );

// Slider 10
$( function() {
    $( "#slider10" ).slider({
      value: 50,
      min: 0,
      max: 100,
      step: 1,
      slide: function( event, ui ) {
        $("#slider10").css({"background": "#CCFFFF"});
        $("#slider10 .ui-slider-handle").css({
                      "background": "#E0F5FF",
                      "border-color": "#001F29"
                  });
        m_val = ui.value;
        if (m_val < 0) {
            $(ui.handle).text("?");
        } else {
            $(ui.handle).text(m_val);
        }
        $( "#sliderval10" ).val( ui.value );
      }
    });
    $( "#sliderval10" ).val( $( "#slider10" ).slider( "value" ) );
} );

// Slider 11
$( function() {
    $( "#slider11" ).slider({
      value: 50,
      min: 0,
      max: 100,
      step: 1,
      slide: function( event, ui ) {
        $("#slider11").css({"background": "#CCFFFF"});
        $("#slider11 .ui-slider-handle").css({
                      "background": "#E0F5FF",
                      "border-color": "#001F29"
                  });
        m_val = ui.value;
        if (m_val < 0) {
            $(ui.handle).text("?");
        } else {
            $(ui.handle).text(m_val);
        }
        $( "#sliderval11" ).val( ui.value );
      }
    });
    $( "#sliderval11" ).val( $( "#slider11" ).slider( "value" ) );
} );

// Slider 12
$( function() {
    $( "#slider12" ).slider({
      value: 50,
      min: 0,
      max: 100,
      step: 1,
      slide: function( event, ui ) {
        $("#slider12").css({"background": "#CCFFFF"});
        $("#slider12 .ui-slider-handle").css({
                      "background": "#E0F5FF",
                      "border-color": "#001F29"
                  });
        m_val = ui.value;
        if (m_val < 0) {
            $(ui.handle).text("?");
        } else {
            $(ui.handle).text(m_val);
        }
        $( "#sliderval12" ).val( ui.value );
      }
    });
    $( "#sliderval12" ).val( $( "#slider12" ).slider( "value" ) );
} );

// Slider 13
$( function() {
    $( "#slider13" ).slider({
      value: 50,
      min: 0,
      max: 100,
      step: 1,
      slide: function( event, ui ) {
        $("#slider13").css({"background": "#CCFFFF"});
        $("#slider13 .ui-slider-handle").css({
                      "background": "#E0F5FF",
                      "border-color": "#001F29"
                  });
        m_val = ui.value;
        if (m_val < 0) {
            $(ui.handle).text("?");
        } else {
            $(ui.handle).text(m_val);
        }
        $( "#sliderval13" ).val( ui.value );
      }
    });
    $( "#sliderval13" ).val( $( "#slider13" ).slider( "value" ) );
} );

// Function that refreshes slider values
function refreshSlider () {
    $(".sliders").slider('value', 50);
    $(".sliders").val(50);
    $(".slidervals").val(50);
    $(".ui-slider-handle").text("");
    $(".sliders").css({"background":""});
    $(".sliders" + " .ui-slider-handle").css({
        "background":"#FAFAFA",
        "border-color": "#CCCCCC" });
}


function chooseRandom(list) {
    return list[Math.floor(Math.random() * list.length)];
}


function shuffle(v) { // non-destructive.
    newarray = v.slice(0);
    for (var j, x, i = newarray.length; i; j = parseInt(Math.random() * i), x = newarray[--i], newarray[i] = newarray[j], newarray[j] = x);
    return newarray;
}
