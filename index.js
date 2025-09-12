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
    title: "Legs & Abs – Quads, Hamstrings, Calves",
    exercises: [
      ["Barbell Squats", "Quads focus (4x6-8)"],
      ["Seated Leg Curls", "Hamstrings isolation (3x12-15)"],
      ["Bulgarian Split Squats", "Glutes, quads, hamstrings (3x10-12 per leg)"],
      ["Leg Extensions", "Quads isolation (3x12-15)"],
      ["Seated Calf Raises", "Soleus (4x15-20)"],
      ["Cable Side Crunches", "Obliques (3x12-15 per side)"],
      ["Ab Rollouts (Ab Wheel)", "Core (3x10-12)"],
    ],
  },
  Tuesday: {
    title: "Rest (Fasting Day)",
    exercises: [],
  },
  Wednesday: {
    title: "Push – Chest, Shoulders, Triceps",
    exercises: [
      ["Flat Barbell Bench Press", "Mid-chest (4x4-6)"],
      ["Incline Dumbbell Press", "Upper chest (3x8-10)"],
      ["Dumbbell Shoulder Press", "Front delts & triceps (4x8-10)"],
      ["Pec Deck", "Inner chest stretch/contraction (3x12-15)"],
      ["Decline Cable Flys", "Lower chest (3x12-15)"],
      ["Cable Lateral Raises", "Side delts (3x12-15)"],
      ["Overhead Tricep Dumbbell Extension", "Long head of triceps (3x10-12)"],
      ["Tricep Pushdowns (Rope or Bar)", "Triceps isolation (3x10-12)"],
    ],
  },
  Thursday: {
    title: "Pull – Back, Traps, Biceps",
    exercises: [
      ["Deadlifts", "Lower back, glutes, and traps (4x4-6)"],
      ["Pull-Ups or Lat Pulldown", "Lats & traps (4x8-10)"],
      ["Barbell Rows", "Mid-back thickness, rear delts (4x6-8)"],
      ["Straight-Arm Pulldown", "Lats isolation (3x12-15)"],
      ["Dumbbell Shrugs", "Upper traps (3x12-15)"],
      ["Face Pulls", "Rear delts & traps (3x12-15)"],
      ["Zottman Curls", "Biceps & forearms (3x10-12)"],
      ["Incline Dumbbell Bicep Curls", "Biceps peak (3x10-12)"],
      ["Hammer Curls", "Brachialis & forearms (3x10-12)"],
    ],
  },
  Friday: {
    title: "Legs & Abs – Quads, Hamstrings, Calves",
    exercises: [
      ["Barbell Back Squats", "Quads, glutes, and core (4x4-6)"],
      [
        "Bulgarian Split Squats",
        "Quads, glutes, and hamstrings (3x10-12 per leg)",
      ],
      ["Leg Press", "Quads and glutes (3x12-15)"],
      ["Lying or Seated Leg Curls", "Hamstrings (3x10-12)"],
      ["Leg Extensions", "Quads isolation (3x12-15)"],
      ["Standing Calf Raises", "Gastrocnemius (4x15-20)"],
      ["Hanging Leg Raises", "Lower abs & hip flexors (3x12-15)"],
      ["Weighted Decline Sit-Ups", "Upper & mid abs (3x10-12)"],
      ["Cable Rope Crunches", "Upper & mid abs (3x12-15)"],
    ],
  },
  Saturday: {
    title: "Shoulders & Arms",
    exercises: [
      ["Overhead Barbell Press", "Front delts & triceps (4x6-8)"],
      ["Reverse Pec Deck Fly", "Rear delts (3x12-15)"],
      ["Arnold Press", "Front & side delts (3x8-10)"],
      ["Dumbbell Side Lateral Raises", "Side delts (3x12-15)"],
      ["Barbell Bicep Curls", "Biceps mass builder (3x8-10)"],
      ["Incline Dumbbell Bicep Curls", "Biceps peak isolation (3x10-12)"],
      ["Skull Crushers (EZ Bar)", "Triceps power (3x8-10)"],
      ["Triceps Pushdowns", "Triceps (3x12-15)"],
    ],
  },
  Sunday: {
    title: "Chest & Back (Compound Focus)",
    exercises: [
      ["Incline Barbell Bench Press", "Upper chest (4x6-8)"],
      ["Unilateral Cable Pulldown", "Lats and upper back (4x8-10)"],
      ["Flat Dumbbell Bench Press", "Mid-chest (3x8-10)"],
      ["Chest-Supported Dumbbell Row", "Mid-back & traps (4x8-10)"],
      ["Seated Cable Rows", "Mid-back (3x8-10)"],
      ["Decline Dumbbell Bench Press", "Lower chest (3x8-10)"],
      ["Face Pulls", "Rear delts and traps (3x12-15)"],
      ["Barbell Shrugs", "Upper traps (3x12-15)"],
      ["Hyperextensions", "Lower back, glutes, and hamstrings (3x8-10)"],
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

  if (plan.exercises.length === 0) {
    message +=
      "🛌 It's your fasting day! Take rest and focus on recovery and hydration. 💧🧘‍♂️";
    await sendMessage(message);
    return;
  }

  const icons = ["🏋️", "🔥", "💪", "🦾", "🏆", "🥇", "🚀", "🛡️", "⚡", "✅"];
  message += "✅ *Today's Workout:*\n\n";
  plan.exercises.forEach((ex, i) => {
    const icon = icons[i % icons.length];
    message += `${icon}  *${ex[0]}* – _${ex[1]}_\n\n`;
  });

  message += "🎯Stay consistent 💪. Let’s crush today!";
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
