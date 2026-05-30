import anthropic
import os
import subprocess
from datetime import datetime, timezone, timedelta

# IST timezone
IST = timezone(timedelta(hours=5, minutes=30))
today = datetime.now(IST).strftime("%Y-%m-%d")
filename = f"daily-topics/{today}.md"

# Check if file already exists
if os.path.exists(filename):
    print(f"File {filename} already exists. Skipping.")
    exit(0)

# Call Claude API
client = anthropic.Anthropic(api_key=os.environ["ANTHROPIC_API_KEY"])

message = client.messages.create(
    model="claude-opus-4-5",
    max_tokens=2048,
    messages=[
        {
            "role": "user",
            "content": f"""Generate a daily JavaScript learning file for {today}.

Include exactly 3 JavaScript topics. For each topic provide:
- A clear heading (## Topic N: Topic Name)
- A brief explanation
- A practical code example in a ```js code block
- 3 key bullet points

Make the topics educational, progressively useful, and different from basics like variables/loops.
Topics should be intermediate to advanced concepts useful for real projects.

Format the entire response as a markdown file starting with:
# JavaScript Daily Topics — {today}

End with: *Happy Coding! 🚀*"""
        }
    ]
)

content = message.content[0].text

# Create directory
os.makedirs("daily-topics", exist_ok=True)

# Write file
with open(filename, "w") as f:
    f.write(content)

print(f"Generated: {filename}")

# Git config
subprocess.run(["git", "config", "user.email", "github-actions[bot]@users.noreply.github.com"], check=True)
subprocess.run(["git", "config", "user.name", "github-actions[bot]"], check=True)

# Stage, commit, push
subprocess.run(["git", "add", filename], check=True)
subprocess.run(["git", "commit", "-m", f"Add daily JS topics for {today}"], check=True)
subprocess.run(["git", "push"], check=True)

print(f"✅ Committed and pushed: {filename}")
