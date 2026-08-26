const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const test = require("node:test");
const vm = require("node:vm");

function loadAssistant() {
  const context = vm.createContext({ console });
  for (const file of ["documents.js", "topics.js", "engine.js"]) {
    const source = fs.readFileSync(path.join(__dirname, "..", file), "utf8");
    vm.runInContext(source, context, { filename: file });
  }
  return context;
}

test("summarizes a named document from controlled data", () => {
  const assistant = loadAssistant();
  const result = assistant.respond("Summarize the MSA");

  assert.match(result.text, /Master Supply & Services Agreement/);
  assert.match(result.text, /Key terms/);
});

test("lists matter-wide review status", () => {
  const assistant = loadAssistant();
  const result = assistant.respond("What is still pending on Project Falcon?");

  assert.match(result.text, /current status across Project Falcon/);
  assert.match(result.text, /Pending attorney review/);
});

test("asks for clarification when a document is missing", () => {
  const assistant = loadAssistant();
  const result = assistant.respond("Explain a risk flag");

  assert.match(result.text, /Which document/);
  assert.ok(result.quickReplies.length > 0);
});

test("retains document context for a follow-up question", () => {
  const assistant = loadAssistant();
  assistant.respond("Summarize the MSA");
  const result = assistant.respond("Explain the risk flag on this");

  assert.match(result.text, /Deal-blocking termination right/);
});

test("routes a selected document to the simulated review state", () => {
  const assistant = loadAssistant();
  const result = assistant.respond("Send the CTO employment agreement for approval");

  assert.match(result.text, /routed for attorney approval/);
  assert.match(result.text, /production this posts a Teams approval card/);
});

test("returns a safe capability menu for an unsupported request", () => {
  const assistant = loadAssistant();
  const result = assistant.respond("Calculate the purchase price adjustment");

  assert.match(result.text, /I can help with/);
  assert.equal(result.quickReplies.length, 4);
});
