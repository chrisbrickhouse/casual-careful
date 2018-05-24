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
    document.getElementById("Q"+qn+"C").innerHTML = ""
  }
}

function setAudio(arr) {
    for (i = 1; i <= arr.length; i++) {
        fpath = "http://stanford.edu/~ctb77/studies/files/sounds/"+arr[i-1]
        console.log(fpath)
        document.getElementById("audio"+i).src = fpath
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
    var wl = [];
    console.log(cond,list)
    var parts = cond.split("_");
    var file_prefix = parts[0]+"-"+parts[1]+"-";
    var list_num = list
    // if (parts[0] == 's') {
    //   if (list == 0) {
    //     list_num = 1
    //   } else {
    //     list_num = 0
    //   }
    // } else {
    //   list_num = list
    // }
    if (parts[2] == 'del') {
      var words = del_lists[list_num]
    } else if (parts[2] == 'flap') {
      var words = flap_lists[list_num]
    } else if (parts[2] == 'schwa') {
      var words = schwa_lists[list_num]
    } else if (parts[2] == 'min') {
      var words = min_lists[list_num]
    } else {
      console.log(parts[2])
    }
    console.log(parts)
    for (var i = 0; i < words.length; i++) {
      wl.push(file_prefix+words[i]+'.wav')
    }
    console.log(wl)
    return(wl);
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
    'spoiler',
    'morale',
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
//var m_order = shuffle([
//    'k_cas_mix',
//    'k_car_mix',
//    's_cas_mix',
//    's_car_mix'
//])
// mixed condition trials always last
var trialOrder = [document.getElementById('Condition').innerHTML]

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
var TOTAL_TRIALS = trialOrder.length - 1
// Change above to 0 if only one trial shown to participant at random

data.trialOrder = trialOrder.slice() //Makes a copy rather than ref
data.sliderOrder = sliderOrder
data.sliderVals = []
data.listNum = k_lists
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
        var wl = get_wordlist(trial,k_lists);
        data.wordlist = wl
        setAudio(wl);
        console.log(trial,wl)
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
      var wl = get_wordlist(trial,k_lists);
      setAudio(wl)
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
            $(ui.handle).text("");
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
            $(ui.handle).text("");
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
            $(ui.handle).text("");
        }
        //$(ui.handle).text("");
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
            $(ui.handle).text("");
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
              $(ui.handle).text("");
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
              $(ui.handle).text("");
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
                $(ui.handle).text("");
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
            $(ui.handle).text("");
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
            $(ui.handle).text("");
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
            $(ui.handle).text("");
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
            $(ui.handle).text("");
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
            $(ui.handle).text("");
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
