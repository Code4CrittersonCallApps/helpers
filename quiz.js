(function () {
  function q(s, o, a, e) { return { s: s, o: o, a: a, e: e }; }
  var SCEN = [
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
  var QUIZZES = [
    { id: "gig", emoji: "👕", title: "The Gig", desc: "What to wear, when to show up, and how to keep it fun and safe.", qs: [
      q("👕 What do you wear to a gig?",
        ["Whatever's comfy that day.", "A costume, so it feels like a party.", "Your Critters on Call t-shirt. Can't find it? A plain black t-shirt."],
        2, "The shirt tells guests who to ask for help. Lost yours? Wear plain black and let Michael or Ann-Marie know so we can get you another."),
      q("👟 Which shoes are right for a gig?",
        ["Sandals or flip-flops, it's Florida.", "Steel-toe boots, nothing less.", "Closed-toe shoes. Sneakers are perfect."],
        2, "Fencing can land on a toe, and animals can step, pee or poop on your feet. Steel toes aren't needed. Just no open toes."),
      q("⏰ When should you get to the site?",
        ["Right at the start time.", "About 5 minutes before.", "About 30 minutes before the start."],
        2, "Setup only takes about 10 minutes. The extra time keeps things calm if traffic or parking is weird. Running behind? Text Michael or Ann-Marie."),
      q("🐐 Our heaviest goat is about 40 pounds. How do you move animals and gear?",
        ["Bend at the waist and scoop.", "Ask a guest's kid to help carry.", "Lift with your legs, not your back, and walk lead-trained goats on their leads."],
        2, "You should be able to lift about 40 pounds safely. If that's a stretch for you, tell us before you accept a gig. Just be smart about it."),
      q("👀 It's a slow moment at the gig. What's the move?",
        ["Catch up on your phone.", "Step away for a long chat.", "Stay with the animals, keep your eyes open, and greet guests."],
        2, "These gigs are what let us pay helpers, so we want every guest to have a great time. It's not your business to run. Just be present and kind while you're there."),
      q("🐣 At a public event, a kid asks to pick up a chick.",
        ["Sure, just be gentle.", "Only the bigger kids.", "\"Let me hold them so they feel safe. You can pet right here.\""],
        2, "At public events, only helpers hold or pick up animals. A friendly line like that keeps everyone happy and the animals safe."),
      q("🙋 You're not sure about something at the gig.",
        ["Guess and hope for the best.", "Wait until it's over to mention it.", "Text or call Michael or Ann-Marie right away."],
        2, "There are no dumb questions. A quick text saves a lot of headaches.")
    ]},
    { id: "safety", emoji: "🛡️", title: "Compliance & Safety", desc: "How we work together, and the safety standards behind every gig.", qs: [
      q("🧾 How are you set up with Critters on Call?",
        ["W-2 employee on payroll.", "Unpaid volunteer.", "Independent 1099 contractor, a helper or partner."],
        2, "You're independent. W-2 is something we might look at someday, but there's no promise. Today it's 1099."),
      q("📅 Who decides which gigs you take?",
        ["Michael picks and you say yes.", "You take every gig that comes up.", "You do. Accept the gigs that work for you and pass on the ones that don't."],
        2, "Your call, always. Just let us know quickly either way so we can plan."),
      q("💵 How do you get paid?",
        ["A weekly salary.", "Tips from guests only.", "Per gig or per hour, at the rate we agree on before you accept."],
        2, "You'll always know the rate before you say yes. No surprises."),
      q("📝 What's the W-9 for?",
        ["Nothing, skip it.", "Hand it to the customer.", "So we can send you a 1099 if your pay crosses the IRS reporting line."],
        2, "It's in Quick links and takes about 2 minutes. Email it to sheehanhomestead@gmail.com. Casual helpers who stay under the line need no paperwork, and we never ask for your Social Security number by text."),
      q("🛡️ Why do we have standards like closed-toe shoes and no feeding?",
        ["To control how you do your work.", "They're just suggestions.", "To keep animals, guests and you safe, and to give clients the experience they booked."],
        2, "Standards are about safety and great results. How you bring the fun is up to you."),
      q("🚗 You're behind schedule on the drive over.",
        ["Make up time on the highway.", "Text us while you're driving.", "Drive safe, and send a quick text once you're stopped."],
        2, "Leave early so you never feel rushed. Running late happens. Driving unsafe never should."),
      q("🐾 Which animal standards apply at every gig?",
        ["Guests can hold the geese if they ask nicely.", "The pig is fine to pet at the farm.", "Geese are helpers only, the pig is never touched, and no feeding unless a helper says so."],
        2, "Same rules as Gold. Guests listen to the helper. That's you! Watch your footing too: roots and fire ants are real.")
    ]},
    { id: "scenarios", emoji: "💬", title: "Scenarios & Objections", desc: "Real situations, plus friendly answers to what guests ask.", qs: SCEN.concat([
      q("🐰 A parent asks: \"Can my kid hold the bunny?\"",
        ["\"Sure, here you go.\"", "\"No.\" and move on.", "\"I'll hold them so they feel safe. Come pet right here, they love gentle back scratches.\""],
        2, "Say yes to the fun part and keep the animal in your hands. Warm and simple wins."),
      q("🥕 A guest asks: \"Why can't we feed them?\"",
        ["\"Rules are rules.\"", "\"Okay, just a little.\"", "\"We keep their food just right so they stay healthy. They'd love some gentle pets though!\""],
        2, "Give a friendly reason and a fun alternative. If they keep pushing, loop in Michael or Ann-Marie."),
      q("⏳ A host asks: \"Can we stay longer for free?\"",
        ["\"Sure, stay as long as you like.\"", "\"Nope, we're leaving.\"", "\"I'd love to! Extra time is something Michael or Ann-Marie can set up. Let me get them on the phone.\""],
        2, "Pricing and extra time aren't yours to decide. Staying positive and calling us keeps everyone happy."),
      q("🎈 A guest asks: \"How much is a party?\"",
        ["Guess a number.", "\"No idea, sorry.\"", "\"Check sheehanhomestead.com/services or call Michael at 914-263-1311. Want me to text him your name?\""],
        2, "You don't need to know prices. Share the link and the number, then let Michael know."),
      q("😕 A host says: \"This isn't what we paid for.\"",
        ["Argue your side.", "Promise them a refund.", "\"I hear you. Let me get Michael or Ann-Marie on the phone so they can make it right.\""],
        2, "Complaints go to us, every time. Stay kind, don't promise anything, and call.")
    ])}
  ];
  var PASS = 0.8, KEY = "helperQuiz.v1", st = { passed: {}, name: "", at: "" };
  try { var sv = JSON.parse(localStorage.getItem(KEY) || "null"); if (sv && sv.passed) st = sv; } catch (e) {}
  function save() { try { localStorage.setItem(KEY, JSON.stringify(st)); } catch (e) {} }
  var root = document.getElementById("quiz"), tabs = document.getElementById("quiz-tabs"), reward = document.getElementById("quiz-reward");
  if (!root) return;
  var cur = null, i = 0, score = 0;
  function esc(t) { var d = document.createElement("div"); d.textContent = t; return d.innerHTML; }
  function shuffle(n) { var a = []; for (var k = 0; k < n; k++) a.push(k);
    for (var j = n - 1; j > 0; j--) { var r = Math.floor(Math.random() * (j + 1)); var t = a[j]; a[j] = a[r]; a[r] = t; } return a; }
  function allPassed() { return QUIZZES.every(function (z) { return st.passed[z.id]; }); }
  function renderTabs() {
    tabs.innerHTML = QUIZZES.map(function (z, n) {
      var p = st.passed[z.id];
      return '<button type="button" class="qz-tab' + (cur === z ? " is-on" : "") + (p ? " is-pass" : "") + '" data-n="' + n + '">' +
        '<span class="qz-e">' + z.emoji + '</span><span class="qz-t"><b>Quiz ' + (n + 1) + ': ' + esc(z.title) + '</b><small>' + z.qs.length + ' questions' + (p ? ' · ✅ Passed' : '') + '</small></span></button>';
    }).join("");
    tabs.querySelectorAll(".qz-tab").forEach(function (b) { b.addEventListener("click", function () { start(QUIZZES[+b.dataset.n]); root.scrollIntoView({ behavior: "smooth", block: "start" }); }); });
  }
  function renderReward() {
    if (!allPassed()) { reward.hidden = true; return; }
    reward.hidden = false;
    reward.innerHTML = '<div class="qz-reward"><div class="qz-big">🎉👕</div><h3>You earned your free Critters on Call t-shirt!</h3>' +
      '<p>Show this screen to Michael or Ann-Marie.</p>' +
      '<label class="qz-name">Your name<input type="text" id="qz-name" maxlength="40" autocomplete="name" placeholder="Type your name" value="' + esc(st.name || "") + '"></label>' +
      '<p class="fine">All three quizzes passed' + (st.at ? ' on ' + esc(st.at) : '') + '. Saved on this phone.</p></div>';
    var inp = document.getElementById("qz-name");
    inp.addEventListener("input", function () { st.name = inp.value; save(); });
  }
  function start(z) { cur = z; i = 0; score = 0; renderTabs(); show(); }
  function show() {
    var z = cur, qq = z.qs[i], order = shuffle(qq.o.length);
    var h = '<div class="q-meta">' + z.emoji + ' ' + esc(z.title) + ' · ' + (i + 1) + ' of ' + z.qs.length + ' · Score ' + score + '</div>' +
      '<div class="q-card"><p class="q-s">' + esc(qq.s) + '</p><p class="q-ask">What do you do?</p><div class="q-opts">';
    order.forEach(function (k, n) { h += '<button type="button" class="q-opt" data-k="' + k + '"><span class="q-l">' + "ABC"[n] + '</span>' + esc(qq.o[k]) + '</button>'; });
    root.innerHTML = h + '</div><div class="q-fb" hidden></div></div>';
    root.querySelectorAll(".q-opt").forEach(function (b) { b.addEventListener("click", pick); });
  }
  function pick(ev) {
    var b = ev.currentTarget, qq = cur.qs[i], ok = +b.dataset.k === qq.a;
    if (ok) score++;
    root.querySelectorAll(".q-opt").forEach(function (x) { x.disabled = true;
      if (+x.dataset.k === qq.a) x.classList.add("is-right"); else if (x === b) x.classList.add("is-wrong"); });
    var fb = root.querySelector(".q-fb"); fb.hidden = false; fb.className = "q-fb " + (ok ? "ok" : "no");
    var last = i + 1 >= cur.qs.length;
    fb.innerHTML = "<b>" + (ok ? "✅ You got it!" : "❌ Not quite.") + "</b><p>" + esc(qq.e) + '</p><button type="button" class="btn btn-primary btn-block q-next">' + (last ? "See my score" : "Next question") + "</button>";
    fb.querySelector(".q-next").addEventListener("click", function () { i++; last ? done() : show(); root.scrollIntoView({ behavior: "smooth", block: "start" }); });
  }
  function done() {
    var z = cur, need = Math.ceil(z.qs.length * PASS), pass = score >= need, was = allPassed();
    if (pass) { st.passed[z.id] = true; if (!was && allPassed()) st.at = new Date().toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" }); save(); }
    var next = QUIZZES.filter(function (x) { return !st.passed[x.id]; })[0];
    var msg = score === z.qs.length ? "Perfect score! 🎉" : pass ? "Passed! Nice work. 💛" : "You need " + need + " of " + z.qs.length + " to pass. Give it another go. 🐐";
    root.innerHTML = '<div class="q-card q-end"><div class="q-score">' + score + " / " + z.qs.length + '</div><p class="q-s">' + msg + "</p>" +
      '<p class="fine">When in doubt, text or call Michael or Ann-Marie.</p>' +
      (pass && next ? '<button type="button" class="btn btn-primary btn-block q-go">Next: ' + esc(next.title) + "</button>" : "") +
      '<button type="button" class="btn btn-ghost btn-block q-retake">Retake this quiz</button></div>';
    var go = root.querySelector(".q-go"); if (go) go.addEventListener("click", function () { start(next); });
    root.querySelector(".q-retake").addEventListener("click", function () { start(z); });
    renderTabs(); renderReward();
    if (allPassed()) reward.scrollIntoView({ behavior: "smooth", block: "start" });
  }
  renderTabs(); renderReward();
  root.innerHTML = '<p class="fine">Pick a quiz above to start. Pass all three to earn your free shirt.</p>';
})();
