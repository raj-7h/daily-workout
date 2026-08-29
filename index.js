import "dotenv/config";
import twilio from "twilio";

const ACCOUNT_SID = process.env.ACCOUNT_SID;
const AUTH_TOKEN = process.env.AUTH_TOKEN;
const FROM_NUMBER = process.env.FROM_NUMBER;
const TO_NUMBER = process.env.TO_NUMBER;

const client = twilio(process.env.ACCOUNT_SID, process.env.AUTH_TOKEN);
console.log("Hello");


// 4 Training Days (Mon, Tue, Wed, Fri)
// 3 Content Creation Days (Thu, Sat, Sun)

const workoutPlan = {
  Monday: {
    title: "Push Day 🔥",
    focus: "Chest • Shoulders • Triceps",
    vibe: "Strength & Size",
    exercises: [
      { heading: "Chest 🏋️" },
      { name: "Flat Barbell Bench Press", sets: "4x4-6", target: "Mid Chest" },
      { name: "Incline Dumbbell Press", sets: "3x8-10", target: "Upper Chest", superset: "A" },
      { name: "Cable Fly / Pec Deck Fly", sets: "3x12-15", target: "Chest Stretch & Contraction", superset: "A" },

      { heading: "Shoulders 🎯" },
      { name: "Barbell Overhead Press", sets: "3x6-8", target: "Front Delts" },
      { name: "Cable Lateral Raise", sets: "3x12-15", target: "Side Delts", superset: "B" },
      { name: "Reverse Pec Deck", sets: "3x12-15", target: "Rear Delts", superset: "B" },

      { heading: "Triceps 💪" },
      { name: "Weighted Dips", sets: "3x8-12", target: "Triceps • Chest" },
      { name: "Rope Pushdown", sets: "3x10-12", target: "Triceps", superset: "C" },
      { name: "Skull Crusher", sets: "2x8-10", target: "Triceps", superset: "C" },
    ],
  },

  Tuesday: {
    title: "Pull Day 🔥",
    focus: "Back • Traps • Rear Delts • Biceps • Forearms",
    vibe: "Strength & Thickness",
    exercises: [
      { heading: "Back 🦍" },
      { name: "Deadlift", sets: "2-3x4-6", target: "Posterior Chain • Traps • Back" },
      { name: "Pull-Ups / Lat Pulldown", sets: "4x8-10", target: "Lats • Upper Back" },
      { name: "Barbell Row", sets: "3x6-8", target: "Mid Back Thickness" },
      { name: "Chest-Supported Row", sets: "3x8-10", target: "Mid Back Thickness", superset: "A" },
      { name: "Straight-Arm Pulldown", sets: "2-3x12-15", target: "Lats Isolation", superset: "A" },

      { heading: "Traps & Rear Delts 🎯" },
      { name: "DB Shrugs", sets: "3x10-15", target: "Traps", superset: "B" },
      { name: "Face Pull", sets: "3x12-15", target: "Rear Delts • Upper Back", superset: "B" },

      { heading: "Biceps 💪" },
      { name: "Barbell Curl", sets: "3x8-10", target: "Biceps" },
      { name: "Hammer Curl", sets: "3x10-12", target: "Brachialis • Brachioradialis • Biceps", superset: "C" },
      { name: "Spider Curl", sets: "2x10-12", target: "Biceps Shortened-Position Work", superset: "C" },

      { heading: "Forearms ✊" },
      { name: "Farmer's Walk", sets: "2 Rounds (30-40 sec)", target: "Grip • Forearms • Traps" },
    ],
  },

  Wednesday: {
    title: "Leg Day 🔥",
    focus: "Quads • Hamstrings • Glutes • Calves • Core",
    vibe: "Power & Control",
    exercises: [
      { heading: "Quads 🦵" },
      { name: "Back Squat", sets: "4x4-6", target: "Quads • Glutes • Core" },
      { name: "Leg Press", sets: "3x8-12", target: "Quads • Glutes" },
      { name: "Bulgarian Split Squat", sets: "3x8-12 / leg", target: "Quads • Glutes" },
      { name: "Leg Extension", sets: "3x12-15", target: "Quads Isolation", superset: "A" },

      { heading: "Hamstrings 🍗" },
      { name: "Romanian Deadlift", sets: "3x6-8", target: "Hamstrings • Glutes" },
      { name: "Seated / Lying Leg Curl", sets: "3x10-12", target: "Hamstrings", superset: "A" },

      { heading: "Calves 🐄" },
      { name: "Standing Calf Raise", sets: "4x10-15", target: "Gastrocnemius", superset: "B" },
      { name: "Seated Calf Raise", sets: "3x12-20", target: "Soleus", superset: "B" },

      { heading: "ABS 🔥" },
      { name: "Hanging Leg Raise", sets: "3x10-15", target: "Abs • Hip Flexors" },
      { name: "Cable Crunch", sets: "3x10-15", target: "Abs", superset: "C" },
    ],
  },

  Thursday: {
    title: "Content Creation Day 🎬",
    focus: "Skill Building • No Training",
    vibe: "Create • Learn • Grow",
    exercises: [],
  },

 Friday: {
  title: "Upper + Leg Accessories 🔥",
  focus: "Chest • Back • Shoulders • Arms • Legs",
  vibe: "Volume & Pump",
  exercises: [
    { heading: "Chest 🏋️" },
    { name: "Incline Barbell Press", sets: "3x8-10", target: "Upper Chest" },
    { name: "Flat Dumbbell Press", sets: "3x8-12", target: "Mid Chest", superset: "A" },

    { heading: "Back 🦍" },
    { name: "Single-Arm Cable Pulldown", sets: "3x10-12", target: "Lats • Upper Back", superset: "A" },

    { heading: "Shoulders 🎯" },
    { name: "Dumbbell Shoulder Press", sets: "2-3x8-10", target: "Front Delts", superset: "B" },
    { name: "Lateral Raise", sets: "3x12-15", target: "Side Delts", superset: "B" },
    { name: "Rear Delt Fly", sets: "2x12-15", target: "Rear Delts", superset: "C" },

    { heading: "Arms 💪" },
    { name: "Incline Dumbbell Curl", sets: "3x10-12", target: "Biceps • Long Head", superset: "C" },
    { name: "Cross Body Tricep Extension", sets: "3x10-12", target: "Triceps • Long Head", superset: "D" },
    { name: "Concentration Curl", sets: "2x12-15", target: "Biceps Contraction", superset: "D" },
    { name: "Cable Pushdown", sets: "2x12-15", target: "Triceps", superset: "E" },

    { heading: "Leg Accessories 🦵" },
    { name: "Leg Extension", sets: "2x12-15", target: "Quads Isolation", superset: "E" },
    { name: "Leg Curl", sets: "2x12-15", target: "Hamstrings", superset: "E" },
    { name: "Calf Raise", sets: "3x12-20", target: "Calves" },
  ],
},
  
  Saturday: {
    title: "Content Creation Day 🎬",
    focus: "Skill Building • No Training",
    vibe: "Create • Learn • Grow",
    exercises: [],
  },

  Sunday: {
    title: "Content Creation Day 🎬",
    focus: "Skill Building • No Training",
    vibe: "Create • Learn • Grow",
    exercises: [],
  },
};

