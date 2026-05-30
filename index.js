import "dotenv/config";
import twilio from "twilio";

const ACCOUNT_SID = process.env.ACCOUNT_SID;
const AUTH_TOKEN = process.env.AUTH_TOKEN;
const FROM_NUMBER = process.env.FROM_NUMBER;
const TO_NUMBER = process.env.TO_NUMBER;

const client = twilio(process.env.ACCOUNT_SID, process.env.AUTH_TOKEN);
console.log("Hello");


  const workoutPlan = {
  Monday: {
    title: "Push Day 🔥",
    focus: "Chest • Shoulders • Triceps",
    vibe: "Strength & Size",

    exercises: [
      // CHEST
      { heading: "CHEST 🏋️" },
      { name: "Flat Barbell Bench Press", sets: "4x4-6", target: "Mid Chest" },
      { name: "Incline Dumbbell Press", sets: "3x8-10", target: "Upper Chest" },
      { name: "Cable Fly / Pec Deck Fly", sets: "3x12-15", target: "Chest Stretch & Contraction" },

      // SHOULDERS
      { heading: "SHOULDERS 🎯" },
      { name: "Dumbbell Shoulder Press", sets: "3x8-10", target: "Front Delts" },
      { name: "Cable Lateral Raise", sets: "3x12-15", target: "Side Delts" },

      // TRICEPS
      { heading: "TRICEPS 💪" },
      { name: "Overhead Dumbbell Extension", sets: "3x10-12", target: "Long Head Triceps" },
      { name: "Rope Pushdown", sets: "3x10-12", target: "Triceps" },
    ],
  },

  Tuesday: {
    title: "Pull Day 🔥",
    focus: "Back • Rear Delts • Biceps • Forearms",
    vibe: "Strength & Thickness",

    exercises: [
      // BACK
      { heading: "BACK 🦍" },
      { name: "Deadlift", sets: "3x4-6", target: "Lower Back • Glutes • Traps" },
      { name: "Pull-Ups / Lat Pulldown", sets: "4x8-10", target: "Lats • Upper Back" },
      { name: "Barbell Row", sets: "4x6-8", target: "Mid Back Thickness" },
      { name: "Straight-Arm Pulldown", sets: "3x12-15", target: "Lats Isolation" },

      // REAR DELTS
      { heading: "REAR DELTS 🎯" },
      { name: "Face Pull", sets: "3x12-15", target: "Rear Delts • Upper Traps" },

      // BICEPS
      { heading: "BICEPS 💪" },
      { name: "Incline Dumbbell Curl", sets: "3x10-12", target: "Biceps Long Head" },
      { name: "Preacher Curl", sets: "3x10-12", target: "Biceps Short Head" },
      { name: "Hammer Curl", sets: "3x10-12", target: "Brachialis • Forearms" },

      // FOREARMS
      { heading: "FOREARMS ✊" },
      { name: "Reverse EZ Bar Curl", sets: "3x10-12", target: "Forearms • Brachioradialis" },
      { name: "Wrist Curl", sets: "3x12-15", target: "Forearm Flexors" },
    ],
  },

  Wednesday: {
    title: "Legs & Core 🔥",
    focus: "Lower Body • Abs",
    vibe: "Power & Control",

    exercises: [
      // QUADS
      { heading: "QUADS 🦵" },
      { name: "Back Squat", sets: "4x4-6", target: "Quads • Glutes • Core" },
      { name: "Leg Press", sets: "3x10-12", target: "Quads • Glutes" },
      { name: "Leg Extension", sets: "3x12-15", target: "Quads Isolation" },

      // HAMSTRINGS
      { heading: "HAMSTRINGS 🍗" },
      { name: "Romanian Deadlift", sets: "4x6-8", target: "Hamstrings • Glutes" },
      { name: "Seated / Lying Leg Curl", sets: "3x10-12", target: "Hamstrings" },

      // CALVES
      { heading: "CALVES 🐂" },
      { name: "Standing Calf Raise", sets: "4x15-20", target: "Calves (Gastrocnemius)" },

      // ABS
      { heading: "ABS 🔥" },
      { name: "Hanging Leg Raise", sets: "3x12-15", target: "Lower Abs" },
      { name: "Cable Crunch", sets: "3x12-15", target: "Upper Abs" },
      { name: "Ab Wheel Rollout", sets: "3x10-12", target: "Core Stability" },
    ],
  },

  Thursday: {
    title: "Shoulders & Arms 🔥",
    focus: "Delts • Arms • Forearms",
    vibe: "Volume & Pump",

    exercises: [
      // SHOULDERS
      { heading: "SHOULDERS 🎯" },
      { name: "Barbell Overhead Press", sets: "4x6-8", target: "Front Delts • Triceps" },
      { name: "Lateral Raise", sets: "3x12-15", target: "Side Delts" },
      { name: "Reverse Pec Deck", sets: "3x12-15", target: "Rear Delts" },

      // BICEPS
      { heading: "BICEPS 💪" },
      { name: "Barbell Curl", sets: "3x8-10", target: "Biceps" },
      { name: "Incline Dumbbell Curl", sets: "3x10-12", target: "Biceps Peak" },
      { name: "Concentration Curl", sets: "2x12-15", target: "Peak Contraction" },

      // TRICEPS
      { heading: "TRICEPS 💥" },
      { name: "Skull Crusher", sets: "3x8-10", target: "Triceps" },
      { name: "Cable Pushdown", sets: "3x12-15", target: "Triceps" },

      // FOREARMS
      { heading: "FOREARMS ✊" },
      { name: "Reverse Wrist Curl", sets: "3x12-15", target: "Forearm Extensors" },
      { name: "Farmer's Walk", sets: "2 Rounds (30-40 sec)", target: "Grip • Forearms • Traps" },
    ],
  },

  Friday: {
    title: "Chest & Back 🔥",
    focus: "Push • Pull Compounds • Abs",
    vibe: "Strength & Density",

    exercises: [
      // CHEST
      { heading: "CHEST 🏋️" },
      { name: "Incline Barbell Press", sets: "4x6-8", target: "Upper Chest" },
      { name: "Flat Dumbbell Press", sets: "3x8-10", target: "Mid Chest" },
      { name: "Weighted Chest Dips / Decline DB Press", sets: "3x8-12", target: "Lower Chest" },
      { name: "Pec Deck Fly / Cable Fly", sets: "3x12-15", target: "Chest Isolation" },

      // BACK
      { heading: "BACK 🦍" },
      { name: "Single-Arm Cable Pulldown", sets: "4x8-10", target: "Lats • Upper Back" },
      { name: "Chest-Supported Row", sets: "4x8-10", target: "Mid Back Thickness" },
      { name: "Seated Cable Row", sets: "3x10-12", target: "Mid Back" },

      // REAR DELTS
      { heading: "REAR DELTS 🎯" },
      { name: "Face Pull", sets: "3x12-15", target: "Rear Delts • Traps" },

      // ABS
      { heading: "ABS 🔥" },
      { name: "Hanging Leg Raise", sets: "3x12-15", target: "Lower Abs" },
      { name: "Cable Crunch", sets: "3x12-15", target: "Upper Abs" },
    ],
  },

  Saturday: {
    title: "Leg Day 🔥",
    focus: "Lower Body • Core",
    vibe: "Volume & Stability",

    exercises: [
      // QUADS
      { heading: "QUADS 🦵" },
      { name: "Front Squat / Hack Squat", sets: "4x6-8", target: "Quads" },
      { name: "Bulgarian Split Squat", sets: "3x10-12 / leg", target: "Glutes • Quads" },

      // HAMSTRINGS
      { heading: "HAMSTRINGS 🍗" },
      { name: "Romanian Deadlift", sets: "3x8-10", target: "Hamstrings • Glutes" },
      { name: "Leg Curl", sets: "3x12-15", target: "Hamstrings" },

      // CALVES
      { heading: "CALVES 🐂" },
      { name: "Seated Calf Raise", sets: "4x15-20", target: "Soleus" },

      // ABS
      { heading: "ABS 🔥" },
      { name: "Cable Side Crunch", sets: "3x12-15 / side", target: "Obliques" },
      { name: "Hanging Leg Raise", sets: "3x12-15", target: "Lower Abs" },
      { name: "Ab Wheel Rollout", sets: "3x10-12", target: "Core Stability" },
    ],
  },

  Sunday: {
    title: "Recovery Day 😴",
    focus: "Full Rest & Recovery",
    vibe: "Recover • Grow • Repeat",
    exercises: [],
  },
};

