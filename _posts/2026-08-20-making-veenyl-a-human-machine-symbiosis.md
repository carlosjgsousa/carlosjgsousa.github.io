---
layout: post
title: "Making Veenyl. A human-machine symbiosis"
categories: articles
excerpt: "Veenyl started as an experiment to see how far GenAI could take a real product, without me writing code or designing screens. What began with a simple barcode scanner quickly became a production app. This is the story of that journey."
description: "Veenyl started as a simple experiment: could I build and launch a real product using GenAI, without writing code or designing the interface myself? What followed became a much bigger lesson about product development, judgement and the changing role of humans when machines can handle more of the execution. This article looks back at the choices, trade-offs and technology behind Veenyl, and why deciding what deserves to be built may soon matter more than building it."
---
Let me tell you about my latest experiment.

Like most people, I’ve been trying out GenAI for a while, for writing, prototyping, exploring ideas and getting things done faster. But one question kept popping into my mind. Can I use this beyond drafts and prototypes? Can I build something polished enough to become a real product and put it in front of people?

The other constraint I wanted to start with was: Could I do it without writing a single line of code or designing the UI myself in Figma? Could I just give direction, critique what came back, change my mind and ask for another approach?

Everything had to be produced with GenAI.

## Finding something worth building

So I knew how I wanted to build, but then came the next problem: **what should I actually build?**

I landed on something I was genuinely excited about. I had recently started collecting vinyl. For my 40th birthday I gave myself a turntable, and from there I started buying records I truly appreciated, albums that had meant something to me or simply brought me joy.

I had the constraint, I had the idea, and I had a first feature that was easy enough to imagine: point the camera at a record barcode and identify the album.

I opened Codex and described the experience as well as I could. A few minutes later, the feature was working on my phone. I still remember the first thing that came to mind:

**“Oh wow.”**

It was a small feature, but it changed how I looked at what was possible. This wasn’t another prototype sitting on my laptop. I could actually build something.

And once I understood that, my product experience kicked in.

Just because I could build it, was the experience worth building? Who was this for? Why would anyone want it?

I started digging through Reddit and looking at how other collectors talked about the tools they were already using. One thing kept coming up, and it matched my own experience with Discogs. It was incredibly useful for identifying releases, tracking a collection and understanding what a record might be worth, but using the mobile app often felt like cataloguing albums rather than interacting with the collection itself.

I didn’t just want to know what I owned.

**I wanted to know my collection better.**

I started looking at my own experience. I had roughly 40 albums at the time. I knew all of them, but I didn’t really *know* them, if you know what I mean. I could recognise every cover sitting on the shelf, but there was still a lot I didn’t know about the music itself.

What if I could read about the album while I was listening to it? See the track names, follow the lyrics, understand a bit more about the story behind it?

What I really wanted wasn’t another collection manager.

**I wanted a vinyl companion.**

## Connecting the pieces

Like I said before, I knew about Discogs. I even had an account and most of my records were already there. Discogs had an API, so I could use it to tell me which album was behind a barcode, pull album artwork, track lists and release information.

Then I started wondering about lyrics and found LRCLIB. I wanted some context about the album, so Wikipedia came into the picture. Then track previews and other services followed.

It was impressive how much infrastructure was already available if you were willing to connect the pieces.

Veenyl became a React Native app. Supabase handled the database and authentication. Amplitude gave me product analytics. Cloudflare hosted the landing page. GitHub kept the repository together. External APIs gave me information about records, prices, lyrics, music and track previews.

Some of those choices came from me. Others were suggested by AI itself.

This is also where things started becoming more complicated.

A prototype only really needs to work for you once. A product has to keep working for people you don't know, on phones you don't control, pressing things in an order you never thought about.

Suddenly there were accounts, authentication, network errors, loading states, API limits, analytics, App Store requirements, Android builds and all sorts of things I hadn’t really considered when I scanned that first barcode.

But it was so exciting.

It reminded me of the early days of my career, when everything felt new and every problem meant figuring out something I hadn’t done before.

## When everything is only a prompt away

Having the ability to build something quickly also made it very tempting to keep adding things.

An API exists? Let’s use it.

Music previews? Why not.

Recommendations? Sure.

Every new capability suddenly felt like it was only a prompt away.

