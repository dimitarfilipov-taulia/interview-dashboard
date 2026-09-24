import { useState } from "react";

// TODO: Build the ENTIRE password strength checker UI yourself — nothing
// is pre-built. You need to create:
//
//   1. A password text input.
//   2. A strength bar + label that update live as the user types.
//   3. A checklist of 5 criteria that flip between met/unmet in real time.
//
// CRITERIA (evaluate all 5 on every keystroke, in this exact order):
//   1. "At least 8 characters"   -> password.length >= 8
//   2. "One uppercase letter"    -> contains A-Z
//   3. "One lowercase letter"    -> contains a-z
//   4. "One number"              -> contains 0-9
//   5. "One special character"   -> contains any non-alphanumeric char
//
// SCORING:
//   score = number of criteria currently met (0-5)
//   label: score <= 2 -> "Weak" | score 3-4 -> "Medium" | score 5 -> "Strong"
//   bar width  = (score / 5) * 100 + "%"
//   bar color  = Weak "#ef4444" | Medium "#f59e0b" | Strong "#22c55e"
//

export default function PasswordStrengthChecker() {
  return null;
}