const sendWorkoutMessage = async () => {
  const today = new Date().toLocaleDateString("en-US", {
    weekday: "long",
    timeZone: "Asia/Kolkata",
  });

  const plan = workoutPlan[today];

  if (!plan) {
    console.log("❌ No plan found for today.");
    return;
  }

let message = `
🏋️ ${today} • ${plan.title}

🎯 ${plan.focus}
`;

  // Recovery Day
  if (!plan.exercises || plan.exercises.length === 0) {
    message += `
🛌 RECOVERY DAY

• Hydrate well
• Stretch & recover
• Get quality sleep

💪 Recovery is where growth happens.
`;

    await sendMessage(message);
    return;
  }

  // Workout Day
  plan.exercises.forEach((ex) => {
    if (ex.heading) {
      message += `\n*${ex.heading}*\n`;
      return;
    }

    message += `• _${ex.name}_\n`;
  });

  message += `\n💪 Let's go!`;

  await sendMessage(message);
};
const sendMessage = async (msg) => {
  console.log("📤 Final message:\n", msg);
  try {
    const res = await client.messages.create({
      from: process.env.FROM_NUMBER,
      to: process.env.TO_NUMBER,
      body: msg,
    });
    console.log("✅ Message sent:", res.sid);
  } catch (err) {
    console.error("❌ Error sending message:", err);
  }
};

sendWorkoutMessage().catch(console.error);

