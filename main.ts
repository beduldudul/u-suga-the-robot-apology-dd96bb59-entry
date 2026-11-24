// The Robot Apology — a two-line robot confession.
// Line one owns one specific mistake; line two names the lesson and the fix.
// The lesson follows from the exact mistake: same-looking bottles, different doses.
import { mkdirSync, writeFileSync } from "node:fs";

const lineOne =
  "I am sorry I gave the cat the dog's medicine because the bottles looked the same.";
const lineTwo =
  "I have learned that identical bottles are not identical doses, and I will now read the name on the label before I open anything.";

const entry = lineOne + "\n" + lineTwo;

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry);
