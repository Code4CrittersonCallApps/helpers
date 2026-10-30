(function () {
  var Q = [
    { s: "🚗 You're running about 20 minutes late to a gig.",
      o: ["Rush and speed to get there on time.",
          "Ghost us and hope nobody notices.",
          "Text Michael or Ann-Marie: \"Running about 20 late, want me to meet you at the gig?\""],
      a: 2,
      e: "Just communicate. Things happen. Try not to make it a habit, and never speed. Drive safely and leave early." },
    { s: "😠 A customer is rude, demanding and unkind to you.",
      o: ["Curse them out.",
          "Try to fix it yourself.",
          "Stay calm and get Michael or Ann-Marie on the phone with them."],
      a: 2,
      e: "That's above your pay grade. You shouldn't have to deal with that. Don't get between unhappy customers. Call Michael." },
    { s: "🤒 You're sick the night before a gig, hoping you can still make it.",
      o: ["Say nothing and see how you feel in the morning.",
          "No-show if you feel bad.",
          "Tell us tonight: \"Hoping to make it, but heads up, I'm not feeling great.\""],
      a: 2,
      e: "Tell us early. Don't feel like you're letting us down. We'd much rather plan ahead." },
    { s: "💵 The customer wants to pay you at the gig.",
      o: ["Put the cash in your pocket and tell us later.",
          "Tell them to just Venmo whoever.",
          "Ask them to put it in an envelope with Ann-Marie's or Michael's name on it."],
      a: 2,
      e: "Payment isn't yours to handle. An envelope with our name keeps it clean and safe for everyone. Hand it to us and send us a quick text so we know." },
    { s: "😢 A kid cries after a bunny scratch.",
      o: ["Tell them it's fine and keep going.",
          "Put the bunny away and end the visit.",
          "Comfort them, tell a parent right away, make it a \"Bunny Scratch Survivor\" moment, and text Michael or Ann-Marie."],
      a: 2,
      e: "Big cheer, brave kid! 🐰 The parent should hear it from you first, and we want to know too, even if it's tiny." },
    { s: "🏋️ You need to move a heavy crate across the yard. There are roots and fire ants.",
      o: ["Grab it fast and bend at the back.",
          "Leave it and don't mention it.",
          "Lift with your legs, watch your footing, and if it's too heavy, ask Michael or Ann-Marie for a hand."],
      a: 2,
      e: "Your back matters more than the crate. Look alive for roots and ants, and just ask. We'd rather help than have you get hurt." },
    { s: "🐷 A guest at the farm really wants to pet the pig.",
      o: ["Sure, he's sweet.",
          "Okay, but only for a second.",
          "Kindly say no. Only Michael pets him. With a helper's OK they can toss him some food. If they push, get Michael."],
      a: 2,
      e: "Cutie pie, but hands off. Tossing food is the fun part. Anyone who won't take no gets handed to Michael." },
    { s: "🪿 A guest asks to hold one of the geese.",
      o: ["Hand one over carefully.",
          "Let the older kids only.",
          "Geese are helpers only. Offer a bunny or a chick instead, and call Michael or Ann-Marie if they push back."],
      a: 2,
      e: "Geese go to helpers only, every time. A cuddly bunny usually wins them over anyway." },
    { s: "🥕 A guest starts feeding the animals snacks from their bag.",
      o: ["Let it slide, they mean well.",
          "Grab the food out of their hands.",
          "Kindly remind them of the no-feeding rule, and tell Michael or Ann-Marie if it keeps happening."],
      a: 2,
      e: "No feeding unless a helper says so. Guests listen to the helper. That's you! Stay kind, and loop us in if it keeps up." },
    { s: "🎉 A parent loves it and asks how to book a party.",
      o: ["Quote them a price on the spot.",
          "Tell them to just look us up online.",
          "Give them sheehanhomestead.com/services and Michael's number, 914-263-1311, then text Michael their name."],
      a: 2,
      e: "Pricing and booking aren't yours, but the lead is gold. Share the link and our number, and let us know so we can follow up." }
  ];
  var root = document.getElementById('quiz');
  if (!root) return;
  var i = 0, score = 0, order = [];
  function shuffle(n) { var a = []; for (var k = 0; k < n; k++) a.push(k);
    for (var j = a.length - 1; j > 0; j--) { var r = Math.floor(Math.random() * (j + 1)); var t = a[j]; a[j] = a[r]; a[r] = t; } return a; }
  function esc(t) { var d = document.createElement('div'); d.textContent = t; return d.innerHTML; }
  function show() {
    var q = Q[i]; order = shuffle(q.o.length);
    var h = '<div class="q-meta">Scenario ' + (i + 1) + ' of ' + Q.length + ' · Score ' + score + '</div>' +
            '<div class="q-card"><p class="q-s">' + esc(q.s) + '</p><p class="q-ask">What do you do?</p><div class="q-opts">';
    order.forEach(function (k, n) { h += '<button type="button" class="q-opt" data-k="' + k + '"><span class="q-l">' + 'ABC'[n] + '</span>' + esc(q.o[k]) + '</button>'; });
    h += '</div><div class="q-fb" hidden></div></div>';
    root.innerHTML = h;
    root.querySelectorAll('.q-opt').forEach(function (b) { b.addEventListener('click', pick); });
  }
  function pick(ev) {
    var b = ev.currentTarget, q = Q[i], k = +b.dataset.k, ok = k === q.a;
    if (ok) score++;
    root.querySelectorAll('.q-opt').forEach(function (x) {
      x.disabled = true;
      if (+x.dataset.k === q.a) x.classList.add('is-right');
      else if (x === b) x.classList.add('is-wrong');
    });
    var fb = root.querySelector('.q-fb');
    fb.hidden = false;
    fb.className = 'q-fb ' + (ok ? 'ok' : 'no');
    fb.innerHTML = '<b>' + (ok ? '✅ You got it!' : '❌ Not quite.') + '</b><p>' + esc(q.e) + '</p>' +
      '<button type="button" class="btn btn-primary btn-block q-next">' + (i + 1 < Q.length ? 'Next scenario' : 'See my score') + '</button>';
    fb.querySelector('.q-next').addEventListener('click', function () { i++; i < Q.length ? show() : done(); root.scrollIntoView({ behavior: 'smooth', block: 'start' }); });
  }
  function done() {
    var msg = score === Q.length ? 'Perfect score! You\'re ready. 🎉' : score >= Q.length - 2 ? 'Nice work! Almost there. 💛' : 'Good start. Give it another go. 🐐';
    root.innerHTML = '<div class="q-card q-end"><div class="q-score">' + score + ' / ' + Q.length + '</div><p class="q-s">' + msg + '</p>' +
      '<p class="fine">The answer is almost always the same: when in doubt, text or call Michael or Ann-Marie.</p>' +
      '<button type="button" class="btn btn-primary btn-block q-retake">Retake the quiz</button></div>';
    root.querySelector('.q-retake').addEventListener('click', function () { i = 0; score = 0; show(); });
  }
  show();
})();
