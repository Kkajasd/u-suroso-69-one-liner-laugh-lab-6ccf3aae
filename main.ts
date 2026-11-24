import { mkdirSync, writeFileSync } from "node:fs";

// One-Liner Laugh Lab — the excuse a robot vacuum gives after eating a sock.
// Deadpan, tight, one beat: blame the dog, then promote the dog.
// The line is 78 characters, inside the 1-200 gate, with no trailing newline.
const LINE =
  "I only ate it because the dog dared me, and the dog is management around here.";

// The grader mounts /output as a bind mount: create it if missing, never remove it.
mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
