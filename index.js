import "dotenv/config";
import twilio from "twilio";

const ACCOUNT_SID = process.env.ACCOUNT_SID;
const AUTH_TOKEN = process.env.AUTH_TOKEN;
const FROM_NUMBER = process.env.FROM_NUMBER;
const TO_NUMBER = process.env.TO_NUMBER;

const client = twilio(process.env.ACCOUNT_SID, process.env.AUTH_TOKEN);
console.log("Hello");

const workoutPlan = {
 Sunday: {
    title: "Recovery Day 😴",
  focus: "Full Rest & Muscle Repair",
  note: "Hydrate. Stretch. Reset.",
  exercises: [],
  },
  Monday: {
    title: "Push Day 🔥",
  focus: "Chest • Shoulders • Triceps",
  vibe: "Strength & Size",
  exercises: [
    { name: "Flat Barbell Bench Press", sets: "4x4-6", target: "Mid Chest" },
    { name: "Incline Dumbbell Press", sets: "3x8-10", target: "Upper Chest" },
    { name: "Dumbbell Shoulder Press", sets: "4x8-10", target: "Front Delts" },
    { name: "Cable Lateral Raises", sets: "3x12-15", target: "Side Delts" },
    { name: "Overhead DB Extension", sets: "3x10-12", target: "Long Head Triceps" },
    { name: "Rope Pushdowns", sets: "3x10-12", target: "Triceps" },
  ],
  },
  Tuesday: {
    title: "Pull Day 🔥",
  focus: "Back • Traps • Biceps",
  vibe: "Strength & Thickness",
  exercises: [
    { name: "Deadlifts", target: "Lower Back • Glutes • Traps", sets: "4x4-6" },
    { name: "Pull-Ups / Lat Pulldown", target: "Lats • Traps", sets: "4x8-10" },
    { name: "Barbell Rows", target: "Mid Back • Rear Delts", sets: "4x6-8" },
    { name: "Straight-Arm Pulldown", target: "Lats Isolation", sets: "3x12-15" },
    { name: "Dumbbell Shrugs", target: "Upper Traps", sets: "3x12-15" },
    { name: "Face Pulls", target: "Rear Delts • Traps", sets: "3x12-15" },
    { name: "Zottman Curls", target: "Biceps • Forearms", sets: "3x10-12" },
    { name: "Incline Dumbbell Bicep Curls", target: "Biceps Peak", sets: "3x10-12" },
    { name: "Hammer Curls", target: "Brachialis • Forearms", sets: "3x10-12" },
  ],
  },
  Wednesday: {
title: "Legs & Core 🔥",
focus: "Lower Body • Abs",
vibe: "Power & Control",

exercises: [
  { name: "Back Squat", target: "Quads • Glutes • Core", sets: "4x4-6" },
  { name: "Bulgarian Split Squat", target: "Quads • Glutes • Hamstrings", sets: "3x10-12 / leg" },
  { name: "Leg Press", target: "Quads • Glutes", sets: "3x12-15" },
  { name: "Seated / Lying Leg Curl", target: "Hamstrings", sets: "3x10-12" },
  { name: "Leg Extension", target: "Quads (Isolation)", sets: "3x12-15" },
  { name: "Standing Calf Raise", target: "Calves (Gastrocnemius)", sets: "4x15-20" },
  { name: "Hanging Leg Raise", target: "Lower Abs", sets: "3x12-15" },
  { name: "Weighted Sit-Up", target: "Upper Abs", sets: "3x10-12" },
  { name: "Cable Crunch", target: "Core (Abs)", sets: "3x12-15" },
],
  },
  Thursday: {
   title: "Shoulders & Arms 🔥",
focus: "Delts • Arms",
vibe: "Volume & Pump",

exercises: [
  { name: "Barbell Overhead Press", target: "Front Delts • Triceps", sets: "4x6-8" },
  { name: "Reverse Pec Deck", target: "Rear Delts", sets: "3x12-15" },
  { name: "Arnold Press", target: "Front • Side Delts", sets: "3x8-10" },
  { name: "Lateral Raise", target: "Side Delts", sets: "3x12-15" },
  { name: "Barbell Curl", target: "Biceps", sets: "3x8-10" },
  { name: "Incline DB Curl", target: "Biceps (Peak)", sets: "3x10-12" },
  { name: "Skull Crusher", target: "Triceps", sets: "3x8-10" },
  { name: "Cable Pushdown", target: "Triceps", sets: "3x12-15" },
],
  },
  Friday: {
    title: "Chest & Back 🔥",
focus: "Push • Pull Compounds",
vibe: "Strength & Density",

exercises: [
  { name: "Incline Barbell Press", target: "Upper Chest", sets: "4x6-8" },
  { name: "Single-Arm Cable Pulldown", target: "Lats • Upper Back", sets: "4x8-10" },
  { name: "Flat Dumbbell Press", target: "Mid Chest", sets: "3x8-10" },
  { name: "Chest-Supported Row", target: "Mid Back • Traps", sets: "4x8-10" },
  { name: "Seated Cable Row", target: "Mid Back", sets: "3x8-10" },
  { name: "Decline Dumbbell Press", target: "Lower Chest", sets: "3x8-10" },
  { name: "Face Pull", target: "Rear Delts • Traps", sets: "3x12-15" },
  { name: "Barbell Shrug", target: "Upper Traps", sets: "3x12-15" },
  { name: "Back Extension", target: "Lower Back • Glutes", sets: "3x8-10" },
],
  },
  Saturday: {
    title: "Leg Day 🔥",
focus: "Lower Body • Core",
vibe: "Volume & Stability",

exercises: [
  { name: "Back Squat", target: "Quads", sets: "4x6-8" },
  { name: "Seated Leg Curl", target: "Hamstrings", sets: "3x12-15" },
  { name: "Bulgarian Split Squat", target: "Glutes • Quads", sets: "3x10-12 / leg" },
  { name: "Leg Extension", target: "Quads (Isolation)", sets: "3x12-15" },
  { name: "Seated Calf Raise", target: "Soleus", sets: "4x15-20" },
  { name: "Cable Side Crunch", target: "Obliques", sets: "3x12-15 / side" },
  { name: "Ab Wheel Rollout", target: "Core", sets: "3x10-12" },
],
  },
};

const sendWorkoutMessage = async () => {
  console.log(
    `[${new Date().toLocaleString("en-IN", {
      timeZone: "Asia/Kolkata",
    })}] ⏱️ Cron is running...`
  );

  const today = new Date().toLocaleDateString("en-US", {
    weekday: "long",
    timeZone: "Asia/Kolkata",
  });

  const plan = workoutPlan[today];

  if (!plan) {
    console.log("❌ No plan found for today.");
    return;
  }

  let message = `📅 *${today} - ${plan.title}*\n\n`;

  // ✅ REST DAY
  if (plan.exercises.length === 0) {
    message += "🛌 Rest & Reset.\n\nRecover hard today so you can train harder tomorrow. 💪";
    message += "\n\n🎯 Consistency builds strength.\n💪 Show up.";
    await sendMessage(message);
    return;
  }

  // ✅ WORKOUT DAY
  const icons = ["🏋️", "🔥", "💪", "🦾", "🏆", "🥇", "🚀", "🛡️", "⚡", "✅"];

  message += "✅ *Today's Workout:*\n\n";

  plan.exercises.forEach((ex, i) => {
    const icon = icons[i % icons.length];

   message += `${icon} *${ex.name}*  |  📊 ${ex.sets}\n   🎯 ${ex.target}\n\n`;
  });

  message += "🎯 Consistency builds strength.\n💪 Show up.";

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

