# Reflection Paper: My Journey Building Temu Clone with AI-Assisted Development

**By: DEDEEPYA MADIREDDY**

---

## Introduction

Throughout Workshops 1-4, I developed a complete e-commerce application—a Temu Clone—using AI-assisted development tools including Antigravity and Cursor IDE, deployed live on AWS App Runner. This reflection documents my growth as a developer and the transformative role AI played in my development approach.

## Growth Through the Workshops

**Workshop 1 (Problem Framing)** challenged me to think beyond just "building an app" and consider the real problems I was solving. I learned that clear problem statements lead to better AI prompts and, ultimately, better results. Defining my use case—demonstrating how AI can accelerate e-commerce development—gave direction to every subsequent decision.

**Workshop 2 (Technical Development)** was where I experienced the most growth. Migrating from Claude Artifacts to Cursor IDE forced me to understand the underlying code structure rather than accepting AI output blindly. I learned that AI-generated code is a starting point, not a final product. Debugging the runtime version error in AWS App Runner taught me to read documentation carefully and use CloudWatch logs systematically.

**Workshop 3 (Deployment)** transformed my understanding of cloud infrastructure. Connecting GitHub to AWS App Runner through the CLI was initially intimidating, but breaking it down into steps—create connection, configure service, verify deployment—made it manageable. The auto-deploy feature was particularly satisfying: seeing my code changes go live within minutes felt empowering.

**Workshop 4 (Feedback & Iteration)** reinforced that development is never truly "done." Peer feedback highlighted UX issues I had become blind to, like the mobile navigation and search visibility. Iterating based on real user input improved the application significantly.

## How AI Changed My Development Approach

Before this project, I would spend hours researching syntax, debugging basic errors, and building boilerplate code. AI assistance fundamentally changed this workflow:

1. **Faster Prototyping:** I could describe features in natural language and receive working code in seconds. The product card component, checkout form, and category dropdown all started as AI-generated code that I then refined.

2. **Debugging Partner:** Instead of searching Stack Overflow for hours, I could paste error messages to AI and receive targeted solutions. The "runtime version not supported" error was diagnosed and fixed within minutes.

3. **Learning Accelerator:** AI explanations helped me understand why code works, not just how. I learned about Express.js routing, localStorage for cart persistence, and apprunner.yaml configuration through AI explanations.

## Most Valuable Lesson

The most valuable lesson was: **AI is a collaborator, not a replacement for understanding.** I initially trusted AI outputs too readily, which led to subtle bugs. Only when I slowed down to review and understand the generated code did I become effective. The best prompts were specific and included context about what I'd already tried. Vague prompts produced vague results.

## Applying This to Future Projects

For future projects, I will:
- Start with clear problem statements before any coding
- Use AI for rapid prototyping, then manually refine
- Always review AI-generated code for security and logic errors
- Maintain documentation throughout development
- Set up CI/CD pipelines early, not as an afterthought

This project proved that AI-assisted development isn't about writing less code—it's about building faster while learning more. The combination of Antigravity's AI capabilities, Cursor's development environment, and AWS's deployment infrastructure created a powerful workflow that I'll carry forward into every future project.

---

*Word Count: 498*