This is probably where my product background became useful. The fact that I could build things quickly didn’t mean I should build all of them. I kept coming back to the same question:

**Who is this actually for?**

I had decided to focus on people with relatively small collections, somewhere around 40 to 100 records. People who probably still know most of what they own, but who are starting to reach that point where the collection becomes difficult to keep entirely in their head.

They didn’t need another complicated database. They needed something simple that helped them enjoy and understand the collection they already had.

Quite often I found myself removing things, simplifying them or questioning features that Codex was perfectly capable of building.

And I think that was an important change in the experiment.

At the beginning, the question was:

**Can GenAI build this?**

After a while, that wasn’t the interesting question anymore.

The question became:

**Should I build this?**

## When the experiment became a product

Eventually Veenyl stopped feeling like an experiment running locally on my phone. I published it on the App Store and Google Play, after going through all their requirements, which were a bit of a pain in the ass.

But suddenly there were real users. Production builds. Analytics. Crashes to understand. APIs to protect. Decisions that would impact whatever I wanted to build next.

In roughly two months I had taken an idea all the way to a real product, with users, without writing the code or designing a screen myself.

That was the part that still felt slightly ridiculous to me.

But it also made me realise that I hadn’t really removed myself from the development process. My role had simply moved somewhere else.

And that, I think, became the more interesting experiment.

## Where does the human role go?

After a while, asking Codex to build something and seeing it appear became business as usual. My role was increasingly about making decisions.

**What should happen next?**

I was leaning on my own experience and all those years of accumulated judgement. I’ll call that *taste*.

Here is a good example. I had an idea about tracking when someone plays a record. It sounds simple enough. Add a button, tap it when you play an album, store a timestamp.

Codex can build that.

But then the questions start.

What if someone taps it accidentally? Do we allow them to undo it? Should there be a full listening history? Do people actually care about seeing every record they’ve ever played? Maybe showing their five most played albums is more useful. Or perhaps the records they played most recently. Should this live on the album page? In the collection? In a separate stats area?

None of this is really about building the feature.

It’s about creating something meaningful and purposeful.

The conversation about feasibility almost disappears. What remains is whether someone actually wants it and whether they will find value in it.

This made something clearer to me. I used to think that when the cost of making something became lower, the cost of making the wrong thing would become much more visible. I still think that’s true, but I think there’s more to it.

What remains is the critical thinking.

The ***Why*** and the ***What***.

The ***How*** starts to fade into the background.

Before, there was always friction between having an idea and actually seeing it built. You needed design time, development time, tickets, conversations, estimates and budgets.

That friction forced trade-offs, but many of those trade-offs were driven by the cost of building software rather than the value of the thing itself.

Now that seems to be changing.

And that creates a different kind of responsibility.

**Just because something is easy to build doesn't mean it deserves to exist.**

The bottleneck is moving upstream. We still need to think twice before executing an idea, but not because of what it will cost to build anymore. But because of whether it has value in the first place.

## A human-machine symbiosis

I think the relationship between humans and machines will become even more intertwined over the next few years. It won’t just be about giving a machine tasks and waiting for the results.

It will feel much more like a conversation happening at different levels.

**Humans will bring context, taste and intention. Humans will design.**

**Machines will bring speed, memory, technical knowledge and the ability to explore possibilities quickly.**

I didn’t stop designing. I stopped drawing the screens.

The same is true for development. I’m not writing the implementation, but I’m still involved in decisions about APIs, data, behaviour, trade-offs and what happens when something goes wrong.

So, as I’m writing this article, with AI help, perhaps the experiment was never really about whether AI could do the work or not. It was more about understanding where the human role goes next when machines can do much more of the execution.

Veenyl now has users, data and a growing collection of small interactions. The next features shouldn’t come from asking, *“what else can I build?”*. It should come from understanding where people are getting value, where they are struggling, what they are ignoring and what might make their relationship with their collection a little better.

That part hasn’t changed. If anything, it matters more now.

The machine can help me explore those possibilities. It can analyse patterns, remember previous decisions, challenge an idea and build something once I decide it is worth trying.

**Making things is getting easier. Knowing what deserves to be made will become the real work.**

PS: This article wouldn't be complete if I didn't plug-in the app I made right? Check it out at [https://veenylapp.com](https://veenylapp.com)