const sendWorkoutMessage = async () => {

  console.log(
[${new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata", })}] ⏱️ Cron is running...
)

}
const today = new Date().toLocaleDateString("en-US", {
  weekday: "long",
  timeZone: "Asia/Kolkata",
})

}
console.log("Today:", today)

const plan = workoutPlan[today];

if (!plan) {
console.log("❌ No plan found for today.");
return;
}

let message = `
📅 ${today}

🔥 ${plan.title}

🎯 Focus: ${plan.focus}
⚡ Vibe: ${plan.vibe}

`;

// Recovery Day
if (!plan.exercises || plan.exercises.length === 0) {
message += `
━━━━━━━━━━━━━━━━━━━━

🛌 RECOVERY DAY

• Hydrate well
• Stretch & recover
• Get quality sleep
• Prepare for next week

━━━━━━━━━━━━━━━━━━━━

💪 Recovery is where growth happens.
`;
    await sendMessage(message);
    return;
  }

  // ✅ WORKOUT DAY

plan.exercises.forEach((ex) => {
if (ex.heading) {
message += `
━━━━━━━━━━━━━━━━━━━━
${ex.heading}
━━━━━━━━━━━━━━━━━━━━

`;
return;
}
message += `• ${ex.name}\n`;

message += `  Sets: ${ex.sets}\n`;

message += `  Target: ${ex.target}\n\n`;
  });

message += `
━━━━━━━━━━━━━━━━━━━━

🎯 Focus on form
📈 Progressive overload
💪 Train hard. Recover harder.

━━━━━━━━━━━━━━━━━━━━
`;
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

